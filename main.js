const $arenas = document.querySelector('.arenas');

const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    attack: function(name){
        console.log(this.name + ' Fight...');
    }
}

const player2 = {
    player: 2,
    name: 'Subzero',
    hp: 30,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    attack: function(name){
        console.log(this.name + ' Fight...');
    }
}

const create_element = (tag, class_name) => {
    const $tag = document.createElement(tag);

    if(class_name){
        $tag.classList.add(class_name);
    }

    return $tag;
};

const create_player = (player_obj) => {
    const $player = create_element('div', 'player' + player_obj.player)
    const $progressbar = create_element('div', 'progressbar');
    const $character = create_element('div', 'character');
    const $life = create_element('div', 'life');
    const $name = create_element('div', 'name');
    const $img = create_element('img');
    
    $life.style.width = player_obj.hp + '%';
    $name.innerText = player_obj.name;
    $img.src = player_obj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    
    $character.appendChild($img);

    return $player;
};

$arenas.appendChild(create_player(player1));
$arenas.appendChild(create_player(player2));

