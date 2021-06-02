const player1 = {
    name: 'Kitana',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['crossbow', 'gun'],
    attack: function(){
        console.log(this.name + ' Fight...');
    }
}

const player2 = {
    name: 'Subzero',
    hp: 30,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['crossbow', 'onion'],
    attack: function(){
        console.log(this.name + ' Fight...');
    }
}

const createPlayer = (player, name, hp) => {
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');
    
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    const $life = document.createElement('div');
    const $name = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $name.classList.add('name');
    $name.innerText = name;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = player.img;
    $character.appendChild($img);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1);
};

createPlayer(player1, 'Kitana', 90);
createPlayer(player2, 'Subzero', 60);
