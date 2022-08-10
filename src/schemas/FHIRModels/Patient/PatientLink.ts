import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Reference } from '../Reference';

export type PatientLinkDocument = PatientLink & Document;

@Schema({ _id: false })
export class PatientLink {
    @Prop({required: true})
    other: Reference;
    
    @Prop({required: true})
    type: String;
}

export const PatientLinkSchema = SchemaFactory.createForClass(PatientLink);