import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Address } from '../FHIRModels/Address';
import { Attachment } from '../FHIRModels/Attachment';
import { CodeableConcept } from '../FHIRModels/CodeableConcept';
import { ContactPoint } from '../FHIRModels/ContactPoint';
import { Extension } from '../FHIRModels/Extension';
import { HumanName } from '../FHIRModels/HumanName';
import { Identifier } from '../FHIRModels/Identifier';
import { Meta } from '../FHIRModels/Meta';
import { Narrative } from '../FHIRModels/Narrative';
import { PatientCommunication } from '../FHIRModels/Patient/PatientCommunication';
import { PatientContact } from '../FHIRModels/Patient/PatientContact';
import { PatientLink } from '../FHIRModels/Patient/PatientLink';
import { Reference } from '../FHIRModels/Reference';

export type PatientDocument = Patient & Document;

@Schema({versionKey: false})
export class Patient {
    @Prop({required: true})
    resourceType: String;
    
    @Prop()
    meta: Meta;

    @Prop()
    implicitRules: String

    @Prop()
    language: String

    @Prop()
    text: Narrative

    @Prop()
    extension : [Extension];

    @Prop()
    modifierExtension: [Extension];

    @Prop()
    identifier: [Identifier];

    @Prop()
    active: Boolean;

    @Prop()
    name: [HumanName];

    @Prop()
    telecom: [ContactPoint];

    @Prop()
    gender: String;

    @Prop()
    birthDate: String;

    @Prop()
    deceasedBoolean: Boolean;

    @Prop()
    deceasedDateTime: Date;

    @Prop()
    address: [Address];

    @Prop()
    maritalStatus: CodeableConcept;

    @Prop()
    multipleBirthBoolean: Boolean;

    @Prop()
    multipleBirthInteger: Number;

    @Prop()
    photo: [Attachment];

    @Prop()
    contact: [PatientContact];

    @Prop()
    communication: [PatientCommunication];

    @Prop()
    generalPractitioner: [Reference];

    @Prop()
    managingOrganization: Reference;

    @Prop()
    link: [PatientLink]
}

const PatientSchema = SchemaFactory.createForClass(Patient);

PatientSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

PatientSchema.set('toJSON', {
    virtuals: true
});

export { PatientSchema };