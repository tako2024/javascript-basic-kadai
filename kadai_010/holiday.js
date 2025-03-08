// 配列の宣言と値の代入を行う
const holidays = ["元日", "成人の日", "建国記念の日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"];

// for文の場合
for (let i = 0;i < holidays.length; i++  ){
  //コンソールに出力する
  console.log(holidays[i]);
}

//変数を初期化
let num = 0;

// while文の場合
while (num < holidays.length) {
  //コンソールに出力する
  console.log(holidays[num]);

  //numをインクリメント
  num++;
}
