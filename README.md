# KampanyaLab MVP

KampanyaLab, reklam bütçesini kampanya hedefi, sektör, hedef kitle ve süreye göre medya kanallarına dağıtan Türkiye odaklı medya planlama simülatörüdür.

## Dosyalar

- `index.html` — Ana sayfa, ürün bölümleri ve uygulama arayüzü
- `style.css` — Tasarım dosyası
- `app.js` — Bütçe dağılımı, grafik, rapor, PDF ve hesaplayıcı mantığı
- `robots.txt` — Arama motoru tarama yönergesi
- `sitemap.xml` — Site haritası

## v1.6 güncellemesi

- Ana sayfaya daha profesyonel ürün anlatımı eklendi.
- “Kimler kullanabilir?” bölümü eklendi.
- “Neden farklı?” değer önerisi bölümü eklendi.
- Footer linkleri sadeleştirildi.
- Mobilde yeni ürün bölümleri için responsive düzen eklendi.

## Önceki büyük özellikler

- v1.3: Profesyonel medya planı motoru
- v1.4: PDF rapor sistemi
- v1.5: Hazır kampanya şablonları
- v1.5.1: Yazdırma görünümü düzeltmesi

## Çalıştırma

Dosyaları bir klasöre çıkarıp `index.html` dosyasını tarayıcıda açman yeterli.

## Yayına alma

GitHub'a dosyaları yükledikten sonra Vercel otomatik deploy alır. Domain Turhost DNS üzerinden Vercel'e bağlıdır.

## Not

Bu MVP tahmini medya planlama simülasyonudur. Gerçek reklam performansı, gelir veya satış garantisi vermez.


## v2.0 güncellemesi
- AI destekli kampanya planlayıcı eklendi.
- `/api/ai-plan.js` Vercel Serverless Function eklendi.
- OpenAI API anahtarı `OPENAI_API_KEY` environment variable olarak kullanılacak şekilde ayarlandı.
- AI brief alanı, güvenlik uyarısı, kopyalama ve hata yönetimi eklendi.

### Vercel Environment Variable
Vercel panelinde proje ayarlarına şu değişken eklenmelidir:

```text
OPENAI_API_KEY=senin_api_key_degerin
```

İsteğe bağlı model değiştirme için:

```text
OPENAI_MODEL=gpt-4.1-mini
```

API anahtarını GitHub’a, `app.js` içine veya frontend dosyalarına koyma.

## v1.7 güncellemesi
- Mobil menü eklendi ve küçük ekranlarda navigasyon iyileştirildi.
- Bütçe alanına doğrulama ve kullanıcı uyarısı eklendi.
- Klavye odağı, erişilebilirlik ve azaltılmış hareket desteği iyileştirildi.
- Mobilde tablo kaydırma ipucu ve buton yerleşimleri düzenlendi.
- Yazdırma çıktısında gereksiz mobil/yardım elemanları gizlendi.


## v1.7.1 güncellemesi
- Mobilde sayfanın sağ tarafında beyaz boşluk oluşturan yatay taşma sorunu düzeltildi.
- Hero, bölüm ve tablo alanları küçük ekranlarda ekran genişliğine sabitlendi.


## v1.7.2 güncellemesi
- Mobil menünün hero yazılarıyla üst üste binmesi düzeltildi.
- Mobil menü ayrı, koyu ve opak bir panel olarak açılır.
- Menü açıkken arka plan kaydırması kilitlenir.
- Menü dışına tıklayınca veya link seçince menü kapanır.
