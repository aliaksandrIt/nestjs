import { AuthenticationService } from '../authentication.service';
import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from '../../user/users.service';
import { mockedConfigService } from '../../utils/mocks/config.service';
import { mockedJwtService } from '../../utils/mocks/jwt.service';
import User from '../../core/entities/user.entity';

describe('The AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  let usersService: UsersService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        AuthenticationService,
        {
          provide: ConfigService,
          useValue: mockedConfigService,
        },
        {
          provide: JwtService,
          useValue: mockedJwtService,
        },
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();
    authenticationService = await module.get(AuthenticationService);
    usersService = await module.get(UsersService);
  });
  describe('when creating a cookie', () => {
    it('should return a string', () => {
      const userId = 1;
      expect(
        typeof authenticationService.getCookieWithJwtAccessToken(userId),
      ).toEqual('string');
    });
  });
});
