let inputActivo = 'num1';

function seleccionarInput(id) {
  inputActivo = id;
}

function agregar(valor) {
  document.getElementById(inputActivo).value += valor;
}

function limpiar() {
  document.getElementById('num1').value = '';
  document.getElementById('operacion').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('resultado').value = '';
  inputActivo = 'num1';
  document.getElementById('num1').focus();
}

function calcular() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const operacion = document.getElementById('operacion').value;
  const num2 = parseFloat(document.getElementById('num2').value);

  let resultado;

  if (operacion === '+') {
    resultado = num1 + num2;
  } else if (operacion === '-') {
    resultado = num1 - num2;
  } else if (operacion === '*') {
    resultado = num1 * num2;
  } else if (operacion === '/') {
    resultado = num1 / num2;
  } else {
    resultado = 'Error';
  }

  document.getElementById('resultado').value = resultado;
}

function moverConEnter(event, siguienteId) {
  if (event.key === "Enter") {
    document.getElementById(siguienteId).focus();
    seleccionarInput(siguienteId);
  }
}