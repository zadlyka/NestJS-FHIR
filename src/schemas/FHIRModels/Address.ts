import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Period } from './Period';

export type AddressDocument = Address & Document;

@Schema({ _id: false })
export class Address {
    @Prop()
    use: String;

    @Prop()
    type: String

    @Prop()
    text: String

    @Prop()
    line: [String]

    @Prop()
    city: String
    
    @Prop()
    district: String;

    @Prop()
    state: String
    
    @Prop()
    postalCode: String

    @Prop()
    country: string

    @Prop()
    period: Period
}

export const AddressSchema = SchemaFactory.createForClass(Address);