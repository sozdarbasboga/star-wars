const BASE_URL = 'https://swapi.tech/api';

export const starWarsApi = {
  // Yıldız gemilerini getir
  async getStarships(page = 1) {
    try {
      const response = await fetch(`${BASE_URL}/starships/?page=${page}&limit=10`);
      if (!response.ok) {
        throw new Error('Yıldız gemileri yüklenirken hata oluştu');
      }
      const data = await response.json();
      
      // Her gemi için detay bilgilerini al
      const detailedResults = await Promise.all(
        data.results.map(async (starship) => {
          try {
            const detailResponse = await fetch(starship.url);
            if (detailResponse.ok) {
              const detailData = await detailResponse.json();
              return {
                ...starship,
                ...detailData.result.properties
              };
            }
            return starship;
          } catch (error) {
            console.error(`Gemi detayı alınamadı: ${starship.name}`, error);
            return starship;
          }
        })
      );
      
      return {
        results: detailedResults,
        next: data.next,
        previous: data.previous,
        count: data.total_records
      };
    } catch (error) {
      console.error('API Hatası:', error);
      throw error;
    }
  },

  // Yıldız gemisi arama
  async searchStarships(query) {
    try {
      const response = await fetch(`${BASE_URL}/starships/?search=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Arama yapılırken hata oluştu');
      }
      const data = await response.json();
      
      // Yeni API yapısına göre veriyi dönüştür
      return {
        results: data.results,
        next: data.next,
        previous: data.previous,
        count: data.total_records
      };
    } catch (error) {
      console.error('Arama Hatası:', error);
      throw error;
    }
  },

  // Belirli bir yıldız gemisinin detaylarını getir
  async getStarshipDetails(id) {
    try {
      const response = await fetch(`${BASE_URL}/starships/${id}`);
      if (!response.ok) {
        throw new Error('Yıldız gemisi detayları yüklenirken hata oluştu');
      }
      const data = await response.json();
      
      // Yeni API yapısına göre veriyi dönüştür
      if (data.result && data.result.properties) {
        return data.result.properties;
      } else {
        throw new Error('Geçersiz veri formatı');
      }
    } catch (error) {
      console.error('Detay Hatası:', error);
      throw error;
    }
  }
}; 