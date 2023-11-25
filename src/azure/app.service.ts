import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import PullRequestDto from './dtos/pull-request.dto';

@Injectable()
export class AppService {
  getWebHook(): string {
    return process.env.URL_WEBHOOK_DISCORD;
  }

  handlePullRequest(pullRequestDto: PullRequestDto): Promise<string> {
    const webhookUrl = `https://${process.env.URL_WEBHOOK_DISCORD}`;
    const remetente = pullRequestDto.resource.sourceRefName.split('/');
    const destino = pullRequestDto.resource.targetRefName.split('/');
    const maxRetries = 3;
    let retryCount = 0;

    const sendRequest = async () => {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              content: null,
              embeds: [
                {
                  title: 'Solicitação de CODE REVIEW',
                  description:
                    `**Repositório**: ${pullRequestDto.resource.repository.name}\n**Propõe**: ${remetente[2]} em ${destino[2]}\n**Autor**: ${pullRequestDto.resource.createdBy.displayName}\n\n[Pull Request link](${pullRequestDto.resource._links.web.href})`,
                  color: 776715,
                  author: { name: 'Pull Request criado' },
                },
              ],
              attachments: [],
            },
            /* {
            content: null,
            embeds: [
              {
                title: 'Solicitação de CODE REVIEW',
                description: `
                  Repositório: ${pullRequestDto.resource.repository.name}
                  \n
                  Branch: ${pullRequestDto.resource.sourceRefName}
                  \n
                  Autor: ${pullRequestDto.resource.createdBy.displayName}
                  \n\n
                  ${pullRequestDto.detailedMessage.markdown}
                  ${pullRequestDto.resource._links.web.href}
                  `,
                color: 776715,
                author: { name: 'Pull Request criado' },
              },
            ],
            attachments: [],
          } */
          ),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      } catch (error) {
        if (retryCount < maxRetries) {
          retryCount++;
          console.error(
            `Erro ao enviar a requisição. Tentativa ${retryCount} de ${maxRetries}.`,
          );
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return sendRequest(); // Chama a função novamente
        } else {
          console.error(
            `Número máximo de tentativas atingido. Erro: ${error.message}`,
          );
          throw error;
        }
      }
    };

    return sendRequest()
      .then(() => 'Ok')
      .catch((error) => {
        console.error(`Erro final: ${error.message}`);
        throw error;
      });
  }
}
