import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly authorId: number;

  @IsDateString()
  readonly releaseDate: Date;

  @IsNumber()
  readonly genreId: number;
}
