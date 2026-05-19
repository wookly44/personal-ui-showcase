function Button({name, link, img, click}){
    return(
    <>
        <button className="button">
            <a href={link} target="_blank" onClick={click}>
                <div><img src={img}/></div>
                <span>{name}</span>
            </a>
        </button>
    </>
    )
}

export default Button