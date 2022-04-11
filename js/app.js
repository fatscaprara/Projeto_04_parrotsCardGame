function distribuirCartas() {
    let quantidadeCartas = 0;
    while (!Number(quantidadeCartas)) {
        quantidadeCartas = Number(prompt("Com quantas cartas você deseja jogar? Digite um número par, entre 4 e 14."));
        if (quantidadeCartas % 2 == 1 || quantidadeCartas > 14) {
            quantidadeCartas = 'e';
        }
    }

    const par1 = {
        frente: "images/front.png",
        verso: "images/bobrossparrot.gif",
    }

    const par2 = {
        frente: "images/front.png",
        verso: "images/explodyparrot.gif",
    }

    const par3 = {
        frente: "images/front.png",
        verso: "images/fiestaparrot.gif",
    }

    const par4 = {
        frente: "images/front.png",
        verso: "images/metalparrot.gif",
    }

    const par5 = {
        frente: "images/front.png",
        verso: "images/revertitparrot.gif",
    }

    const par6 = {
        frente: "images/front.png",
        verso: "images/tripletsparrot.gif",
    }

    const par7 = {
        frente: "images/front.png",
        verso: "images/unicornparrot.gif"
    }

    const pares = [
        par1, par2, par3, par4, par5, par6, par7
    ]

    const paresEmbaralhados = []
    const paresEmbaralhados2 = []

    for(let i = 0; i <= quantidadeCartas/2; i++){
        paresEmbaralhados[i] = pares[i];
        paresEmbaralhados2[i] = pares[i];
    }

    function comparador() { 
        return Math.random() - 0.5; 
    }

    paresEmbaralhados.sort(comparador);

    for (let i = 0; i <= quantidadeCartas/2; i++) {
        document.querySelector(".cards").innerHTML += `
            <div class="card">
                <img src="images/front.png" alt="">
                <img class="escondido" onclick="revelar(this)" src="${paresEmbaralhados[i].verso}">
            </div>
        `
    }

    for (let i = 0; i <= quantidadeCartas/2; i++) {
        document.querySelector(".cards").innerHTML += `
            <div class="card">
                <img src="images/front.png" alt="">
                <img class="escondido" onclick="revelar(this)" src="${paresEmbaralhados2[i].verso}">
            </div>
        `
    }
}

distribuirCartas();