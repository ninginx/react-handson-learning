//純粋関数ではない例

const frederick = {
  name: "Frederick Dougless",
  canRead: false,
  canWrite: false
};

// 引数もなく、戻り値も返却しなくても問題ない。さらに関数外で宣言された変数を直接書き換えている。
function selfEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;
  return frederick;
}

selfEducate;
console.log(frederick);

// {name: "Frederick Dougless", canRead: true, canWrite: true}

//引数は取るようになったが、まだ純粋関数ではない例

const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false
}

const selfEducate = person => {
  person.canRead = true;
  person.canWrite = true;
  return person;
}

console.log(selfEducate((frederick)));
// {name: "Frederick Dougless", canRead: true, canWrite: true}
console.log(frederick)
// {name: "Frederick Dougless", canRead: true, canWrite: true}


