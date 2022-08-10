import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Quantity } from './Quantity';

export type RatioDocument = Ratio & Document;

@Schema({ _id: false })
export class Ratio {
    @Prop()
    numerator: Quantity;

    @Prop()
    denominator: Quantity;
}

export const RatioSchema = SchemaFactory.createForClass(Ratio);