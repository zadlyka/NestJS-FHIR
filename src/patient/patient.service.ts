import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FhirException } from 'src/exception/fhir.exception';
import { Patient, PatientDocument } from '../schemas/FHIRResource/Patient';

@Injectable()
export class PatientService {
    constructor(@InjectModel(Patient.name) private PatientModel: Model<PatientDocument>) {}

    async create(data): Promise<Patient> {
        const createdPatient = new this.PatientModel(data);
        return await createdPatient.save();
    }

    async findAll(): Promise<Patient[]> {
        return await this.PatientModel.find().exec();
    }

    async findOne(id: string): Promise<Patient> {
        const findPatient = await this.PatientModel.findById(id).exec()

        if (!findPatient) {
            throw new FhirException()
        }

        return findPatient;
    }

    async delete(id: string): Promise<Patient> {
        const deletedPatient = await this.PatientModel.findByIdAndDelete(id)

        if (!deletedPatient) {
            throw new NotFoundException(`Patient #${id} not found`);
        }

        return deletedPatient;
    }

    async update(data): Promise<Patient> {
        const id = data.id;
        const updatedPatient = await this.PatientModel.findOneAndUpdate({_id: id}, data, {
            new: true
        });

        if (!updatedPatient) {
            throw new NotFoundException(`Patient #${id} not found`);
        }

        return updatedPatient;
    }
}
