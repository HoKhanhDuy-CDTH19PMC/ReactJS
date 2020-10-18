
// function doesn't have "THIS"
// method => "THIS" will be object

//arrow function
//"THIS" will be parent "THIS"
//ES6
class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    diNgu()
    {
        const danhRang=()=>
        {
            console.log(this.name+" da danh rang");
        }
        danhRang();
        console.log(this.name + this.age+" tuoi da di ngu");
    }
}
const new_person=new Person("Duy",2);
new_person.diNgu();