import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { CreateCountryDto } from "./dto/create-country.dto";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { CreateYearDto } from "./dto/create-year.dto";
import { Author } from "./entities/author.entity";
import { Country } from "./entities/country.entity";
import { Genre } from "./entities/genre.entity";
import { Year } from "./entities/year.entity";

@Injectable()
export class DictsService {
  constructor(
    @InjectRepository(Author) private authorRepo: Repository<Author>,
    @InjectRepository(Country) private countryRepo: Repository<Country>,
    @InjectRepository(Genre) private genreRepo: Repository<Genre>,
    @InjectRepository(Year) private yearRepo: Repository<Year>,
  ) {}

  createAuthor(createAuthorDto: CreateAuthorDto) {
    console.log("This action adds a new author");
    const author = this.authorRepo.create(createAuthorDto);
    return this.authorRepo.save(author);
  }

  createCountry(createCountryDto: CreateCountryDto) {
    console.log("This action adds a new country");
    const country = this.countryRepo.create(createCountryDto);
    return this.countryRepo.save(country);
  }

  createGenre(createGenreDto: CreateGenreDto) {
    console.log("This action adds a new genre");
    const genre = this.genreRepo.create(createGenreDto);
    return this.genreRepo.save(genre);
  }

  createYear(createYearDto: CreateYearDto) {
    console.log("This action adds a new year");
    const year = this.yearRepo.create(createYearDto);
    return this.yearRepo.save(year);
  }

  findAllAuthors() {
    console.log("This action returns all authors");
    return this.authorRepo.find();
  }

  findAllCountries() {
    console.log("This action returns all countries");
    return this.countryRepo.find();
  }
}
