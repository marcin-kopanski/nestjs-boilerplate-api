import { IsNumber } from "class-validator";

export class CreateYearDto {
  @IsNumber()
  readonly year: number;
}
