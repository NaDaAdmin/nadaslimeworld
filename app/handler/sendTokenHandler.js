import bequestTokenRequest from "app/validators/bequestTokenRequest"
import Response from "app/response"

async function BequestTokenHandler(req, res) {

	const { token_id, sender_id, receiver_id, amount } = req.body
	const bequestPayload = {
		token_id,
		sender_id,
		receiver_id,
		amount
	}

	const { hashgraphClient } = req.context
	const bequestResponse = await hashgraphClient.sendToken(bequestPayload)

	if (bequestResponse) {
		return Response.json(res, bequestResponse)
	}

	// This has to be bolstered up with correct error handling
	return Response.badRequest(res)
}

export default BequestTokenHandler
