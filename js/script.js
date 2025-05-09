const emailCont = document.querySelector(".list-group");
const button = document.querySelector(".btn");
const spinner = document.querySelector(".spinner-border")

let giri = 10
let mailDoing = false

let count = 0;

callMail = () => {
    let mail = "";
    spinner.classList.remove("d-none")
    emailCont.innerHTML = null;
    

        for (let i = 0; i < giri; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    mail += `<li class="list-group-item"><a href="" type="mail">${resp.data.response}</a></li>`;

                    if (count === 9) {
                        emailCont.innerHTML = mail;
                        count = 0;
                        mailDoing = false;
                        spinner.classList.add("d-none")
                    } else {
                        count++
                    }

                });
        }

   


}





button.addEventListener("click", callMail)


