//searchinput
//searchbtn
const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':'930a10f7c2mshe6bd22af6162162p1b6be7jsn74c0a8536da2',
            'X-RapidAPI-Host':'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

  fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word, options)
    .then(response =>response.json())
    .then((response) => { 
            
            wordheading.innerHTML = "Meaning of:"+ response.word;
            defination.innerHTML = response.defination ;
        })

   
    }
    searchbtn.addEventListener("click", (e)=>{
       e.preventDefault();
       dictionary(searchinput.value)
    }) 
    



