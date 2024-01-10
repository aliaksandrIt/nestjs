module.exports = {
  name: 'default',
  type: 'mongodb',
  host: 'localhost',
  port: '27017',
  username: 'root',
  password: '',
  database: 'rocketlaunches',
  entities: [__dirname + 'entities/**/*.entity.ts'],
};
