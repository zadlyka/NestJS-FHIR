import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ContactDetail } from './ContactDetail';

export type ContributorDocument = Contributor & Document;

@Schema({ _id: false })
export class Contributor {
    @Prop()
    type: String

    @Prop()
    name: String;

    @Prop()
    contact: [ContactDetail]
}

export const ContributorSchema = SchemaFactory.createForClass(Contributor);