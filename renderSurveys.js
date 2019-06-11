
function renderSurveys(surveys) {
    result = surveys.map(element => {
        return createSurvey(element);
    }).join("")
    return `
        <div class="text-center mt-5">
            ${result}
        </div>
    `
}


function createSurvey(survey){
    fields = createField(survey.fields)
    return `<div class="survey">
            <h1>${survey.title}</h1>
            <hr>
            <div>${fields}</div>
            <button class='btn btn-primary'>${survey.submitButtonText}</button>
            </div>`
}

function createField(fields) {
    var input_group = ''
    fields = fields.map(element => {
        if (element.type == 'radio'){
            input_group = createRadio(element.options)
        }
        else {
            input_group = `<input type="text" class="inputbox" name="fname">`
        }
        return `<div class="field"><h3>${element.label}</h3>
                <div>${input_group}</div></div>      
                `

    }).join("")
    return fields
}

function createRadio(radio) {
    options = radio.map(element => {
        return `<input type="radio" name="${element}" id="option${element}">${element}<br>`
    }).join("");
    return `<div class="rado">
            ${options}
            </div>`
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}