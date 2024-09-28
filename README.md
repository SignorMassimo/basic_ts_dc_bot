
---

# Discord.js Bot Altyapısı

Bu proje, **Zexson Team** tarafından geliştirilmiş, Discord.js v14 kullanarak oluşturulmuş basit ve genişletilebilir bir Discord botu altyapısıdır. Bot, belirli komutları işleyebilecek şekilde yapılandırılmıştır ve örnek bir `ping` komutuyla yanıt verebilir.

## Özellikler

- **Basit ve Hızlı Kurulum:** .env dosyası ile kolayca yapılandırma yapılabilir.
- **Genişletilebilir Altyapı:** Yeni komutlar ve özellikler eklemeye uygun.
- **Bot Etkinlikleri:** Botun çevrimiçi olduğu anda bir mesaj ile konsola bilgilendirme gönderir.
- **Ping Komutu:** `ping` mesajına otomatik olarak `pong` yanıtını verir.

## Kurulum

1. **Depoyu Klonlayın:**

   ```bash
   git clone https://github.com/kullaniciadi/discord-bot-altyapisi.git
   cd discord-bot-altyapisi
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

## Kullanım

- Bot çevrimiçi olduğunda, herhangi bir kanalda `ping` yazdığınızda, bot `pong` yanıtını verir.
  
## Geliştirme

Bu altyapıyı genişletmek için, yeni komutlar ve eventler ekleyebilir, projenizi dilediğiniz gibi özelleştirebilirsiniz. `messageCreate` eventinde yeni komutlar ve yanıtlar tanımlayabilirsiniz.

## Gereksinimler

- Node.js 16.9.0 veya üzeri
- Discord.js v14

## Geliştirici

Bu bot altyapısı **Zexson Team** kurucusu ve lideri **Signor_P** tarafından geliştirilmiştir. Zexson Team, Discord botları, web siteleri ve grafik tasarım gibi çeşitli hizmetler sunmaktadır. Daha fazla bilgi ve destek için [Zexson Team'in Discord sunucusuna katılabilirsiniz](https://discord.gg/VFYRarPZDT) veya [Zexson Team'in web sitesini](https://zexson.vercel.app/) ziyaret edebilirsiniz.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.

---