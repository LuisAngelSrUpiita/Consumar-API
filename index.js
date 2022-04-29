const API_URL = "https://api.datos.gob.mx/v1/calidadAire";

const HTMLResponse = document.querySelector('.app');

fetch(API_URL)
    .then ((response) => response.json())
    .then(data => {
            const p1 = document.createElement('p1')
            p1.innerHTML = data.results[0].stations[0].name
            HTMLResponse.appendChild(p1)

            const p = document.createElement('p')
            p.innerHTML = data.results[0].stations[0].indexes[0].scale
            HTMLResponse.appendChild(p)

            const p2 = document.createElement('p2')
            p2.innerHTML = data.results[0].stations[0].value
            HTMLResponse.appendChild(p2)

            console.log(data)
    })
    .catch(err => console.log(err))

