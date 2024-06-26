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

// ...はスプレッドオペレーター
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
// 基本的に.を使う。それで無理なやつだけ[]を使う
console.log(obj.key)
console.log(obj["key"])

// 昨日大橋さんと一緒にやったところだ！！expected output:index:0
const hairetsu = ["index:0", "index:1", "index:2"];
console.log(hairetsu[0]);

// 1文字以上の数字にマッチする正規表現
// `numberRegExp`の正規表現が文字列"123"にマッチするかをテストする
// 正規表現をconsole.logで出力したい場合、test()メソッドを使う
const numberRegExp = /\d+/;
console.log(numberRegExp.test("123")); // => true

// これラッパーオブジェクトっていうのね。new演算子使う場合は（）が必要なのはなんとなく知っていたけど、その（）の名前がラッパーオブジェクトという。
// まあでも意識的にラッパーオブジェクトを使おうとしなくても大丈夫。オブジェクト化しなくてもなんとかなるケースが多い
// new演算子の理解が間違っていた、組み込みオブジェクトによって書き方が異なってくる。だから覚えてたやり方と挙動が違ったのかー
const str = new String("文字列");

//この場合のオペランドは1と2
//+が演算子
//そして、オペランドを二つ取る演算子のことを二項演算子という
//オペランドを一つ取る演算子のことを単項演算子という
let operando = 1 + 2;
console.log(operando);

//0で割り算したらinfinityと出力される
console.log(10 / 0);

// 「％」は割り算した時の余りを出力する
console.log(9 % 2);

//「**」は乗を出力する
//黒閃！！！！！
console.log(2 ** 2.5);
//上記と同じ意味らしい。古い書き方。覚えなくて良さげ
console.log(Math.pow(2, 2.5));
//string型の中の数字を、number型の数字に変える
console.log(+"1");
//数字に変更できない場合はNaNと出力される
console.log(+"文字列");

/* NaNとはNot a Numberの略である
数値ではないが、Number型に属する
Number.isNanというメソッドで値がNaNであるかどうかを判断できる。　expected output:true*/
console.log(Number.isNaN(NaN));

// 数値が格納されている変数名++;はその数値に1をプラスした数字になる
let iti = 1;
iti++;
console.log(iti);
// マイナスバージョン
iti--;
console.log(iti);
// 同じ型で同じ値且つ、オペランドがオブジェクトの場合はどちらも同じオブジェクトでないといけない。異なるオブジェクトを比較した場合はfalseを返す
const objA = {};
const objB = {};
// 生成されたオブジェクトは異なる参照となる
console.log(objA === objB);
// 同じ参照を比較している場合
console.log(objA === objA);
// 異なる型、異なる値の場合のみtrueを出力する
console.log(1 !== "1");
// 二つのオペランドを比較する、同じ型の場合は＝＝＝と同じ挙動になる。つまり同じ型同じ値でないとtrueが出力されない。しかし、異なる型の同じ値であった場合のみ、「暗黙的な型変換」が自動で行われるためtrueが出力される
console.log("koko" == "koko");
console.log("koko" == "ii");
console.log(1 == "1");
// !=も等しくない場合のみtrueを出力する
console.log("JavaScript" != "ECMAScript"); // => true
console.log(1 != "1"); // => false

// functionとreturnはセットみたいなもの
// functionはそれ自体に何か機能を持っているわけではなく、関数名に仮引数を入れて使う
// 関数が値を返す必要がない場合はreturn文を省略できる
function double(num) {
    return num * 5;
}
console.log(double(2));

function echo(x = "デフォルト値") {
    return x;
}
console.log(echo(35));
console.log(echo());

// なるほど!!そういうことかー！ようやく理解できてきた
function edd(x, y) {
    return x + y;
}
edd(1, 3);
edd(1, 3, 5);

// アロー関数のルール
// 仮引数の数と定義
const fnA = () => { /* 仮引数がないとき */ };
const fnB = (x) => { /* 仮引数が1つのみのとき */ };
const fnC = x => { /* 仮引数が1つのみのときは()を省略可能 */ };
const fnD = (x, y) => { /* 仮引数が複数のとき */ };
// 値の返し方
// 次の２つの定義は同じ意味となる
const mulA = x => { return x * x; }; // ブロックの中でreturn
const mulB = x => x * x;            // 1行のみの場合はreturnとブロックを省略できる

