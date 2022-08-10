import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CodeableConcept } from './CodeableConcept';
import { DoseRate } from './DoseRate';
import { Quantity } from './Quantity';
import { Ratio } from './Ratio';
import { Timing } from './Timing';

export type DosageDocument = Dosage & Document;

@Schema({ _id: false })
export class Dosage {
    @Prop()
    sequence: Number;

    @Prop()
    text: String;

    @Prop()
    additionalInstruction : [CodeableConcept];

    @Prop()
    patientInstruction: String;

    @Prop()
    timing: Timing;

    @Prop()
    asNeededBoolean : Boolean;

    @Prop()
    asNeededCodeableConcept : CodeableConcept;

    @Prop()
    site: CodeableConcept;

    @Prop()
    route: CodeableConcept;
    
    @Prop()
    method: CodeableConcept;

    @Prop()
    doseAndRate: [DoseRate];

    @Prop()
    maxDosePerPeriod: Ratio;

    @Prop()
    maxDosePerAdministration: Quantity;

    @Prop()
    maxDosePerLifetime: Quantity;
}

export const DosageSchema = SchemaFactory.createForClass(Dosage);