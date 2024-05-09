
function exibirInfoClasse(classe) {
    switch(classe) {
        case "Guerreiro":
            console.log("Classe : Guerreiro");
            console.log("Descrição : Os guerreiros são combatentes corpo a corpo resistentes, especializados no uso de armas e armaduras pesadas.");
            console.log("Habilidades : magias de ataque, controle elemental");
            break;
        case "Mago":
            console.log("Classe : Mago");
            console.log("Descrição : Os magos são mestres do poder arcano, capazes de lançar feitiços poderosos e controlar os elementos.");
            console.log("Habilidades :  Magias de ataque, controle elemental.");
            break;
        case "Ladino":
            console.log("Classe : Ladino");
            console.log("descrição : Os ladrões são especialistas em furtividade e acústica, capazes de realizar ataques furtivos e desarmer armadilhas.");
            console.log("Habilidades : Furtividade, ataques preciosos.");
            break;
            default :
            console.log("Classe não reconhecida. Escolha entre Guerreiro, Mago ou Ladino.");
    }
}

// Chamando a função e passando como parâmetro "Mago"
exibirInfoClasse("Mago");