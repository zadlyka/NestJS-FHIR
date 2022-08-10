import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Quantity } from './Quantity';

export type SampledDataDocument = SampledData & Document;

@Schema({ _id: false })
export class SampledData {
    @Prop()
    origin: Quantity

    @Prop()
    period: Number;

    @Prop()
    factor: Number;

    @Prop()
    lowerLimit: Number;

    @Prop()
    upperLimit: Number;

    @Prop()
    dimensions: Number;

    @Prop()
    data: String;
}

export const SampledDataSchema = SchemaFactory.createForClass(SampledData);