const main = document.getElementById('main');
const searchButton = () => {
    // console.log("connected");
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue = parseInt(input.value);
    // console.log(inputValue);

    if (isNaN(inputValue) || inputValue == '') {
        error.innerText = "enter correct number";
        input.value = '';
        main.innerHTML = '';
    }
    else if (inputValue <= 0) {
        error.innerText = "enter positive number";
        input.value = '';
        main.innerHTML = '';
    }
    else {
        fetch(`https://randomuser.me/api/?results=${inputValue}`)
            .then(res => res.json())
            // .then(data => userDisplay(data.results))
            .then(data => userDisplay(data.results))
    }
}

const userDisplay = (users) => {
    // console.log(users.location.street.name)
    for (const user of users) {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        // div.classList.add('mb-2');
        div.innerHTML = `
        <div class="card" style="min-height:300px">
        <img width="400px" src="${user.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"><span class="text-primary">${user.name.title} </span>
            <span> ${user.name.first}</span><span> ${user.name.last}</span></h5>
            <h5 class="card-title"><span class="text-primary">Email: </span>${user.email}</h5>
             <p class="card-text"><span class="text-primary">Phone: </span>${user.cell}</p>
             <p class="card-text"><span class="text-primary">Gender: </span>${user.gender}</p>
             <p class="card-text text-capitalize"><span class="text-primary">Address: </span>
             <span> ${user.location.city}</span><span> ${user.location.country}</span>
             <span> ${user.location.street.number}</span><span> ${user.location.street.name}</span>
             <span> ${user.location.postcode}</span>
             </p>
        </div>
    </div>`;

        main.appendChild(div);
    }
}