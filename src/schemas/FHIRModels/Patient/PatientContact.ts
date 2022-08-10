import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address } from '../Address';
import { CodeableConcept } from '../CodeableConcept';
import { ContactPoint } from '../ContactPoint';
import { HumanName } from '../HumanName';
import { Period } from '../Period';
import { Reference } from '../Reference';

export type PatientContactDocument = PatientContact & Document;

@Schema({ _id: false })
export class PatientContact {
    @Prop()
    relationship: [CodeableConcept];

    @Prop()
    name: HumanName;

    @Prop()
    telecom: [ContactPoint];

    @Prop()
    address: Address;

    @Prop()
    gender: String;

    @Prop()
    organization: Reference;
    
    @Prop()
    period: Period;
}

export const PatientContactSchema = SchemaFactory.createForClass(PatientContact);