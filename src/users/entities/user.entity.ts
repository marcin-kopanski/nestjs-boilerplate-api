import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  public toString = (): string => `${this.id}) ${this.name} (${this.email})`;

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
