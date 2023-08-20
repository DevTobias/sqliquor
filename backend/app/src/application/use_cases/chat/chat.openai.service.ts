import { Service } from '@freshgum/typedi';

import { ChatService } from '$application/use_cases/chat/_chat.service';
import { MessageInterface } from '$domain/chat.interface';
import { Environment } from '$infrastructure/config';
import { ENVIRONMENT } from '$infrastructure/webserver';
import { HTTP, httpException } from '$infrastructure/webserver/types';

@Service([ENVIRONMENT])
export class ChatOpenAiService implements ChatService {
  constructor(private env: Environment) {}

  queryModel = async (messages: MessageInterface[]) => {
    const response = await fetch(' https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model: 'gpt-3.5-turbo', messages, stream: true }),
    });

    const reader = response.body?.getReader();
    if (!reader) return httpException('Did not receive a readable stream from openai', HTTP.BAD_REQUEST);
    const decoder = new TextDecoder('utf-8');

    const handleStreamData = async (current: BufferSource, controller: ReadableStreamDirectController) => {
      const chunk = decoder.decode(current);
      const lines = chunk.split('\n');
      const text = lines
        .map((line) => line.replace(/^data: /, '').trim())
        .filter((line) => line !== '' && line !== '[DONE]')
        .map((line) => JSON.parse(line))
        .map((json) => json.choices?.[0].delta.content)
        .filter((val) => val !== null && val !== undefined)
        .join('');

      await controller.write(`${text}`);
      await controller.flush();

      const { done, value } = await reader.read();
      if (!done) await handleStreamData(value, controller);
    };

    return new ReadableStream({
      type: 'direct',
      pull: async (controller: ReadableStreamDirectController) => {
        const { done, value } = await reader.read();
        if (!done) await handleStreamData(value, controller);
      },
    });
  };
}
