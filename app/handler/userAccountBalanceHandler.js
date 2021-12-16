import Response from "app/response"

async function GetUserAccountBalanceHandler(req, res) {
	const { hashgraphClient } = req.context

	const accoundid = req.headers["accoundid"]

	if (accoundid == undefined) {

		console.log(" fail Log accoundID" + accoundid )
	}

	console.log( "sucess Log accoundID" + accoundid )


	const balance = await hashgraphClient.userAccountBalanceQuery( accoundid )

	Response.json(res, balance)
}

export default GetUserAccountBalanceHandler
