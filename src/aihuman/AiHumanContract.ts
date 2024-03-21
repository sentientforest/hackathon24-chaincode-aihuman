/*
 * Copyright (c) Gala Games Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { GalaChainResponse } from "@gala-chain/api";
import { Evaluate, GalaChainContext, GalaContract, Submit } from "@gala-chain/chaincode";

import { version } from "../../package.json";
import { AiHuman } from "./AiHuman";
import { SaveAiHumanDto, FetchAiHumansDto, PagedAiHumansDto } from "./dtos";
import { fetchAiHumans } from "./fetchAiHumans";
import { saveAiHuman } from "./saveAiHuman";


export class AiHumanContract extends GalaContract {
  constructor() {
    super("AiHumanContract", version);
  }

  @Submit({
    in: SaveAiHumanDto,
    out: AiHuman
  })
  public async SaveAiHuman(ctx: GalaChainContext, dto: SaveAiHumanDto): Promise<AiHuman> {
    return saveAiHuman(ctx, dto);
  }

  @Evaluate({
    in: FetchAiHumansDto,
    out: PagedAiHumansDto
  })
  public async FetchAiHumans(ctx: GalaChainContext, dto: FetchAiHumansDto): Promise<PagedAiHumansDto> {
    return await fetchAiHumans(ctx, dto);
  }
}
