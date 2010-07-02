var p = chrome.extension.getBackgroundPage;
var doc = document;
var elem = "getElementById";
var _s = "style";
var _fade = "-webkit-transition";
var _in = "opacity 0s ease-in";
var _out = "opacity 1s ease-in";
var _onclick = "click";
var _evt = "addEventListener";
var save, cancel, ctl, opt;

function q(){
  ctl = doc[elem]("select_option");
  opt = JSON.parse(p.o)  || { control : "ctrl_select" };
  save = doc[elem]("save");
  cancel = doc[elem]("cancel");
  save[_evt](_onclick, s, false);
  cancel[_evt](_onclick, r, false);
}

function r(){
 doc[elem](opt.control).selected = true;
}

function s() {
  _opt.control = ctl.options[ctl.selected].value;
  p.s(JSON.stringify(_opt));
  var sts = doc[elem]("status");
  sts[_s].setProperty(_fade, _in);
  sts[_s].opacity = 1;
  setTimeout(function() { 
    sts[_s].setProperty(_fade, _out);
    sts[_s].opacity = 0;
  }, 1E3);
}

var _prep = q;
