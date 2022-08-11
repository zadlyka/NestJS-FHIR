import { Module } from '@nestjs/common'
import { FhirPaginateService } from './service/fhir-paginate.service'
import { FhirPatientService } from './service/fhir-resource/fhir-patient.service'

@Module({
  providers: [FhirPaginateService, FhirPatientService],
  exports: [FhirPaginateService]
})
export class CommonModule {}
