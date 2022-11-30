const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

async function fetchedProjects(){
    const response = await fetch(API_URL);
    const data = await response.json();

    const sortedData = data.sort((item1, item2) => {
        if (item1.uuid < item2.uuid) {
            return -1;
        }
        if (item1.uuid > item2.uuid){
            return 1;
        }
        return 0;
    })

    const threeFirstProjects = sortedData.slice(0, 3);

    console.log(threeFirstProjects)
}


window.addEventListener('load', () => {
    fetchedProjects()
})