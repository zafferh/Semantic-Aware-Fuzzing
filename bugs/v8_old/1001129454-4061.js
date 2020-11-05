function v0(v1){
return v1.r.input;
}
let v1 = new Uint8Array(1024);
function v2(){
(Object.prototype.push) = Array.prototype.push;
for(let v3 = 0;(v3) < (1000);v3++){
let v4 = ({a : 1, b : 2});
v0(v4, ({}));
}
let v6 = ({a : 1, b : 2});
v0(v6, v6);
print(v6.a);
}
v2(1, 0);
(v1[104]) = 0x2a;
{
let v3 = ({a : 1, b : 2});
v0(v3, ({}), ({}));
}
v0.call(v2);
print(Array.prototype.indexOf.call(v1, 0x00, v3));
