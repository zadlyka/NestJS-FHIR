
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coding } from './Coding';

export type CodeableConceptDocument = CodeableConcept & Document;

@Schema({ _id: false })
export class CodeableConcept {
    @Prop()
    coding: [Coding];

    @Prop()
    text: String
}

export const CodeableConceptSchema = SchemaFactory.createForClass(CodeableConcept);