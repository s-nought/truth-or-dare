import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mark_flg: number;
  mark: string;
  role_flg: number;
  role: string;
  color: string;
  mark_name: string;
  role_name: string;
  click_flg: boolean = false;
  click_flg2: boolean = false;
  click_count: number = 0;
  result: string;
  card_mark: string;
  card_mark2: string;
  card_num: number;
  card_num2: number;
  show_win: string = `<i class="fas fa-chess-king fa-lg winner-color fa-fw faa-bounce animated"></i>WIN`;
  show_loose: string = `<i class="fas fa-chess-pawn fa-lg loser-color fa-fw faa-shake animated"></i>LOSE`;
  show_draw: string = `<i class="fas fa-balance-scale fa-lg draw-color fa-fw faa-float animated"></i>DRAW`;

  loop: number = 0;

  draw(player: string) {

    this.mark_flg = this.getRandomInt(4);

    switch (this.mark_flg) {
      case 0:
        this.mark = "diamonds";
        this.color = "B22222";
        this.mark_name = "ダイヤ";
        break;
      case 1:
        this.mark = "clubs";
        this.color = "000000";
        this.mark_name = "クラブ";
        break;
      case 2:
        this.mark = "spades";
        this.color = "000000";
        this.mark_name = "スペード";
        break;
      case 3:
        this.mark = "hearts";
        this.color = "B22222";
        this.mark_name = "ハート";
        break;
      default:
        break;
    }

    this.role_flg = this.getRandomInt(13) + 1;

    switch (this.role_flg) {
      case 1:
        this.role = "ace";
        this.role_name = "エース";
        break;
      case 11:
        this.role = "jack";
        this.role_name = "ジャック";
        break;
      case 12:
        this.role = "queen";
        this.role_name = "クイーン";
        break;
      case 13:
        this.role = "king";
        this.role_name = "キング";
        break;
      default:
        this.role = this.role_flg.toString();
        this.role_name = this.role;
        break;
    }

    this.result =
      `
<h5 class="card-title">
  ${this.mark_name}の${this.role_name}
</h5>
<img src="https://img.icons8.com/ios/150/${this.color}/${this.role}-of-${this.mark}.png">
`;

    switch (player) {
      case "first":
        $('#insert').hide().fadeIn(3000);
        $('#insert').html(this.result);
        this.click_flg = true;
        this.card_mark = this.mark;
        this.card_num = this.role_flg;
        break;
      case "second":
        $('#insert2').hide().fadeIn(3000);
        $('#insert2').html(this.result);
        this.click_flg2 = true;
        this.card_mark2 = this.mark;
        this.card_num2 = this.role_flg;
        break;
      default:
        break;
    }

    if (this.card_mark == this.card_mark2 && this.card_num == this.card_num2) {
      this.draw(player);
    }

    if (0 < this.card_num && 0 < this.card_num2) {
      this.judgeOfWinLose();
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  judgeOfWinLose() {
    $('#result, #result2').hide().fadeIn(3000);

    if (this.card_num == 1 || this.card_num2 == 1) {
      if (this.card_num == this.card_num2) {
        $('#result, #result2').html(this.show_draw);
      } else if (this.card_num == 1) {
        $('#result').html(this.show_win);
        $('#result2').html(this.show_loose);
      } else {
        $('#result').html(this.show_loose);
        $('#result2').html(this.show_win);
      }
    } else {
      if (this.card_num < this.card_num2) {
        $('#result').html(this.show_loose);
        $('#result2').html(this.show_win);
      } else if (this.card_num == this.card_num2) {
        $('#result, #result2').html(this.show_draw);
      } else {
        $('#result').html(this.show_win);
        $('#result2').html(this.show_loose);
      }
    }
  }


  reset() {
    this.click_flg = false;
    this.click_flg2 = false;
    this.card_num = 0;
    this.card_num2 = 0;
    $('[id^=insert]').html("");
    $('[id^=result]').html("");
  }
}