import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from 'src/common/common.module';
import { Patient, PatientSchema } from '../schemas/FHIRResource/Patient.schema';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema }]), CommonModule],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule {}
