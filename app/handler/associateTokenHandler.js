import Response from "app/response"

async function AssociateTokenHandler(req, res) {



	const { encrypted_receiver_key, account_id, token_id } = req.body
	const associateTokenResponsePayload = {
		encrypted_receiver_key,
        account_id,
		token_id
	}
	const { hashgraphClient } = req.context
	const associateTokenResponse = await hashgraphClient.atomicSwap(associateTokenResponsePayload)

	if (aassociateTokenResponse) {
		return Response.json(res, associateTokenResponse)
	}

	// This has to be bolstered up with correct error handling
	return Response.badRequest(res)
}

export default AssociateTokenHandler
