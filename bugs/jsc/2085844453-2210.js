function v0(v1, v2, v3){
if((v2.length) < (1)){
return;
}
for(let v4 = 0;(v4) < (v1.length);v4++){
(v1[v4]) = v3;
}
(v2[0]) = 2.3023e-320;
}
// GenBlkBrick
for(let v0 = 0;(v0) < (0x1000);v0++){
let v1 = new Array(0x10000);
}
function v2(){
let v1 = [];
(v1.length) = 0x100000;
v1.splice(0, 0x11);
(v1.length) = 0xfffffff0;
v1.splice(0xfffffff0, 0, 1);
}
try{
v0();
}catch(v1){
v2(1);
}
function v3(){
let v1 = new Array(1, 2, 3, 4);
v1[('a') + ('')];
}
// GenBlkBrick
for(var v4 = 0;(v4) < (2000);++v4){
function v5(){
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
v0(v3, v4);
}
v10((()=>{
delete v4[0];
v0(v3, v4);
v11(v3[0]);
}), 500);
}
}
try{
v2();
}catch(v1){
v5(1);
}
{
(v2.prototype[('b') + (v4)]) = 0x1234;
}
