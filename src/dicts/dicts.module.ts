import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DictsController } from "./dicts.controller";
import { DictsService } from "./dicts.service";
import { Author } from "./entities/author.entity";
import { Country } from "./entities/country.entity";
import { Genre } from "./entities/genre.entity";
import { Year } from "./entities/year.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Author, Country, Genre, Year])],
  controllers: [DictsController],
  providers: [DictsService],
})
export class DictsModule {}
