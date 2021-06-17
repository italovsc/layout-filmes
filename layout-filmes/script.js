const API_KEY = 'api_key=9edaf34d311ec76e4eadeaa587fb47c9';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;


getMovie(API_URL)


function getMovie(url){

    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
    })
}