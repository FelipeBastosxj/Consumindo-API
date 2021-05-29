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

  titulop.innerHTML = `${pokemon.name}`  
  foto.innerHTML = `<img src="${pokemon.sprites.front_default}" alt=""></img>`
  
}

let modal = document.querySelector('.modal')
fecharmodal = document.querySelector('.fmodal')

fecharmodal.addEventListener('click', () =>{
    modal.style.display = 'none'
})

capiturar = document.querySelector('.capiturar')
achar = document.querySelector('.achar')

async function capitura(){
    
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${achar.value}`)

    if(resposta.ok){
        const pokemon = await resposta.json()
        modal.style.display ='flex'
        titulop.innerHTML = `${pokemon.name}`  
        foto.innerHTML = `<img src="${pokemon.sprites.front_default}" alt=""></img>`
    }else{
        alert('Pokemon não encontrado ou não existe')
    }
   
}

capiturar.addEventListener('click', capitura)


