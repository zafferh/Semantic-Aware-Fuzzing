let v0 = '2.3023e-320';
function v1(v1, v2, v3){
try{
for(var v4 in v0){
try{
v1(undefined, - 0, ({}));
}catch(v7){
}
try{
new Uint32Array(41902);
}catch(v7){
}
}
}catch(v7){
}
try{
delete v4.a;
}catch(v7){
}
}
// GenBlkBrick
for(let v0 = 0;(v0) < (0x1000);v0++){
let v2 = new Array(0x10000);
var v3 = ({length : 0x24924925});
}
for(let v0 = 0;(v0) < (10000);v0++){
v1(v3);
}
function v4(){
let v1 = v2.body.appendChild(v2.createElement('iframe')).contentWindow;
v1.eval(`
let p = new Proxy({}, {});
let a = {__proto__: {}};
a.__proto__.__proto__ = p;
`);
let v3 = [];
let v4 = [];
let v5 = new v1.Object();
let v6 = ({});
(v4.__proto__) = v5;
(v5.__proto__) = new Proxy(({}), ({has : (function (){
(v3[0]) = ({});
return true;
})}));
for(let v8 = 0;(v8) < (10000);v8++){
v1(v3, v4);
}
v10((()=>{
delete v4[0];
v1(v3, v4);
v11(v3[0]);
}), 500);
}
{
(v5) = 0x1234;
function v5(){
}
}
// GenBlkBrick
for(var v6 = 0;(v6) < (10);v6++){
v6--;
(v7) = v4(({}), true);
}
{
v5.prototype[('b') + (v6)];
(v5.prototype[('b') + (v6)]) = 0x1234;
}
