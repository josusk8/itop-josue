import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
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

  findOne(id: number) {
    return this.taskRepo.findOne({
      where: {
          id: id
      }
  })
  }

  create( { user, tittle, priority, description }: Task) {
    const newTask = new Task();
    newTask.tittle = tittle;
    newTask.description= description;
    newTask.priority= priority;
    newTask.user = user

    // const newTask = this.tasksRepo.create(body);
    return this.taskRepo.save(newTask);
  }

  async update(id: number, body: any) {
    const task = await this.taskRepo.findOne({
      where: {
          id: id
      }
  })
    this.taskRepo.merge(task, body);
    return this.taskRepo.save(task);
  }

  async remove(id: number) {
    await this.taskRepo.delete(id);
    return true;
  }
}