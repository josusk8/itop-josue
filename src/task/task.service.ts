import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';


@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ) {}

  findAll() {
    return this.taskRepo.find();
  }
/*
  findOne(id: number) {
    return this.taskRepo.findOne(id);
  }
*/
  create(body: any) {
    const newTask = new Task();
    newTask.tittle = body.tittle;
    // const newTask = this.tasksRepo.create(body);
    return this.taskRepo.save(newTask);
  }
/*
  async update(id: number, body: any) {
    const task = await this.taskRepo.findOne(id);
    this.taskRepo.merge(task, body);
    return this.taskRepo.save(task);
  }
*/
  async remove(id: number) {
    await this.taskRepo.delete(id);
    return true;
  }
}