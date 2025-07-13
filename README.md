# Star Wars Yıldız Gemileri Uygulaması

Bu proje, Star Wars API (SWAPI) kullanarak yıldız gemilerini listeleyen, arama yapabilen ve detaylarını görüntüleyebilen modern bir React uygulamasıdır.

## Özellikler

- 🌟 **Yıldız Gemileri Listesi**: Tüm yıldız gemilerini görüntüleme
- 🔍 **Arama Fonksiyonu**: Ad veya modele göre arama yapma
- 📄 **Detay Sayfası**: Her yıldız gemisinin detaylı bilgilerini görüntüleme
- ⬇️ **Daha Fazla Yükleme**: Sayfalama ile daha fazla gemi yükleme
- 📱 **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- 🎨 **Modern UI**: Star Wars temasına uygun tasarım

## Teknik Özellikler

- **React 19**: En son React sürümü
- **Vite**: Hızlı geliştirme ortamı
- **CSS3**: Modern CSS özellikleri ve animasyonlar
- **Fetch API**: HTTP istekleri için
- **Responsive Design**: Tüm cihazlarda uyumlu

## Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd star-wars
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:5173` adresini açın.

## Kullanım

### Ana Sayfa
- Uygulama açıldığında tüm yıldız gemileri listelenir
- Her gemi kartında temel bilgiler (ad, model, hız, yolcu kapasitesi) görüntülenir
- "Daha Fazla Yükle" butonu ile daha fazla gemi yükleyebilirsiniz

### Arama
- Üst kısımdaki arama çubuğunu kullanarak gemi adı veya modeline göre arama yapabilirsiniz
- Arama sonuçları anında görüntülenir
- "Temizle" butonu ile aramayı sıfırlayabilirsiniz

### Detay Sayfası
- Herhangi bir gemi kartına tıklayarak detay sayfasına gidebilirsiniz
- Detay sayfasında şu bilgiler bulunur:
  - Genel bilgiler (model, üretici, sınıf, maliyet)
  - Teknik özellikler (uzunluk, hız, hiperdrive sınıfı)
  - Kapasite bilgileri (mürettebat, yolcu, kargo)
  - Pilotlar ve göründüğü filmler (varsa)
- "Geri Dön" butonu ile ana sayfaya dönebilirsiniz

## API Kullanımı

Uygulama [Star Wars API (SWAPI)](https://swapi.tech/) kullanmaktadır:

- **Starships Endpoint**: `/api/starships/`
- **Search Endpoint**: `/api/starships/?search={query}`
- **Detail Endpoint**: `/api/starships/{id}/`

## Proje Yapısı

```
src/
├── components/
│   ├── SearchBar.jsx          # Arama çubuğu
│   ├── StarshipCard.jsx       # Gemi kartı
│   ├── StarshipDetail.jsx     # Detay sayfası
│   ├── LoadMoreButton.jsx     # Daha fazla yükleme butonu
│   └── *.css                  # Bileşen stilleri
├── services/
│   └── starWarsApi.js         # API servisleri
├── App.jsx                    # Ana uygulama bileşeni
├── App.css                    # Ana uygulama stilleri
└── index.css                  # Global stiller
```

## Geliştirme

### Yeni Özellik Ekleme
1. Yeni bileşen oluşturun: `src/components/NewComponent.jsx`
2. Stil dosyası ekleyin: `src/components/NewComponent.css`
3. Ana uygulamaya entegre edin

### API Geliştirmeleri
- `src/services/starWarsApi.js` dosyasında yeni endpoint'ler ekleyebilirsiniz
- Hata yönetimi ve loading state'leri mevcuttur

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## İletişim

Sorularınız için issue açabilir veya pull request gönderebilirsiniz.

---

**May the Force be with you!** 🌟
