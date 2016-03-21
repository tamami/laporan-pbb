function toAbjad(angka) {
    temp = 0;
    abjad = " RUPIAH";
    
    if(angka <= 0) {
        return "NOL " + abjad;
    }
    
    if(angka > 0 && angka < 20) {
        data = getHuruf(angka) + abjad;
        return data;
    }
    
    if(angka >= 20 && angka < 100) {
        return prosesPuluhan(angka) + abjad;
    }
}    
    
function prosesPuluhan(angka) {
    int temp = angka / 10;
    
}

function getHuruf(angka) {
    switch(angka) {
        case 1: return "SATU";
        case 2: return "DUA";
        case 3: return "TIGA";
        case 4: return "EMPAT";
        case 5: return "LIMA";
        case 6: return "ENAM";
        case 7: return "TUJUH";
        case 8: return "DELAPAN";
        case 9: return "SEMBILAN";
        case 10: return "SEPULUH";
        case 11: return "SEBELAS";
        case 12: return "DUA BELAS";
        case 13: return "TIGA BELAS";
        case 14: return "EMPAT BELAS";
        case 15: return "LIMA BELAS";
        case 16: return "ENAM BELAS";
        case 17: return "TUJUH BELAS";
        case 18: return "DELAPAN BELAS";
        case 19: return "SEMBILAN BELAS";
        default: return "";
    }
}

function prosesSatuan(angka) {
    if(angka >= 1) {
        return " " + getHuruf(angka);
    } else {
        return "";
    }
}
