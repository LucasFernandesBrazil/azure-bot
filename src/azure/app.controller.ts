import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import PullRequestDto from './dtos/pull-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  handlePullRequest(@Body() pullRequestDto: PullRequestDto): string {
    return this.appService.handlePullRequest(pullRequestDto);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
