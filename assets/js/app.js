// NOT: AŞAĞIDA TÜM ÖRNEKLERDE KULLANILAN "+ "<br />"" ETİKETİ SATIRLARI BİR ALTA KAYDIRMAK İÇİN KULLANILMIŞTIR.
// DEĞİŞKENLER
var degisken1   = "MUHAMMET N. ";                                                         /*DEĞİŞKEN ATAMASI OLARAK KULLANILIR. ÇİFT TIRNAK*/
var degisken    = 'AKINCI ';                                                               /*DEĞİŞKEN ATAMASI OLARAK KULLANILIR. TEK TIRNAK ÜSTTEKİ İLE AYNIDIR İKİ TÜRLÜ DE KULLANILABİLİR.*/
var kacirma     = 'Dünyada ve Türkiye\'de en çok kullanılan Script dili JavaScript\'tir. ' /*TEK TIRNAKLA BAŞLAYIP TEK TIRNAKLA BİTTİĞİ İÇİN ARADAKİ TEK TIRNAKLARI KAÇIRMAK İÇİN MUTLAKA TERS SLASH ( \ ) KULLANILIR.*/
var rakam       = 10  ;                                                                    /*SAYI ATAMASI OLARAK KULLANILIR. TIRNAKLI KULLANILIRSA RAKAM DEĞİL METİN GÖRÜNÜMÜNDE AYNI DEĞERİ VERECEKTİR. ALTTAKİ DEĞİŞKEN*/
var sayi        = "10 ";                                                                    /*SAYIYI STRİNG (METİN,ÖZEL KARAKTERLER VS. GİBİ) İFADE OLARAK KULLANIR. AYNI İFADE TEK TIRKANKLA'DA ('') KULLANILABİLİR.*/
document.write(degisken1, degisken, kacirma, rakam, sayi + "<br />");                       /*ÜSTTEKİ DEĞİŞKENLERİ EKRANA YAZDIRIR.*/

// BİR VEYA BİRDEN FAZLA DEĞİŞKENİ BAŞKA BİR DEĞİŞKENE AKTARMA.
// BİR DEĞİŞKENİ BAŞKA BİR DEĞİŞKENE AKTARMA.
var degisken1 = "MUHAMMET N.";            /*DEĞİŞKEN ATAMASI YAPILDI.*/
var isim      = degisken1;                /*DEĞİŞKEN ATAMASI YAPILDI VE DEĞİŞKENE ÜSTTEKİ DEĞİŞKENİN İSMİ VERİLDİ.*/
document.write(isim + "<br />");          /*DEĞİŞKEN İSMİ "degisken1" OLANIN İÇERİĞİNİ EKRANA YAZDIRDI.*/

// BİRDEN FAZLA DEĞİŞKENİ BAŞKA BİR DEĞİŞKENE AKTARMA.
var degisken1 = "DEGİSKENİ ATADIM. ";
var degisken2 = "İKİNCİ DEGİSKENİ ATADIM.";
var sonuc     = degisken1 + degisken2; /*DEĞİŞKEN İSMİ "degisken1" OLANIN İÇERİĞİNİ EKRANA YAZDIRDI. ARADAKİ ARTI BUTONU İKİ DEĞİŞKENİ DE SEÇEBİLMEK İÇİN KULLANILIR.*/
document.write(sonuc + "<br />");  /*DEĞİŞKEN İSMİ "sonuc" OLANIN İÇERİĞİNİ EKRANA YAZDIRDI.*/

// SAYISAL DEĞERLERLE VERİLERİ BİRLEŞTİRME
var degisken1 = 10 ;                    /*1.SAYI DEĞİŞKENİ. DEĞİŞKENİN DEĞERİNİ TIRNAK İÇİNE ALARAK YAZMADIĞIMIZ İÇİN SAYI OLARAK KABUL ETTİ*/
var degisken2 = 15 ;                    /*2.SAYI DEĞİŞKENİ. DEĞİŞKENİN DEĞERİNİ TIRNAK İÇİNE ALARAK YAZMADIĞIMIZ İÇİN SAYI OLARAK KABUL ETTİ*/
var sonuc     = degisken1 + degisken2;  /*SONUÇ DEĞİŞKENİ. DEĞİŞKEN ADI "deneme1" ve "deneme2" OLAN DEĞERLERİ "+" İŞARETİYLE "sonuc" DEĞİŞKENİNE AKTARDIK.*/
document.write(sonuc + "<br />");       /*DEĞİŞKENİ "sonuc" OLAN DEĞERLERİ EKRANA YAZDIRMAK İSTEDİK. SAYI DEĞERİ OLDUĞU İÇİN EKRAN ÇIKTISI İKİSİNİN TOPLAMI OLAN "25" SAYISINI YAZDIRDI.*/
                                        /*NOT: YUKARIDAKİ SAYI DEĞERLERİNİ ÇİFT TIRNAK ("") VEYA TEK TIRNAK ('') İLE YAZMAK İSTESEYDİK EKRANA "10 15" ÇIKTISINI VERECEKTİ.*/

