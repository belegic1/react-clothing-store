import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import "./collection-item.styles.scss"

const CollectionItem = ({item,addItem}) => {
    const {  name, price, imageUrl} = item

    return <div className="collection-item">
        <div
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className="image"></div>
        
        
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <button className='inverted custom-button' onClick={()=> addItem(item)}  >Add To cart</button>
  </div>
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
