import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Period } from './Period';

export type ContactPointDocument = ContactPoint & Document;

@Schema({ _id: false })
export class ContactPoint {
    @Prop()
    system: string;

    @Prop()
    value: String;

    @Prop()
    use: string;

    @Prop()
    rank: number;

    @Prop()
    period: Period
}

export const ContactPointSchema = SchemaFactory.createForClass(ContactPoint);