if (true) {
    console.log("この文は実行される")
}
const x = 42;
if (x > 10) {
    console.log("その通り")
}


if (true) {
    console.log("この行は実行されます");
}
if ("文字列") {
    console.log("この行は実行されます");
}
if (42) {
    console.log("この行は実行されます");
}
if (["配列"]) {
    console.log("この行は実行されます");
}
if ({ name: "オブジェクト" }) {
    console.log("この行は実行されます");
}

// new Date()で現在の年日時を出力する
const now = new Date();
console.log(now.getFullYear());

// ${変数名}で変数名の式を展開できる
const year = new Date().getFullYear();
console.log(`現在${year}年です`);


// 昨日のを組み合わせるとこういうif文を作れる
if (year % 400 === 0) {
    console.log(`${year}年はうるう年です`);/* 400で割り切れたら閏年だお */
} else if (year % 100 === 0) {
    console.log(`${year}年はうるう年ではありません`);/* 100で割り切れちゃったら閏年じゃないお */
} else if (year % 4 === 0) {
    console.log(`${year}年はうるう年です`);/* 4で割り切れたら閏年だお */
} else {
    console.log(`${year}年はうるう年ではありません`);
}


// 以下のswitch文とif文はやってることは一緒だが、switch文の方が見やすい（リーダブルってやつ？）
// switch文は一度に複数分岐させていくイメージで、if文は一つずつ試していくイメージ。条件分岐が複数ある場合はswitch文を使う方がいい。if文は一つずつ実行していくので処理も重くなる
function getECMAScriptName(version) {
    switch (version) {
        case "ES5":
            return "ECMAScript 5";
        case "ES6":
            return "ECMAScript 2015";
        case "ES7":
            return "ECMAScript 2016";
        default:
            return "しらないバージョンです";
    }
}
console.log(getECMAScriptName("ES6"));

const ver = "ES6";
if (ver === "ES5") {
    console.log("ECMAScript 5");
} else if (ver === "ES6") {
    console.log("ECMAScript 2015");
} else if (ver === "ES7") {
    console.log("ECMAScript 2016");
} else {
    console.log("しらないバージョンです");
}

let o = 0;
console.log(`ループ開始前のxの値: ${o}`);
while (o < 10) {
    console.log(o);
    o += 1;
}
console.log(`ループ終了後のxの値: ${o}`);

// 試しに無限ループさせてみたらえぐかった。もうやらない
/* let i = 1;
while (i > 0) {
    console.log(`${i}回目のループ`);
    i += 1;
} */

// まずtotalを0に設定する→そしてiを0に設定する→iは10より小さいがtrueなため文が実行される→実行された値に+1してまたtrueかどうかを判断し、trueなら実行→その繰り返し
// やっぱりifよりforの方が難しいよな
let total = 0;

for (let i = 0; i < 10; i++) {
    total += i + 1;
}
console.log(total);


// 前回わからなかった配列.lengthは配列の値の数を出力する。
function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sum([1, 2, 3, 4, 5]));

function sum(numbers) {
    let total = 0;
    numbers.forEach(num => {
        total += num;
    });
    return total;
}

console.log(sum([1, 2, 3, 4, 5]));

// 配列にはfilterメソッドがある。下記の場合は2で割った時に余りがゼロになる数字（つまり10.20）のみを配列として出力する。名前の通りフィルターにかけている
function isEven(num) {
    return num % 2 === 0;
}

const bump = [1, 5, 10, 15, 20];
console.log(bump.filter(isEven));

// for in文ここも一旦保留
const ob = {
    "a": 1,
    "b": 2,
    "c": 3
};
// まずいなぁ、難易度が急に上がったfor文のところで何が行われているかがよくわからん。配列のところまで保留
for (const key in ob) {
    const value = ob[key];
    console.log(`key:${key}, value:${value}`);
}

// for 変数名 of 変数名 は簡単だな、一つずつ出力してくれる 
const arra = [1, 2, 3];
for (const valu of arra) {
    console.log(valu);
}
// チャプター「オブジェクト」開始
// おそらく知ってること多いが、一応書いていく
const kiki = {
    // キー: 値
    "key": "value"
    // キーの部分は「""」省略可能
    //key : "value"　とかいても同じ
    //"my-prop": "value" だと「-」が変数名として利用できないため""で囲む必要がある
};

