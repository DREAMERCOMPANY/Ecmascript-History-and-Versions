function newStudent(name, age, country){
    var name = name || 'Jhon'
    var age = age || 23
    var country = country || 'MX'
    console.warn(name, age, country)
}

newStudent()
newStudent('Carlos', 19 , 'COL')


//Asignar parametros dentro de los argumentos
function newTeacher(name = 'Dreamer', age = undefined, country = 'CL'){
    console.log(name, age, country)
}

newTeacher()
newTeacher('Alejo', 23 , 'SP')