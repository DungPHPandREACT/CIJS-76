// Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.

const string = "abcdef";
let string2 = "";
for(let i = string.length-1; i>=0; i--){
    string2 += string[i];
}
console.log(string2);