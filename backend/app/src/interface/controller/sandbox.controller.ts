import { Service } from '@freshgum/typedi';

import { SandboxService } from '$application/use_cases/sandbox/_sandbox.service';
import { SandboxDatabaseService } from '$application/use_cases/sandbox/sandbox.database.service';
import { Handler } from '$infrastructure/webserver';

@Service([SandboxDatabaseService])
export class SandboxController {
  constructor(private sandboxService: SandboxService) {}

  execute: Handler<string> = async ({ user, body, set }) => {
    if (!user!.sandboxCreated) {
      await this.sandboxService.createUserSandbox(user!);
    }

    const result = await this.sandboxService.execute(user!, body);
    set.headers['Content-Type'] = 'application/json';
    return JSON.stringify(result, (_, value) => (typeof value === 'bigint' ? value.toString() : value));
  };

  reset: Handler<unknown> = async ({ user }) => {
    await this.sandboxService.createUserSandbox(user!);
  };
}
