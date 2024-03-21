import { GalaChainContext, getObjectByKey, putChainObject } from "@gala-chain/chaincode";
import { AiHuman } from "./AiHuman";
import { SaveAiHumanDto } from "./dtos";

export async function saveAiHuman(ctx: GalaChainContext, dto: SaveAiHumanDto) {
  const keyParts = [dto.userIdentity, dto.uuid];

  const key = ctx.stub.createCompositeKey(AiHuman.INDEX_KEY, keyParts);
  const aiHuman = await getObjectByKey(ctx, AiHuman, key);

  await putChainObject(ctx, aiHuman);

  return aiHuman;
}