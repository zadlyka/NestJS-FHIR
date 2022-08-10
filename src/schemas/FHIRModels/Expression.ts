import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExpressionDocument = Expression & Document;

@Schema({ _id: false })
export class Expression {
    @Prop()
    description : String;

    @Prop()
    name: String;

    @Prop({required: true})
    language: String;

    @Prop()
    expression: String;

    @Prop()
    reference: String;
}

export const ExpressionSchema = SchemaFactory.createForClass(Expression);