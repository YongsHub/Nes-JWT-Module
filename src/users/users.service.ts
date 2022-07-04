import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    // Real APP에서는 TypeORM, Sequelize 와 같은 모듈을 사용하나 Test에서는 hard-coded된 User사용해서 user존재시 true
    // 추후에는 UserRepository를 AuthService에서 Inject해서 사용하는 방안을 선택해보자!
    return this.users.find((user) => user.username === username);
  }
}
