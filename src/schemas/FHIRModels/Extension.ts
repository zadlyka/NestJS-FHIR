import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Address } from './Address';
import { Annotation } from './Annotation';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { CodeableReference } from './CodeableReference';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { ContactPoint } from './ContactPoint';
import { Contributor } from './Contributor';
import { DataRequirement } from './DataRequirement';
import { Dosage } from './Dosage';
import { Expression } from './Expression';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { Money } from './Money';
import { ParameterDefinition } from './ParameterDefinition';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Ratio } from './Ratio';
import { RatioRange } from './RatioRange';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { SampledData } from './SampledData';
import { Signature } from './Signature';
import { Timing } from './Timing';
import { TriggerDefinition } from './TriggerDefinition';
import { UsageContext } from './UsageContext';

export type ExtensionDocument = Extension & Document;

@Schema({ _id: false })
export class Extension {
    @Prop({required: true})
    url: String

    @Prop()
    valueBase64Binary : Buffer;

    @Prop()
    valueBoolean : Boolean;

    @Prop()
    valueCanonical : String;

    @Prop()
    valueCode : String;

    @Prop()
    valueDate : String;

    @Prop()
    valueDateTime : Date

    @Prop()
    valueDecimal : Number;

    @Prop()
    valueId : String;
    
    @Prop()
    valueInstant : String;

    @Prop()
    valueInteger : Number
    
    @Prop()
    valueMarkdown : String;

    @Prop()
    valueOid : String;

    @Prop()
    valuePositiveInt : Number;

    @Prop()
    valueString : String;

    @Prop()
    valueTime : String;

    @Prop()
    valueUnsignedInt : Number;

    @Prop()
    valueUri : String;

    @Prop()
    valueUrl : String;

    @Prop()
    valueUuid : String;

    @Prop()
    valueAddress : Address;

    @Prop()
    valueAge : Quantity;

    @Prop()
    valueAnnotation: Annotation;
    
    @Prop()
    valueAttachment : Attachment;

    @Prop()
    valueCodeableConcept: CodeableConcept;

    @Prop()
    valueCodeableReference : CodeableReference;

    @Prop()
    valueCoding : Coding;
    
    @Prop()
    valueContactPoint : ContactPoint;
    
    @Prop()
    valueCount : Quantity;

    @Prop()
    valueDistance : Quantity;

    @Prop()
    valueDuration : Quantity;

    @Prop()
    valueHumanName : HumanName;

    @Prop()
    valueIdentifier : Identifier;

    @Prop()
    valueMoney: Money

    @Prop()
    valuePeriod : Period;
    
    @Prop()
    valueQuantity: Quantity;

    @Prop()
    valueRange : Range;
    
    @Prop()
    valueRatio : Ratio;

    @Prop()
    valueRatioRange : RatioRange;

    @Prop()
    valueReference: Reference;

    @Prop()
    valueSampledData : SampledData;
    
    @Prop()
    valueSignature : Signature;

    @Prop()
    valueTiming : Timing;

    @Prop()
    valueContactDetail : ContactDetail;

    @Prop()
    valueContributor : Contributor;

    @Prop()
    valueDataRequirement : DataRequirement;
    
    @Prop()
    valueExpression : Expression;
    
    @Prop()
    valueParameterDefinition : ParameterDefinition;

    @Prop()
    valueRelatedArtifact : RelatedArtifact;

    @Prop()
    valueTriggerDefinition : TriggerDefinition;

    @Prop()
    valueUsageContext : UsageContext;

    @Prop()
    valueDosage : Dosage;
}

export const ExtensionSchema = SchemaFactory.createForClass(Extension);