// const symptomMapping = {
//     "asam lambung": 0,
//     "batuk": 1,
//     "bercak di tenggorokan": 2,
//     "berjalan sakit": 3,
//     "berkeringat": 4,
//     "bersin terus menerus": 5,
//     "bibir mengering dan kesemutan": 6,
//     "bicara tidak jelas": 7,
//     "bintik-bintik merah di seluruh tubuh": 8,
//     "dahak": 9,
//     "dahak berkarat": 10,
//     "dahak berlendir": 11,
//     "darah dalam dahak": 12,
//     "debu seperti perak": 13,
//     "dehidrasi": 14,
//     "demam ringan": 15,
//     "demam tinggi": 16,
//     "depresi": 17,
//     "detak jantung cepat": 18,
//     "diare": 19,
//     "gagal hati akut": 20,
//     "gangguan pencernaan": 21,
//     "gangguan visual": 22,
//     "gatal internal": 23,
//     "gerakan berputar": 24,
//     "haid tidak normal": 25,
//     "hidung meler": 26,
//     "hubungan di luar nikah": 27,
//     "iritasi pada anus": 28,
//     "iritasi tenggorokan": 29,
//     "jantung berdebar": 30,
//     "jerawat berisi nanah": 31,
//     "kadar gula tidak teratur": 32,
//     "kaki bengkak": 33,
//     "kecemasan": 34,
//     "kedinginan": 35,
//     "kegelisahan": 36,
//     "kegoyahan": 37,
//     "kehilangan keseimbangan": 38,
//     "kehilangan nafsu makan": 39,
//     "kehilangan penciuman": 40,
//     "kekakuan gerakan": 41,
//     "kelebihan cairan": 42,
//     "kelelahan": 43,
//     "kelemahan otot": 44,
//     "kelemahan pada salah satu sisi tubuh": 45,
//     "kelemahan pada tungkai": 46,
//     "kelenjar getah bening membengkak": 47,
//     "kelesuan": 48,
//     "keluarnya gas": 49,
//     "kemacetan": 50,
//     "kemerahan pada mata": 51,
//     "kenaikan berat badan": 52,
//     "kerak kuning": 53,
//     "ketidaknyamanan kandung kemih": 54,
//     "koma": 55,
//     "komedo": 56,
//     "kram": 57,
//     "kuku rapuh": 58,
//     "kulit kekuningan": 59,
//     "kurangnya konsentrasi": 60,
//     "leher kaku": 61,
//     "letusan kulit nodal": 62,
//     "luka merah di sekitar hidung": 63,
//     "malaise": 64,
//     "mata berair": 65,
//     "mata cekung": 66,
//     "mata menguning": 67,
//     "melepuh": 68,
//     "memar": 69,
//     "menerima suntikan yang tidak steril": 70,
//     "menerima transfusi darah": 71,
//     "menggigil": 72,
//     "mual": 73,
//     "mudah tersinggung": 74,
//     "nafsu makan meningkat": 75,
//     "nyeri dada": 76,
//     "nyeri di belakang mata": 77,
//     "nyeri di daerah anus": 78,
//     "nyeri lutut": 79,
//     "nyeri otot": 80,
//     "nyeri saat buang air besar": 81,
//     "nyeri sendi": 82,
//     "nyeri sendi pinggul": 83,
//     "obesitas": 84,
//     "pembengkakan ekstremitas": 85,
//     "pembengkakan perut": 86,
//     "pembesaran tiroid": 87,
//     "pembuluh darah bengkak": 88,
//     "pembuluh darah yang menonjol di betis": 89,
//     "pendarahan perut": 90,
//     "pengecilan otot": 91,
//     "pengelupasan kulit": 92,
//     "penglihatan kabur dan terdistorsi": 93,
//     "penurunan berat badan": 94,
//     "penyok kecil di kuku": 95,
//     "perasaan terus menerus dari air seni": 96,
//     "perubahan suasana hati": 97,
//     "perut kembung": 98,
//     "poliuria": 99,
//     "pusing": 100,
//     "radang kuku": 101,
//     "rasa lapar yang berlebihan": 102,
//     "rasa terbakar saat berkemih": 103,
//     "riwayat keluarga": 104,
//     "riwayat konsumsi alkohol": 105,
//     "ruam kulit": 106,
//     "sakit kepala": 107,
//     "sakit leher": 108,
//     "sakit perut": 109,
//     "sakit punggung": 110,
//     "sariawan di lidah": 111,
//     "scurring": 112,
//     "sembelit": 113,
//     "sendi bengkak": 114,
//     "sesak napas": 115,
//     "tampilan beracun (tifus)": 116,
//     "tangan dan kaki dingin": 117,
//     "tekanan sinus": 118,
//     "tinja berdarah": 119,
//     "urin berwarna gelap": 120,
//     "urine berwarna kuning": 121,
//     "wajah dan mata bengkak": 122,
//     "0": 123,
//     "bau busuk dari urin": 124,
//     "bercak buang air kecil": 125,
//     "bercak diskromik": 126,
//     "gatal": 127,
//     "muntah": 128,
//     "nyeri perut bagian atas": 129,
//     "perubahan sensorium": 130,
//     "sakit perut bagian tengah": 131
// };

