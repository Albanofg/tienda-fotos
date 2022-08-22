export const ItemListContainer = (props)=>{
    console.log('props', props.children)
    return(
        <div className='item-list' style={{background:'wheat', borderRadius:"5vh", margin:'0.5vh', padding:'0.5vh', textAlign:'center'}}>
            <p>{props.textoA}</p>
            <h1>{props.tituloA}</h1>
            {props.children}
        </div>
    )
}

export default ItemListContainer;