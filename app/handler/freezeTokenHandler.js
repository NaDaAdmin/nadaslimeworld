import Response from "app/response"

async function FreezeTokenHandler(req, res) {

	const { token_id, sender_id, receiver_id, amount } = req.body
	const bequestPayload = {
		acount_id,
		token_id,
	}

	const { hashgraphClient } = req.context
	const bequestResponse = await hashgraphClient.freezeToken(bequestPayload)

	if (bequestResponse) {
		return Response.json(res, bequestResponse)
	}

	// This has to be bolstered up with correct error handling
	return Response.badRequest(res)
}

export default FreezeTokenHandler
