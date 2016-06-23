/*
 * 数当てゲーム
 */

var util = require('util');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    // terminal: false
});

var print = function(s) {
  process.stdout.write(util.format.apply(this, arguments));
};

var answer = Math.floor( Math.random()*100 ) + 1;
var turn = 0;

print('★ 数当てゲーム ★\n');
print('1~100 の間の数字を入力してください: ');
rl.on('line', function (line) {
  ++turn;

  var n = +line;

  if (global.isNaN(n)) {
    print('不正な値です\n');
  }
  else if (n < answer) {
    print('もっと大きい!\n');
  }
  else if (n > answer) {
    print('もっと小さい!\n');
  }
  else {
    print('正解!!\n');
    rl.close();

    return ;
  }
  print('1~100 の間の数字を入力してください: ');
});
rl.on('close', function () {
  print('答えは %d, 正解までに %d ターンかかりました.\n', answer, turn);
});


/* 
# result

★ 数当てゲーム ★
1~100 の間の数字を入力してください: 50
もっと小さい!
1~100 の間の数字を入力してください: 25
もっと小さい!
1~100 の間の数字を入力してください: 10
もっと大きい!
1~100 の間の数字を入力してください: 15
正解!!
答えは 15, 正解までに 4 ターンかかりました.
*/