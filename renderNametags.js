
function renderNametags(nametags) {
    result = nametags.map(element => {
        return createBox(element);
    }).join("")
    return `
        <div class="text-center mt-5">
            ${result}
        </div>
    `
}

function createBox(name){
    return `<div class="name_tag">
    <div class="header"><h1>Hello, My Name is:</h1></div>
    <div class="name"><h2>${name}</h2></div>
    </div>
    `
}



function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}