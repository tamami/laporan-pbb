package lab.aikibo;

import java.math.BigDecimal;
import java.math.BigInteger;

import net.sf.jasperreports.engine.JRDefaultScriptlet;
import net.sf.jasperreports.engine.JRScriptletException;

public class NumberFormat extends JRDefaultScriptlet {
	
	private String abjad;
	
	public String toAbjad(BigDecimal angka) throws JRScriptletException {
		int temp = 0;
		abjad = " RUPIAH";
		int compare;
		
		// bilangan NOL dan Negatif
		compare = angka.compareTo(new BigDecimal("0"));
		if(compare == 0 || compare == -1) {
			return "NOL" + abjad;
		} 
		
		// satuan dan belasan
		compare = angka.compareTo(new BigDecimal("20"));
		if(compare == -1) {
			return getHuruf(angka.intValue()) + abjad;
		}
		
		// puluhan
		compare = angka.compareTo(new BigDecimal("100"));
		if(compare == -1) {
			return prosesPuluhan(angka.intValue()) + abjad;
		}
		
		// ratusan
		compare = angka.compareTo(new BigDecimal("1000"));
		if(compare == -1) {
			return prosesRatusan(angka.intValue()) + abjad;
		}
		
		// ribuan
		compare = angka.compareTo(new BigDecimal("10000"));
		if(compare == -1) {
			return prosesRibuan(angka.intValue()) + abjad;
		}
		
		// puluhan ribu
		compare = angka.compareTo(new BigDecimal("100000"));
		if(compare == -1) {
			return prosesPuluhanRibu(angka.longValue()) + abjad;
		}
		
		// ratusan ribu
		compare = angka.compareTo(new BigDecimal("1000000"));
		if(compare == -1) {
			return prosesRatusanRibu(angka.longValue()) + abjad;
		}
		
		// jutaan
		compare = angka.compareTo(new BigDecimal("10000000"));
		if(compare == -1) {
			return prosesJutaan(angka.longValue()) + abjad;
		}
		
		// puluhan juta
		compare = angka.compareTo(new BigDecimal("100000000"));
		if(compare == -1) {
			return prosesPuluhanJuta(angka.longValue()) + abjad;
		}
		
		// ratusan juta
		compare = angka.compareTo(new BigDecimal("1000000000"));
		if(compare == -1) {
			return prosesRatusanJuta(angka.longValue()) + abjad;
		}
		
		// milyaran
		compare = angka.compareTo(new BigDecimal("10000000000"));
		if(compare == -1) {
			return prosesMilyaran(angka) + abjad;
		}
		
		return abjad;
	}
	
	private String prosesMilyaran(BigDecimal angka) {
		String abjadLokal;
		int temp = angka.divide(new BigDecimal("1000000000")).intValue();
		abjadLokal = getHuruf(temp) + " MILYAR" + prosesRatusanJuta((angka.remainder(new BigDecimal("1000000000")).longValue()));
		return abjadLokal;
	}
	
	private String prosesRatusanJuta(long angka) {
		String abjadLokal;
		int temp = (int) angka / 1000000;
		abjadLokal = prosesRatusan(temp) + " JUTA" + prosesRatusanRibu(angka % 1000000);
		return abjadLokal;
	}
	
	private String prosesPuluhanJuta(long angka) {
		String abjadLokal;
		int temp = (int) angka / 1000000;
		if(temp < 20) {
			abjadLokal = getHuruf((int) (angka / 1000000)) + " JUTA" + prosesRatusanRibu(angka % 1000000);
		} else if(temp >= 20) {
			abjadLokal = prosesPuluhan(temp) + " JUTA" + prosesRatusanRibu(angka % 1000000); 
		} else abjadLokal = "";
		return abjadLokal;
	}
	
	private String prosesJutaan(long angka) {
		String abjadLokal;
		int temp = (int) angka / 1000000;
		abjadLokal = " " + getHuruf(temp) + " JUTA" + prosesRatusanRibu(angka % 1000000);
		return abjadLokal;
	}
	
	private String prosesRatusanRibu(long angka) {
		String abjadLokal;
		int temp = (int) angka / 100000;
		if(temp == 1) {
			abjadLokal = " SERATUS" + prosesPuluhanRibu(angka % 100000);
		} else if(temp > 1) {
			abjadLokal = " " + getHuruf(temp) + " RATUS" + prosesPuluhanRibu(angka % 100000);
		} else {
			abjadLokal = "";
		}
		return abjadLokal;
	}
	
	private String prosesPuluhanRibu(long angka) {
		String abjadLokal;
		int temp = (int) angka / 1000;
		if(angka < 20000) {
			abjadLokal = " " + getHuruf(temp) + " RIBU" + prosesRatusan((int) (angka % 1000));
		} else if(temp >= 1){
			abjadLokal = prosesPuluhan(temp) + " RIBU" + prosesRatusan((int) (angka % 1000));
		} else {
			abjadLokal = "";
		}
		return abjadLokal;
	}
	
	private String prosesRibuan(int angka) {
		String abjadLokal;
		int temp = angka / 1000;
		if(temp == 1) {
			abjadLokal = " SERIBU";
		} else if(temp > 1){
			abjadLokal = " " + getHuruf(temp) + " RIBU";
		} else {
			abjadLokal = "";
		}
		return abjadLokal + prosesRatusan(angka % 1000);
	}
	
	private String prosesRatusan(int angka) {
		int temp;
		String abjadLokal = "";
		temp = angka / 100;
		if(temp == 1) {
			abjadLokal = " SERATUS";
		} else if(temp > 1){
			abjadLokal = " " + getHuruf(temp) + " RATUS"; 
		} else {
			abjadLokal = "";
		}
		return abjadLokal + prosesPuluhan(angka % 100);
	}
	
	private String prosesPuluhan(int angka) {
		int temp = angka / 10;
		String abjadLokal;
		if(temp > 1) {
			abjadLokal = " " + getHuruf(temp) + " PULUH" + prosesSatuan(angka % 10);
		} else {
			abjadLokal = prosesSatuan(angka);
		} 
		return abjadLokal;
	}
	
	private String prosesSatuan(int angka) {
		if(angka >= 1) {
			return " " + getHuruf(angka);
		} else {
			return "";
		}
	}
	
	private String getHuruf(int angka) {
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

}
