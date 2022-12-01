const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

async function fetchedProjects(){
    const response = await fetch(API_URL);
    const data = await response.json();

    addProjects(data)
}

function addProjects(projects){
    const sortedData = projects.sort((item1, item2) => {
        if (item1.uuid < item2.uuid) {
            return -1;
        }
        if (item1.uuid > item2.uuid){
            return 1;
        }
        return 0;
    })

    const threeFirstProjects = sortedData.slice(0, 3);

    threeFirstProjects.forEach(project => {
        const divPrincipal = document.getElementById("divPrincipal");
        const div = `
            <div class="bg-white my-8 mx-4 md:w-96 hover:shadow-lg">
                <img class="md:h-60 md:w-full" src="${project.image}" alt="${project.name}">
                <div class="p-6 text-left md:pb-10">
                <p class="medium-24 color-dark-grey">${project.name}</p>
                <p class="md:regular-17 color-medium-grey m-3">${project.description}</p>
                <a class="regular-17 color-dark-blue cursor-pointer" href="project.html?uuid=${project.uuid}">Learn More</a>
            </div>
        `
        divPrincipal.innerHTML += div;
    });
}


window.addEventListener('load', () => {
    fetchedProjects()
})

const contactForm = (preventForm) => {
    preventForm.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let textarea = document.querySelector("#text").value;
    let formComfirmation = "";
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "text/plain, application/json",
      },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            text: textarea
        }),
    })
      .then((response) => response.json())
      .then((formData) => console.log(formData))
      .then(() => {
        formComfirmation += `
                <h3 class="comfirmation">
                    Thank you for reaching us! We'll answer to you soon.
            </h3>
                `;
        document.querySelector(".success").innerHTML += formComfirmation;
      })
      .catch((error) => console.log(error));
  };
  document.querySelector("#form").addEventListener("submit", contactForm);

