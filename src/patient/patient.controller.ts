import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UsePipes } from '@nestjs/common';
import { FhirExceptionFilter } from '../common/filter/fhir-exception.filter';
import { FhirValidatePipe } from '../common/pipe/fhir-validate.pipe';
import { Patient } from '../schemas/FHIRResource/Patient.schema';
import { PatientPaginationQueryDto } from './dto/patient-fhir-pagination-query.dto';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
    constructor(private readonly service: PatientService) {}

    @Get()
    @UseFilters(new FhirExceptionFilter())
    async findAll(@Query() paginationQuery: PatientPaginationQueryDto) {
        return await this.service.findAll(paginationQuery);
    }

    @Post()
    @UseFilters(new FhirExceptionFilter())
    @UsePipes(new FhirValidatePipe())
    async create(@Body() data) {
        return await this.service.create(data);
    }

    @Put()
    @UseFilters(new FhirExceptionFilter())
    @UsePipes(new FhirValidatePipe())
    async update(@Body() data) {
        return await this.service.update(data);
    }

    @Get(':id')
    @UseFilters(new FhirExceptionFilter())
    async findOne(@Param('id') id: string): Promise<Patient> {
      return await this.service.findOne(id);
    }

    @Delete(':id')
    @UseFilters(new FhirExceptionFilter())
    async delete(@Param('id') id: string): Promise<Patient> {
      return await this.service.delete(id);
    }
}
