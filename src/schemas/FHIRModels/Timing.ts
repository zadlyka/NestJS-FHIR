import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CodeableConcept } from './CodeableConcept';
import { Repeat } from './Repeat';

export type TimingDocument = Timing & Document;

@Schema({ _id: false })
export class Timing {
    @Prop()
    event: [Date];

    @Prop()
    repeat : Repeat;

    @Prop()
    code: CodeableConcept;
}

export const TimingSchema = SchemaFactory.createForClass(Timing);