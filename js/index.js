
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))

}

const displayDog = (data) => {
    const divContainer = document.getElementById('main');
    const first10Data = data.slice(0, 10);
    for (const dog of first10Data) {
        const div = document.createElement('div');
        div.className = "col-lg-4"
        console.log(dog);

        div.innerHTML = `
        <h2>${dog.name}</h2>
        <p>${dog.temperament}</p>
        <h4>${dog.weight.imperial}</h4>
        <h4>${dog.life_span}</h4>
        <img width="400px" height="250px" src="${dog.image.url}"/>
        `;
        console.log(div)

        divContainer.appendChild(div);
    }

}