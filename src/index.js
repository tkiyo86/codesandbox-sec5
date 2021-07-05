import "./styles.css";

/**
 * 追加ボタンで「未完了ToDOにリストを反映する機能」
 */

/** 
 * ----------------------------------------------------
 * 1,最初からすべてを実装しない、まずはアラート
 * htmlのbuttonにid=add-button を割り当てる
 * add-button に大してJS側で操作できる

const onClickAdd = () => {
  alert();
};

document
  .getElementById("add-button")
  .addEventListener("click",() => onClickAdd());
*/

/**
 * ----------------------------------------------------
 * 2, 追加ボタンに入力した内容をリストに反映する
 * 入力内容を取得できるようにHTMLでidを割り振る
 * 追加ボタン　ー＞入力内容をアラートにて表示する,入力文字は消す＝空文字代入

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

  
 *  */

/**
 * ----------------------------------------------------
 * 3,
 *
 *
 */

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成,　HTML上でDOMを作成できる（createElement）
  // JS上の変数に格納する
  const div = document.createElement("div");
  // html上でボタンを整列されるために作成したlist-rowを使う
  div.className = "list-row";
  console.log(div); // <div class="list-row"></div>　が表示されるはず

  // liタグ作成
  //const li = document.createElement("li");
  //li.interText = inputText;
  //console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
