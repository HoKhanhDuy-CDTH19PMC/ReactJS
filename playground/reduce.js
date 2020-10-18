const old_array=[1,2,3,4];
const new_arrayReduce=old_array.reduce((total,element)=>
    {
        console.log(total,element);
        return total=total+element;
    },0);
    // 0 la khoi tao 
    console.log(old_array);