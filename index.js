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


// 最後の単語がbuyで終わっているかと最後の文字は0から数えて65番目かどうかを判断したい。expected output:true
console.log(mojiretsu.endsWith("buy.", 66));


// 変数名mojiretsuの5番目の文字を出力したい。 expected output:t
let index = 5
console.log(`An index of ${index} returns the character ${mojiretsu.at(index)}`);

// 変数名mojiretsuの後ろから3番目の文字を出力したい。　expected output:u
index = -3
console.log(`An index of ${index} returns the character ${mojiretsu.at(index)}`);


// 変数名mojiretsuの8番目の文字を出力したい。expected output:o（さっきとの違いが全くわからん。こっちの方が若干短いだけ）
index = 8
console.log(`The character at index ${index} is ${mojiretsu.charAt(index)}`);

//変数名mojiretsuの3番目の文字のUTF-16コードを10進数で表した数字を出力する。　expected output:97（aのUTF-16コードを10進数で表した数字）
index = 3
console.log(`Character code ${mojiretsu.charCodeAt(index)} is equal to ${mojiretsu.charAt(index,)}`,);


// 変数名iconの文字列の2番目のUnicodeコードポイント値を10進数で表した数字を出力したい。expected output:9675
let icon = "☆○";
console.log(icon.codePointAt(1));


// 変数名str1とstr2を連結して出力したい。expected output:Hello World
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(' ', str2));


// 変数名mojiretsuの文字列の中に”money”という単語が含まれているかどうか知りたい。　expected output:"The word "money" is in the sentence"
let word = "money";
console.log(`The word "${word}" ${mojiretsu.includes(word) ? 'is' : 'is not'} in the sentence`,);



// 変数名mojiretsuの文字列の中に「money」という単語は何文字目に出てくるかを出力したい。expected output:53と-1
let indexOfFirst = mojiretsu.indexOf(word);
console.log(`The index of the first "${word}" is ${indexOfFirst}`);
console.log(`The index of the second "${word}" is ${mojiretsu.indexOf(word, indexOfFirst + 1,)}`,);


//変数名twicedogの文字列の中に最後に出てくるdogという文字が何文字目にあるか出力したい。　expected output:38
let twicedog = "I think Ruth's dog is cuter than your dog!";
const searchTerm = 'dog';
console.log(`Index of the last ${searchTerm} is ${twicedog.lastIndexOf(searchTerm)}`,);

//孤立サロゲートが含まれているかどうかを判断したい。　expected:output:true
let koritsu = ["I want to play final fantasy7 rebirth. But I have no money to buy."];
for (const str of koritsu) { console.log(str.isWellFormed()); }
/* これのどこに孤立サロゲートが含まれてんねん！問題なく出力できてんじゃん！！
孤立サロゲートが含まれてたら意図しない挙動が生まれるんじゃないの？孤立サロゲート意味わからん、もうエラーが起きた時考えよ */


// 以下二つの文字列を比較したとき、辞書順でどっちの方が先にくるかを出力したい（正の整数が出た場合、「後である」と判断され、負の整数が出た場合は「先である」と判断される。0が出た場合は同じであると判断される。）
const a = 'réservé';
const b = 'reserve';

//大文字の方が先だと判断されるらしい　expected output:1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));

//expected output:-1
console.log(b.localeCompare(a));

//どの言語をベースにするかというのも設定できる。今回の場合は英語をベースにするという意味
//じゃあ初期値はなんなの？となるが、Intl.Collator() コンストラクターで定義されている順番が初期値であるらしい
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));


/* //文字列mojiretsuに含まれている大文字A-Zを全部抜き出したい。　expected output:I,B,I
matchを使ったオブジェクトは他にもいっぱいあるけどまとめるの死ぬほど時間かかりそうだからとりあえずこれだけ。 */
let regex = /[A-Z]/g;
let found = mojiretsu.match(regex);

console.log(found);


//ただのmatchだとキャプチャグループが無視される、なので出力されるものが「test1」「test2」のみになる
const iuiu = "test1test2";
const regexp = /t(e)(st(\d?))/g;
const ppp = iuiu.match(regexp);

console.log(ppp)

// 正直「...」がなぜ必要なのかがわかっていない
const array = [...iuiu.matchAll(regexp)];

//test1までのキャプチャグループが全て出力される expected output :「test1」、「e」、「st1」、「1」
console.log(array[0]);
//test2のキャプチャグループが全て出力される。繰り返し1回をしているため　expected output :「test2」、「e」、「st2」、「2」
console.log(array[1]);

const obj = {
    "key": "value"
};

//オブジェクトのプロパティはドットで出力する方法とブラケットで出力する方法がある
//ドットで出力する場合は変数とプロパティを同じ識別子にする必要がある、「str.文字列」みたいな感じならいける
console.log(obj.key)
console.log(obj["key"])

// 昨日大橋さんと一緒にやったところだ！！expected output:index0
const hairetsu = ["index:0", "index:1", "index:2"];
console.log(hairetsu[0]); 