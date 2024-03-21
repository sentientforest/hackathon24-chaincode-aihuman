import {
  ChainKey,
  ChainObject,
} from "@gala-chain/api";
import { Exclude } from "class-transformer";
import { IsString } from "class-validator";

export class AiHuman extends ChainObject {
  @Exclude()
  static INDEX_KEY = "GCAIH";

  @ChainKey({ position: 0 })
  @IsString()
  public readonly userIdentity: string;

  @ChainKey({ position: 1 })
  @IsString()
  public readonly uuid: string;

  constructor(userIdentity: string, uuid: string) {
    super();
    this.userIdentity = userIdentity;
    this.uuid = uuid;
  }
}
