const old_array = [1, 2, 3, 4, 5];

const new_array = old_array.filter((element) =>(element % 2 === 0 ? true : false));
console.log(new_array);