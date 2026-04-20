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
    const resultado = eval(operacion);
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