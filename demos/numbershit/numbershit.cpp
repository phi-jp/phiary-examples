/*
 * 数当てゲーム
 */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {
  srand((unsigned)time(NULL));

  int answer = rand()%100+1;
  int n = 0;
  int turn = 0;

  printf("★ 数当てゲーム ★\n");
  while (true) {
    printf("1~100 の間の数字を入力してください: ");
    scanf("%d", &n);

    ++turn;

    if (n < answer) {
      printf("もっと大きい!\n");
    }
    else if (n > answer) {
      printf("もっと小さい!\n");
    }
    else {
      printf("正解!!\n");
      break;
    }
  }

  printf("答えは %d, 正解までに %d ターンかかりました.\n", answer, turn);

  return 0;
}


/*
# result

★ 数当てゲーム ★
1~100 の間の数字を入力してください: 50
もっと小さい!
1~100 の間の数字を入力してください: 25
もっと大きい!
1~100 の間の数字を入力してください: 33
もっと小さい!
1~100 の間の数字を入力してください: 32
もっと小さい!
1~100 の間の数字を入力してください: 30
もっと大きい!
1~100 の間の数字を入力してください: 31
正解!!
答えは 31, 正解までに 6 ターンかかりました.
*/