import Response from "app/response"

async function EnableKycTokenHandler(req, res) {

	const { acount_id, token_id } = req.body
	const payload = {
		acount_id,
		token_id
	}

	const { hashgraphClient } = req.context
	const response = await hashgraphClient.enableKycToken(payload)

	if (response) {
		return Response.json(res, response)
	}

	// This has to be bolstered up with correct error handling
	return Response.badRequest(res)
}

export default EnableKycTokenHandler
