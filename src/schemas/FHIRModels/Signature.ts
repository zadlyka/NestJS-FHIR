import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coding } from './Coding';
import { Reference } from './Reference';

export type SignatureDocument = Signature & Document;

@Schema({ _id: false })
export class Signature {
    @Prop({required: true})
    type: [Coding];

    @Prop({required: true})
    when: String;

    @Prop({required: true})
    who: Reference;

    @Prop()
    onBehalfOf: Reference;

    @Prop()
    targetFormat: String;

    @Prop()
    sigFormat: String;

    @Prop()
    data: Buffer;

}

export const SignatureSchema = SchemaFactory.createForClass(Signature);