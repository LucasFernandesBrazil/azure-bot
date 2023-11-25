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
      body: JSON.stringify({
        content: null,
        embeds: [
          {
            title: 'Solicitação de CODE REVIEW',
            description: `Repositório: ${pullRequestDto.resource.repository.name}\nBranch: ${pullRequestDto.resource.sourceRefName}\nAutor: ${pullRequestDto.resource.createdBy.displayName}\n\n${pullRequestDto.detailedMessage.markdown}`,
            color: 776715,
            author: { name: 'Pull Request criado' },
          },
        ],
        attachments: [],
      }),
    }).then((res) => {
      return res.json();
    });

    return 'Ok';
  }
}
