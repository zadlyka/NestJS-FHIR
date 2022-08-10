import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Quantity } from './Quantity';
import { Ratio } from './Ratio';
import { Range } from './Range';
import { CodeableConcept } from './CodeableConcept';

export type DoseRateDocument = DoseRate & Document;

@Schema({ _id: false })
export class DoseRate {
    @Prop()
    type: CodeableConcept;

    @Prop()
    doseRange: Range;

    @Prop()
    doseQuantity: Quantity;

    @Prop()
    rateRatio: Ratio;

    @Prop()
    rateRange: Range;

    @Prop()
    rateQuantity: Quantity;
}

export const DoseRateSchema = SchemaFactory.createForClass(DoseRate);