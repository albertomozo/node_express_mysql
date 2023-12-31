let API_URL_BASE = 'https://' +location.hostname + ':' + location.port;
console.log(API_URL_BASE);
//url = API_URL_BASE +"/api/pelis";

const TMDB_IMAGES_300 = 'http://image.tmdb.org/t/p/w300';

function searchPelis() {
    search = document.querySelector('#search').value;
    url = `${API_URL_BASE}/api/pelis/tmdb/search?query=${search}`;
    fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        //trespuesta= JSON.stringify(response);
        const url = `${API_URL_BASE}/api/pelis/tmdb`;
        let trespuesta = '<table>';
        for (var i = 0; i < response.results.length; i++) { 
            
            trespuesta += `<tr><td>${response.results[i].original_title}</td>` ;
            trespuesta += `<td>${response.results[i].id}</td>` ;
            trespuesta += `<td><form action="${url}/${response.results[i].id}" method="POST" ></td>`;
            trespuesta += `<input type="hidden" id="tmdb_id" name="tmdb_id" value="${response.results[i].id}" />`;            trespuesta += `<td></td><input type="submit" id="submit" name="submit" value="Grabar" /></td>`;

            trespuesta += `</form>` ;
            trespuesta += `</tr>`;
        }
        trespuesta += '</table>';
        


        // mostrar resultados
        document.getElementById("app").innerHTML = trespuesta;


    })
    .catch(err => console.error(err));

}