import { ChainCallDTO } from "@gala-chain/api";
import { IsString, IsOptional, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AiHuman } from "./AiHuman";

export class SaveAiHumanDto extends ChainCallDTO {
  @IsString()
  public readonly userIdentity: string;

  @IsString()
  public readonly uuid: string;

  constructor(userIdentity: string, uuid: string) {
    super();
    this.userIdentity = userIdentity;
    this.uuid = uuid;
  }
}

export class FetchAiHumansDto extends ChainCallDTO {
  @IsOptional()
  @IsString()
  public readonly userIdentity?: string;

  @IsOptional()
  @IsString()
  public readonly uuid?: string;

  @IsString()
  @IsOptional()
  public readonly bookmark?: string;

  @IsOptional()
  public readonly limit?: number;

  constructor(userIdentity?: string, uuid?: string, bookmark?: string, limit?: number) {
    super();
    this.userIdentity = userIdentity;
    this.uuid = uuid;
    this.bookmark = bookmark;
    this.limit = limit;
  }
}

export class PagedAiHumansDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AiHuman)
  public readonly aiHumans: AiHuman[];

  @IsString()
  public readonly bookmark: string;

  constructor(aiHumans: AiHuman[], bookmark: string) {
    this.aiHumans = aiHumans;
    this.bookmark = bookmark;
  }
}