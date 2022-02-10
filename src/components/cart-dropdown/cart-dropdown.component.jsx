import React from 'react';
import { connect } from 'react-redux';

import CustomButton from "../custom-button/custom-button.component"
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from '../../withRouter/withRouter';
import { useNavigate } from 'react-router-dom';
import {toggleCartHidden} from "../../redux/cart/cart.actions"

import {CartDropdownContainer, CartItemsContainer,EmptyMessageContainer} from "./cart-dropdown.styles"

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useNavigate()

  const handelClick = () => {
    history("/checkout")
    dispatch(toggleCartHidden())
  }
  return <CartDropdownContainer>
    <CartItemsContainer>

      {
        cartItems.length  ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          : <EmptyMessageContainer>YOUR CART IS EMPTY</EmptyMessageContainer>
      
      }
    </CartItemsContainer>
    <CustomButton className='custom-button' onClick={handelClick} >Go to checkout</CustomButton>

  </CartDropdownContainer>
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})




export default withRouter(connect(mapStateToProps)(CartDropdown));
