
function renderRectangle(rectangle) {
    return `
        <div class="rectangle" style="width:${rectangle.width}; height:${rectangle.height}; background: ${rectangle.color};"></div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: '100px',
        height: '200px',
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);
}