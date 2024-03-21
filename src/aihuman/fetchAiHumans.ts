import { GalaChainContext, getObjectByKey, getObjectsByPartialCompositeKeyWithPagination, takeUntilUndefined } from "@gala-chain/chaincode";
import { AiHuman } from "./AiHuman";
import { FetchAiHumansDto, PagedAiHumansDto } from "./dtos";

export async function fetchAiHumans(ctx: GalaChainContext, dto: FetchAiHumansDto) {
  const keyParts: string[] = takeUntilUndefined(dto.userIdentity, dto.uuid);

  const key = ctx.stub.createCompositeKey(AiHuman.INDEX_KEY, keyParts);
  const aiHuman = await getObjectByKey(ctx, AiHuman, key);


  const { results, metadata } = await getObjectsByPartialCompositeKeyWithPagination(
    ctx,
    AiHuman.INDEX_KEY,
    keyParts,
    AiHuman,
    dto.bookmark,
    dto.limit
  );

  return new PagedAiHumansDto(results, metadata.bookmark);
}