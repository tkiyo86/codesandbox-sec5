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
  .addEventListener("click", () => onClickAdd());
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

 */

/**
 * ----------------------------------------------------
 * 3,
 *
 *
 */

const onClickAdd = () => {
  // テキストボックスの値valueを取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText); //入力内容を表示する

  // div生成,　HTML上でDOMを作成できる（createElement）
  // JS上の変数に格納する
  const div = document.createElement("div");
  // html上でボタンを整列されるために作成したlist-rowを使う
  div.className = "list-row";
  //console.log(div); // <div class="list-row"></div>　が表示されるはず

  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;
  //console.log(li);

  // divタグの子要素に各要素を設定,HTMLをよく見る
  div.appendChild(li);
  console.log(div);

  /**
   * こんな感じでConsoleに表示されるはず
   * inputTextがliに格納されて、divタグの中にliが含まれる形に
<div class="list-row">
<li>aaa</li>
</div>
   */

  //　ここまでできたらHTMLを再度見る、<ul>に格納する

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
