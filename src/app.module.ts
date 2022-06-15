import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { databaseProviders } from './database/database.providers';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule,AuthModule],
  controllers: [AppController],
  providers: [AppService,...databaseProviders],
})
export class AppModule {}
