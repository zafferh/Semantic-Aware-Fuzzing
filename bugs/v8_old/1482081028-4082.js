"use asm";
(function v0(v1 = (function (){
print(v0);
})()){
print(v0);
function v0(){
}
})();
var v0 = `onmessage = function(sab) {
    var ta = new Uint8Array(sab);
    var tmp;
    while(1){
        var index = (Math.random() * ta.length | 0) + 1;
        var value = (Math.random() * 256 | 0) + 1;
        //print(index + " " +value);
        tmp=ta[index];
        ta[index]=value;
        for(var i=0;i<value;i++);
        ta[index]=tmp;
    }
  };`;
(v0) = + v0;
function v2(){
for(let v1 = 0;(v1) < (10);v1++){
let v2 = new ArrayBuffer(((1024) * (1024)) * (10));
}
}
if((v0) == (2000)){
var v1 = new Uint32Array(8000);
for(var v3 = 0;(v3) < (v1.length);v3++){
(v1[v3]) = 0x10000000;
}
}
Object.assign(({}), RegExp);
v0++;
