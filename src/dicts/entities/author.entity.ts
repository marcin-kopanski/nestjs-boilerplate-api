import { Book } from "src/books/entities/book.entity";
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./country.entity";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: "date" })
  dateOfBirth: Date;

  @Column({ type: "date", nullable: true })
  dateOfDeath: Date;

  @ManyToOne(() => Country)
  country: Country;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];

  public toString = (): string => `${this.id}) ${this.firstName} ${this.lastName}`;

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
