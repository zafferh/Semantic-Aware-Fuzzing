// GenBlkBrick
for(var v0 = 1;(v0) < (10);v0++){
if(('caller') > (! 65537)){
break ;
}
}
(v1) = 22547;
(function (){
;
"use strict";
for(var v0 = 0;((v1) >>> (v0)) && ((v0) < (6));++v0){
print(v1);
}
;
;
})();
for(var v2 = 0;(v2) < (v1);v2++){
(v3) = (1) << ((31) - (v2));
(v0) = (v0) | (v3);
}
// GenBlkBrick
for(var v4 = 0;;v4++){
for(var v5 = 0;(v5) < (1);++v5){
var v6 = v5;
}
}
(v1) = ((40432) - (((- 58135) == (v5)) ? (v1) : ((v5) ^ (58068)))) | (((38023) + (v6)) & (v5));
v7:
switch((/x/) !== (true)){
}

function v8(){
var v1 = ({get : (function (v2, v3){
print(('getTrap, property : ') + (v3));
if((v3) == ('foo123')){
return (function (){
print('foo called');
return 23;
});
}
return Reflect.get(v2, v3);
}), has : (function (v2, v3){
print(('hasTrap, property : ') + (v3));
return Reflect.has(v2, v3);
}), deleteProperty : (function (v2, v3){
print(('deleteTrap, property : ') + (v3));
return Reflect.deleteProperty(v2, v3);
})});
var v6 = 'foo123';
var v7 = 'bar123';
var v8 = ({});
var v9 = new Proxy(v8, v1);
Reflect.has(v9, 'p1');
('p2') in (v9);
Reflect.deleteProperty(v9, 'p3');
typeof v9[v7];
v9[v6]();
}
