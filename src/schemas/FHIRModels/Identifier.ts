import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CodeableConcept } from './CodeableConcept';
import { Period } from './Period';
import { Reference } from './Reference';

export type IdentifierDocument = Identifier & Document;

@Schema({ _id: false })
export class Identifier {
    @Prop()
    use: String;

    @Prop()
    type: CodeableConcept;

    @Prop()
    system: String;

    @Prop()
    value: String;

    @Prop()
    period: Period;
    
    @Prop({type: Object})
    assigner: Reference;
}

export const IdentifierSchema = SchemaFactory.createForClass(Identifier);