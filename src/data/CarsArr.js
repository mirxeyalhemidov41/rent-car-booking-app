export const Cars = JSON.parse(localStorage.getItem("adminCar")) || [];

export const carsData = [
  {
    id: 1,
    name: "Audi A6",
    price: 130,
    fuel: "Benzin",
    transmission: "Avtomat",
    seats: 5,
    year: 2023,
    engine: "2.0L",
    image:
      "https://images.dealer.com/ddc/vehicles/2023/Audi/A6/Sedan/still/front-left/front-left-640-en_US.jpg",
    isPopular: true,
  },
  {
    id: 2,
    name: "BMW X5",
    price: 180,
    fuel: "Dizel",
    transmission: "Avtomat",
    seats: 7,
    year: 2024,
    engine: "3.0L",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2024-bmw-x5-m60i-134-6602d491051b2.jpg?crop=0.686xw:0.514xh;0.152xw,0.341xh&resize=1200:*",
    isPopular: true,
  },
  {
    id: 3,
    name: "Mercedes E Class",
    price: 150,
    fuel: "Benzin",
    transmission: "Avtomat",
    seats: 5,
    year: 2023,
    engine: "2.0L",
    image:
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg",

    isPopular: true,
  },
  {
    id: 4,
    name: "Toyota Camry",
    price: 90,
    fuel: "Benzin",
    transmission: "Avtomat",
    seats: 5,
    year: 2022,
    engine: "2.5L",
    image:
      "https://www.carpro.com/hubfs/2022-toyota-camry-trd-feature-carprousa..png",

    isPopular: false,
  },
  {
    id: 5,
    name: "Hyundai Tucson",
    price: 100,
    fuel: "Benzin",
    transmission: "Avtomat",
    seats: 5,
    year: 2024,
    engine: "1.6L",
    image: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",

    isPopular: false,
  },
  {
    id: 6,
    name: "Kia Sportage",
    price: 95,
    fuel: "Benzin",
    transmission: "Avtomat",
    seats: 5,
    year: 2023,
    engine: "2.0L",
    image:
      "https://baycitymitsubishi.co.nz/wp-content/uploads/2023/10/2023-Kia-Sportage-X-Line-QDR92-1.jpg",

    isPopular: false,
  },
  {
    id: 7,
    name: "Chevrolet Camaro",
    price: 220,
    fuel: "Benzin",
    transmission: "Avtomat",
    seats: 4,
    year: 2022,
    engine: "6.2L",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2019-chevrolet-camaro-2-0t-1le-6mt-109-1539790971.jpg?crop=0.641xw:0.589xh;0.359xw,0.335xh&resize=2048:*",

    isPopular: true,
  },
  {
    id: 8,
    name: "Range Rover Sport",
    price: 250,
    fuel: "Dizel",
    transmission: "Avtomat",
    seats: 5,
    year: 2024,
    engine: "3.0L",
    image:
      "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/9004500a220bf3a3d455d15ee052cf8c332606f8/photos/exterior/3qooLdOa-VuO_Z3_Xx_x/edit/3XzDq.jpg?t=173328528678",

    isPopular: true,
  },
  {
    id: 9,
    name: "Porsche Cayenne",
    price: 280,
    fuel: "Benzin",
    transmission: "Avtomat",
    seats: 5,
    year: 2024,
    engine: "4.0L",
    image:
      "https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/pZlI7z5dOh8bR0GVTmnvYzzIdjSWNXInpagXLIuX.jpg",

    isPopular: true,
  },
  {
    id: 10,
    name: "Lexus RX 350",
    price: 170,
    fuel: "Hibrid",
    transmission: "Avtomat",
    seats: 5,
    year: 2023,
    engine: "2.5L",
    image:
      "https://dealerimages.dealereprocess.com/image/upload/2907763",
    isPopular: false,
  },
  {
    id: 11,
    name: "Volkswagen Passat",
    price: 85,
    fuel: "Dizel",
    transmission: "Avtomat",
    seats: 5,
    year: 2021,
    engine: "2.0L",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2021-volkswagen-passat-mmp-1-1597868992.jpg",
    isPopular: false,
  },
];

Cars.push(...carsData);

export default Cars;
