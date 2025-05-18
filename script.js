const apiURL = 'https://682a2d15ab2b5004cb3610ea.mockapi.io/Fetch/Animal';

const lista = document.getElementById('animalList');
const botao = document.getElementById('addAnimalBtn');

async function carregarAnimais() {
  try {
    const res = await fetch(apiURL);
    const animais = await res.json();

    lista.innerHTML = ''

    animais.forEach(animal => {
      const item = document.createElement('li');
      item.textContent = `${animal.id} - ${animal.Nome} (${animal.Idade}) – ${animal.Raca}`;
      lista.appendChild(item);
    });
  } catch (erro) {
    console.error('Erro ao carregar animais:', erro);
  }
}

async function cadastrarAnimal() {
  const animal = {
    Nome: 'Totó',
    Idade: 12,
    Raca: 'cachorro'
  };

  try {
    await fetch(apiURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(animal)
    });

    carregarAnimais();
  } catch (erro) {
    console.error('Erro ao cadastrar animal:', erro);
  }
}

botao.addEventListener('click', cadastrarAnimal);
carregarAnimais();