const builtinobj = Object(1 + 1); /* Objectはビルトインオブジェクトといって、これだけでインスタンスを作成できる。new Objectと書いているのと一緒の意味になる。そんな便利なこと早く教えといてくれ */
console.log(builtinobj); // => 2


// この記法を分割代入という
const language = {
    ja: "日本語",
    en: "英語"
};
const { ja, en } = language;
console.log(ja);/* 日本語 */
console.log(en);/* 英語 */

const key = "key-string";
const ooo = {
    // これは変数「key」ではなく「key-string」をプロパティ名にしているらしい。わかりづら！
    [key]: "value"
};
console.log(ooo[key]);

// プロパティは後から削除可能、でもどういうとき使うのかが全然イメージできない
const lll = {
    key1: "value1",
    key2: "value2"
};
// key1プロパティを削除
delete lll.key1;
console.log(lll);/* 出力されるのはkey2:valueだけ */

// 普通constを使ったら再代入不可能だが、オブジェクトの上書きはできる。constは値を固定しているわけではなく、再代入を防ぐ物。なので代入されているオブジェクトの上書きはできてしまう
const yyy = { key: "value" };
yyy.key = "Hi!";
console.log(yyy.key);

// Object.hasOwn(変数名,プロパティ名)というメソッドがある。変数名はそのプロパティを持っているかどうかを確認するためのメソッドで、持っていればtrue
if (Object.hasOwn(yyy, "key")) {
    console.log(true);
}

//ネストされているプロパティにアクセスしたい場合はOptional chaining演算子というものを使用する。ドットではなく?.をつかう。途中のプロパティの時点で見つからなかった場合はundefinedを返してそこで終わってくれる
const mmm = {
    a: {
        b: "objのaプロパティのbプロパティ"
    }
};
console.log(mmm?.a?.b);


// よく使われる静的メソッド
const kkk = {
    "one": 1,
    "two": 2,
    "three": 3
};
// `Object.keys`はキーを列挙した配列を返す
console.log(Object.keys(kkk));
// `Object.values`は値を列挙した配列を返す
console.log(Object.values(kkk));
// `Object.entries`は[キー, 値]の配列を返す
console.log(Object.entries(kkk));

// Object.assignを使用すればオブジェクトをマージできる。今回の場合は{}にターゲットして、ObjectAとObjectBをマージするよって命令を出している
const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = Object.assign({}, objectA, objectB);
console.log(merged);

//スプレッド構文を使うと強制的に新しいオブジェクトを生み出し、そこでマージする
const maaji = {
    ...objectA,
    ...objectB
};
console.log(maaji)

//チャプター「オブジェクト」終了
//チャプター「プロトタイプオブジェクト」開始
// インスタンスからプロトタイプメソッドが呼び出せるということが重要
/* プロトタイプオブジェクトはオブジェクトの作成時に自動的に作成される
ObjectのプロトタイプオブジェクトにはtoStringなどのプロトタイプメソッドが定義されている
ほとんどのオブジェクトはObject.prototypeを継承することでtoStringメソッドなどを呼び出せる
プロトタイプメソッドとインスタンスメソッドではインスタンスメソッドが優先される
Object.createメソッドを使うことでプロトタイプオブジェクトを継承しないオブジェクトを作成できる */

//とりあえずプロトタイプオブジェクトの部分は概念的な話だったのでサラッと把握した、これ以降、プロトタイプオブジェクトが重要になっている項目で都度把握し直すくらいの認識で良さそう

// チャプター「プロトタイプオブジェクト」終了
// チャプター「配列」開始

const ma = [
    ["a", "b"],
    ["c", "d"]
];
console.log(ma[0][0]);//この場合は配列の中の配列(2次元配列)の中の0を出力する。つまりa

//ほらね！！出てきたっしょ！！！だと思ったよ！配列.length→これいきなり出てきてマジ意味わかんなかったもん！！未来のチャプターでやることを説明なしにいきなり使うのほんとやめてほしい
const arr = ["one", "two", "three"];
console.log(arr.length); //配列の数が出力される。つまり3
console.log(arr[arr.length - 1]);//配列の最後の要素にアクセスするには配列の変数名.length-1で出力する。つまり"three"
console.log(arr.at(-1));//length -1と一緒、つまりthree
console.log(Array.isArray(arr));//arrが配列かどうかを調べる。配列ならtrue

