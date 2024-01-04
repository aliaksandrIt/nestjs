import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/user/users.module';
import { AuthenticationController } from './authentication.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, LocalStrategy, JwtStrategy],
  providers: [AuthenticationService, LocalStrategy],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
