import createSmartContract from "app/validators/createSmartContract"
import Response from "app/response"

async function CreateSmartContractHandler(req, res) {

	console.log("-----------------1");
	const validationErrors = createSmartContract(req.body)

	if (validationErrors) {
		return Response.unprocessibleEntity(res, validationErrors)
	}

	console.log("-----------------2");

	const { encrypted_receiver_key, gas, file_id } = req.body
	const contractInfo = {
		encrypted_receiver_key,
		gas,
		file_id,
	}
	const { hashgraphClient } = req.context
	const recvResponse = await hashgraphClient.createSmartContract(contractInfo)

	if (recvResponse) {
		return Response.json(res, recvResponse)
	}

	console.log("-----------------3");

	// This has to be bolstered up with correct error handling
	return Response.badRequest(res)
}

export default CreateSmartContractHandler