// TEK BİR İFADEYLE BİRDEN FAZLA DEĞİŞKEN TANIMLAMAK
var degisken1 = "MUHAMMET ", degisken2 = "NUR ", degisken3 = "AKINCI";  /*KULLANILAN VİRGÜL "," İLE TEK SATIRDA 3 ADET DEĞİŞKEN TANIMLAMIŞ OLDUK.*/
document.write(degisken1 + degisken2 + degisken3 + "<br />" );          /*KULLANILAN ARTI "+" İLE TANIMLADIĞIMIZ 3 ADET DEĞİŞKENİ EKRANA YAZDIRDIK.*/

// TEK BİR SATIRDA BİRDEN FAZLA DEĞİŞKENE TEK BİR DEĞER ATAMAK
var degisken1 = degisken2 = degisken3 = "3 DEĞİŞKENE AYNI DEĞER ATADIM.";            /* DEĞİŞKEN İSİMLERİNDEN SONRA KULLANILAN EŞİTTİR "=" İŞARETİ GİRİLEN İÇERİĞİN 3 ÜNE DE AYNI DEĞERİ VERMEK İÇİN KULLANILDI. İ*/
document.write(degisken1 + "<br />" + degisken2 + "<br />" + degisken3 + "<br />");  /*KULLANILAN ARTI "+" İLE TANIMLADIĞIMIZ 3 ADET DEĞİŞKENİ EKRANA YAZDIRDIK.*/

// GLOBAL VE LOKAL KAPSAMA ALANLARI





