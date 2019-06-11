
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    mycircles = circles.map(element => {
      return createCircle(element);  
    }).join("");
    return `
        <div class="text-center mt-5">
        ${mycircles}
        </div>
    `
}

function createCircle(circle) {
    return `
    <div class='circle' 
    style="border-radius:${circle.radius}px; background:${circle.color}; width:50px; height:50px;">
    </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}