//インデックスの値を変数といて定義し直す場合は左辺に書く。そうすれば分割代入ができる
const [first, second, third] = arr;
console.log(first);  //"one"
console.log(second); //"two"
console.log(third);  //"three"

// インデックスを出力したい
const gengo = ["Java", "JavaScript", "Ruby", "JavaScript"];
const A = gengo.indexOf("JavaScript");
console.log(A);//先頭から探して最初に見つかった”JavaScript”のインデックスを出力する→1
const B = gengo.lastIndexOf("JavaScript");
console.log(B);//末尾から探して最初に見つかった”JavaScript”のインデックスを出力する→3

// 破壊的な関数と非破壊的な関数が存在する
// 破壊的な関数はコピーを作成せず大元の関数そのものに影響を与える
// 非破壊的な関数はコピーを作成してから処理するため、大元に影響を与えない
// sliceメソッドとconcatメソッドは非破壊的なメソッド
// 反復処理の中でもよく利用されるのがforEach、map、filter、reduceメソッド
// メソッドチェーンとは、メソッドを呼び出した返り値に対してさらにメソッド呼び出しをするパターンのこと

// 配列部分はほぼメソッド集だった
/* 配列は順序を持った要素を格納できるオブジェクトの一種
配列には破壊的なメソッドと非破壊的なメソッドがある
配列には反復処理を行う高階関数となるメソッドがある
メソッドチェーンは配列のメソッドが配列を返すことを利用している */

// チャプター「配列」終了
// チャプター「文字列」開始

// 知っていることが多かった
// 知らないメソッドもたくさんあったが、それを全部確認していたら時間がかかりすぎると判断。大体こういうことができるという把握はした。
// 今後、都度見直していく

// チャプター「文字列」終了

// チャプター「関数とスコープ」開始
// 変数の名前や関数などの参照できる範囲を決めるもの
function fn() {
    const x = 1;
    // fn関数のスコープ内から`x`は参照できる
    console.log(x); // => 1
}
fn();
// fn関数のスコープ外から`x`は参照できないためエラーが起こる

function fn(arg) {
    console.log(arg);
}
fn(15);
// つまり、スコープ内でconsole.logをやっても出力されないからそれを引き出すには　関数名(仮引数に入れる値);とやらないといけないってことかな

function fnfn() {
    const qqq = 1;
    console.log(qqq);
}
fnfn();
function fnfnfn() {
    const qqq = 99;
    console.log(qqq)
}
fnfnfn();
// おーー、関数が別ならconstでも同じ変数を宣言できるのか！！

// ビルトインオブジェクトは二種類ある、ECMAScriptに定義されているものと実行環境に定義されているもの。

function fn() {
    // 内側のスコープにあるはずの変数`x`が参照できる
    console.log(x); // => undefined
    {
        var x = "varのx";
    }
    console.log(x); // => "varのx"
}
fn();

/*  上記のコードはこのように解釈されている
function fn() {
    // もっとも近い関数スコープの先頭に宣言部分が巻き上げられる
    var x;
    console.log(x); // => undefined
    {
        // 変数への代入はそのままの位置に残る
        x = "varのx";
    }
    console.log(x); // => "varのx"
}
fn(); */

//つまり、varの宣言部分はブロックスコープ等を無視して、最も近い関数に巻き上げられてしまう。そして代入部分の位置は変わらないため、意図しない挙動が起こる可能性がある。 

// 無名関数を宣言 + 実行を同時に行っている。これを即時実行関数（IIFE　Immediately-Invoked Function Expression）という
(function () {
    // 関数のスコープ内でfoo変数を宣言している
    var foo = "foo";
    console.log(foo); // => "foo"
})();
// このすぐ閉じている()で無名関数を呼び出している。そして;で終了している
console.log(typeof foo === "undefined"); // => true
// あーconst,letがあるから今は即時実行関数はいらんのか。なるへそ
/* まとめ
関数やブロックはスコープを持つ
スコープはネストできる
もっとも外側にはグローバルスコープがある
スコープチェーンは内側から外側のスコープへと順番に変数が定義されているか探す仕組みのこと
varキーワードでの変数宣言やfunctionでの関数宣言では巻き上げが発生する
クロージャーは静的スコープとメモリ管理の仕組みからなる関数が持つ性質 */
// チャプター「関数とスコープ」終了
