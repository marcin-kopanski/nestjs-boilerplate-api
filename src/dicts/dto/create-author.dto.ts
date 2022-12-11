import { IsDateString, IsNumber, IsString, IsOptional } from "class-validator";

export class CreateAuthorDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsDateString()
  readonly dateOfBirth: Date;

  @IsDateString()
  @IsOptional()
  readonly dateOfDeath: Date;

  @IsNumber()
  readonly countryId: number;
}
