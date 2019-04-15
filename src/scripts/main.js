// This function creates an HTML structure that contains parameters to pass the name, subject, and info of the student. It builds the the structure using elements and the parameters recieves the information using string interpolation. //
const createStudentComponent = (student) => {

    return `<div class="student">
    <h1>${student.name}</h1>
    <section>${student.subject}</section>
    <aside>${student.info}</aside>
</div>
    `
}

const studentContainer = document.querySelector("#container");
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     studentContainer.innerHTML += createStudentComponent(student.name, student.subject, student.info)
// }


 
const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = `<div class="student">
        <h1 class="xx-large passing">${student.name}</h1>
        <section class="bordered dashed section--padded">${student.subject}</section>
        <aside class="pushRight">${student.info}</aside>
    </div>`
    studentContainer.innerHTML += studentComponent;
    } else {
        studentComponent = `<div class="student">
        <h1 class="xx-large failing">${student.name}</h1>
        <section class="bordered dashed section--padded">${student.subject}</section>
        <aside class="pushRight">${student.info}</aside>
    </div>`
    studentContainer.innerHTML += studentComponent;
    }
}