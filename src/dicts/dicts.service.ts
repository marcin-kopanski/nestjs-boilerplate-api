import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { CreateCountryDto } from "./dto/create-country.dto";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { CreateYearDto } from "./dto/create-year.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { UpdateYearDto } from "./dto/update-year.dto";
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
    const author = this.authorRepo.create({
      ...createAuthorDto,
      country: { id: createAuthorDto.countryId },
    });
    return this.authorRepo.save(author);
  }

  createCountry(createCountryDto: CreateCountryDto) {
    const country = this.countryRepo.create(createCountryDto);
    return this.countryRepo.save(country);
  }

  createGenre(createGenreDto: CreateGenreDto) {
    const genre = this.genreRepo.create(createGenreDto);
    return this.genreRepo.save(genre);
  }

  createYear(createYearDto: CreateYearDto) {
    const year = this.yearRepo.create(createYearDto);
    return this.yearRepo.save(year);
  }

  findAllAuthors() {
    return this.authorRepo.find({
      relations: { country: true },
    });
  }

  findAllCountries() {
    return this.countryRepo.find();
  }

  findAllGenres() {
    return this.genreRepo.find();
  }

  findAllYears() {
    return this.yearRepo.find();
  }

  async findAuthorById(id: number) {
    const author = await this.authorRepo.findOneBy({ id });
    if (!author) {
      throw new NotFoundException("Author not found!");
    }

    return author;
  }

  async findCountryById(id: number) {
    const country = await this.countryRepo.findOneBy({ id });
    if (!country) {
      throw new NotFoundException("Country not found!");
    }

    return country;
  }

  async findGenreById(id: number) {
    const genre = await this.genreRepo.findOneBy({ id });
    if (!genre) {
      throw new NotFoundException("Genre not found!");
    }

    return genre;
  }

  async findYearById(id: number) {
    const year = await this.yearRepo.findOneBy({ id });
    if (!year) {
      throw new NotFoundException("Year not found!");
    }

    return year;
  }

  async updateAuthor(id: number, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.findAuthorById(id);
    Object.assign(author, updateAuthorDto);
    return this.authorRepo.save(author);
  }

  async updateCountry(id: number, updateCountryDto: UpdateCountryDto) {
    const country = await this.findCountryById(id);
    Object.assign(country, updateCountryDto);
    return this.countryRepo.save(country);
  }

  async updateGenre(id: number, updateGenreDto: UpdateGenreDto) {
    const genre = await this.findGenreById(id);
    Object.assign(genre, updateGenreDto);
    return this.genreRepo.save(genre);
  }

  async updateYear(id: number, updateYearDto: UpdateYearDto) {
    const year = await this.findYearById(id);
    Object.assign(year, updateYearDto);
    return this.yearRepo.save(year);
  }

  async removeAuthor(id: number) {
    const author = await this.findAuthorById(id);
    return this.authorRepo.remove(author);
  }

  async removeCountry(id: number) {
    const country = await this.findCountryById(id);
    return this.countryRepo.remove(country);
  }

  async removeGenre(id: number) {
    const genre = await this.findGenreById(id);
    return this.genreRepo.remove(genre);
  }

  async removeYear(id: number) {
    const year = await this.findYearById(id);
    return this.yearRepo.remove(year);
  }
}
