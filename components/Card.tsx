const Card = ({ data }: any) => {
    return (
        <div>
            <div>
                <img src={data.image} alt={data.title} width={100} height={100}/>
            </div>
            <div>
                <p>{data.title}</p>
                <p>{data.category}</p>
                <p>U$ {data.price}</p>
                <p>{data.rating.rate}</p>
            </div>
            <button type="button">Fav</button>
        </div>
    )
}

export default Card