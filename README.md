# KampanyaLab MVP

KampanyaLab, reklam bütçesini kampanya hedefi, sektör, hedef kitle ve süreye göre medya kanallarına dağıtan Türkiye odaklı medya planlama simülatörüdür.

## Dosyalar

- `index.html` — Ana sayfa ve uygulama arayüzü
- `style.css` — Tasarım dosyası
- `app.js` — Bütçe dağılımı, grafik, rapor ve hesaplayıcı mantığı
- `robots.txt` — Arama motoru tarama yönergesi
- `sitemap.xml` — Site haritası

## v1.3 güncellemesi

- Profesyonel medya planı motoru eklendi.
- Bütçe seviyesine göre önerilen kanal sayısı otomatik azaltılıp artırıldı.
- Sonuç ekranına bütçe seviyesi, kanal sayısı ve plan odağı özeti eklendi.
- Tahmini CTR ve ortalama CPM istatistikleri eklendi.
- Kanal tablosuna rol, gösterim, tıklama, CPM/CPC detayları eklendi.
- Risk, optimizasyon ve kreatif önerisi kartları eklendi.
- Kanal açıklamaları bölümü eklendi.

## Çalıştırma

Dosyaları bir klasöre çıkarıp `index.html` dosyasını tarayıcıda açman yeterli.

## Not

Bu MVP tahmini medya planlama simülasyonudur. Gerçek reklam performansı garanti etmez.


## v1.4 güncellemesi
- PDF raporu indirme sistemi eklendi.
- PDF içinde kampanya özeti, performans metrikleri, kanal dağılımı, strateji raporu ve haftalık uygulama planı yer alır.
- PDF oluşturma için html2pdf.js CDN'i kullanılır; kütüphane yüklenemezse yazdırma/PDF olarak kaydetme seçeneğine geri döner.
- Sonuç ve rapor alanına ayrı PDF indirme butonları eklendi.


## v1.4.1 güncellemesi
- PDF çıktısında boş sayfa oluşmasına yol açabilen sayfa kırılımı ayarı düzeltildi.
- PDF tabloları ve kartlarında sayfa geçişleri daha kontrollü hale getirildi.


## v1.4.2 güncellemesi
- PDF oluşturma sistemi html2pdf yerine pdfmake ile yeniden yazıldı.
- Boş sayfa sorunu giderildi.
- PDF raporu tablo ve metin bazlı daha stabil hale getirildi.
