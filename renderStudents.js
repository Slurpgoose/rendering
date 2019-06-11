
function renderStudents(students) {
    result = students.map(element => {
        //alert(element.name);
        return createStudentCard(element)}).join("")
    return `
        <div class="roll-call">
        <h1>Roll Call!</h1>
            ${result}
        </div>
    `
}

function createStudentCard(student) {
    var status = '';
    if(student.isPresent) {
        status = 'Present';
    }
    else {
        status = 'Absent'
    }
    return `<div class="student-card ${status}">
            <h3>${student.name}</h3>
            <h5>${status}</h5>
            </div>`
};

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}