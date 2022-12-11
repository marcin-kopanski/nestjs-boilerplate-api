import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
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

  @Column({ type: "date" })
  dateOfDeath: Date;

  @OneToOne(() => Country)
  @JoinColumn()
  country: Country;

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
