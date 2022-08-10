import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Quantity } from './Quantity';

export type RangeDocument = Range & Document;

@Schema({ _id: false })
export class Range {
    @Prop()
    low: Quantity;

    @Prop()
    high: Quantity;
}

export const RangeSchema = SchemaFactory.createForClass(Range);