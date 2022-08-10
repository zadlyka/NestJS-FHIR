import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UsePipes } from '@nestjs/common';
import { FhirExceptionFilter } from 'src/filter/fhirException.filter';
import { FhirValidatePipe } from 'src/pipe/fhir_validate.pipe';
import { Patient } from '../schemas/FHIRResource/Patient';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
    constructor(private readonly service: PatientService) {}

    @Get()
    @UseFilters(new FhirExceptionFilter())
    async findAll() {
        return await this.service.findAll();
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
