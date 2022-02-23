import onlyPost from "app/middleware/onlyPost"
import useHashgraphContext from "app/context/useHashgraphContext"
import prepare from "app/utils/prepare"
import StarkingTokenHandler from "app/handler/starkingTokenHandler"

export default prepare(
	onlyPost,
	useHashgraphContext
)(StarkingTokenHandler)
