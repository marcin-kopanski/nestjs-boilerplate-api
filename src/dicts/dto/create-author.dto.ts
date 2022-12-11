import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateAuthorDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsDateString()
  readonly dateOfBirth: Date;

  @IsDateString()
  readonly dateOfDeath: Date;

  @IsNumber()
  readonly country: number;
}
