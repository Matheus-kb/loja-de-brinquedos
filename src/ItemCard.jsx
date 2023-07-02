function ItemCard(props) {
    return (

        <div class="col">
            <div class="card">
                <img src={props.brinquedo.foto} class="card-img-top" alt={props.brinquedo.nome} />
                <div class="card-body">
                    <h5 class="card-title">{props.brinquedo.nome}</h5>
                    <p class="card-text">Marca: {props.brinquedo.marca}</p>
                    <p class="card-text">R$ {props.brinquedo.preco.toLocaleString("pt-br", {minimumFractionDigits:2})}</p>
                    <button className="btn btn-danger float-end" onClick={props.seleciona}>Comprar</button>
                </div>
            </div>
        </div>


    )
}

export default ItemCard