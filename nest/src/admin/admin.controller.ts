import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AppVersion } from './dto/app-version.dto';

@Controller()
@ApiTags('Admin Service')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('version')
  getApiInfo(): AppVersion {
    return this.adminService.getVersion();
  }
}
