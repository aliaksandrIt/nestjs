import { IsString, IsNotEmpty } from 'class-validator';

export class UpdatePostDto {
  @IsNotEmpty()
  id: number;

  @IsString()
  content: string;

  @IsString()
  title: string;
}
