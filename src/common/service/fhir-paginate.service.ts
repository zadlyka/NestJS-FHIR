import { Injectable, NotFoundException } from '@nestjs/common';
import { FhirPatientService } from './fhir-resource/fhir-patient.service';
require('dotenv').config()

@Injectable()
export class FhirPaginateService {
  constructor(
    private readonly fhirPatientService: FhirPatientService
  ) {}

  async getLink(limit, page, total, resource){
    let baseUrl = process.env.APP_URL;
    let link = [];

    let pageTotal = Math.ceil(total/limit);
    if(page - 1 >= 1){
      link.push(
        {
          relation : "previous",
          url : `${baseUrl}/${resource}?limit=${limit}&page=${page-1}`
        }
      );
    }

    link.push(
      {
        relation : "current",
        url : `${baseUrl}/${resource}?limit=${limit}&page=${page}`
      }
    );

    if(page + 1 <= pageTotal){
      link.push(
        {
          relation : "next",
          url : `${baseUrl}/${resource}?limit=${limit}&page=${page+1}`
        }
      );
    }   

    return await link;
  }

  async getEntry(data){
    let entry = []
    for(const item of data){
      entry.push(
        {
          resource: item,
          search: {
              mode: "match"
          }
        }
      )
    }

    return entry;
  }

  async paginate(model, query: any, resource) {
    let limit = Number(query['limit']);
    let page = Number(query['page']);
    let skip = limit * (page - 1);
    let sort = null;

    switch(resource){
      case 'patient':
        if(query){
          if(query['_sort']){
            sort = await this.fhirPatientService.getSort(query['_sort']);
          }

          query = await this.fhirPatientService.getQuery(query);
        }
        break;
      default:
        sort = null;
        break;
    }

    let total = 0;
    total = await model.count().clone();    


    let findData = await model.find(query).limit(limit).skip(skip).sort(sort).exec()
    let count = await model.count().clone();
    
    if (!findData || (Array.isArray(findData) && findData.length < 1)) {
      throw new NotFoundException(`not found`);
    }

    let response = {
      resourceType : "Bundle",
      total : count,
      type : "searchset"
    }

    response['link'] = await this.getLink(limit, page, total, resource);
    response['entry'] = await this.getEntry(findData);

    return response;
  }
}