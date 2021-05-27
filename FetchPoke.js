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



function listar(ListPoke){
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

 div.innerHTML = `<div class= card>
 <img src="${p.sprites.front_default}" alt="">
 <button class="nomep">
    ${p.name}
 </button>
</div>`

adicionar.appendChild(div)
}


fetchAPI()