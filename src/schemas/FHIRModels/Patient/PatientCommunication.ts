import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CodeableConcept } from '../CodeableConcept';

export type PatientCommunicationDocument = PatientCommunication & Document;

@Schema({ _id: false })
export class PatientCommunication {
    @Prop({required: true})
    language: CodeableConcept;

    @Prop()
    preferred: Boolean;
}

export const PatientCommunicationSchema = SchemaFactory.createForClass(PatientCommunication);