import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FhirPatientService {
  async getSort(sort) {
    let array = sort.split(',');
    let data = ""
    for(const item of array){
      switch(item){
        case "address-city":
          data += 'address.city '
          break;
        case "-address-city":
          data += '-address.city '
          break;
        case "address-country":
          data += 'address.country '
          break;
        case "-address-country":
          data += '-address.country '
          break;
        case "address-postalcode":
          data += 'address.postalCode '
          break;
        case "-address-postalcode":
          data += '-address.postalCode '
          break;
        case "address-state":
          data += 'address.state '
          break;
        case "-address-state":
          data += '-address.state '
          break;
        case "address-use":
          data += 'address.use '
          break;
        case "-address-use":
          data += '-address.state '
          break;
        case "telecom":
          data += 'telecom.value '
          break;
        case "-telecom":
          data += '-telecom.value '
          break;
        case "family":
          data += 'name.family '
          break;
        case "-family":
          data += '-name.family '
          break;
        case "given":
          data += 'name.given '
          break;
        case "-given":
          data += '-name.given '
          break;
        case "phonetic":
          data += 'name '
          break;
        case "-phonetic":
          data += '-name '
          break;
        case "identifier":
          data += 'identifier.value '
          break;
        case "-identifier":
          data += '-identifier.value '
          break;
        case "link":
          data += 'link.other '
          break;
        case "-link":
          data += '-link.other '
          break;
        case "deceased":
          data += 'deceasedBoolean deceasedDateTime '
          break;
        case "-deceased":
          data += '-deceasedBoolean -deceasedDateTime '
          break;
        case "maritalStatus":
          data += 'maritalStatus.coding.display '
          break;
        case "-maritalStatus":
          data += '-maritalStatus.coding.display '
          break;
        case "organization":
          data += 'organization.reference '
          break;
        case "-organization":
          data += '-organization.reference '
          break;
        default:
          data += item + ' '
          break;
      }
    }

    return await data;
  }
}