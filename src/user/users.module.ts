import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../core/entities/user.entity';
import Address from '../core/entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
