import Response from "app/response"

async function TokenInfoHandler(req, res) {
	const { id } = req.query
	const { hashgraphClient } = req.context

	const topic = await hashgraphClient.TokenInfoQuery()

	Response.json(res, topic)
}

export default TokenInfoHandler
