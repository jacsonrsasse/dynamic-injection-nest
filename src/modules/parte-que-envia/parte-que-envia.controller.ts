import { Controller, Get } from '@nestjs/common';
import { ParteQueEnviaUseCase } from './parte-que-envia.usecase';

@Controller()
export class ParteQueEnviaController {
  constructor(private readonly parteQueEnviaUseCase: ParteQueEnviaUseCase) {}

  @Get()
  test() {
    this.parteQueEnviaUseCase.call();
  }
}
