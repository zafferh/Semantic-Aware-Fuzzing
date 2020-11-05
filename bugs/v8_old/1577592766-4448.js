function v0(v1){
return ((v1) ? (- 0) : (0)) - (0);
}
function v1(){
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
setTimeout((()=>{
delete v4[0];
v0(v3, v4);
v11(v3[0]);
}), 500);
}
function v2(){
let v1 = [];
for(let v2 = 0;(v2) < (10000);v2++){
(v1.prototype) = ({});
v0(v1);
}
(v1.prototype) = v1;
v0(v1);
print(v1);
}
if(v0){
const v1 = new v0(v2);
const v4 = new Float32Array(40183);
for(const v6 of v4){
}
}
function v3(){
for(let v1 = 0;(v1) < (2000);v1++){
(v2.prototype) = ({});
let v3 = ({a : 1, b : 2});
v0(v3, ({}));
}
let v3 = ({a : 1, b : 2});
(v2.prototype) = v3;
v0(v3, 0x1234);
print(v3.a);
}
function v4(v1, v2){
(((((v1.length) === (0x7ffffff0)) && (v1[0x7ffffff0])) || (false)) && (((v1.length) === (0x7ffffff0)) && (v1[0x7ffffff1]))) || ((v1[0x11111111]) = 0x1234);
}
v4(v3());
function v5(v1, v2){
(v2[0]) = 1.1;
(v1.a) = v2;
(v2[('leng') + ('th')]) = 0;
(v2[0]) = 2.3023e-320;
}
