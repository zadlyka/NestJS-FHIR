import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PeriodDocument = Period & Document;

@Schema({ _id: false })
export class Period {
  @Prop()
  start: Date;

  @Prop()
  end: Date;
}

export const PeriodSchema = SchemaFactory.createForClass(Period);