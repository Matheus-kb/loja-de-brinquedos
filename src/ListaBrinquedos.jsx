import { useState, useEffect } from "react";
import { dados } from "../brinquedos";
import ItemCard from "./ItemCard";

function ListaBrinquedos() {
    const [brinquedos, setBrinquedos] = useState([]);
    const [selecionados, setSelecionados] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setBrinquedos(dados);
    }, [])

    function selecionaBrinquedo(nome, preco) {
        let lista
        lista = [...selecionados]
        lista.push({nome, preco})
        setSelecionados(lista)
    }

    function mostraCarrinho() {
        let resposta = ""
        let total = 0
        for (const item of selecionados){
            resposta = resposta + item.nome + " - R$:" + item.preco.toLocaleString("pt-br", {minimumFractionDigits:2}) + '\n'
            total = total + item.preco
        }
        resposta = resposta + ("-".repeat(50) + "\n")
        resposta = resposta + ("Total: R$:" + total.toLocaleString("pt-br", {minimumFractionDigits:2}))
        alert(resposta)
    }

    const listaDeBrinquedos = brinquedos.map(brinquedo => (
        <ItemCard key={brinquedo.id} brinquedo={brinquedo} selecionados={selecionados}
         seleciona={() => selecionaBrinquedo(brinquedo.nome, brinquedo.preco)} />
    ))

    return (
        <div class="container">
        <div className="row mt-3">
            <div className="col sm-9">
                <h4 className="mt-2">Clique em comprar para adicionar o brinquedo ao carrinho:</h4>
            </div>
            <div className="com sm-3">
                <button class="btn position-relative float-end" onClick={mostraCarrinho}>
                    <img src="carrinho.png" alt="carrinho" width={60} height={40}
                    className="float-end"/>
                    <span class="position-absolute top-0 start-100">
                        {selecionados.length}
                        <span class="visually-hidden">Brinquedos no carrinho</span>
                    </span>
                </button>
            </div>

        </div>

        <div class="row row-cols-2 row-cols-md-4 g-4">
            {listaDeBrinquedos}
            </div>

        </div>
    )
}

export default ListaBrinquedos