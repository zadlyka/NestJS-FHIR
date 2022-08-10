import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Quantity } from './Quantity';

export type RatioRangeDocument = RatioRange & Document;

@Schema({ _id: false })
export class RatioRange {
    @Prop()
    lowNumerator: Quantity;

    @Prop()
    highNumerator: Quantity;

    @Prop()
    denominator: Quantity;
}

export const RatioRangeSchema = SchemaFactory.createForClass(RatioRange);