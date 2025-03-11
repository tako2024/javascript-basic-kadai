// HTML要素をidで取得する
const btnClick = document.getElementById('btn');

btnClick.addEventListener("click", ()=> {

  // 取得したh1要素にテキストを追加する
  document.getElementById('text').textContent = 'ボタンをクリックしました';
});




