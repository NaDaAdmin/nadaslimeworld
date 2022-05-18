import scheduleSignRequest from "app/validators/scheduleSignRequest"
import Response from "app/response"

async function ScheduleSignHandler(req, res) {
	const { scheduleId, scheduledTxId, privateKey } = req.body
	const scheduleSignPayload = {
		scheduleId,
		scheduledTxId,
		privateKey,
	}

	const { hashgraphClient } = req.context
	const scheduleSignResponse = await hashgraphClient.scheduleSign(scheduleSignPayload)

	if (scheduleSignResponse) {
		return Response.json(res, scheduleSignResponse)
	}

	// This has to be bolstered up with correct error handling
	return Response.badRequest(res)
}

export default ScheduleSignHandler
