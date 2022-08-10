import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MoneyDocument = Money & Document;

@Schema({ _id: false })
export class Money {
    @Prop()
    value: Number

    @Prop()
    currency: String;
}

export const MoneySchema = SchemaFactory.createForClass(Money);