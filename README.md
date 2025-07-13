# Star Wars Yıldız Gemileri Uygulaması

Bu proje, [Star Wars API (swapi.tech)](https://sozdar-starwars.netlify.app) üzerinden yıldız gemilerini modern ve tematik bir arayüzle listeleyen, arama yapabilen ve detaylarını gösterebilen bir React uygulamasıdır.

## Özellikler

- **Yıldız Gemileri Listesi:** Tüm Star Wars yıldız gemileri kartlar halinde listelenir.
- **Arama:** Gemilerin adı veya modeliyle arama yapılabilir.
- **Detay Sayfası:** Her karta tıklandığında, o gemiye ait detaylı bilgiler ve büyük görsel açılır.
- **Sayfalama:** "Daha Fazla" butonuyla yeni gemiler yüklenebilir.
- **Modern ve Tematik Tasarım:** Star Wars temalı başlık, koyu arka plan, sarı ve pembe vurgular, glow efektleri, responsive grid.
- **Font:** Başlıkta Star Jedi fontu kullanılmıştır.
- **Kullanıcı Deneyimi:** "Bilinmiyor" veya "undefined" gibi ifadeler gösterilmez, her kart için detay verisi arka planda fetch edilir.

## Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone <repo-url>
   cd star-wars
   ```
2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
3. **Projeyi başlatın:**
   ```bash
   npm run dev
   ```
4. **Uygulamayı açın:**
   Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresine gidin (veya terminalde belirtilen portu kullanın).

## Kullanım

- Ana sayfada üstte Star Wars temalı başlık ve arama kutusu yer alır.
- Kartlar grid şeklinde listelenir, her kartta gemi adı, model ve hız gibi bilgiler bulunur.
- Kartlara tıklayarak detay sayfasına geçebilirsiniz. Detayda büyük görsel ve tüm teknik bilgiler gösterilir.
- Responsive tasarım sayesinde mobilde de rahatça kullanılabilir.

## Görseller

> ![Ana Sayfa ve Kartlar](./docs/screenshot-list.png)
> ![Detay Sayfası](./docs/screenshot-detail.png)

## Notlar
- Başlık için `src/assets/starwars-title.png` görseli ve Star Jedi fontu kullanılmıştır.
- API olarak [swapi.tech](https://swapi.tech/) kullanılmaktadır.
- Tasarımda glow, outline, modern grid ve Star Wars renk paleti öne çıkarılmıştır.

## Katkı
Katkıda bulunmak için fork'layabilir veya pull request gönderebilirsiniz.

---

**Hazırlayan:** [Sizin İsminiz]

May the Force be with you!
