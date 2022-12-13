import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Book } from "./entities/book.entity";

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private repo: Repository<Book>) {}

  create(createBookDto: CreateBookDto) {
    console.log("This action adds a new book");
    const book = this.repo.create(createBookDto);
    return this.repo.save(book);
  }

  findAll() {
    console.log("This action returns all books");
    return this.repo.find({
      relations: { author: true, genre: true },
    });
  }

  findById(id: number) {
    console.log(`This action returns a #${id} book`);
    const book = this.repo.findOne({ relations: { author: true, genre: true }, where: { id } });
    if (!book) {
      throw new NotFoundException("Book not found!");
    }

    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    console.log(`This action updates a #${id} book`);
    const book = await this.findById(id);
    Object.assign(book, updateBookDto);
    return this.repo.save(book);
  }

  async remove(id: number) {
    console.log(`This action removes a #${id} book`);
    const book = await this.findById(id);
    return this.repo.remove(book);
  }
}
