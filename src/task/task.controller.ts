import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { TasksService } from './task.service';
import { ApiTags } from '@nestjs/swagger';


@Crud({
  model:{
    type: Task
  }
})
@ApiTags('Task')
@Controller('tasks')
export class TasksController implements CrudController<Task>{
  constructor (public service: TasksService){}
}