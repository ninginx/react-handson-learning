//Imperative Programming

// URLフレンドリーな文字列に変換する処理を命令型プログラミングで記載する
var string = "Restraunts in Hanalei";
var urlFriendly = "";

for (var i = 0; i < string; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
  }
  else {
    urlFriendly += string[i];
  }
}

console.log(urlFriendly) //"Restraunts-in-Hanalei";


//関数型プログラミング
var string = "Restraunts in Hanalei";
var urlFriendly = string.replace(/ /g, "-");

console.log(urlFriendly) //"Restraunts-in-Hanalei";