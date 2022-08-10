import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ContactPoint } from './ContactPoint';

export type ContactDetailDocument = ContactDetail & Document;

@Schema({ _id: false })
export class ContactDetail {
    @Prop()
    name: String

    @Prop()
    telecom: [ContactPoint]
}

export const ContactDetailSchema = SchemaFactory.createForClass(ContactDetail);