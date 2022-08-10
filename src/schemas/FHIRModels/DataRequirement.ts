import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CodeableConcept } from './CodeableConcept';
import { CodeFilter } from './CodeFilter';
import { DateFilter } from './DateFilter';
import { Reference } from './Reference';
import { Sort } from './Sort';

export type DataRequirementDocument = DataRequirement & Document;

@Schema({ _id: false })
export class DataRequirement {
    @Prop({required: true})
    type: String;

    @Prop()
    profile: [String];

    @Prop()
    subjectCodeableConcept: CodeableConcept;

    @Prop()
    subjectReference: Reference;

    @Prop()
    mustSupport: [String];

    @Prop()
    codeFilter: [CodeFilter];

    @Prop()
    dateFilter: [DateFilter];

    @Prop()
    limit: Number;

    @Prop()
    sort: [Sort];
}

export const DataRequirementSchema = SchemaFactory.createForClass(DataRequirement);