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
// 引数に取ったオブジェクトを直接変更しているので、"副作用"が生じる。

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

// 純粋関数な例

const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false
}

const selfEducate = person => ({
  ...person,
  canRead: true,
  canWrite: true
})

console.log(selfEducate(frederick));
// {name: "Frederick Dougless", canRead: true, canWrite: true}
console.log(frederick)
// {name: "Frederick Dougless", canRead: false, canWrite: false}

// 純粋関数の3つの条件

// 1. 関数は少なくとも一つの引数を受け取らなければならない
// 2. 関数は値もしくは他の関数を戻り値として返却しなけれなならない
// 3. 関数は引数や関数外で定義された変数に直接変更を加えてはならない
