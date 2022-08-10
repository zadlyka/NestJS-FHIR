import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Reference } from './Reference';

export type AnnotationDocument = Annotation & Document;

@Schema({ _id: false })
export class Annotation {
    @Prop()
    authorReference: Reference

    @Prop()
    authorString: String;

    @Prop()
    time: Date;

    @Prop()
    text: String;
}

export const AnnotationSchema = SchemaFactory.createForClass(Annotation);