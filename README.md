# Rent Car Booking App

Bu proje, React + Vite ilə inkişaf etdirilmiş avtomobil kirayə sistemi tətbiqidir. İstifadəçilər maşınları filtrasiya edərək axtara, seçib səbətə əlavə edə, tarix seçimi ilə ümumi məbləği hesablaya və WhatsApp vasitəsilə sifarişi tamamlayırlar.

## Əsas Xüsusiyyətlər

- Ana səhifə: təqdimat banneri, xidmət üstünlükləri və sürətli naviqasiya.
- Maşın kataloqu: ad və qiymət aralığına görə filtrasiya.
- Səbət sistemi: maşın əlavə etmək, götürülmə və qaytarılma tarixlərini seçmək, ümumi məbləği hesablamaq.
- Loading UI: maşın siyahısı yüklənərkən yüklənir göstəricisi göstərilir.
- Empty state UI: axtarış nəticəsi tapılmadıqda və səbət boş olduqda xüsusi mesajlar göstərilir.
- Contact form: textarea ilə mesaj yazmaq və WhatsApp üzərindən göndərmək.
- Qeydiyyat / giriş: istifadəçi hesabı yaratmaq və giriş etmək.
- Admin paneli: maşın əlavə etmək, mövcud maşınları redaktə etmək və silmək.
- Animasiya və bildirişlər: `aos` və `react-toastify` istifadə olunur.

## Texnologiyalar

- React 19
- Vite
- React Router Dom
- Tailwind CSS
- React Icons
- React Toastify
- AOS

## Layihə Strukturunun Ümumi Baxışı

- `src/App.jsx`: səhifə quruluşu, başlıq/ayaq hissə və marşrutlar.
- `src/utils/Routers.jsx`: tətbiqin bütün marşrutları.
- `src/pages/Home/Home.jsx`: ana səhifə.
- `src/pages/Cars/AllCars.jsx`: maşın siyahısı və axtarış.
- `src/pages/Basket/Basget.jsx`: seçilmiş maşınların səbəti.
- `src/pages/LoginRegister/Login.jsx`: giriş formu.
- `src/pages/LoginRegister/Register.jsx`: qeydiyyat formu.
- `src/Admin`: admin paneli və maşın idarəetmə bölməsi.
- `src/data/CarsArr.js`: ilkin maşın məlumatları.
- `src/data/authUsers/authUsers.js`: admin giriş məlumatları.

## Quraşdırma

1. Repo kökünə keçin:

```bash
cd c:\Users\user\OneDrive\Desktop\rent-car-booking-app
```

2. Asılılıqları quraşdırın:

```bash
npm install
```

3. İnkişaf serverini işə salın:

```bash
npm run dev
```

4. Brauzerdə açın:

```text
http://localhost:5173
```

## İstifadə Qaydaları

### İstifadəçi kimi

- `Qeydiyyat` bölməsindən yeni istifadəçi hesabı yaradın.
- `Maşınlar` səhifəsində maşın adını və qiymət aralığını seçərək axtarış edin.
- Sevdiyiniz maşını `Əlavə et` düyməsi ilə səbətə əlavə edin.
- `Səbət` səhifəsində götürülmə və qaytarılma tarixlərini seçin.
- WhatsApp üzərindən sifarişi tamamlayın.

### Admin kimi

- Admin giriş üçün istifadə ediləcək məlumatlar:
  - Email: `admin@gmail.com`
  - Şifrə: `1234`
- Admin paneli aşağıdakılar üçün istifadə olunur:
  - Yeni maşın əlavə etmək.
  - Mövcud maşınları redaktə etmək.
  - Maşınları silmək.

> Qeyd: Bu tətbiqdə istifadəçi və admin məlumatları `localStorage`-da saxlanılır.

## Marşrutlar

- `/` — Ana səhifə
- `/maşınlar` — Bütün maşınlar
- `/səbət` — Səbət
- `/haqqımızda` — Haqqımızda
- `/əlaqə` — Əlaqə
- `/login` — Giriş
- `/register` — Qeydiyyat
- `/admin` — Admin paneli (admin olaraq daxil olduqda)

## Əlavə Qeydlər

- `localStorage` istifadəçilərin və səbətin məlumatlarını saxlayır.
- Admin tərəfindən əlavə olunan maşınlar `localStorage`-da `adminCar` açarında saxlanır.
- Maşın siyahısı və populyar maşınlar bölməsi üçün yüklənir (loading) və tapılmadı (empty) vəziyyətləri mövcuddur.
- Layihə hazırda backend server olmadan frontend səviyyəsində işləyir.

## Yığın və Yoxlama

- Layihəni işlətmək üçün:

```bash
npm run dev
```

- Yığma üçün:

```bash
npm run build
```
