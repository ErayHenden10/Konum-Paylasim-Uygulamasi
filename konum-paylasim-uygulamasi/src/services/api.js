
export const fakeApi = {
    konumlar: [],
    konumEkle: (konum) => {
      fakeApi.konumlar.push(konum);
      return Promise.resolve({ success: true });
    },
    konumlariAl: () => {
      return Promise.resolve(fakeApi.konumlar);
    },
  };
  
  export const postLocation = (konum) => {
    return fakeApi.konumEkle(konum);
  };
  
  export const getLocations = () => {
    return fakeApi.konumlariAl();
  };
  