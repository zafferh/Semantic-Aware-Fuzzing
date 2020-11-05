var v0, v1;
function v2(){
var v1 = "<h3>";
for(var v2 = 0;(v2) < (arguments.length);v2++){
(v1) += arguments[v2];
}
(v1) += "</h3>";
v1.write(v1);
}
function v3(){
var v1 = "<h3>";
for(var v2 = 0;(v2) < (arguments.length);v2++){
(v1) += arguments[v2];
}
(v1) += "</h3>";
v1.write(v1);
}
(v4) = new Array(0x10);
var v5 = ({length : 0x24924925});
function v6(){
(v4.length) = 1;
v2();
return v0;
}
v4.unshift(1.1);
// GenBlkBrick
for(var v7 = 0;(v7) < (((1024) * (1024)) / (0x10));v7++){
for(var v8 = 0;(v8) < (2000);++v8){
v3();
}
v3(3);
}
