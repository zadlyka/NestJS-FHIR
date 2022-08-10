import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CodingDocument = Coding & Document;

@Schema({ _id: false })
export class Coding {
    @Prop()
    system: String

    @Prop()
    version: String;

    @Prop()
    code: String;

    @Prop()
    display: String;

    @Prop()
    userSelected: Boolean;
}

export const CodingSchema = SchemaFactory.createForClass(Coding);