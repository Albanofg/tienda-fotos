import CartIcon from '../../assets/CartIcon.png';

export const CartWidget = ({cartNumber})=>{
    return(
        <div className='widget'>
            <img className='widgett' src={CartIcon} alt="" width={'45px'}/>
            <span>{cartNumber}</span>
        </div>
    )
}