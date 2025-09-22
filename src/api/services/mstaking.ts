import * as schema from "@/schema";

import { BaseClient } from "./base";

export class MstakingClient extends BaseClient {
  public async findValidator(validatorAddress: string) {
    try {
      const result = await this.fetchWithCache(
        `${this.restUrl}/initia/mstaking/v1/validators/${validatorAddress}`,
        schema.zValidatorResponse
      );
      return result.validator;
    } catch {
      return null;
    }
  }
}
