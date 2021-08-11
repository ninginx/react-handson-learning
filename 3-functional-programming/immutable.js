let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0
}

//ダメな例
//JavaScriptで引数でオブジェクトを受け取った場合、値ではなくオブジェクトへの参照になるため、
//元のオブジェクトに変更が加わってしまう。

function rateColor(color, rating) {
  color.rateing = rating;
  return color;
}

//良い例1

function rateColor(color, rating) {
  return Object.assign({}, color, { rating: rating });
}

//良い例2

const rateColor = (color, rateing) => ({
  ...color, rateing
});

