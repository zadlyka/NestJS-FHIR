import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Period } from './Period';
import { Quantity } from './Quantity';

export type DateFilterDocument = DateFilter & Document;

@Schema({ _id: false })
export class DateFilter {
    @Prop()
    path: String;
    
    @Prop()
    searchParam: String;

    @Prop()
    valueDateTime: Date;

    @Prop()
    valuePeriod: Period;

    @Prop()
    valueDuration: Quantity;
}

export const DateFilterSchema = SchemaFactory.createForClass(DateFilter);