# KampanyaLab v2.0.1

KampanyaLab, reklam bütçesini kampanya hedefi, sektör, hedef kitle ve süreye göre medya kanallarına dağıtan Türkiye odaklı medya planlama simülatörüdür.

## v2.0.1 güncellemesi

- AI Planlayıcı bölümü **Yakında** moduna alındı.
- OpenAI API kota/ödeme hatalarının kullanıcıya görünmesi engellendi.
- AI taslak oluşturma butonu geçici olarak devre dışı bırakıldı.
- `/api/ai-plan.js` endpointi OpenAI çağrısı yapmayacak şekilde pasifleştirildi.
- Normal medya planı motoru, hazır şablonlar, PDF rapor ve hesaplayıcılar çalışmaya devam eder.

## Dosyalar

- `index.html` — Ana sayfa ve uygulama arayüzü
- `style.css` — Tasarım dosyası
- `app.js` — Bütçe dağılımı, grafik, rapor, PDF ve yakında modu mantığı
- `api/ai-plan.js` — AI endpointi, v2.0.1'de pasif yanıt verir
- `robots.txt` — Arama motoru yönlendirmesi
- `sitemap.xml` — Site haritası

## Not

Bu MVP tahmini medya planlama simülasyonudur. Gerçek reklam performansı, gelir veya satış garantisi vermez.


## v2.1 güncellemesi
- Beta ve geri bildirim bölümü eklendi.
- Kullanıcı geri bildirimi veri tabanına gönderilmeden kopyalanabilir metne dönüştürülür.
- Footer ve menüye geri bildirim bağlantısı eklendi.
- AI Planlayıcı yakında modunda kalmaya devam eder.


## v2.3 güncellemesi
- Google Analytics 4 ölçüm etiketi eklendi.
- Measurement ID: G-G4HHWRLYE2
- Ziyaretçi ve sayfa görüntüleme ölçümü Google Analytics üzerinden takip edilebilir.

## v2.3.1 güncellemesi
- Plan oluşturucu artık hazır 50.000 TL / Satış / E-ticaret değerleriyle başlamaz.
- Kullanıcı bütçe, kampanya amacı, sektör, hedef kitle ve süreyi kendisi seçer.
- Plan ve PDF çıktısı yalnızca kullanıcı alanları doldurup plan oluşturduktan sonra oluşur.


## v2.3.2 düzeltmesi
- Kimler kullanabilir bölümü ile hedef kitle seçimi aynı `id` değerini kullandığı için plan oluşturma doğrulaması hatalı çalışıyordu. Bölüm ID'si ayrıştırıldı ve form seçimleri düzeltildi.


## v2.3.3 güncellemesi
- Sayfa yenilendiğinde tarayıcının eski scroll/kaydırma konumunu hatırlaması engellendi.
- Kullanıcı sayfanın neresinde olursa olsun yenilemede sayfa en baştan açılır.
