import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';

export type RepeatDocument = Repeat & Document;

@Schema({ _id: false })
export class Repeat {
    @Prop()
    boundsDuration : Quantity;

    @Prop()
    boundsRange : Range;

    @Prop()
    boundsPeriod : Period;

    @Prop()
    count : Number;

    @Prop()
    countMax : Number;

    @Prop()
    duration : Number;

    @Prop()
    durationMax : Number;

    @Prop()
    durationUnit : String;

    @Prop()
    frequency : Number;

    @Prop()
    frequencyMax : Number;

    @Prop()
    period : Number;

    @Prop()
    periodMax : Number;

    @Prop()
    periodUnit : String;

    @Prop()
    dayOfWeek : [String];

    @Prop()
    timeOfDay : [String];

    @Prop()
    when : [String];

    @Prop()
    offset : Number;
}

export const RepeatSchema = SchemaFactory.createForClass(Repeat);