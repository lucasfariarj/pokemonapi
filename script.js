function apiTestes() {

    const abilities = [];
    const btn = document.querySelector('button');
    const pokeDiv = document.querySelector('[data-pokemon]');
    const div = document.createElement('div');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        abilities.length = 0;
        const input = document.querySelector('input').value;
        const api = `https://pokeapi.co/api/v2/pokemon/${input}`;

        fetch(api).then((pokemons) => {
            return pokemons.json();
        }).then((json) => {
            pokeDiv.appendChild(createDiv(json));
        });
    });

    function createDiv(pokemon){
        pokemon.types.forEach((index)=>{
            abilities.push(index.type.name);
        });
        console.log(abilities)
        div.innerHTML = `<h1>Nome: ${pokemon.name}</h1><img src="${pokemon.sprites.front_default}"><p>Gênero: ${abilities}</p>`;
        return div;
    }










}

apiTestes();