let input = "Peao";

toLowerCase(input);

switch (input) {
    case "peao":
        console.log("peao > a frente uma casa");
        break;

    case "torre":
        console.log("torre > ortogonal quantas casas puder/quiser");
        break;

    case "cavalo":
        console.log("cavalo > em L, duas casa em uma direção e mais uma na direção perpendicular");
        break;

    case "bispo":
        console.log("bispo > na diagonal quantas casas puder/quiser");
        break;

    case "rainha":
        console.log("rainha > todas as direções quantas casas puder/quiser");
        break;

    case "rei":
        console.log("rei > todas as direções apenas uma casa");
        break;

    default :
        console.log("ERROR > peça de xadrez inexistente!");
};