const symptomMapping = {
    '0': 0,
    'asam_lambung': 1,
    'batuk': 2,
    'bau_busuk_dari_urin': 3,
    'bercak_buang_air_kecil': 4,
    'bercak_di_tenggorokan': 5,
    'bercak_diskromik': 6,
    'berjalan_sakit': 7,
    'berkeringat': 8,
    'bersin_terus_menerus': 9,
    'bibir_mengering_dan_kesemutan': 10,
    'bicara_tidak_jelas': 11,
    'bintik-bintik_merah_di_seluruh_tubuh': 12,
    'dahak': 13,
    'dahak_berkarat': 14,
    'dahak_berlendir': 15,
    'darah_dalam_dahak': 16,
    'debu_seperti_perak': 17,
    'dehidrasi': 18,
    'demam_ringan': 19,
    'demam_tinggi': 20,
    'depresi': 21,
    'detak_jantung_cepat': 22,
    'diare': 23,
    'gagal_hati_akut': 24,
    'gangguan_pencernaan': 25,
    'gangguan_visual': 26,
    'gatal': 27,
    'gatal_internal': 28,
    'gerakan_berputar': 29,
    'haid_tidak_normal': 30,
    'hidung_meler': 31,
    'hubungan_di_luar_nikah': 32,
    'iritasi_pada_anus': 33,
    'iritasi_tenggorokan': 34,
    'jantung_berdebar': 35,
    'jerawat_berisi_nanah': 36,
    'kadar_gula_tidak_teratur': 37,
    'kaki_bengkak': 38,
    'kecemasan': 39,
    'kedinginan': 40,
    'kegelisahan': 41,
    'kegoyahan': 42,
    'kehilangan_keseimbangan': 43,
    'kehilangan_nafsu_makan': 44,
    'kehilangan_penciuman': 45,
    'kekakuan_gerakan': 46,
    'kelebihan_cairan': 47,
    'kelelahan': 48,
    'kelemahan_otot': 49,
    'kelemahan_pada_salah_satu_sisi_tubuh': 50,
    'kelemahan_pada_tungkai': 51,
    'kelenjar_getah_bening_membengkak': 52,
    'kelesuan': 53,
    'keluarnya_gas': 54,
    'kemacetan': 55,
    'kemerahan_pada_mata': 56,
    'kenaikan_berat_badan': 57,
    'kerak_kuning': 58,
    'ketidaknyamanan_kandung_kemih': 59,
    'koma': 60,
    'komedo': 61,
    'kram': 62,
    'kuku_rapuh': 63,
    'kulit_kekuningan': 64,
    'kurangnya_konsentrasi': 65,
    'leher_kaku': 66,
    'letusan_kulit_nodal': 67,
    'luka_merah_di_sekitar_hidung': 68,
    'malaise': 69,
    'mata_berair': 70,
    'mata_cekung': 71,
    'mata_menguning': 72,
    'melepuh': 73,
    'memar': 74,
    'menerima_suntikan_yang_tidak_steril': 75,
    'menerima_transfusi_darah': 76,
    'menggigil': 77,
    'mual': 78,
    'mudah_tersinggung': 79,
    'muntah': 80,
    'nafsu_makan_meningkat': 81,
    'nyeri_dada': 82,
    'nyeri_di_belakang_mata': 83,
    'nyeri_di_daerah_anus': 84,
    'nyeri_lutut': 85,
    'nyeri_otot': 86,
    'nyeri_perut_bagian_atas': 87,
    'nyeri_saat_buang_air_besar': 88,
    'nyeri_sendi': 89,
    'nyeri_sendi_pinggul': 90,
    'obesitas': 91,
    'pembengkakan_ekstremitas': 92,
    'pembengkakan_perut': 93,
    'pembesaran_tiroid': 94,
    'pembuluh_darah_bengkak': 95,
    'pembuluh_darah_yang_menonjol_di_betis': 96,
    'pendarahan_perut': 97,
    'pengecilan_otot': 98,
    'pengelupasan_kulit': 99,
    'penglihatan_kabur_dan_terdistorsi': 100,
    'penurunan_berat_badan': 101,
    'penyok_kecil_di_kuku': 102,
    'perasaan_terus_menerus_dari_air_seni': 103,
    'perubahan_sensorium': 104,
    'perubahan_suasana_hati': 105,
    'perut_kembung': 106,
    'poliuria': 107,
    'pusing': 108,
    'radang_kuku': 109,
    'rasa_lapar_yang_berlebihan': 110,
    'rasa_terbakar_saat_berkemih': 111,
    'riwayat_keluarga': 112,
    'riwayat_konsumsi_alkohol': 113,
    'ruam_kulit': 114,
    'sakit_kepala': 115,
    'sakit_leher': 116,
    'sakit_perut': 117,
    'sakit_perut_bagian_tengah': 118,
    'sakit_punggung': 119,
    'sariawan_di_lidah': 120,
    'scurring': 121,
    'sembelit': 122,
    'sendi_bengkak': 123,
    'sesak_napas': 124,
    'tampilan_beracun_(tifus)': 125,
    'tangan_dan_kaki_dingin': 126,
    'tekanan_sinus': 127,
    'tinja_berdarah': 128,
    'urin_berwarna_gelap': 129,
    'urine_berwarna_kuning': 130,
    'wajah_dan_mata_bengkak': 131,
  };

const convertSymptomsToNumeric = (symptoms) => {
    let numericSymptoms = Array(Object.keys(symptomMapping).length).fill(0);
    symptoms.forEach(symptom => {
        if (symptomMapping.hasOwnProperty(symptom.trim())) {
            numericSymptoms[symptomMapping[symptom.trim()]] = 1;
        }
    });
    return numericSymptoms;
};

module.exports = { convertSymptomsToNumeric };