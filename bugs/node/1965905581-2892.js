var v0 = (function (){
var v1 = ({a : ({}), b : ({ba : ({baa : 0, bab : []}), bb : ({}), bc : ({bca : ({bcaa : 0, bcab : 0, bcac : this})})})});
(v1.b.bc.bca.bcab) = 0;
(v1.b.bb.bba) = Array.prototype.slice.apply(v1.b.ba.bab);
});
(v1) = new Array(0x10);
// GenBlkBrick
for(var v2 = 0;(v2) < (1000000);v2++){
var v3 = new WebAssembly.Memory(({initial : 1, maximum : 1}));
var v4 = `onmessage = function(sab) {
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
}
{
v0.apply(null, v1);
}
(v1[v2]) = 123.123;
v0.apply(null, v1);
var v5 = v0();
var v6 = ((v1)=>{
v1();
});
