import recvTokenRequest from "app/validators/recvTokenRequest"
import Response from "app/response"

async function RecvTokenHandler(req, res) {

	console.log("---------------------->");
	const validationErrors = recvTokenRequest(req.body)

	if (validationErrors) {

		console.log("----------------------1>" + validationErrors)

		return Response.unprocessibleEntity(res, validationErrors)
	}


	const { encrypted_receiver_key, token_id, sender_id, amount } = req.body
	const recvPayload = {
		encrypted_receiver_key,
		token_id,
		sender_id,
		amount
	}

	console.log("----------------------2>");

	const { hashgraphClient } = req.context
	const recvResponse = await hashgraphClient.recvToken(recvPayload)

	if (recvResponse) {
		return Response.json(res, recvResponse)
	}

	// This has to be bolstered up with correct error handling
	return Response.badRequest(res)
}

export default RecvTokenHandler
