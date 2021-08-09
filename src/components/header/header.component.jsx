import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/Cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { HeaderContainer,LogoContainer, OptionsContainer, OptionLink } from './header.styles'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

function Header({ currentUser, hidden }) {
    return (
        <HeaderContainer className="header">
         <LogoContainer></LogoContainer> 
              
        
            
            <OptionsContainer>
                <OptionLink to="/">
                    HOME
                </OptionLink>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
               
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </OptionLink>
                        :
                        <OptionLink to="/signin">
                            SIGN IN
                        </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
                
            
            {
                hidden ? null : <CartDropdown />
            }

        </HeaderContainer>
    )
}

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStatetoProps)(Header)