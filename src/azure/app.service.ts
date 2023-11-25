import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handlePullRequest(): string {
    fetch('https://discord.com/api/v10/webhooks/1177750114249494588/COS_LzX62X5KZvSA3G0WonMWwlVPCw3LvubH9uDiZU2sCHmEBu1XuE7U4E4La5RMJXRX?wait=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"content":"Teste","embeds":null,"attachments":[]}),
    }).then(res => {
      return res.json();
    });

    return 'Ok';
  }
}
