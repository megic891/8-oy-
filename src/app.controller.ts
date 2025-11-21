import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.appService.getById(id);
  }

  @Post()
  create(@Body() dto: any) {
    return this.appService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: any) {
    return this.appService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.appService.remove(id);
  }
}