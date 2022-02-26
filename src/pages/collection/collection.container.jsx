import { connect } from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect"
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector"
import WithSpinner from "../../components/withSpinner/with-spinner.component"
import CollectionPage from "./collection.component"

const mapstateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapstateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer