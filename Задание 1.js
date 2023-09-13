const student = {
    age: 21
}

const firstStudent = Object.create(student);
firstStudent.name = 'Karina';
firstStudent.surname = 'Spiridonova';

function getKeys(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
            console.log(obj[key]);
        }
    }
}

getKeys(firstStudent);