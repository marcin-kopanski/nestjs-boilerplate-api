import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ type: "date" })
  releaseDate: Date;

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
