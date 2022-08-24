export const ItemListContainer = (props)=>{
    console.log('props', props.children)
    return(
        <div className='item-list' >
            <p>{props.textoA}</p>
            <h1>{props.tituloA}</h1>
            {props.children}
        </div>
    )
}
