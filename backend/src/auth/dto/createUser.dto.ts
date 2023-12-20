import { IsNotEmpty, IsEmail, MinLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'Password too weak. Must contain at least 8 characters, one uppercase letter, and one number.',
  })
  password: string;

  @IsNotEmpty()
  role: 'admin' | 'editor';
}