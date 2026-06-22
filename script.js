function convertir() {
    let valor = parseFloat(document.getElementById("valor").value);
    let tipo = document.getElementById("conversion").value;
    let resultado;

    if (isNaN(valor)) {
        document.getElementById("resultado").innerHTML =
            "Resultado: Ingresa un número válido";
        return;
    }

    switch (tipo) {
        case "c-f":
            resultado = (valor * 9 / 5) + 32;
            break;

        case "f-c":
            resultado = (valor - 32) * 5 / 9;
            break;

        case "c-k":
            resultado = valor + 273.15;
            break;

        case "k-c":
            resultado = valor - 273.15;
            break;

        case "m-km":
            resultado = valor / 1000;
            break;

        case "km-m":
            resultado = valor * 1000;
            break;

        case "g-kg":
            resultado = valor / 1000;
            break;

        case "kg-g":
            resultado = valor * 1000;
            break;

        default:
            resultado = "Conversión no válida";
    }

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
} 