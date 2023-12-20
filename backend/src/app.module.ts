import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactoryListController } from './factoryList/factoryList.controller';
import { FactoryDetailController } from './factoryDetail/factoryDetail.controller';
import { FactoryListService } from './factoryList/factoryList.service';
import { FactoryDetailService } from './factoryDetail/factoryDetail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FactoryList } from './factoryList/entities/factoryList.entity';
import { FactoryDetail } from './factoryDetail/entities/factoryDetail.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], 
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'), 
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [FactoryList, FactoryDetail],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, FactoryListController, FactoryDetailController],
  providers: [AppService, FactoryListService, FactoryDetailService],
})
export class AppModule {}
