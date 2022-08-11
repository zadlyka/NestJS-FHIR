import { Transform, Type } from 'class-transformer'
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator'

export class FhirPaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  readonly limit: number = 10

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  readonly page: number = 1

  @IsOptional()
  @IsString()
  readonly _id: string;

  @IsOptional()
  @IsString()
  readonly _sort: string;
}
