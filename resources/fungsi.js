/*
* fungsi merubah jenis angka dan bilangan
* menjadi huruf bacaan
* author    : khairu [at] khairu.net
*/

var satuan = {0:"nol",1:"satu",2:"dua",3:"tiga",4:"empat",5:"lima",6:"enam",7:"tujuh",8:"delapan",9:"sembilan"};
var belasan = {10:"sepuluh",11:"sebelas",12:"dua belas",13:"tiga belas",14:"empat belas",15:"lima belas",16:"enam belas",17:"tujuh belas",18:"delapan belas",19:"sembilan belas"};
var puluhan = {2:"dua puluh",3:"tiga puluh",4:"empat puluh",5:"lima puluh",6:"enam puluh",7:"tujuh puluh",8:"delapan puluh",9:"sembilan puluh"};
var sekala = [
    {name : "sptiliun", size:24},
    {name : "sextiliun", size:21},
    {name : "quintiliun", size:18},
    {name : "quadriliun", size:15},
    {name : "triliun", size:12},
    {name : "milyar", size:9},
    {name : "juta", size:6},
    {name : "ribu", size:3},
    {name : "ratus", size:2}
];

function keKata(num){
    var parts = [], minusStr = "";
    var satuantr = num.toString();
    
    if (satuantr.length<1) { return ""; }
    
    if (satuantr[0] == " ") { minusStr = "minus "; satuantr = satuantr.substring(1); }
    
    for (var i=0; i<sekala.length; i++) {
        var scale = sekala[i];
        if (satuantr.length>scale.size) {
            var mag = satuantr.length-scale.size;
            parts.push(keKata(satuantr.substring(0, mag)) + " " + scale.name);
            satuantr = satuantr.substring(mag).replace(/^[0]+/, '');
        }
    }
    
    num = parseInt(satuantr, 10);
    
    if (num>=20) {
        var puluhantr = puluhan[Math.floor(num/10)];
        if (num%10!==0) {
            puluhantr += " " + satuan[num%10];
        }
        parts.push(puluhantr);
    } else if (num>=10) {
        parts.push(belasan[num]);
    } else if (num>=0) {
        parts.push(satuan[num]);
    }
    
    var lastPart = parts.pop(); return minusStr + (parts.length>0 ? parts.join(", ") + "  " : "") + lastPart;
}
