import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/testing-fhir'), PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
