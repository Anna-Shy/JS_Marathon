const $arenas = document.querySelector('.arenas');
const $but_random = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    attack: function(name){
        console.log(this.name + ' Fight...');
    }
}

const player2 = {
    player: 2,
    name: 'Subzero',
    hp: 100,
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

const change_hp = (player) => {
    const $player_life = document.querySelector('.player' + player.player + ' .life');
   
    if(player.hp > 0){
        player.hp -= Math.floor(Math.random() * 20) + 1;
        $player_life.style.width = player.hp + '%';
    } else {
        player.hp = 0;

        $arenas.appendChild(player_win(player.name));
        $but_random.disabled = true;
    }
};

// const player_lose = (name) => {
//     const $lose_text = create_element('div', 'loseTitle');
//     $lose_text.innerText = name + ' lose';

//     return $lose_text;
// };

const player_win_draw = () => {
    const $win_text = create_element('div', 'loseTitle');
    
    if(player1.hp > player2.hp){
        $win_text.innerText = player1.name + ' win';
    } else {
        $win_text.innerText = player2.name + ' win';
    }

    return $win_text;
};

$but_random.addEventListener('click', function(){
    change_hp(player1);
    change_hp(player2);
});

$arenas.appendChild(create_player(player1));
$arenas.appendChild(create_player(player2));

