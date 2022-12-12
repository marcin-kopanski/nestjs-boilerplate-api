import { Author } from "src/dicts/entities/author.entity";
import { Genre } from "src/dicts/entities/genre.entity";
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Author)
  author: Author;

  @Column({ type: "date" })
  releaseDate: Date;

  @ManyToOne(() => Genre)
  genre: Genre;

  public toString = (): string => `${this.id}) ${this.author} - ${this.title}`;

  @AfterInsert()
  logInsert() {
    console.log(`Inserted: ${this}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Updated ${this}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Removed ${this}`);
  }
}
