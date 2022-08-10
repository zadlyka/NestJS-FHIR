import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coding } from './Coding';

export type CodeFilterDocument = CodeFilter & Document;

@Schema({ _id: false })
export class CodeFilter {
    @Prop()
    path: String;

    @Prop()
    searchParam: String;

    @Prop()
    valueSet: String;

    @Prop()
    code: [Coding];
}

export const CodeFilterSchema = SchemaFactory.createForClass(CodeFilter);