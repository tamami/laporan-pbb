function getHello() {
  return "Hello brow!";
}

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

    if(angka >= 100 && angka < 1000) {
        return prosesRatusan(angka) + abjad;
    }

    if(angka >= 1000 && angka < 10000) {
        return prosesRibuan(angka) + abjad;
    }

    if(angka >= 10000 && angka < 100000) {
        return prosesPuluhanRibu(angka) + abjad;
    }
}    

function prosesRatusanRibu(angka, tambahan) {
  var tempRatusanRibu = Math.floor(angka / 1000);
  var tempRibuan;
  

  
  if(tambahan) {
    return prosesRatusan(tempRatusanRibu, false) + " RIBU" + prosesRibuan(angka % 1000, true);
  } else {
    return (prosesRatusan(tempRatusanRibu, false) + " RIBU" + prosesRibuan(angka % 1000, true));
  }
}

function prosesPuluhanRibu(angka, tambahan) {
  var tempPuluhanRibu = Math.floor(angka / 1000);
  var tempRatusan = angka % 1000;
  var tempAbjadPuluhanRibu;
  var tempAbjadRatusan;

  if(tempRatusan >= 100 && tempRatusan < 1000) {
    tempAbjadRatusan = prosesRatusan(tempRatusan, false);
  } if(tempRatusan >= 20 && tempRatusan < 100) {
    tempAbjadRatusan = prosesPuluhan(tempRatusan, false).trim();
  } else if(tempRatusan < 20) {
    tempAbjadRatusan = prosesSatuan(tempRatusan, false).trim();
  }

  if(tempPuluhanRibu >= 20) {
    tempAbjadPuluhanRibu = prosesPuluhan(tempPuluhanRibu, false);
  } else {
    tempAbjadPuluhanRibu = prosesSatuan(tempPuluhanRibu, false);
  }

  if(tambahan) {
    return tempAbjadPuluhanRibu + " RIBU " + tempAbjadRatusan;
  } else return (tempAbjadPuluhanRibu + " RIBU " + tempAbjadRatusan).trim();
}

function prosesRibuan(angka, tambahan) {
  var abjadLokal;
  var temp = Math.floor(angka / 1000);
  if(temp === 1) {
    abjadLokal = " SERIBU";
  } else if(temp > 1) {
    abjadLokal = " " + prosesSatuan(temp) + " RIBU";
  }

  if(tambahan) 
    return abjadLokal + prosesRatusan(angka % 1000, true);
  else 
    return (abjadLokal + prosesRatusan(angka % 1000, true)).trim();
}

function prosesRatusan(angka, tambahan) {
  var temp;
  var abjadLokal = "";
  temp = Math.floor(angka / 100);
  if(temp === 1) {
    abjadLokal = " SERATUS";
  } else if(temp > 1) {
    abjadLokal = prosesSatuan(temp) + " RATUS";
  } 
  if(tambahan) 
    return abjadLokal + prosesPuluhan(angka % 100, true);
  else  
    return (abjadLokal + prosesPuluhan(angka % 100, true)).trim();
}
    
function prosesPuluhan(angka,tambahan) {
    var temp = Math.floor(angka / 10);
    var abjadLokal;
    if(temp  > 1) {
      abjadLokal = " " + getHuruf(temp) + " PULUH" + prosesSatuan(angka % 10);
    } else {
      abjadLokal = prosesSatuan(angka);
    }
    if(tambahan)
      return abjadLokal;
    else
      return (abjadLokal).trim();
}

function prosesSatuan(angka) {
  if(angka >= 1) {
    return getHuruf(angka);
  } else {
    return "";
  }
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
