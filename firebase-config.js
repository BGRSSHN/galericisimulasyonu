// Firebase ayarları. Doldurulana kadar giriş ekranı "Firebase ayarlanmadı" der (README → Firebase kurulumu).
// Firebase konsolu → Proje ayarları → Genel → Uygulamalarınız → Web uygulaması → firebaseConfig
window.FB_CONFIG = {
  apiKey: "AIzaSyBMgOYXb9lgU_WMmA5DmB-qmXC9te_vrwg",
  authDomain: "galeri-75ca3.firebaseapp.com",
  projectId: "galeri-75ca3",
  storageBucket: "galeri-75ca3.firebasestorage.app",
  messagingSenderId: "314066603766",
  appId: "1:314066603766:web:1b6547ad11097b01ab66d7",
  measurementId: "G-ZDEZ4ZX0TZ"
};
// Android Google girişi: Authentication → Sign-in method → Google → "Web SDK yapılandırması" → Web istemci kimliği
window.GOOGLE_WEB_CLIENT_ID = '314066603766-lml5c4esg9o83i3c2fukcvq9ohcd2h08.apps.googleusercontent.com';
// iOS Google girişi: Google Cloud → API'ler ve Hizmetler → Kimlik bilgileri → iOS OAuth istemci kimliği (paket: com.galericitycoon.app)
window.GOOGLE_IOS_CLIENT_ID = '314066603766-ngsnok837732bs7mr2nfr8qdd5k576cg.apps.googleusercontent.com';
// Yerel test: true yapınca localhost'taki Firebase emülatörüne bağlanır (npx firebase-tools emulators:start)
window.FB_EMULATOR = false;
