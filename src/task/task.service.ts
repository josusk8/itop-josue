import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';


import { Task } from './entities/task.entity';

@Injectable()
export class TasksService extends TypeOrmCrudService<Task>{
  constructor(@InjectRepository(Task) repo){
    super(repo)
  }
}