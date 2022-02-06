import React from 'react';
import "./cart-dropdown.styles.scss"
import { connect } from 'react-redux';

import CustomButton from "../custom-button/custom-button.component"
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from '../../withRouter/withRouter';
import { useNavigate } from 'react-router-dom';
import {toggleCartHidden} from "../../redux/cart/cart.actions"

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useNavigate()

  const handelClick = () => {
    history("/checkout")
    dispatch(toggleCartHidden())
  }
  return <div className="cart-dropdown">
    <div className="cart-items">

      {
        cartItems.length  ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          : <span className="empty-message">YOUR CART IS EMPTY</span>
      
      }
    </div>
    <button className='custom-button' onClick={handelClick} >Go to checkout</button>

  </div>
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})




export default withRouter(connect(mapStateToProps)(CartDropdown));
