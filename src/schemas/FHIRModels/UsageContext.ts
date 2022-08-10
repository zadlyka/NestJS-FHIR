import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CodeableConcept } from './CodeableConcept';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Range } from './Range';
import { Coding } from './Coding';

export type UsageContextDocument = UsageContext & Document;

@Schema({ _id: false })
export class UsageContext {
    @Prop({required: true})
    code: Coding;

    @Prop()
    valueCodeableConcept : CodeableConcept;

    @Prop()
    valueQuantity : Quantity;

    @Prop()
    valueRange : Range;

    @Prop()
    valueReference : Reference;
}

export const UsageContextSchema = SchemaFactory.createForClass(UsageContext);