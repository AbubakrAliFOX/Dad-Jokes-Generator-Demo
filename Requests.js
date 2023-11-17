// // XMLHttpRequest

// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log('It loaded!');
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// }

// req.onerror = function () {
//     console.log('Error');
//     console.log(this);
// }

// req.open("Get", "https://swapi.dev/api/people/1/");
// req.send();



// // fetch

// fetch('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         console.log(res);
//         res.json().then(data => console.log(data));
//     })
//     .catch((e) => {
//         console.log(e);
//     })


// // axios

// axios.get('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// dad jokes using axois
const button = document.querySelector('button');
const ul = document.querySelector('ul');



const generateJoke = async () => {
    try {
        const res = await axios.get('https://icanhazdadjoke.com/', {headers : {Accept: 'application/json'}});
        return res.data.joke;
    } catch (err) {
        return err;
    }
}

const appendJoke = async () => {
    const newLi = document.createElement('li');
    newLi.innerText = await generateJoke();
    ul.append(newLi);

}

button.addEventListener('click', appendJoke)