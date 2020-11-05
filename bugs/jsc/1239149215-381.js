// GenBlkBrick
for(let v0 = 0;(v0) < (0x10);v0++){
for(let v0 = 0;(v0) < (0x100);v0++){
new Array(0x100).fill(1234.5678);
}
new ArrayBuffer(0x1000000);
}
function v0(v1, v2){
(v1[0]) = v2;
}
var v1 = new Array(0x7fffffff);
var v2 = `onmessage = function(sab) {
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
for(var v3 in v2){
try{
v0(undefined, - 0, ({}));
}catch(v4){
}
try{
new Uint32Array(41902);
}catch(v4){
}
}
for(var v4 in v2){
try{
v0(undefined, - 0, ({}));
}catch(v4){
}
try{
new Uint32Array(41902);
}catch(v4){
}
}
for(let v0 = 0;(v0) < (1000);v0++){
v0(v1, 0, 3);
}
for(var v5 in v2){
try{
v0(undefined, - 0, ({}));
}catch(v4){
}
try{
new Uint32Array(41902);
}catch(v4){
}
}
