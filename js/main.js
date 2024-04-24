const abilities = {
    'p': ['ability_0105_P', 'PASSIVA', 'LUTADOR LIGEIRO', 'Fizz pode se mover através de unidades e sofre uma quantidade fixa de dano reduzido de todas as origens.'],
    'q': ['ability_0105_Q', 'Q', 'ATAQUE DO OURIÇO', 'Fizz avança em direção ao alvo, causando Dano Mágico e aplicando efeitos de contato.'],
    'w': ['ability_0105_W', 'W', 'TRIDENTE DA PEDRA DO MAR', 'Os ataques de Fizz fazem seus inimigos sangrarem, causando Dano Mágico por vários segundos. Fizz pode fortalecer seu próximo ataque para causar dano adicional e fortalecer os seguintes por um curto período.'],
    'e': ['ability_0105_E', 'E', 'BRINCALHÃO / TRAPACEIRO', 'Fizz faz acrobacias no ar, aterrissando graciosamente sobre seu tridente e ficando inalvejável. Desta posição, ele pode tanto golpear o chão quanto pular novamente antes de cair de vez.'],
    'r': ['ability_0105_R', 'R', 'LANÇAR ISCA', 'Fizz arremessa um peixe em determinada direção, que se prende a qualquer Campeão que tocar, reduzindo a velocidade do alvo. Após um curto intervalo, um tubarão emerge do chão, lançando o alvo ao ar e empurrando outros inimigos para trás. Todos os inimigos atingidos recebem Dano Mágico e têm sua velocidade reduzida.']
}

document.querySelectorAll(".ability-item").forEach((event) => {
    event.addEventListener("click", () => {
        document.querySelectorAll(".ability-item").forEach((ele) => {
            ele.classList.remove("active");
        })

        event.classList.add("active");

        document.getElementById("video").style = "opacity: 0";
        document.querySelector(".ability-info").style = "opacity: 0";

        setTimeout(() => {
            document.getElementById("video").src = "./videos/" + abilities[event.id][0] + ".webm";
            document.querySelector(".ability-info-type").innerHTML = abilities[event.id][1];
            document.querySelector(".ability-info-name").innerHTML = abilities[event.id][2];
            document.querySelector(".ability-info-desc").innerHTML = abilities[event.id][3];

            document.getElementById("video").style = "opacity: 1";
            document.querySelector(".ability-info").style = "opacity: 1";
        }, 250)
    })


})