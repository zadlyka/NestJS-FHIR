import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SortDocument = Sort & Document;

@Schema({ _id: false })
export class Sort {
    @Prop({required: true})
    path: String

    @Prop({required: true})
    direction: String;
}

export const SortSchema = SchemaFactory.createForClass(Sort);