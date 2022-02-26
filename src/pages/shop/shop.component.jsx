import React, { useEffect,  } from 'react';

import { useLocation, useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';



const ShopPage = ({  fetchCollectionsStartAsync}) => {
  let location = useLocation();
  const params = useParams();
  // const unsubscribeFromSnapshot = null;

  useEffect(() => {
    fetchCollectionsStartAsync()

  }, []);

  if (location.pathname === '/shop' || location.pathname === '/shop/') {
    return <CollectionOverviewContainer />;
  } else {
    return <CollectionPageContainer path={params['*']} />;
  }
};



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())
});


export default connect(null, mapDispatchToProps)(ShopPage);
