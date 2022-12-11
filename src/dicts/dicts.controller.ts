import { Controller, Post } from "@nestjs/common";
import { DictsService } from "./dicts.service";

@Controller("dicts")
export class DictsController {
  constructor(private readonly dictsService: DictsService) {}

  // @Post()
  // create;
}
