
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

export type CodeableReferenceDocument = CodeableReference & Document;

@Schema({ _id: false })
export class CodeableReference {
    @Prop()
    concept: CodeableConcept;

    @Prop()
    reference: Reference
}

export const CodeableReferenceSchema = SchemaFactory.createForClass(CodeableReference);