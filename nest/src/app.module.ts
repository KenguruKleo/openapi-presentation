import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [StudentsModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
