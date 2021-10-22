import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { ConfigModule } from '@nestjs/config';
import { ImageController } from './image/image.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    PokemonModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_ATLAS_URI || 'http://localhost:27017/databasetest',
    ),
  ],
  controllers: [AppController, ImageController],
  providers: [AppService],
})
export class AppModule {}
