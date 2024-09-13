/**
 * const,let
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";

// console.log(val2);

// let val2 = "let変数を再宣言"; // 再宣言不可

// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };

// console.log(val4);

// val4.name = "jak";
// val4.address = "Hiroshima";

// console.log(val4);

// オブジェクトや配列の場合は、中身を変更できる
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

// const name = "じゃけぇ";
// const age = 28;
// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// アロー関数
// function func1(str) {
//   return str;
// }

// console.log(func1("func1です"));

// 引数が1つの場合は()を省略できる
// const func2 = (str) => {
//   return str;
// };

//　省略形
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(1, 5));

// オブジェクトの場合
// const func3 = (num1, num2) => ({
//   hoge: num1,
//   huga: num2,
// });

// console.log(func3(1, 2));

// const myProfile = {
//   name: "ジャケえ",
//   age: 31,
// }

// const message1 = `名前は${myProfile.name}で、年齢は${myProfile.age}です`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}で、年齢は${age}です`;
// console.log(message2)

// const myProfile = ["じゃけえ", 31];
// const message1 = `名前は${myProfile[0]}で、年齢は${myProfile[1]}です`;
// console.log(message1);

// const myProfile = ["じゃけえ", 31];
// const [name, age] = myProfile;
// const message1 = `名前は${name}で、年齢は${age}です`;
// console.log(message1);

// デフォルト値
// const sayHello = (name = 'ゲスト') => console.log(`こんにちは${name}さん`);
// sayHello();

// const myProfile = {
//   age: 32
// }

// const {age, name = 'ゲスト'} = myProfile;
// console.log(`${name}`);

// オブジェクトの省略記法
// const name = "じゃけえ"
// const age = 31;

// // 変数名が同じ場合、省略しても良い
// const myProfile = {
//   name,
//   age
// }

// console.log(myProfile);

// スプレッド構文

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const arr1 = [1, 2, 3];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1) //　配列を展開する

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// const arr1 = [10, 20];
// const arr2 = [30, 40];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const arr8 = arr3;
// arr8[0] = 800;
// console.log(arr8);
// console.log(arr3); //arr3も変わってしまう

// const arr8 = [...arr3];
// arr8[0] = 800;
// console.log(arr8);
// console.log(arr3);// arr3は変わらない

// const nameArr = ["田中", "山田", "じゃけえ"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(nameArr[index]);
// // }

// // nameArr.map((name) => console.log(name))
// const arr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(arr2);

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 == 1 ;
// })

// console.log(newNumArr);

// const nameArr = ["田中", "山田", "じゃけえ"];

// // nameArr.map((name, index)=>{
// //   console.log(`${index}番目は${name}です`);
// // })

// const newNumArr = nameArr.map((name) => {
//   return name !== "じゃけえ" ? `${name}さん` : name;
// });

// console.log(newNumArr);

// const num = 1300;

// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);


// const checkSum = (num1, num2) => {
//   return num1 + num2 >= 100 ? "100を超えている" : "100以下です"
// }

// console.log(checkSum(10, 10));


const num = undefined;
const fee = num && "金額未設定です";
console.log(fee);
