import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NarrativeDocument = Narrative & Document;

@Schema({ _id: false })
export class Narrative {
    @Prop({required: true})
    status: String

    @Prop({required: true})
    div: String;
}

export const NarrativeSchema = SchemaFactory.createForClass(Narrative);