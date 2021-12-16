import Response from "app/response"

async function GetUserAccountBalanceHandler(req, res) {
	const { hashgraphClient } = req.context

	var accoundid = req.headers["accoundid"]
	var tokenid = req.headers["tokenid"]

	if (accoundid == undefined || tokenid == undefined ) {

		Response.json(res, "Fail GetUserAccountBalanceHandler")
		return;
	}


	const userinfo = { accoundid, tokenid }
	

	const balance = await hashgraphClient.userAccountBalanceQuery(userinfo)

	Response.json(res, balance)
}

export default GetUserAccountBalanceHandler
