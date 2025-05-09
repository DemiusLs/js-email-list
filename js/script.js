const emailCont = document.querySelector(".list-group");
const button = document.querySelector(".btn");

let giri = 10


callMail = () => {

    let mail = "null";

    for (let i = 0; i < giri - 1; i++) {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                emailCont.innerHTML += `<li class="list-group-item"><a href="" type="mail">${resp.data.response}</a></li>`;


            });
    }



}

button.addEventListener("click", callMail)


