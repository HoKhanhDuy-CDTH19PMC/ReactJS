/*const a=3, b=5, c=6;
const sum=a=>b=>c=>{
    return a+b+c;
}
const kq=sum(a)(b)(c);
console.log(kq);*/
/*const a=1,b=2,c=3;
const tich=a=>b=>c=>{
    return a*b*c;
}
const kq=tich(a)(b)(c);
console.log(kq);*/
var readline = require('readline-sync');
var price= Number(readline.question("Nhap  gia: "));
var soluong=Number(readline.question("Nhap so luong: "));
var giamgia=Number(readline.question("Nhap phan tram giam gia: "));
const result=price=>soluong=>giamgia=>{
    return price*soluong*giamgia;
}

