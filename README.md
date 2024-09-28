
---

# Discord.js Bot Altyapısı (TypeScript)

Bu proje, **Zexson Team** tarafından geliştirilmiş, Discord.js v14 kullanarak oluşturulmuş basit ve genişletilebilir bir Discord botu **TypeScript** altyapısıdır. Bot, genişletmeye uygun boş bir template olarak sunulmuştur ve sadece `app.ts` dosyasını içerir.

## Özellikler

- **TypeScript Desteği:** Proje tamamen TypeScript ile yazılmıştır.
- **Basit ve Hızlı Kurulum:** `.env` dosyası ile kolayca yapılandırma yapılabilir.
- **Genişletilebilir Altyapı:** Yeni komutlar ve özellikler eklemeye uygun.
- **Hazır Eventler:** `ready` ve `messageCreate` eventleri ile hızlı başlangıç.
- **TypeScript ile Daha Güvenli Kodlama:** Tip güvenliği ve derleme sırasında hata kontrolü.

## Kurulum

1. **Depoyu Klonlayın:**

   ```bash
   gh repo clone SignorMassimo/basic_ts_dc_bot
   cd basic_ts_dc_bot
   ```

2. **Gerekli Bağımlılıkları Yükleyin:**

   ```bash
   npm install
   ```

3. **.env Dosyasını Oluşturun:**

   Projenizin kök dizininde bir `.env` dosyası oluşturun ve Discord bot tokenınızı ekleyin:

   ```bash
   TOKEN=your-discord-bot-token
   ```

4. **Botu Başlatın:**

   ```bash
   npm start
   ```

   Bot başarılı bir şekilde giriş yaptığında, konsolda botun kullanıcı adı görüntülenecektir.

## Scripts

Proje ile birlikte gelen bazı faydalı scriptler şunlardır:

- **Başlatma:**
  
  ```bash
  npm start
  ```

  Bu komut ile `nodemon` kullanarak botu başlatır ve dosya değişikliklerinde otomatik olarak yeniden başlatır.

- **Derleme (Build):**

  ```bash
  npm run build
  ```

  TypeScript kodlarını JavaScript'e derler.

## `tsconfig.json` Dosyası

Proje, TypeScript ile yazıldığı için `tsconfig.json` dosyasında bazı temel ayarlar yapılmıştır. Derleme sırasında TypeScript dosyaları `dist` klasörüne taşınacak şekilde yapılandırılmıştır.

#### Temel Ayarlar

- **`target: "ES6"`**: TypeScript'in JavaScript'e derlenirken ES6 (ECMAScript 2015) standartlarını kullanmasını sağlar.
- **`module: "commonjs"`**: Modül sistemini CommonJS olarak ayarlar.
- **`outDir: "./dist"`**: Derlenen JavaScript dosyalarının `dist` klasörüne yerleştirilmesini sağlar.
- **`strict: true"`**: TypeScript'in tip kontrolünü daha katı yapmasını sağlar.
- **`esModuleInterop: true`**: CommonJS ve ES modülleri arasında uyumluluk sağlar.

#### Dosya Dahil Etme ve Hariç Tutma

- **`include: ["**/*.ts"]`**: Projedeki tüm TypeScript (`.ts`) dosyalarını derleme sürecine dahil eder.
- **`exclude: ["node_modules", "dist"]`**: `node_modules` ve `dist` klasörlerindeki dosyaları derleme sürecinden hariç tutar.

Bu ayarlar, TypeScript dosyalarını derlediğinizde tüm `.ts` dosyalarının JavaScript'e dönüştürülüp `dist` klasörüne taşınmasını sağlar. TypeScript ile güçlü tip güvenliği ve daha güvenli kod yazabilirsiniz.

## Kullanım

Bu bot altyapısı boş bir template olarak hazırlanmıştır ve varsayılan olarak herhangi bir özel komut veya işlev içermez. Geliştirmeye başlamak için `app.ts` dosyasını düzenleyebilir ve yeni eventler ekleyebilirsiniz.

- Botu başlattıktan sonra, yeni komutlar eklemek için `app.ts` dosyasını kullanabilirsiniz.
- Projeye yeni özellikler ve eventler ekleyerek genişletebilirsiniz.

## Gereksinimler

- Node.js 16.9.0 veya üzeri
- Discord.js v14
- TypeScript desteği

## Geliştirici

Bu bot altyapısı **Zexson Team** kurucusu ve lideri **Signor_P** tarafından geliştirilmiştir. Zexson Team, Discord botları, web siteleri ve grafik tasarım gibi çeşitli hizmetler sunmaktadır. Daha fazla bilgi ve destek için [Zexson Team'in Discord sunucusuna katılabilirsiniz](https://discord.gg/VFYRarPZDT) veya [Zexson Team'in web sitesini](https://zexson.vercel.app/) ziyaret edebilirsiniz.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.

---