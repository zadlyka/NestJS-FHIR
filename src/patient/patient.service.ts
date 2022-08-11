import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FhirInformationException } from '../common/exception/fhir-information.exception';
import { FhirPaginateService } from '../common/service/fhir-paginate.service';
import { Patient, PatientDocument } from '../schemas/FHIRResource/Patient.schema';
import { PatientPaginationQueryDto } from './dto/patient-fhir-pagination-query.dto';

@Injectable()
export class PatientService {
    constructor(
        @InjectModel(Patient.name) private PatientModel: Model<PatientDocument>,
        private readonly paginateService: FhirPaginateService
    ) {}

    async create(data): Promise<Patient> {
        const createdPatient = await new this.PatientModel(data).save();
        if(!createdPatient){
            throw new BadRequestException("not created");
        }else{
            throw new FhirInformationException("created")
        }
    }

    async findAll(paginationQuery: PatientPaginationQueryDto) {
        const findPatient = await this.paginateService.paginate(this.PatientModel.find(), paginationQuery, "patient");
        return findPatient;
    }

    async findOne(id: string): Promise<Patient> {
        const findPatient = await this.PatientModel.findById(id).exec()

        if (!findPatient) {
            throw new NotFoundException(`${id} not found`);
        }

        return findPatient;
    }

    async delete(id: string): Promise<Patient> {
        const deletedPatient = await this.PatientModel.findByIdAndDelete(id)

        if (!deletedPatient) {
            throw new NotFoundException(`${id} not found`);
        }else{
            throw new FhirInformationException(`${id} is deleted`)
        }
    }

    async update(data): Promise<Patient> {
        const id = data.id;
        const updatedPatient = await this.PatientModel.findOneAndUpdate({_id: id}, data, {
            new: true
        });

        if (!updatedPatient) {
            throw new NotFoundException(`${id} not found`);
        }else{
            throw new FhirInformationException(`${id} is updated`)
        }
    }
}
