import { Controller, Post } from "@nestjs/common";
import { Body, Delete, Get, Param, Patch } from "@nestjs/common/decorators";
import { DictsService } from "./dicts.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { CreateCountryDto } from "./dto/create-country.dto";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { CreateYearDto } from "./dto/create-year.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { UpdateYearDto } from "./dto/update-year.dto";

@Controller("dicts")
export class DictsController {
  constructor(private readonly dictsService: DictsService) {}

  @Post("authors")
  createAuthor(@Body() createAuthorDto: CreateAuthorDto) {
    return this.dictsService.createAuthor(createAuthorDto);
  }

  @Post("countries")
  createCountry(@Body() createCountryDto: CreateCountryDto) {
    return this.dictsService.createCountry(createCountryDto);
  }

  @Post("genres")
  createGenre(@Body() createGenreDto: CreateGenreDto) {
    return this.dictsService.createGenre(createGenreDto);
  }

  @Post("years")
  createYear(@Body() createYearDto: CreateYearDto) {
    return this.dictsService.createYear(createYearDto);
  }

  @Get("authors")
  findAllAuthors() {
    return this.dictsService.findAllAuthors();
  }

  @Get("countries")
  findAllCountries() {
    return this.dictsService.findAllCountries();
  }

  @Get("genres")
  findAllGenres() {
    return this.dictsService.findAllGenres();
  }

  @Get("years")
  findAllYears() {
    return this.dictsService.findAllYears();
  }

  @Get("authors/:id")
  findAuthorById(@Param("id") id: string) {
    return this.dictsService.findAuthorById(+id);
  }

  @Get("countries/:id")
  findCountryById(@Param("id") id: string) {
    return this.dictsService.findCountryById(+id);
  }

  @Get("genres/:id")
  findGenreById(@Param("id") id: string) {
    return this.dictsService.findGenreById(+id);
  }

  @Get("years/:id")
  findYearById(@Param("id") id: string) {
    return this.dictsService.findYearById(+id);
  }

  @Patch("authors/:id")
  updateAuthor(@Param("id") id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.dictsService.updateAuthor(+id, updateAuthorDto);
  }

  @Patch("countries/:id")
  updateCountry(@Param("id") id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.dictsService.updateCountry(+id, updateCountryDto);
  }

  @Patch("genres/:id")
  updateGenre(@Param("id") id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.dictsService.updateGenre(+id, updateGenreDto);
  }

  @Patch("years/:id")
  updateYear(@Param("id") id: string, @Body() updateYearDto: UpdateYearDto) {
    return this.dictsService.updateYear(+id, updateYearDto);
  }

  @Delete("authors/:id")
  removeAuthor(@Param("id") id: string) {
    return this.dictsService.removeAuthor(+id);
  }

  @Delete("countries/:id")
  removeCountry(@Param("id") id: string) {
    return this.dictsService.removeCountry(+id);
  }

  @Delete("genres/:id")
  removeGenre(@Param("id") id: string) {
    return this.dictsService.removeGenre(+id);
  }

  @Delete("years/:id")
  removeYear(@Param("id") id: string) {
    return this.dictsService.removeYear(+id);
  }
}
