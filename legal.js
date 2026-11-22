// Yasal metinler: oyun (game/) ve web sitesi (site/) bu dosyayı kullanır. Metni değiştirirsen KVKK_V'yi artır;
// oyuncular yeni metni tekrar onaylar. Köşeli parantezli alanları doldur, yayından önce bir avukata okut.
(function(){
const VS={
  ad:'[Ahmet Buğra Şahin]',
  adres:'[]',
  eposta:'[galericisimulasyonu@gmail.com]',
  site:'[https://bgrsshn.github.io/galericisimulasyonu]',
};
const tarih='23 Kasım 2026';
window.KVKK_V='1.0';
window.LEGAL_VS=VS;

window.KVKK_HTML=`
<h2>Kişisel Verilerin Korunması Hakkında Aydınlatma Metni</h2>
<p class="meta">Sürüm ${window.KVKK_V} · Yürürlük: ${tarih}</p>
<p>Bu metin, <b>Galerici Tycoon</b> mobil oyununu ve web sürümünü (“Oyun”) kullanan kişilerin (“Oyuncu”, “siz”) kişisel verilerinin 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca nasıl işlendiğini açıklamak amacıyla hazırlanmıştır.</p>

<h3>1. Veri Sorumlusu</h3>
<p>Kişisel verileriniz, veri sorumlusu sıfatıyla <b>${VS.ad}</b> (“Biz”) tarafından işlenmektedir.<br>Adres: ${VS.adres}<br>E-posta: ${VS.eposta}</p>

<h3>2. İşlenen Kişisel Veriler</h3>
<table>
<tr><th>Kategori</th><th>Veriler</th></tr>
<tr><td>Kimlik</td><td>Ad, soyad, doğum tarihi</td></tr>
<tr><td>İletişim</td><td>E-posta adresi</td></tr>
<tr><td>Müşteri işlem / hesap</td><td>Kullanıcı kimliği (UID), giriş yöntemi (e-posta, Google veya Apple), Google/Apple hesabınızın bize ilettiği ad ve e-posta, şifrenin geri döndürülemez özeti (şifrenizin kendisini biz göremeyiz), hesap oluşturma ve son giriş tarihleri, aydınlatma metni onay kaydı</td></tr>
<tr><td>Görsel</td><td>İsteğe bağlı olarak yüklediğiniz profil fotoğrafı</td></tr>
<tr><td>Oyun verileri</td><td>Galeri adı, oyundaki şehir, oyun içi para ve servet, oyun ilerleme kaydı</td></tr>
<tr><td>İşlem güvenliği</td><td>IP adresi, cihaz ve tarayıcı bilgisi, erişim kayıtları (altyapı sağlayıcımız tarafından güvenlik amacıyla otomatik tutulur)</td></tr>
</table>
<p>Oyun; konum, rehber, mikrofon, kamera (fotoğraf seçimi dışında) veya ödeme bilgisi toplamaz. Özel nitelikli kişisel veri (sağlık, din, biyometrik vb.) işlenmez. Lütfen ad, soyad ve galeri adı alanlarına başkasına ait bilgi yazmayın.</p>

<h3>3. İşleme Amaçları</h3>
<ul>
<li>Oyun hesabınızın oluşturulması, girişinizin doğrulanması ve hesabınızın yönetilmesi,</li>
<li>Oyun ilerlemenizin buluta kaydedilmesi ve farklı cihazlardan devam edebilmeniz,</li>
<li>Türkiye ve il sıralamalarının oluşturulması ve diğer oyunculara gösterilmesi,</li>
<li>Yaşa uygun kullanımın sağlanması (doğum tarihi),</li>
<li>Şifre sıfırlama ve hesapla ilgili bildirimlerin gönderilmesi,</li>
<li>Hile, kötüye kullanım ve uygunsuz içeriğin (ör. küfürlü ad) önlenmesi, bilgi güvenliğinin sağlanması,</li>
<li>Talep ve şikâyetlerinizin yanıtlanması, hukuki yükümlülüklerimizin yerine getirilmesi ve yetkili makamların taleplerinin karşılanması.</li>
</ul>

<h3>4. Hukuki Sebepler ve Toplama Yöntemi</h3>
<p>Kişisel verileriniz; Oyun'daki kayıt, giriş ve profil ekranlarından sizin girmenizle, Google veya Apple ile giriş yaptığınızda bu hizmetlerin bize iletmesiyle ve oyunu oynarken otomatik yollarla elektronik ortamda toplanır. Verileriniz KVKK'nın 5. maddesinin 2. fıkrasındaki şu hukuki sebeplere dayanılarak işlenir:</p>
<ul>
<li><b>(c) Sözleşmenin kurulması veya ifası:</b> hesap oluşturma, giriş, oyun kaydı, sıralama ve oyun hizmetinin sunulması,</li>
<li><b>(ç) Hukuki yükümlülüğün yerine getirilmesi:</b> mevzuattan doğan saklama, bildirim ve yetkili makamlara bilgi verme yükümlülükleri,</li>
<li><b>(e) Bir hakkın tesisi, kullanılması veya korunması:</b> olası uyuşmazlıklarda delil olarak kullanılması,</li>
<li><b>(f) Meşru menfaat:</b> bilgi güvenliği, hile ve kötüye kullanımın önlenmesi (temel hak ve özgürlüklerinize zarar vermemek kaydıyla).</li>
</ul>
<p>Bu işlemeler için açık rızanız gerekmez; Oyun'daki onay kutusu, bu metni okuduğunuzu ve bilgilendirildiğinizi kayıt altına almak içindir.</p>

<h3>5. Kişisel Verilerin Aktarılması</h3>
<ul>
<li><b>Diğer oyuncular:</b> Sıralamada adınız, soyadınız, galeri adınız, şehriniz, profil fotoğrafınız ve oyun içi servetiniz, Oyun'a giriş yapmış diğer oyuncular tarafından görülebilir. E-posta adresiniz ve doğum tarihiniz kimseyle paylaşılmaz.</li>
<li><b>Hizmet sağlayıcılar (veri işleyenler):</b> Hesap, giriş ve veri saklama hizmetleri <b>Google LLC</b>'nin Firebase hizmetleri (Firebase Authentication ve Cloud Firestore) ile sağlanır. Google veya Apple ile giriş yapmayı seçerseniz giriş işlemi <b>Google LLC</b> veya <b>Apple Inc.</b> üzerinden gerçekleşir.</li>
<li><b>Yetkili kurum ve kuruluşlar:</b> Hukuki yükümlülük halinde yargı mercileri ve yetkili kamu kurumları.</li>
</ul>
<p><b>Yurt dışına aktarım:</b> Firebase sunucuları Türkiye dışında (Amerika Birleşik Devletleri ve/veya Avrupa Birliği ülkeleri) bulunduğundan verileriniz yurt dışına aktarılmaktadır. Bu aktarım KVKK'nın 9. maddesi uyarınca, hizmet sağlayıcıyla imzalanan ve Kişisel Verileri Koruma Kurulu'na bildirilen <b>standart sözleşme</b> güvencesine dayanılarak yapılır.</p>
<p>Kişisel verileriniz satılmaz, kiralanmaz ve reklam amacıyla üçüncü kişilerle paylaşılmaz.</p>

<h3>6. Saklama Süresi</h3>
<p>Verileriniz hesabınız açık kaldığı sürece saklanır. Hesabınızı Oyun içinden veya web sitemizdeki hesap silme sayfasından sildiğinizde hesap bilgileriniz, sıralama kaydınız ve oyun kaydınız derhal silinir; hizmet sağlayıcının sistemlerindeki teknik kopyalar en geç 30 gün içinde kalıcı olarak silinir. Hukuki yükümlülük veya olası uyuşmazlık nedeniyle saklanması gereken kayıtlar yalnızca ilgili mevzuatta öngörülen süre boyunca saklanır, sonra silinir, yok edilir veya anonim hale getirilir. Cihazınızdaki oyun kaydı, hesabınızı sildiğinizde veya uygulamayı kaldırdığınızda cihazınızdan silinir.</p>

<h3>7. Çocuklar</h3>
<p>Oyun 13 yaşından küçükler için tasarlanmamıştır. 18 yaşından küçükseniz Oyun'u veli veya vasinizin bilgisi ve izniyle kullanmalısınız. 13 yaşından küçük bir çocuğa ait veri işlendiğini fark edersek bu veriyi sileriz; böyle bir durumu fark eden veliler bize ${VS.eposta} adresinden ulaşabilir.</p>

<h3>8. KVKK'nın 11. Maddesi Kapsamındaki Haklarınız</h3>
<p>Bize başvurarak;</p>
<ul>
<li>Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi talep etme,</li>
<li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
<li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
<li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
<li>KVKK'nın 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
<li>Düzeltme, silme veya yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
<li>İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
<li>Kanuna aykırı işleme sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
</ul>
<p>haklarına sahipsiniz.</p>

<h3>9. Başvuru Yöntemi</h3>
<p>Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'e uygun olarak; Türkçe ve yazılı olarak ${VS.adres} adresine bizzat veya noter aracılığıyla, ya da Oyun'a kayıtlı e-posta adresinizden <b>${VS.eposta}</b> adresine iletebilirsiniz. Başvurunuzda ad, soyad, iletişim bilgileriniz ve talebinizin açıklaması bulunmalıdır. Başvurunuz en geç <b>30 gün</b> içinde ücretsiz olarak sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi halinde Kurul'ca belirlenen tarife uygulanabilir. Başvurunuzun reddedilmesi, cevabı yetersiz bulmanız veya süresinde cevap verilmemesi halinde Kişisel Verileri Koruma Kurulu'na şikâyette bulunabilirsiniz.</p>
<p>Hesabınızı ve verilerinizi silmek için başvuru yapmanız gerekmez: Oyun'da <b>Profil → Hesabımı sil</b> adımını veya ${VS.site}/hesap-sil.html sayfasını kullanabilirsiniz.</p>
`;

window.PRIVACY_HTML=`
<h2>Gizlilik Politikası</h2>
<p class="meta">Yürürlük: ${tarih}</p>
<p>Bu politika, <b>Galerici Tycoon</b> (“Oyun”) uygulamasının hangi verileri neden topladığını, nasıl sakladığını ve haklarınızı açıklar. Veri sorumlusu: <b>${VS.ad}</b>, ${VS.adres}, ${VS.eposta}. Kişisel verilerin işlenmesine ilişkin ayrıntılı bilgi için <a href="kvkk.html">KVKK Aydınlatma Metni</a>'ne bakabilirsiniz.</p>

<h3>Topladığımız veriler</h3>
<ul>
<li><b>Hesap:</b> e-posta adresi, giriş yöntemi (e-posta, Google veya Apple), kullanıcı kimliği. Şifreniz yalnızca geri döndürülemez özet olarak Firebase'de tutulur.</li>
<li><b>Profil:</b> ad, soyad, doğum tarihi, galeri adı, isteğe bağlı profil fotoğrafı.</li>
<li><b>Oyun:</b> oyun ilerleme kaydı, oyun içi para ve servet, oyundaki şehir.</li>
<li><b>Teknik:</b> IP adresi ve cihaz bilgisi; altyapı sağlayıcımız tarafından güvenlik amacıyla otomatik tutulur.</li>
</ul>

<h3>Toplamadığımız veriler</h3>
<p>Konum, rehber, mesajlar, mikrofon, sağlık ve ödeme bilgisi toplanmaz. Oyunda reklam, reklam kimliği (IDFA/AAID), analiz veya takip aracı bulunmaz; uygulamalar ve web siteleri arasında sizi takip etmeyiz. Oyunda gerçek parayla satın alma yoktur; oyundaki para, hisse senedi ve kripto paralar tamamen hayalidir.</p>

<h3>Verileri neden kullanıyoruz</h3>
<ul>
<li>Hesabınızı oluşturmak ve girişinizi doğrulamak,</li>
<li>İlerlemenizi buluta kaydedip başka cihazda devam etmenizi sağlamak,</li>
<li>Türkiye ve il sıralamasını göstermek,</li>
<li>Hile ve kötüye kullanımı önlemek, şifre sıfırlama e-postası göndermek.</li>
</ul>

<h3>Kimler görebilir</h3>
<ul>
<li><b>Diğer oyuncular:</b> sıralamada ad, soyad, galeri adı, şehir, profil fotoğrafı ve oyun içi servet.</li>
<li><b>Google LLC (Firebase):</b> hesap ve veri saklama altyapısı. Veriler ABD ve/veya AB'deki sunucularda saklanır.</li>
<li><b>Apple Inc. / Google LLC:</b> yalnızca bu hesaplarla giriş yapmayı seçerseniz.</li>
<li><b>Yetkili makamlar:</b> yalnızca yasal zorunluluk halinde.</li>
</ul>
<p>Verilerinizi satmayız ve reklam amacıyla paylaşmayız.</p>

<h3>Cihazınızda tutulanlar</h3>
<p>Oyun kaydınız çevrimdışı oynayabilmeniz için cihazınızda da saklanır. Oyun, günlük hatırlatma için yalnızca cihazınızda çalışan yerel bildirimler kullanır; sunucudan bildirim gönderilmez.</p>

<h3>Güvenlik</h3>
<p>Veriler cihaz ile sunucu arasında şifreli bağlantıyla (HTTPS/TLS) iletilir. Erişim kuralları gereği her oyuncu yalnızca kendi kaydını okuyup yazabilir; e-posta ve doğum tarihinize başka oyuncular erişemez.</p>

<h3>Saklama ve silme</h3>
<p>Verileriniz hesabınız açık olduğu sürece saklanır. Hesabınızı istediğiniz zaman silebilirsiniz:</p>
<ul>
<li>Oyunda <b>Profil → Hesabımı sil</b>,</li>
<li>veya <a href="hesap-sil.html">Hesap silme sayfası</a> (uygulama yüklü olmasa bile).</li>
</ul>
<p>Silme işleminde hesabınız, sıralama kaydınız, profiliniz ve oyun kaydınız derhal silinir; sağlayıcı sistemlerindeki yedek kopyalar en geç 30 gün içinde kalıcı olarak silinir.</p>

<h3>Çocuklar</h3>
<p>Oyun 13 yaşından küçükler için tasarlanmamıştır ve bu yaştaki çocuklardan bilerek veri toplamayız. Böyle bir durumu fark edersek veriyi sileriz.</p>

<h3>Haklarınız</h3>
<p>KVKK'nın 11. maddesi kapsamındaki haklarınız (bilgi talep etme, düzeltme, silme, itiraz vb.) için <a href="kvkk.html">KVKK Aydınlatma Metni</a>'ne bakın veya ${VS.eposta} adresine yazın. Başvurular en geç 30 gün içinde yanıtlanır.</p>

<h3>Değişiklikler</h3>
<p>Bu politika güncellenirse yeni sürüm bu sayfada yayımlanır; önemli değişikliklerde Oyun içinde tekrar onayınız istenir.</p>

<h3>İletişim</h3>
<p>${VS.ad} · ${VS.adres} · ${VS.eposta}</p>
`;
})();
