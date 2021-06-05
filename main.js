const player1 = {
    name: 'Kitana',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    attack: function(name){
        console.log(this.name + ' Fight...');
    }
}

const player2 = {
    name: 'Subzero',
    hp: 30,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    attack: function(name){
        console.log(this.name + ' Fight...');
    }
}

const createPlayer = (class_name, player_obj) => {
    const $player = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $img = document.createElement('img');
    const $arenas = document.querySelector('.arenas');

    $player.classList.add(class_name);
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');
    
    $life.style.width = player_obj.hp + '%';
    $name.innerText = player_obj.name;
    $img.src = player_obj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    $arenas.appendChild($player);
};

createPlayer('player1', player1);
createPlayer('player2', player2);
