import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import PullRequestDto from './dtos/pull-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async handlePullRequest(@Body() pullRequestDto: PullRequestDto): Promise<string> {
    try {
      const result = await this.appService.handlePullRequest(pullRequestDto);
      return result;
    } catch (error) {
      console.error(`Erro na controller: ${error.message}`);
      return 'Erro na controller';
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getWebHook();
  }
}
