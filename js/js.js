let biograf = {
    name: "Эрнис",
    age: 15,
    gender: 'man',
    color: 'white',
}
// console.log(biograf.name + ' love');
for (let key in biograf) {
    if (key === 'name') {
        
    }else{
        biograf[key] += "love"
    }
    console.log(biograf[key])
}



