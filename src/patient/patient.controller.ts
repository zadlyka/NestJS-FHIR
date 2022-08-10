import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, UsePipes } from '@nestjs/common';
import { FhirValidatePipe } from 'src/pipe/fhir_validate.pipe';
import { Patient } from '../schemas/FHIRResource/Patient';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
    constructor(private readonly service: PatientService) {}

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Post()
    @UsePipes(new FhirValidatePipe())
    async create(@Body() data) {
        return await this.service.create(data);
    }

    @Put()
    @UsePipes(new FhirValidatePipe())
    async update(@Body() data) {
        return await this.service.update(data);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Patient> {
      return await this.service.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Patient> {
      return await this.service.delete(id);
    }
}
