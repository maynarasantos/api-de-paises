
// let data ={
//     nome: "maynara",
//     idade: 24,
//     isStudent: false
// }


// fetch("https://webhook.site/d39f70ce-b25a-4868-8c82-d0e946e1e1c2",{
//     method: "POST",
//     body:JSON.stringify(data)
// }
// );
function search() {
    let input = document.getElementById("searchbar").value
    input = input.toLowerCase()
    let busca = document.getElementsByClassName("col-4 mt-3")
    for (i = 0; i < busca.length; i++) {
        if (!busca[i].innerHTML.toLowerCase().includes(input)) {
            busca[i].style.display = "none"
        } else {
            busca[i].style.display = "list-item"
        }
    }
}






let list = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(json => json.json())
        .then(countries => {
            let row = document.querySelector("#row")
            let countriesHtml = "";
            for (let index = 0; index < countries.length; index++) {
                const country = countries[index];

                // console.log(country.translations.por.common);
                // Imagem:country.flags.png
                // alt;country.flags.alt 
                // flag: country.flag
                // regiao: country.region
                countriesHtml += `
             <div class="col-4 mt-3">
         
                <div class="card" style="width: 18rem;">
                
                <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}">
                  <div class="card-body">
                  <h5 class="card-title">${country.translations.por.common}
                  <p class="card-text">
                  Região: ${country.region}
                  </p>
                 
                  </div>
                 </div>
                  </div>`
                  
                



                //   </div>
                //  </div>
                //  <div id="myModal" class="modal">
                //            <p>Populaçao: ${country.population}</p>
                //                <p>Idioma: ${country.languages} </p>
                //                <p>Fusio horario: ${country.timezones}</p>
                //                <p>Continentes: ${country.continents}</p>
                //                </div>
                //                </div>
                              
                
                              
                  

                        
                        
                  
                  
                  
           
            }
















            row.innerHTML = countriesHtml;
        })


}



list();




