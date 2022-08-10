import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DataRequirement } from './DataRequirement';
import { Expression } from './Expression';
import { Reference } from './Reference';
import { Timing } from './Timing';

export type TriggerDefinitionDocument = TriggerDefinition & Document;

@Schema({ _id: false })
export class TriggerDefinition {
    @Prop({required: true})
    type: String;

    @Prop()
    name: String;

    @Prop()
    timingTiming: Timing;

    @Prop()
    timingReference: Reference;

    @Prop()
    timingDate: String;

    @Prop()
    timingDateTime: Date;

    @Prop()
    data: [DataRequirement];

    @Prop()
    condition: Expression
}

export const TriggerDefinitionSchema = SchemaFactory.createForClass(TriggerDefinition);