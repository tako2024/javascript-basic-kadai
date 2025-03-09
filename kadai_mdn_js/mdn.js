//本日の日付を取得する
const today = new Date();

//年月日を取得する
const year = today.getFullYear() + '年';
const month = (today.getMonth() + 1) + '月';
const day = today.getDate() + '日';

//日付をコンソールへ出力する
console.log(year+month+day);
