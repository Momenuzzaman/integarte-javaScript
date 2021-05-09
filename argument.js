// function getFullName( firstName, lastName){
//     const fullName = firstName +" "+ lastName;
//     return fullName;
// }
// const name = getFullName("Hanif", "Paribohon");
// console.log(name);

function getFullName( firstName, lastName){
    let fullName = " ";
    for(var i = 0; i< arguments.length; i++){
        let namePart = arguments[i];
        fullName = fullName +" "+ namePart;
    } 
    return fullName;
}
const name = getFullName("Hanif", "Shonket", "Paribohon");
console.log(name);




