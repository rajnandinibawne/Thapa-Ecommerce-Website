import React from 'react'
import FormatPrice from '../../Helpers/FormatPrice'
import CartAmountToggle from '../CartAmountToggle';
import { MdDelete } from "react-icons/md";
import { useCartContext } from '../../context/Cart_context';

const CartItem = ({id , name , image, color, price, amount}) => {
    const{removeItem ,setDecrease, setIncrement} = useCartContext();
    // const setDecrease = ( ) => {
    //     // amount > 1 ? setAmount(amount -1): setAmount(1);
    // };
    // const setIncrease = ( ) => {
    //     // amount < stock  ? setAmount (amount  + 1) : setAmount (stock);
    // }

  return (
    <div className='cart_heading grid grid-five-column' > 
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src = {image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className="color-div">
                    <p>color:</p>
                    <div className='color-style' 
                     style={{backgroundColor:color, color:color}} 
                      >

                    </div>
                </div>
            </div>


        </div>
        {/*price*/ }
        <div className="cart-hide">
            <p>
                <FormatPrice price={price}/>
            </p>
        </div>
        {/* quamtity*/}
        <CartAmountToggle
         amount={amount}
         setDecrease={() => setDecrease(id)}
         setIncrement={() =>setIncrement(id)}/>

        <div className="cart-hide">
                <p><FormatPrice price={price*amount}/></p>
         </div>
         <div className="cart-remove">
            <div><MdDelete  className='remove_icon' onClick={()=> removeItem(id)}  /></div>
         </div>
    </div>
  )
}

export default CartItem
