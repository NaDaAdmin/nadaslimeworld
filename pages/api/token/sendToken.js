import onlyPost from "app/middleware/onlyPost"
import useHashgraphContext from "app/context/useHashgraphContext"
import prepare from "app/utils/prepare"
import SendTokenHandler from "app/handler/sendTokenHandler"

export default prepare(
	onlyPost,
	useHashgraphContext
)(SendTokenHandler)
