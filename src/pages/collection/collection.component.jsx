import React from 'react';
import "./collection.styles.scss"
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from "../../components/collection-item/collection-item.component"

const CollectionPage = ({ collection, path }) => {
  const {title, items} = collection
    return <div className="collection-page">
      <h2 className='title' >{title}</h2>
      <div className="items">
        {
          items.map((item) => {
            return <div key={item.id} className="collection-item">
              <CollectionItem  item={item} />
            </div>
          })
        }
      </div>
  </div>
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.path)(state)
})

export default connect(mapStateToProps)(CollectionPage);
