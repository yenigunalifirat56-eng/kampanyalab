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
