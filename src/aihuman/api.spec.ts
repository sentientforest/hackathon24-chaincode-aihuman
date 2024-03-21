import { fixture, transactionSuccess } from "@gala-chain/test";
c
import { AiHumanContract } from "./AiHumanContract";

// The purpose of this test is to detect unexpected changes in API definition
test(`${AiHumanContract.name} API should match snapshot`, async () => {
  // Given
  const { contract, ctx } = fixture(AiHumanContract);

  // When
  const contractApi = await contract.GetContractAPI(ctx);

  // Then
  expect(contractApi).toEqual(transactionSuccess());
  expect({ ...contractApi.Data, contractVersion: "?.?.?" }).toMatchSnapshot();
});
