console.log("/////")
console.log("start")
console.log("/////")



// UTF-16のコードで「おなかすいた」と表示させたい。文字コードはChatGPTで聞きました。expected output:おなかすいた
console.log(String.fromCharCode(0x304a, 0x306a, 0x304b, 0x3059, 0x3044, 0x305f));


//Unicodeコードポイントを用いて「おなかいっぱい」と表示させたい。expected output:おなかいっぱい
console.log(String.fromCodePoint(0x304a, 0x306a, 0x304b, 0x3044, 0x3063, 0x3071, 0x3044));