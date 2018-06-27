const filmSearch = document.querySelector('.filmsbutton')
const peopleSearch = document.querySelector('.peoplebutton')
const locationSearch = document.querySelector('.speciesbutton')
const container = document.querySelector('div')


filmSearch.addEventListener("click", fetchMovies)
peopleSearch.addEventListener("click", fetchPeople)
locationSearch.addEventListener('click', fetchLocations)


function fetchMovies(e){
    e.preventDefault()
        
    var request = new XMLHttpRequest();

    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

    request.onload = function () {
    var data = JSON.parse(this.response);

    data.forEach(movie => {
        // console.log(movie.title);
        display = document.createElement("div")
        display.setAttribute('class', 'card')

        let container = document.createElement('div')
            container.setAttribute('class', 'container')
        let header = document.createElement('h1')
        let dir = document.createElement('h3')
        let para = document.createElement('p')
        let tomato = document.createElement('img')
        let score = document.createElement('h5')

        header.textContent = movie.title + " (" + movie.release_date + ")"
        para.textContent = movie.description
        dir.textContent = "Directed by " + movie.director
        score.textContent = movie.rt_score +"%"
        
        if(movie.rt_score >=90) {
            tomato.src = 'https://www.rottentomatoes.com/static/images/icons/cf-lg.png'
        }

        else if (movie.rt_score >= 60) {
            tomato.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/2000px-Rotten_Tomatoes.svg.png'
         } 
        else(
            tomato.src ='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rotten_Tomatoes_rotten.svg/2000px-Rotten_Tomatoes_rotten.svg.png'
        )

        root.appendChild(display)

        display.appendChild(container);
        container.appendChild(tomato);
        container.appendChild(score);
        container.appendChild(header);
        display.appendChild(dir);
        display.appendChild(para);
        


        });
      }
    request.send()
    while (root.firstChild) {
        root.removeChild(root.firstChild) //removes the currrent articles(json responses) var
    }


}



function fetchPeople(e){
    e.preventDefault()
        
    var request = new XMLHttpRequest();

    request.open('GET', 'https://ghibliapi.herokuapp.com/people', true);

    request.onload = function () {
    var data = JSON.parse(this.response);

    data.forEach(character => {
        // console.log(character.name);
        display = document.createElement("div")
        display.setAttribute('class', 'character')

        let name = document.createElement('h2')
        let gender = document.createElement('ul')
        let age = document.createElement('ul')
        let hair = document.createElement('ul')
        let eye = document.createElement('ul')
        let clearfix = document.createElement('div')

        name.textContent = character.name
        gender.textContent = "Gender: " + character.gender
        age.textContent = "Age: " + character.age
        hair.textContent = "Hair Color: " + character.hair_color
        eye.textContent = "Eye Color: " + character.eye_color


        root.appendChild(display)

        display.appendChild(name);
        display.appendChild(gender);
        display.appendChild(age);
        display.appendChild(hair);
        display.appendChild(eye);

        });
      }
    request.send()
    while (root.firstChild) {
        root.removeChild(root.firstChild) //removes the currrent articles(json responses) var
    }


}

function fetchLocations(e){
    e.preventDefault()
        
    var request = new XMLHttpRequest();

    request.open('GET', 'https://ghibliapi.herokuapp.com/locations', true);

    request.onload = function () {
    var data = JSON.parse(this.response);

    data.forEach(locations => {
        // console.log(locations.name);
        display = document.createElement("div")
        display.setAttribute('class', 'locationCard')

        let header = document.createElement('h4')
        // let residents = document.createElement('ul') Not fully provided
        let terrain = document.createElement('ul')
            terrain.setAttribute('class','locationUL')

        let climate = document.createElement('ul')
            climate.setAttribute('class','locationUL')
        let clearfix = document.createElement('div')





        header.textContent = locations.name
        // residents.textContent = "Residents: " + locations.residents
        terrain.textContent = "Terrain: " + locations.terrain
        climate.textContent = "Climate: " + locations.climate


        root.appendChild(display)

        display.appendChild(header);
        // display.appendChild(residents);
        display.appendChild(terrain);
        display.appendChild(climate);
        


        });
      }
    request.send()
    while (root.firstChild) {
        root.removeChild(root.firstChild) //removes the currrent articles(json responses) var
    }


}

