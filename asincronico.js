function getData1(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(response=>response.json())
    .then((data)=>{
        console.log("data ...");
        //console.log(data);
    })
    .catch((error)=>{
        console.log("error ...");
        console.log(error);
    });
}

//con async se convierte la función en una promesa
//con await se espera a que la promesa se resuelva
async function getData2(){
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data = await response.json();
        console.log("data ...");
        //console.log(data);
        
    } catch (error) {
        console.log("ocurrió un error");
    }
}

async function getData3(){
    const urls = ["https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/location","https://rickandmortyapi.com/api/episode"];
    try {
        for await (const url of urls){
            let response = await fetch(url);
            let data = await response.json();
            //console.log(data);
            console.log("data ...");
        }        
    } catch (error) {
        console.log("ocurrió un error");
    }
}

console.log("Inicio ...");
getData3();
console.log("Fin ...");
let five = "5";
if(five == 5){
    console.log("son iguales");
}else{
    console.log("no son iguales");
}
console.log(five);