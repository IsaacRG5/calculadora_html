const pantalla = document.getElementById('pantalla');

function agregar(valor) {
  pantalla.value += valor;
}

function limpiar() {
  pantalla.value = '';
}

function calcular() {
  try {
    const operacion = pantalla.value;

    // Detectar operador
    let operador;
    if (operacion.includes('+')) operador = '+';
    else if (operacion.includes('-')) operador = '-';
    else if (operacion.includes('*')) operador = '*';
    else if (operacion.includes('/')) operador = '/';

    // Separar números
    const partes = operacion.split(operador);
    const num1 = parseFloat(partes[0]);
    const num2 = parseFloat(partes[1]);

    let resultado;

    // Resolver operación
    if (operador === '+') resultado = num1 + num2;
    if (operador === '-') resultado = num1 - num2;
    if (operador === '*') resultado = num1 * num2;
    if (operador === '/') resultado = num1 / num2;

    pantalla.value = resultado;

  } catch {
    pantalla.value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calcular();
  }
});