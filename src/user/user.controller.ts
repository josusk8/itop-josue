import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import bcrypt from 'bcryptjs';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';

@Crud({
  model: {
    type: User,
  },
})
@ApiTags('User')
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}

  get base(): CrudController<User> {
    return this;
  }

  @Override()
  async createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: User) {
    //No logro optener los parametos de req.

    /*const password = req.parsed.fields['password']
  const encryptPassword = await bcrypt.hash(password, 10);
    dto.password = encryptPassword  */
    
    return this.base.createOneBase(req, dto);
  }
}
