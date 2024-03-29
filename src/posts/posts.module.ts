import { Module } from '@nestjs/common';
import PostsController from './posts.controller';
import PostsService from './posts.service';
import Post from '../core/entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import Category from '../core/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Category])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
