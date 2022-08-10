import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Identifier } from './Identifier';

export type ReferenceDocument = Reference & Document;

@Schema({ _id: false })
export class Reference {
    @Prop()
    reference: String;

    @Prop()
    type: String;

    @Prop({type: Object})
    identifier: Identifier;

    @Prop()
    display: String;
}

export const ReferenceSchema = SchemaFactory.createForClass(Reference);