var b = require('bonescript');
var state = b.LOW;
var p = 0;
b.pinMode('P8_19', b.INPUT);
b.pinMode('P8_13', b.OUTPUT);
setInterval(check,10);
b.digitalWrite('P8_13', b.LOW);

function check(){
b.digitalRead('P8_19', checkButton);
//b.digitalRead('P8_19', toggle)
}

function checkButton(x) {
  if(x.value == 1 && x.value != p){
    if(b.digitalRead('P8_13') == b.HIGH)
        b.digitalWrite('P8_13', b.LOW);
    else
        b.digitalWrite('P8_13', b.HIGH);
  }
  p = x.value;
}

function toggle() {
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite("P8_13", state);
}
