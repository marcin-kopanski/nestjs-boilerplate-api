import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BooksModule } from "./books/books.module";
import { Book } from "./books/entities/book.entity";
import { DictsModule } from "./dicts/dicts.module";
import { Author } from "./dicts/entities/author.entity";
import { Country } from "./dicts/entities/country.entity";
import { Genre } from "./dicts/entities/genre.entity";
import { Year } from "./dicts/entities/year.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [Author, Book, Country, Genre, Year],
      synchronize: true,
    }),
    BooksModule,
    DictsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
