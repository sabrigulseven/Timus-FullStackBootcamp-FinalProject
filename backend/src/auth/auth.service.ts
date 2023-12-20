import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ElasticsearchService } from 'src/elasticsearch.service';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class AuthService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async generateToken(username: string) {
    return JwtService.sign({ username });
  }

  async login(username: string, password: string) {
    // Kullanıcı girişi burada gerçekleştirilir
    const user = await this.elasticsearchService.searchUserByUsername(username);

    if (user && user._source.password === password) {
      const token = await this.generateToken(username);
      return { username: user._source.username, token }; // Kullanıcı bilgileri ve token'i döndür
    }
    throw new Error('Invalid credentials');
  }

  async register(userData: CreateUserDto) {
    const { username } = userData;
    await this.elasticsearchService.indexUserDocument(userData);
    const token = await this.generateToken(username);
    return { username, token }; // Kullanıcı bilgileri ve token'i döndür
  }

}