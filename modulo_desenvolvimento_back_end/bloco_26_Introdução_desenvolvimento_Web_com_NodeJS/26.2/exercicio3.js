async function NumericAsync(a, b, c) {

  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Informe apenas números');
  }

  const result = ((a + b) * c);

  if (result < 50) {
    throw new Error('Valor muito baixo');
  }

  return result;
}

async function main() {

  const primeiro = Math.floor(Math.random() * 100);
  const segundo = Math.floor(Math.random() * 100);
  const terceiro = Math.floor(Math.random() * 100);

  try {
    const resolution = await NumericAsync(primeiro, segundo, terceiro);
    console.log(resolution);
  } catch (e) {
    console.error(e.message);
  }
}

main();
