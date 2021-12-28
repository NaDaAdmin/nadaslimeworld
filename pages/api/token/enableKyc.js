import onlyPost from "app/middleware/onlyPost"
import useHashgraphContext from "app/context/useHashgraphContext"
import prepare from "app/utils/prepare"
import EnablekycTokenHandler from "app/handler/enablekycTokenHandler"

export default prepare(
	onlyPost,
	useHashgraphContext
)(EnablekycTokenHandler)
