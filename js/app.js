function distribuirCartas() {
    let quantidadeCartas = 0;
    while (!Number(quantidadeCartas)) {
        quantidadeCartas = Number(prompt("Com quantas cartas você deseja jogar? Digite um número par, entre 4 e 14."));
        if (quantidadeCartas % 2 == 1 || quantidadeCartas > 14) {
            quantidadeCartas = 'e';
        }
    }

    for (let i = 0; i < quantidadeCartas; i++) {
        document.querySelector(".cards").innerHTML += `
            <div class="card">
                <img src="images/front.png" alt="">
            </div>
        `
    }


}

distribuirCartas();