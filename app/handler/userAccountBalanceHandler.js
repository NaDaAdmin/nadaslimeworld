import Response from "app/response"

async function GetUserAccountBalanceHandler(req, res) {
	const { accoundid } = req.query
	const { hashgraphClient } = req.context

	console.log("accoundID" + accoundid )

	const balance = await hashgraphClient.userAccountBalanceQuery(accoundid)

	Response.json(res, balance)
}

export default GetUserAccountBalanceHandler
