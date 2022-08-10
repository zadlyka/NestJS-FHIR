import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ParameterDefinitionDocument = ParameterDefinition & Document;

@Schema({ _id: false })
export class ParameterDefinition {
    @Prop()
    name: String;

    @Prop({required: true})
    use: String;

    @Prop()
    min: Number;

    @Prop()
    max: Number;

    @Prop()
    documentation: String;

    @Prop({required: true})
    type: String;

    @Prop()
    profile: String
}

export const ParameterDefinitionSchema = SchemaFactory.createForClass(ParameterDefinition);