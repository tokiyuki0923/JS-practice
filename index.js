console.log("/////")
console.log("start")
console.log("/////")



// UTF-16のコードで「おなかすいた」と表示させたい。文字コードはChatGPTで聞きました。expected output:おなかすいた
console.log(String.fromCharCode(0x304a, 0x306a, 0x304b, 0x3059, 0x3044, 0x305f));


//Unicodeコードポイントを用いて「おなかいっぱい」と表示させたい。expected output:おなかいっぱい
console.log(String.fromCodePoint(0x304a, 0x306a, 0x304b, 0x3044, 0x3063, 0x3071, 0x3044));




//「\n」が含まれていると改行されてしまう。出力したい文字列に\nが含まれているが、そのまんま全く同じ文字列を出力したい。
const aiue = String.raw`C:\Users\node\index.js`;
console.log(aiue);
// ちなみにStringをしようしないと\nのところで改行されて出力される
const ue = "C:\Users\node\index.js";
console.log(ue);



//new演算子を使用してインスタンスを作成し、様々なデータを埋め込みたい。expected output: name:雄大 age:27
//Objectのインスタンスを作成して、変数myObjに格納
let myObj = new Object();

//インスタンス「myObj」どんどんデータを追加していく
myObj.name = "雄大";
myObj.age = 27;

console.log(myObj);

//thisという変数を使ってみる。expected output:Window {stop: function, open: function, alert: function…}
console.log(this);

//expected output: "こんにちは"
this.sample = "こんにちは";
console.log(window.sample);
//この状態のthisに文字列を追加するということはwindowオブジェクトに文字列を追加するということになる


//メソッドの中にthisを記述し、出力する。expected output: name:雄大　myFunc:function
let mine = {
    name: "雄大",
    myFunc: function () {
        console.log(this);
    }
}
mine.myFunc();


//new演算子でインスタンスを作成し、thisでプロパティを作成する。そしてconsole.logで出力する。expected output: Human{name:"雄大",age:27}
function Human(name, age) {

    this.name = name;
    this.age = age;

}

let yudai = new Human('雄大', 27);
console.log(yudai);


// クラスを使用する場合はインスタンスを作成する前に、クラスオブジェクトを作成する必要がある。これで、”Hello,john”と出力された！！expected output:”Hello,john!”
class MyClass {
    constructor() {
        this.name = "John";
        console.log(`Hello, ${this.name}!`);
    }
}
const aaa = new MyClass();
console.log(aaa);




// new Treeの関数を参照するには？expected output: theTree.constructor is function Tree(name) {this.name = name;}
let theTree = new Tree("Redwood");

function Tree(name) {
    this.name = name;
}

console.log("theTree.constructor is" + theTree.constructor);


// 文字列の長さを数えたい。 expected output:66
const mojiretsu = "I want to play final fantasy7 rebirth. But I have no money to buy."

console.log(`${mojiretsu} ${mojiretsu.length}`);


// 変数名mojiretsuの5番目の文字を出力したい。 expected output:t
let index = 5

console.log(`An index of ${index} returns the character ${mojiretsu.at(index)}`);