import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body.username, req.body.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('protected')
  async protectedRoute(@Request() req) {
    return 'Authorized!';
  }

  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    return this.authService.register(userData);
  }
}
