
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Period } from './Period';

export type HumanNameDocument = HumanName & Document;

@Schema({ _id: false })
export class HumanName {
    @Prop()
    use: string;

    @Prop()
    text: string;

    @Prop()
    family: string;

    @Prop()
    given: [string];

    @Prop()
    prefix: [string];

    @Prop()
    suffix: [String];

    @Prop()
    period: Period
}

export const HumanNameSchema = SchemaFactory.createForClass(HumanName);