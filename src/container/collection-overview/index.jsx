import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import WithSpinner from '../../components/with-spinner';
import collectionOverview from '../../components/collection-overview';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionOverview);

export default CollectionsOverviewContainer;