import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuantityDocument = Quantity & Document;

@Schema({ _id: false })
export class Quantity {
    @Prop()
    value: Number

    @Prop()
    comparator: String;

    @Prop()
    unit: String;

    @Prop()
    system: String;

    @Prop()
    code: String;
}

export const QuantitySchema = SchemaFactory.createForClass(Quantity);