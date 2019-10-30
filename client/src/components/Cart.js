import React from 'react';

import Sidebar from 'react-sidebar'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <Sidebar
                open={this.props.isCartOpen}
                pullRight={true}
                styles={sideBarStyle}
                sidebar={
                    <>
                        <div style={{marginTop: 60,textAlign: 'center'}}>Cart</div>
                    </>
                }
            />
        )
    }
}
 
export default Cart;

const sideBarStyle = {
    sidebar: {
        background: "white",
        width: 350
    },
}