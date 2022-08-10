import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Attachment } from './Attachment';

export type RelatedArtifactDocument = RelatedArtifact & Document;

@Schema({ _id: false })
export class RelatedArtifact {
    @Prop({required: true})
    type: String;

    @Prop()
    label: String;

    @Prop()
    display: String;

    @Prop()
    citation: String;

    @Prop()
    url: String;

    @Prop()
    document: Attachment;

    @Prop()
    resource: String;
}

export const RelatedArtifactSchema = SchemaFactory.createForClass(RelatedArtifact);