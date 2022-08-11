import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
require('dotenv').config()

@Module({
  imports: [MongooseModule.forRoot(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DBNAME}`), PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
