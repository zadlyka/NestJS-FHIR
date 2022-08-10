import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AttachmentDocument = Attachment & Document;

@Schema({ _id: false })
export class Attachment {
    @Prop()
    contentType: String;
    
    @Prop()
    language: String;

    @Prop()
    data: Buffer;

    @Prop()
    url: String;

    @Prop()
    size: Number;

    @Prop()
    hash: Buffer;

    @Prop()
    title: String;

    @Prop()
    creation: String;
}

export const AttachmentSchema = SchemaFactory.createForClass(Attachment);