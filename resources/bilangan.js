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

    if(angka >= 100000 && angka < 1000000) {
        return prosesRatusanRibu(angka) + abjad;
    }

    if(angka >= 1000000 && angka < 10000000) {  // jutaan
      return prosesJutaan(angka) + abjad;
    }

    if(angka >= 10000000 && angka < 100000000) { // puluhan juta
      return prosesPuluhanJuta(angka) + abjad;
    }

    if(angka >= 100000000 && angka < 1000000000) { // ratusan juta
      return prosesRatusanJuta(angka) + abjad;
    }

    if(angka >= 1000000000 && angka < 10000000000) { // milyaran
      return prosesMilyaran(angka) + abjad;
    }
}    

function prosesMilyaran(angka, tambahan) {
}

function prosesJutaanTigaDigit(angka, tambahan) {
  if(angka > 
}

function prosesRatusanJuta(angka, tambahan) {
  var tempRatusanJuta = Math.floor(angka / 1000000);
  var tempRatusanRibu = angka % 1000000;
  var tempAbjadRatusanJuta;
  var tempAbjadRatusanRibu;

  tempAbjadRatusanJuta = prosesRatusan(tempRatusanJuta, false);

  tempAbjadRatusanRibu = prosesRatusanRibu(tempRatusanRibu, false);

  if(tempRatusanRibu === 0)
    return tempAbjadRatusanJuta + " JUTA";
  else 
    return tempAbjadRatusanJuta + " JUTA " + tempAbjadRatusanRibu;
}

function prosesPuluhanJuta(angka, tambahan) {
  var tempPuluhanJuta = Math.floor(angka / 1000000);
  var tempRatusanRibu = angka % 1000000;
  var tempAbjadPuluhanJuta;
  var tempAbjadRatusanRibu;

  tempAbjadPuluhanJuta = prosesPuluhan(tempPuluhanJuta, false);

  tempAbjadRatusanRibu = prosesRatusanRibu(tempRatusanRibu, false);

  if(tempRatusanRibu === 0)
    return tempAbjadPuluhanJuta + " JUTA";
  else 
    return tempAbjadPuluhanJuta + " JUTA " + tempAbjadRatusanRibu;
}

function prosesJutaan(angka, tambahan) {
  var tempJutaan = Math.floor(angka / 1000000);
  var tempRatusanRibu = angka % 1000000;
  var tempAbjadJutaan;
  var tempAbjadRatusanRibu;

  tempAbjadJutaan = prosesSatuan(tempJutaan, false);

  tempAbjadRatusanRibu = prosesRatusanRibu(tempRatusanRibu, false);

  if(tempRatusanRibu === 0)
    return tempAbjadJutaan.trim() + " JUTA";
  else
    return tempAbjadJutaan.trim() + " JUTA " + tempAbjadRatusanRibu;
}

function prosesRatusanRibu(angka, tambahan) {
  var tempRatusanRibu = Math.floor(angka / 1000);
  var tempRatusan = angka % 1000;
  var tempAbjadRatusanRibu;
  var tempAbjadRatusan;
  
  tempAbjadRatusan = prosesRatusanTigaDigit(tempRatusan, false);

  tempAbjadRatusanRibu = prosesRatusanTigaDigit(tempRatusanRibu, false);
 
  if(tempRatusanRibu > 0 && tempRatusan > 0) 
    return tempAbjadRatusanRibu + " RIBU " + tempAbjadRatusan;
  else if(tempRatusanRibu > 0 && tempRatusan === 0)
    return tempAbjadRatusanRibu + " RIBU";
  else if(tempRatusanRibu === 0 && tempRatusan > 0)
    return tempAbjadRatusan;
  else return "";
}

function prosesPuluhanRibu(angka, tambahan) {
  var tempPuluhanRibu = Math.floor(angka / 1000);
  var tempRatusan = angka % 1000;
  var tempAbjadPuluhanRibu;
  var tempAbjadRatusan;

  tempAbjadRatusan = prosesRatusanTigaDigit(tempRatusan, false);

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

function prosesRatusanTigaDigit(angka, tambahan) {
  if(angka >= 100 && angka < 1000) 
    return prosesRatusan(angka, tambahan);
  else if(angka >= 20 && angka < 100)
    return prosesPuluhan(angka, tambahan);
  else if(angka >= 1 && angka < 20)
    return prosesSatuan(angka, tambahan).trim();
  else return "";
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
