import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import PullRequestDto from './dtos/pull-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  handlePullRequest(): string {
    return this.appService.handlePullRequest();
  }

  @Get()
  getHello(@Body() pullRequestDto: PullRequestDto) {
    console.log(pullRequestDto)
    return JSON.stringify(pullRequestDto);
    /* return this.appService.getHello(); */
  }
}
