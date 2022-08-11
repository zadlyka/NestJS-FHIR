import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { R4 } from '@ahryman40k/ts-fhir-types'
import { either as E } from 'fp-ts'

@Injectable()
export class FhirValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const  validationResult = R4.RTTI_Patient.decode(value)
    if (E.isLeft( validationResult) ) {
      throw new BadRequestException(validationResult.left);
    }
    return value;
  }
}
