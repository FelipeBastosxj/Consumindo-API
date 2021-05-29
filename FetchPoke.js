loading = document.querySelector('.loading')
estrutura = document.querySelector('.estrutura')

setTimeout(e =>{
    loading.style.display = 'none'
    estrutura.style.display = 'block'
},2000)

async function fetchAPI (){
    try {

    const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=107&offset=386')
    const ListPoke = await resposta.json()
    listar(ListPoke)

 }catch(erro){
     console.log(erro)
 }
}



async function listar(ListPoke){
try{

    ListPoke.results.forEach(e =>{

   return fetch(e.url)
        .then(r => r.json())
        .then(p => dom(p))
    })

}catch(erro){
    console.log(erro)
}
}



function dom(p){
 adicionar = document.querySelector('.pokemons-list')
 div = document.createElement('div')

 div.innerHTML = `<div class= "card ${p.types[0].type.name}">
 <img src="${p.sprites.front_default}" alt="">
 <button class="nomep">
    ${p.name}
 </button>
</div>`

adicionar.appendChild(div)
}

fetchAPI()

setTimeout(() => {
    procurar = document.querySelectorAll('.nomep')

    async function seachPoke(e){
        try {

            pokename = e.target.textContent.trim()
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
            const pokemon = await resposta.json()
            modalInsert(pokemon)

         }catch(erro){
             console.log(erro)
         }
    }
    procurar.forEach(e =>{
        e.addEventListener('click', seachPoke)
    })
},2000);

let foto = document.querySelector('.fotopp')
let titulop = document.querySelector('.infoT')

function modalInsert(pokemon){
  
  modal.style.display ='flex'

  MOVE[0].innerHTML = 'MOVE1:' + ' ' + pokemon.moves[16].move.name
  MOVE[1].innerHTML = 'MOVE2:' + ' ' + pokemon.moves[17].move.name
  MOVE[2].innerHTML = 'MOVE3:' + ' ' + pokemon.moves[18].move.name
  MOVE[3].innerHTML = 'MOVE4:' + ' ' + pokemon.moves[19].move.name
  MOVE[4].innerHTML = 'MOVE5:' + ' ' + pokemon.moves[20].move.name
  MOVE[5].innerHTML = 'MOVE6:' + ' ' + pokemon.moves[21].move.name
  HP.innerHTML = 'HP:' + ' ' + pokemon.stats[0].base_stat
  ATTACK.innerHTML = 'ATTACK:' + ' ' + pokemon.stats[1].base_stat
  DEFENSE.innerHTML = 'DEFENSE:' + ' ' + pokemon.stats[2].base_stat
  SPECIALATACK.innerHTML = 'SPECIAL-ATACK:' + ' ' + pokemon.stats[3].base_stat
  SPECIALDEFENSE.innerHTML = 'SPECIAL-ATACK:' + ' ' + pokemon.stats[4].base_stat
  SPEED.innerHTML = 'SPEED:' + ' '+ pokemon.stats[5].base_stat
  titulop.innerHTML = `${pokemon.name}`  
  foto.innerHTML = `<img src="${pokemon.sprites.front_default}" alt=""></img>`
  
}

let modal = document.querySelector('.modal')
let fecharmodal = document.querySelector('.fmodal')

fecharmodal.addEventListener('click', () =>{
    modal.style.display = 'none'
})

let capiturar = document.querySelector('.capiturar')
let achar = document.querySelector('.achar')
let HP = document.querySelector('.HP')
let ATTACK = document.querySelector('.ATTACK')
let DEFENSE = document.querySelector('.DEFENSE')
let SPECIALATACK = document.querySelector('.SPECIAL-ATACK')
let SPECIALDEFENSE = document.querySelector('.SPECIAL-DEFENSE')
let SPEED = document.querySelector('.SPEED')
let MOVE = document.querySelectorAll('.MOVE')
async function capitura(){
    
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${achar.value[0].toLowerCase() + achar.value.substr(1)}`)

    if(resposta.ok){
        const pokemon = await resposta.json()
        console.log(pokemon)

        MOVE[0].innerHTML = 'MOVE1:' + ' ' + pokemon.moves[16].move.name
        MOVE[1].innerHTML = 'MOVE2:' + ' ' + pokemon.moves[17].move.name
        MOVE[2].innerHTML = 'MOVE3:' + ' ' + pokemon.moves[18].move.name
        MOVE[3].innerHTML = 'MOVE4:' + ' ' + pokemon.moves[19].move.name
        MOVE[4].innerHTML = 'MOVE5:' + ' ' + pokemon.moves[20].move.name
        MOVE[5].innerHTML = 'MOVE6:' + ' ' + pokemon.moves[21].move.name
        HP.innerHTML = 'HP:' + ' ' + pokemon.stats[0].base_stat
        ATTACK.innerHTML = 'ATTACK:' + ' ' + pokemon.stats[1].base_stat
        DEFENSE.innerHTML = 'DEFENSE:' + ' ' + pokemon.stats[2].base_stat
        SPECIALATACK.innerHTML = 'SPECIAL-ATACK:' + ' ' + pokemon.stats[3].base_stat
        SPECIALDEFENSE.innerHTML = 'SPECIAL-ATACK:' + ' ' + pokemon.stats[4].base_stat
        SPEED.innerHTML = 'SPEED:' + ' '+ pokemon.stats[5].base_stat
        modal.style.display ='flex'
        titulop.innerHTML = `${pokemon.name}`  
        foto.innerHTML = `<img src="${pokemon.sprites.front_default}" alt=""></img>`
    }else{
        alert('Pokemon não encontrado ou não existe')
    }
   
}

capiturar.addEventListener('click', capitura)


