import Response from "app/response"

async function UpdateTokenHandler(req, res) {
	const {
		token_id,
	} = req.body

	const { hashgraphClient } = req.context

	const token = await hashgraphClient.updateToken({
		token_id,
	})

	Response.json(res, token)
}

export default UpdateTokenHandler
