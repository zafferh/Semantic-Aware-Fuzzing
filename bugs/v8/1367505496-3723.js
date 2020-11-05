function v0(){
for(let v1 = 0;(v1) < (20);v1++){
new ArrayBuffer(0x2000000);
}
}
var v1 = new Array(1);
(v1.lastIndex) = 0x1234;
function v2(){
let v1 = [];
for(let v2 = 0;(v2) < (100);v2++){
'a'.localeCompare('x', []);
v0(v1, null);
try{
v0(v1, ({toString : (()=>{
throw 1;
})}));
}catch(v4){
}
}
v0(v1, ({toString : (()=>{
(v1[0]) = ({});
})}));
print(v1);
}
var v3 = new Uint8Array(171);
function v4(){
let v1 = new Uint32Array(1);
for(let v3 = 0;(v3) < (10000);v3++){
v2(v1);
}
}
{
v4(v1, []);
}
try{
v4();
}catch(v1){
v2(1);
}
