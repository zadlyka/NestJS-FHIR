import { Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator'
import { FhirPaginationQueryDto } from 'src/common/dto/fhir-pagination-query.dto'

export class PatientPaginationQueryDto extends FhirPaginationQueryDto {
    @IsOptional()
    @IsBoolean()
    readonly active: boolean;

    @IsOptional()
    @IsString()
    readonly address: string;

    /*
    @IsOptional()
    @IsString()
    readonly address_city: string;

    @IsOptional()
    @IsString()
    readonly address-country: string;

    @IsOptional()
    @IsString()
    readonly address-postalcode: string;

    @IsOptional()
    @IsString()
    readonly address-state: string;

    @IsOptional()
    @IsString()
    readonly address-use: string;*/
    @IsOptional()
    @IsString()
    readonly birthdate: string;

    /*
    @IsOptional()
    @IsString()
    readonly death-date: string;*/

    @IsOptional()
    @IsString()
    readonly deceased: string;

    @IsOptional()
    @IsString()
    readonly email: string;

    @IsOptional()
    @IsString()
    readonly phone: string;

    @IsOptional()
    @IsString()
    readonly telecom: string;

    @IsOptional()
    @IsString()
    readonly family: string;

    @IsOptional()
    @IsString()
    readonly given: string;

    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly phonetic: string;

    @IsOptional()
    @IsString()
    readonly gender: string;
    
    /*
    @IsOptional()
    @IsString()
    readonly general-practitioner: string;*/

    @IsOptional()
    @IsString()
    readonly identifier: string;

    @IsOptional()
    @IsString()
    readonly language: string;

    @IsOptional()
    @IsString()
    readonly link: string;

    @IsOptional()
    @IsString()
    readonly organization: string;
}
