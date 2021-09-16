import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {Student} from "./entities/student.entity";

@Injectable()
export class StudentsService {
  create(createStudentDto: CreateStudentDto): Student {
    return new Student();
  }

  findAll(): Student[] {
    return [];
  }

  findOne(id: number): Student {
    return new Student();
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return new Student();
  }

  remove(id: number): boolean {
    return true;
  }
}
