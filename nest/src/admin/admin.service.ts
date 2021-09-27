import { Injectable } from '@nestjs/common';
import { AppVersion } from './dto/app-version.dto';

@Injectable()
export class AdminService {
  getVersion(): AppVersion {
    return {
      app: 'Test OpenAPI runtime FE validator',
      version: '0.0.1',
    };
  }
}
