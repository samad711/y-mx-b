// THESE VARIABLES ARE USED TO CHANGE THE STRING WHEN THE BUTTON IS PRESSED
var rise = 1;
var run = 1;
var b = 0;
//THESE VARIABLES ARE USED TO CHANGE THE PLACEMENT OF THE 'b' VALUE
var origin_x = 295
var origin_y = 295
//THESE VARIABLES ARE USED TO CHANGE BOTH THE 'RISE' & 'RUN'
var x = 325
var y = 265
//THIS FUNCTION IS USED TO CHANGE THE DISPLAYED STRING NUMBER ASSOCIATED WITH THE 'RISE'
function plusOne(count) {
    rise++;
    if (rise > 9) {
        rise = -9
        y = 595
    }
    count.textContent = rise.toString();

    draw_lines()
    context.fillRect(x, y -= 30, 10, 10);
    context.fillRect(origin_x, origin_y, 10, 10);

    draw_line()
  }
//THIS FUNCTION IS USED TO CHANGE THE DISPLAYED STRING NUMBER ASSOCIATED WITH THE 'RUN'
  function plusRun(count2) {
        run++;
        if (run > 9) {
            run = -9
            x = -5
        }
        count2.textContent = run.toString();

        draw_lines()
        context.fillRect(x+= 30, y , 10, 10);
        context.fillRect(origin_x, origin_y, 10, 10);

        draw_line()
    }
//THIS FUNCTION IS USED TO CHANGE THE DISPLAYED STRING NUMBER ASSOCIATED WITH THE 'b'
    function plusB(count3) {
      b++; 
      if (b > 9) {
          b = -9
          origin_y = 595
      }

      count3.textContent = b.toString();

      draw_lines()
      context.fillRect(origin_x, origin_y -= 30, 10, 10);
      context.fillRect(x, y, 10, 10);

      draw_line()
    }
//THIS IS USED TO CREATE THE GRAPH WITH THE CANVAS COORDINATES
var c_canvas = document.getElementById("c");
var context = c_canvas.getContext("2d");
//THIS FUNCTION IS DRAWING THE GRAPH WITH THE CANVAS COORDINATES
function draw_lines() {
//THIS IS USED TO CLEAR THE GRAPH BEFORE PLACING THE NEW ONE SO THEY DO NOT STACK
    context.clearRect(0, 0, c_canvas.width, c_canvas.height)
//THESE FOR ARE USED TO DRAW THE GRID
    for (var x = 0.5; x < 600; x += 30) {
        context.moveTo(x, 0);
        context.lineTo(x, 600);
    }
    for (var y = 0.5; y < 600; y += 30) {
        context.moveTo(0, y);
        context.lineTo(600, y);
    }
    context.strokeStyle = "#eee";
    context.stroke();
//THIS IS FOR A NEW PATH FOR THE x-axis
    context.beginPath();
    context.moveTo(0, 300);
    context.lineTo(600, 300);
//THIS IS FOR A (NOT NEW) PATH FOR THE y-axis
    context.moveTo(300, 0);
    context.lineTo(300, 600);
    context.strokeStyle = "#000";
    context.stroke();
//THIS IS USED TO LABLE THE x & y AXIS
    context.fillText("x", 310, 10);
    context.fillText("y", 590, 310);
//THIS IS USED FOT THE TICKS AND THE NUMBERS ON THE x-axis
    context.fillRect(330, 295, 1, 10);
    context.fillText("1", 328, 290);
    context.fillRect(360, 295, 1, 10);
    context.fillText("2", 358, 290);
    context.fillRect(390, 295, 1, 10);
    context.fillText("3", 388, 290);
    context.fillRect(420, 295, 1, 10);
    context.fillText("4", 418, 290);
    context.fillRect(450, 295, 1, 10);
    context.fillText("5", 448, 290);
    context.fillRect(480, 295, 1, 10);
    context.fillText("6", 478, 290);
    context.fillRect(510, 295, 1, 10);
    context.fillText("7", 508, 290);
    context.fillRect(540, 295, 1, 10);
    context.fillText("8", 538, 290);
    context.fillRect(570, 295, 1, 10);
    context.fillText("9", 568, 290);
    context.fillRect(599, 295, 1, 10);
    context.fillText("10", 588, 290);
//THIS IS USED FOT THE TICKS AND THE NUMBERS ON THE y-axis
    context.fillRect(295, 270, 10, 1);
    context.fillText("1", 285, 274);
    context.fillRect(295, 240, 10, 1);
    context.fillText("2", 285, 244);
    context.fillRect(295, 210, 10, 1);
    context.fillText("3", 285, 214);
    context.fillRect(295, 180, 10, 1);
    context.fillText("4", 285, 184);
    context.fillRect(295, 150, 10, 1);
    context.fillText("5", 285, 154);
    context.fillRect(295, 120, 10, 1);
    context.fillText("6", 285, 124);
    context.fillRect(295, 90, 10, 1);
    context.fillText("7", 285, 94);
    context.fillRect(295, 60, 10, 1);
    context.fillText("8", 285, 64);
    context.fillRect(295, 30, 10, 1);
    context.fillText("9", 285, 34);
    context.fillRect(295, 1, 10, 1);
    context.fillText("10", 281, 8);
}
//THIS IS USED TO DRAW A LINE FROM ONE POINT TO ANOTHER
draw_lines()
context.fillRect(origin_x, origin_y, 10, 10);
context.fillRect(x, y, 10, 10);
//THESE VARIABLES ARE USED TO CHANGE THE LOCATION OF THE LINE
var diff = 5
var increase = 0
//THIS FUNCTION IS USED TO DRAW THE LINE
function draw_line() {
    context.beginPath();
    context.moveTo(origin_x+diff - increase, origin_y+diff + increase);
    context.lineTo(x+diff + increase, y+diff - increase);
    context.stroke();
}
draw_line()
