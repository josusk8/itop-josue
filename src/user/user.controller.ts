import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { User } from "./entities/user.entity";
import { UsersService } from "./user.service";

@Crud({
  model:{
    type: User
  }
})
@ApiTags('User')
@Controller('users')
export class UsersController implements CrudController<User>{
  constructor (public service: UsersService){}
}