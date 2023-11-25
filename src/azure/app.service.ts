import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import PullRequestDto from './dtos/pull-request.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handlePullRequest(pullRequestDto: PullRequestDto): string {
    fetch(`https://${process.env.URL_WEBHOOK_DISCORD}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"content":pullRequestDto.id,"embeds":null,"attachments":[]}),
    }).then(res => {
      return res.json();
    });

    return 'Ok';
  }
}