// JAVASCRIPT KİTABINDAKİ ÖNEMLİ BİLGİLER BİLGİLER
  // GİRİŞ İLK JAVASCRIPT KODLARI
    var i = 10;
    var j = 5;
    var carpma  = i * j;
    var toplama = i + j;
    var bolme   = i / j;
    var kalan   = i % j;
    document.write(carpma + "<br />");

    // KONSOL SEKMESİ - KONSOL EKRANINA DEĞİŞKENLERİN SONUÇLARI YAZILIR.
    var i = 10;
    var j = 5;
    var carpma  = i * j;
    var toplama = i + j;
    var bolme   = i / j;
    var kalan   = i % j;
    console.log("carpma:" + carpma);
    console.log("toplama:" + toplama);
    console.log("bolme:" + bolme);
    console.log("kalan" + kalan);

     // HTML5 GLOBAL ATTRIBUTES (ÖZNİTELİKLER)
     // accsesskey                     : HTML ELEMANINA KLAVYE KISAYOLU EKLEMEK İÇİN KULLANILIR.
     // class                          : HTML ELEMANINA SINIF TANIMLAMAK İÇİN KULLANILIR. BİRDEN FAZLA class DEĞERİ EKLENEBİLİR.
     // contenteditable : true, false  : ELEMAN İÇERİĞİNİN DÜZENLENEBİLİR OLUP OLMADIĞINI AYARLAMAK İÇİN KULLANILIR.
                                      /*  "true"   DEĞERİ VERİLİRSE ELEMAN İÇERİĞİ KULLANICI TARAFINDAN DÜZENLENEBİLİR,
                                          "false"  DEĞERİ VERİLİRSE ELEMAN İÇERİĞİ KULLANICI TARAFINDAN DÜZENLENEMEZ.
                                          ÖNEMLİ NOT: EĞER BU ATTRIBUTE BİR ELEMANA ATANMIŞSA KALITSAL OLARAK ELEMANIN İÇİNDE BULUNAN ALT ELEMANLARA GEÇER. BU ATTRIBUTE'Ü DEĞERİ İLE BERABER KULLANMAK ŞARTTIR.*/
     // contextmenu                    : BİR ELEMANI MENU ELEMANI İLE İLİŞKİLENDİRMEK İÇİN KULLANILIR.
     // dir : ltr, rtl, auto           : HTML ELEMANININ İÇERDİĞİ METNİ YAZILIŞ YÖNÜ AYARLAMAK İÇİN KULLANILIR. ltr: Left To Right, rtl: Right To Left, auto DEĞERLERİNDEN BİRİ İLE KULLANILIR.
     // draggable : true, false, auto  : BİR HTML ELEMANININ SÜRÜKLENEBİLİR OLUP OLMAYACAĞINI AYARLAMAK İÇİN KULLANILIR.
                                      /* true DEĞERİNİ ALIRSA ELEMAN KULLANICI TARAFINDAN SÜRÜKLENEBİLİR.
                                         false DEĞERİNİ ALIRSA ELEMAN KULLANICI TARAFINDAN SÜRÜKLENEMEZ.
                                         auto DEĞERİNİ ALIRSA YUKARIDAKİ DEĞERLERDEN BİRİ KULLANILMAMIŞSA TARAYICI KENDİ VARSAYILAN DEĞERİNİ KULLANIR.*/
     // dropzone:copy, move, link      : SÜRÜKLE BIRAK İŞLEMLERİNDE, BIRAKMA ESNASINDA TARAYICI DAVRANIŞINI TANIMLAMAK İÇİN KULLANILIR.
                                      /* copy DEĞERİ ALIRSA SÜRÜKLEME İŞLEMİNİN BİTTİĞİ YERDE SÜRÜKLENEN VERİLERİN KOPYASI OLUŞUR.
                                         move DEĞERİ ALIRSA SÜRÜKLENEN VERİ SÜRÜKLEME İŞLEMİNİN BİTTİĞİ YERE TAŞINIR.
                                         link DEĞERİ ALIRSA SÜRÜKLEME İŞLEMİNİN BİTTİĞİ YERDE SÜRÜKLENEN DATAYA BİR KÖPRÜ OLUŞTURUR.*/
    // id                              : BENZERSİZ KİMLİKTİR. JAVASCRIPT İLE İD ÖZELLİĞİNE DEĞER ATANMIŞ ELEMANLARA ULAŞABİLİR VE ÇALIŞMA ALANINDA BU ELMANIN STİL VE YAPISAL ÖZELLİKLERİNİ DEĞİŞTİREBİLİRİZ.
    // lang                            : HTML ELEMANLARININ İÇİNDEKİ METİNLERİN YA DA ÖZELLİKLERİNE ALDIKLARI DEĞERLERİN DİLİNİ AYARLAMAK İÇİN KULLANILIR. TÜRKÇE: TR ALMANCA DE İNGİLİZCE EN GİBİ.
    // spellllcheck: true, false       : EĞER TRUE DEĞERİ ALMIŞSA ELEMAN DİLBİLGİSİ VE YAZIM HATALARI KONTROL EDİLİR.
                                      /* ÖRNEĞİN: textarea, input ya da contenteditable="true" DEĞERİNİ ALMIŞ DİĞER ELEMANLAR GİBİ.*/
    // style                           : BU İFADEYLE SATIR İÇİ CSS KODLARI YAZILIR. CSS KODLARI İÇİNDE EN ÖNCELİKLİ TANIMLAMALAR OLMASINI SAĞLAR.
    // tabindex                        : HTML ELEMANI İÇİN SEKME SIRASINI AYARLAR.
    // title                           : HTML ETİKETİNE BİLGİ VE AÇIKLAMA EKLEMEK İÇİN KULLANILIR.
    // hidden                          : HTML ELEMANINI GİZLEMEK İÇİN KULLANILIR.

    //JAVASCRIPT GLOBAL ATTRIBUTES (ÖZNİTELİKLER)
    // src    : HARİCİ BİR SCRIPT DOSYASINI BELGEYE DAHİL ETMEK İÇİN KULLANILIR.
    // async  : BOOLEAN TİPİ ATTRIBUTE: HARİCİ JAVASCRIPT DOSYASINDAKİ KODLARIN ASENKTRON OLARAK ÇALIŞMASINI SAĞLAR.
    // defer  : BOOLEAN TİPİ ATTRIBUTE: HARİCİ BİR JAVASCRIPT DOSYASINDAKİ KODLAR SAYFA YÜKLENDİKTEN SONRA ÇALIŞTIRILMASINI SAĞLAR. YALNIZCA SRC KULLANILMIŞSA UYGULANABİLİR.
    // type   : MIME_type: SCRIPT ELEMANININ İÇERİK TİPİNİ TANIMLAMAK İÇİN KULLANILIR.
    // charset: KARAKTER SETİ ADI. KARAKTER KÜMESİNİN TANIMI İÇİN KULLANILIR.
    // BOOLEAN TÜRÜNDEN ATTRIBUTE OLDUĞUNU BELİRTMEK İÇİN AŞAĞIDAKİ SÖZ DİZİMLERİ KULLANILIR.
              /*
              <eleman boolAttribute>
              <eleman boolAttribute="boolAttribute">
              <eleman boolAttribute=boolAttriute>
               */

    // JAVASCRIPT KODLARINI ESKİ SÜRÜM TARAYICILARDAN SAKLAMA
      /*
          <!--
          function mesaj ()
          {
            alert("merhaba");
          }
          -->
      */
