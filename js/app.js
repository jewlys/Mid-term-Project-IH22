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
            <div class="bg-white my-8 md:w-96 shadow-lg">
                <img class="md:h-60 md:w-full" src="${project.image}" alt="${project.name}">
                <h4 class="medium-24 color-dark-grey">${project.name}</h4>
                <p class="md:regular 20 regular 17 color-medium-grey m-3">${project.description}</p>
                <a class="regular-17 color-dark-blue cursor-pointer" href="uuid=${project.uuid}">Learn More</a>
            </div>
        `
        divPrincipal.innerHTML += div;
    });
}


window.addEventListener('load', () => {
    fetchedProjects()
})