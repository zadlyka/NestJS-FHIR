import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coding } from './Coding';

export type MetaDocument = Meta & Document;

@Schema({ _id: false })
export class Meta {
    @Prop()
    versionId : String;

    @Prop()
    lastUpdated : Date;

    @Prop()
    source : String;

    @Prop()
    profile: [String];

    @Prop()
    security: [Coding];

    @Prop()
    tag: [Coding];
}

export const MetaSchema = SchemaFactory.createForClass(Meta);