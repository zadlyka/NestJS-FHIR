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

  async getQuery(query) {
    delete query['limit'];
    delete query['page'];
    delete query['_sort'];

    let temp = {};
    let keys = Object.keys(query);
    for(const item of keys){
      switch(item){
        case 'active':
          temp['active'] = {$regex: query['active'], $options: "i"};
          break;
        case 'address':
          temp['address'] = {$regex: query['address'], $options: "i"};
          break;
        case 'address-city':
          temp['address.city'] = {$regex: query['address-city'], $options: "i"};
          break;
        case 'address-country':
          temp['address.country'] = {$regex: query['address-country'], $options: "i"};
          break;
        case 'address-postalcode':
          temp['address.postalcode'] = {$regex: query['address-postalcode'], $options: "i"};
          break;
        case 'address-state':
          temp['address.state'] = {$regex: query['address-state'], $options: "i"};
          break;
        case 'address-use':
          temp['address.use'] = {$regex: query['address-use'], $options: "i"};
          break;
        case 'birthdate':
          temp['birthdate'] = {$regex: query['birthDate'], $options: "i"};
          break;
        case 'death-date':
        case 'deceased':
          temp['$or'] = [{deceasedBoolean: { $ne: null }}, {deceasedDateTime: { $ne: null }}];
          break;
        case 'email':
          temp['telecom.system'] = {$regex: 'email', $options: "i"};
          temp['telecom.value'] = {$regex: query['email'], $options: "i"};
          break;
        case 'phone':
          temp['telecom.system'] = {$regex: 'phone', $options: "i"};
          temp['telecom.value'] = {$regex: query['phone'], $options: "i"};
          break;
        case 'telecom':
          temp['telecom.value'] = {$regex: query['telecom'], $options: "i"};
          break;
        case 'family':
          temp['name.family'] = {$regex: query['family'], $options: "i"};
          break;
        case 'given':
          temp['name.given'] = {$regex: query['given'], $options: "i"};
          break;
        case 'name':
        case 'phonetic':
          temp['name'] = {$regex: query['name'], $options: "i"};
          break;
        case 'gender':
          temp['gender'] = {$regex: query['gender'], $options: "i"};
          break;
        case 'general-practitioner':
          temp['generalPractioner'] = {$regex: query['general-practitioner'], $options: "i"};
          break;
        case 'identifier':
          temp['identifier'] = {$regex: query['identifier'], $options: "i"};
          break;
        case 'language':
          temp['language'] = {$regex: query['language'], $options: "i"};
          break;
        case 'link':
          temp['link.other'] = {$regex: query['link'], $options: "i"};
          break;
        case 'organization':
          temp['managingOrganization'] = {$regex: query['organization'], $options: "i"};
          break;
      }
    }

    return temp;
  }
}