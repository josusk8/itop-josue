import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Task } from './task/entities/task.entity';

@Module({
  imports: [
    UserModule,
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'pruebajunior',
      entities: [User, Task],
      synchronize: true,
    
    }),
  
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
