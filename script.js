// =====================
// FUNCIONES DISTANCIA
// =====================
function metrosAKilometros(metros) {
  return metros / 1000;
}

function kilometrosAMetros(km) {
  return km * 1000;
}

function metrosAMillas(metros) {
  return metros * 0.000621371;
}

function millasAMetros(millas) {
  return millas / 0.000621371;
}

// =====================
// FUNCIONES PESO
// =====================
function gramosAKilogramos(gramos) {
  return gramos / 1000;
}

function kilogramosAGramos(kg) {
  return kg * 1000;
}

function gramosALibras(gramos) {
  return gramos * 0.00220462;
}

function librasAGramos(libras) {
  return libras / 0.00220462;
}

// =====================
// FUNCIONES TEMPERATURA
// (para que la base funcione;
// luego Dev2 puede tocar esta parte)
// =====================
function celsiusAFahrenheit(c) {
  return (c * 9/5) + 32;
}

function fahrenheitACelsius(f) {
  return (f - 32) * 5/9;
}

function celsiusAKelvin(c) {
  return c + 273.15;
}

function kelvinACelsius(k) {
  return k - 273.15;
}

// =====================
// FUNCIÓN PRINCIPAL
// =====================
function convertir() {
  const valor = parseFloat(document.getElementById("valor").value);
  const conversion = document.getElementById("conversion").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultado.textContent = "Resultado: Ingresa un número válido.";
    return;
  }

  let res;

  switch (conversion) {
    // Distancia
    case "m-km":
      res = metrosAKilometros(valor) + " km";
      break;
    case "km-m":
      res = kilometrosAMetros(valor) + " m";
      break;
    case "m-mi":
      res = metrosAMillas(valor).toFixed(4) + " mi";
      break;
    case "mi-m":
      res = millasAMetros(valor).toFixed(2) + " m";
      break;

    // Peso
    case "g-kg":
      res = gramosAKilogramos(valor) + " kg";
      break;
    case "kg-g":
      res = kilogramosAGramos(valor) + " g";
      break;
    case "g-lb":
      res = gramosALibras(valor).toFixed(4) + " lb";
      break;
    case "lb-g":
      res = librasAGramos(valor).toFixed(2) + " g";
      break;

    // Temperatura
    case "c-f":
      res = celsiusAFahrenheit(valor).toFixed(2) + " °F";
      break;
    case "f-c":
      res = fahrenheitACelsius(valor).toFixed(2) + " °C";
      break;
    case "c-k":
      res = celsiusAKelvin(valor).toFixed(2) + " K";
      break;
    case "k-c":
      res = kelvinACelsius(valor).toFixed(2) + " °C";
      break;

    default:
      res = "Conversión no válida";
  }

  resultado.textContent = "Resultado: " + res;
}
