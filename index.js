const API_URL = "https://api.datos.gob.mx/v1/calidadAire";

//const xhr = new XMLHttpRequest();

const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL}/users`)
    .then ((response) => response.json())
    .then((users) => {
        const tpl = data.map(()=> `<li>${users.name}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    })
   


/*
function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#app");

        const tpl = data.map(()=> `<li>${user.name}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', '${API_URL}');
xhr.send(); 
 */