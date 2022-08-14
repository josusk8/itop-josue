import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import {  TaskService } from './task.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(
    private taskService: TaskService
  ) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.taskService.create(body);
  }
/*
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.taskService.update(id, body);
  }
*/
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.taskService.remove(id);
  }
}
