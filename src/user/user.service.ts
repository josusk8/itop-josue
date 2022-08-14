import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getAll() {
    return this.usersRepository.find();
}

  create(createTaskDto: CreateUserDto) {
    return 'This action adds a new task';
  }
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({id});
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  update(id: number, updateTaskDto: UpdateUserDto) {
    return `This action updates a #${id} task`;
  }

  
}