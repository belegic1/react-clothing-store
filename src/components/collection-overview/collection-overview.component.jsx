import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCollections, selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

import "./collection-overview.styles.scss"
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({ collections }) => {
    

    return <div className="collection-overview">
        {
            collections.map((item) => {
                return (
                    <CollectionPreview key={item.id} items={item} />
                )
            })
        }
  </div>
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
