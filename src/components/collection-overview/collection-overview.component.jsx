import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

import "./collection-overview.styles.scss"
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({collections}) => {
    return <div className="collection-overview">
        {
            collections.map(({ id, ...otherColllectionProps }) => {
                return (
                    <CollectionPreview key={id} {...otherColllectionProps} />
                )
            })
        }
  </div>
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);
