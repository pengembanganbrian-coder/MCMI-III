const questions = [
  {
    "id": 1,
    "text": "Akhir-akhir ini, kekuatan fisikku sepertinya terkuras habis, bahkan di pagi hari."
  },
  {
    "id": 2,
    "text": "Aku sangat menghargai peraturan karena merupakan panduan yang baik untuk diikuti."
  },
  {
    "id": 3,
    "text": "Aku menikmati melakukan banyak hal yang berbeda sehingga aku sulit memutuskan apa yang harus dikerjakan terlebih dahulu."
  },
  {
    "id": 4,
    "text": "Aku merasa lemah dan lelah hampir sepanjang waktu."
  },
  {
    "id": 5,
    "text": "Aku tahu aku adalah orang yang unggul, jadi aku tidak peduli dengan apa yang dipikirkan orang lain."
  },
  {
    "id": 6,
    "text": "Orang-orang tidak pernah memberikan pengakuan yang cukup atas hal-hal yang telah aku lakukan."
  },
  {
    "id": 7,
    "text": "Jika keluargaku memberikan tekanan padaku, aku cenderung merasa marah dan menolak melakukan apa yang mereka inginkan."
  },
  {
    "id": 8,
    "text": "Orang-orang mengejekku di belakangku, membicarakan cara aku bertindak atau penampilanku."
  },
  {
    "id": 9,
    "text": "Aku sering mengkritik orang dengan tajam jika mereka menjengkelkanku."
  },
  {
    "id": 10,
    "text": "Sedikit perasaan yang aku miliki jarang aku tunjukkan kepada dunia luar."
  },
  {
    "id": 11,
    "text": "Aku sulit menjaga keseimbangan saat berjalan."
  },
  {
    "id": 12,
    "text": "Aku menunjukkan perasaanku dengan mudah dan cepat."
  },
  {
    "id": 13,
    "text": "Kebiasaan narkobaku sering kali membuatku mendapat banyak masalah di masa lalu."
  },
  {
    "id": 14,
    "text": "Kadang-kadang aku bisa bersikap kasar dan jahat dalam hubunganku dengan keluargaku."
  },
  {
    "id": 15,
    "text": "Hal-hal yang berjalan baik hari ini tidak akan bertahan lama."
  },
  {
    "id": 16,
    "text": "Aku adalah orang yang sangat setuju dan penurut."
  },
  {
    "id": 17,
    "text": "Saat remaja, aku mendapat banyak masalah karena perilaku buruk di sekolah."
  },
  {
    "id": 18,
    "text": "Aku takut untuk benar-benar dekat dengan orang lain karena itu mungkin berakhir dengan aku dipermalukan atau diejek."
  },
  {
    "id": 19,
    "text": "Aku sepertinya memilih teman yang akhirnya memperlakukanku dengan buruk."
  },
  {
    "id": 20,
    "text": "Aku memiliki pikiran sedih hampir sepanjang hidupku sejak aku masih kecil."
  },
  {
    "id": 21,
    "text": "Aku suka menggoda lawan jenis."
  },
  {
    "id": 22,
    "text": "Aku orang yang sangat tidak menentu, selalu berubah pikiran dan perasaan setiap saat."
  },
  {
    "id": 23,
    "text": "Minum alkohol tidak pernah menyebabkan masalah nyata dalam pekerjaanku."
  },
  {
    "id": 24,
    "text": "Aku mulai merasa seperti gagal beberapa tahun yang lalu."
  },
  {
    "id": 25,
    "text": "Aku merasa bersalah hampir sepanjang waktu tanpa alasan yang aku tahu."
  },
  {
    "id": 26,
    "text": "Orang lain iri dengan kemampuanku."
  },
  {
    "id": 27,
    "text": "Ketika aku punya pilihan, aku lebih suka melakukan sesuatu sendirian."
  },
  {
    "id": 28,
    "text": "Menurutku perlu melakukan kontrol ketat terhadap perilaku anggota keluargaku."
  },
  {
    "id": 29,
    "text": "Orang-orang biasanya menganggapku sebagai orang yang tertutup dan berpikiran serius."
  },
  {
    "id": 30,
    "text": "Akhir-akhir ini, aku mulai merasa ingin menghancurkan barang-barang."
  },
  {
    "id": 31,
    "text": "Menurutku aku adalah orang spesial yang pantas mendapatkan perhatian khusus dari orang lain."
  },
  {
    "id": 32,
    "text": "Aku selalu ingin mencari teman baru dan bertemu orang baru."
  },
  {
    "id": 33,
    "text": "Jika seseorang mengkritikku karena melakukan kesalahan, aku akan segera menunjukkan beberapa kesalahan orang tersebut."
  },
  {
    "id": 34,
    "text": "Akhir-akhir ini, aku merasa hancur berkeping-keping."
  },
  {
    "id": 35,
    "text": "Aku sering menyerah melakukan sesuatu karena aku takut aku tidak akan melakukannya dengan baik."
  },
  {
    "id": 36,
    "text": "Aku sering meluapkan amarahku dan kemudian merasa sangat bersalah karenanya."
  },
  {
    "id": 37,
    "text": "Aku sering kali kehilangan kemampuan untuk merasakan sensasi apa pun di bagian tubuhku."
  },
  {
    "id": 38,
    "text": "Aku melakukan apa yang aku inginkan tanpa mengkhawatirkan dampaknya terhadap orang lain."
  },
  {
    "id": 39,
    "text": "Mengonsumsi apa yang disebut obat-obatan terlarang mungkin tidak bijaksana, tetapi di masa lalu aku merasa membutuhkannya."
  },
  {
    "id": 40,
    "text": "Kurasa aku orang yang penakut dan terhambat."
  },
  {
    "id": 41,
    "text": "Aku telah melakukan sejumlah hal bodoh karena dorongan hati yang akhirnya menyebabkan aku mendapat masalah besar."
  },
  {
    "id": 42,
    "text": "Aku tidak pernah memaafkan penghinaan atau melupakan rasa malu yang disebabkan seseorang padaku."
  },
  {
    "id": 43,
    "text": "Aku sering merasa sedih atau tegang tepat setelah sesuatu yang baik terjadi padaku."
  },
  {
    "id": 44,
    "text": "Aku merasa sangat tertekan dan sedih hampir sepanjang waktu sekarang."
  },
  {
    "id": 45,
    "text": "Aku selalu berusaha keras untuk menyenangkan orang lain, bahkan ketika aku tidak menyukai mereka."
  },
  {
    "id": 46,
    "text": "Aku selalu memiliki minat yang lebih sedikit terhadap seks dibandingkan kebanyakan orang."
  },
  {
    "id": 47,
    "text": "Aku cenderung selalu menyalahkan diri sendiri ketika ada yang salah."
  },
  {
    "id": 48,
    "text": "Lama sekali, aku memutuskan lebih baik tidak banyak berhubungan dengan orang lain."
  },
  {
    "id": 49,
    "text": "Sejak kecil, aku selalu harus waspada terhadap orang yang mencoba menipuku."
  },
  {
    "id": 50,
    "text": "Aku sangat membenci 'orang besar' yang selalu berpikir mereka bisa melakukan sesuatu lebih baik daripada aku."
  },
  {
    "id": 51,
    "text": "Saat keadaan mulai membosankan, aku suka membuat kegaduhan."
  },
  {
    "id": 52,
    "text": "Aku memiliki masalah alkohol yang membuat kesulitan bagiku dan keluargaku."
  },
  {
    "id": 53,
    "text": "Hukuman tidak pernah menghentikanku melakukan apa yang aku inginkan."
  },
  {
    "id": 54,
    "text": "Ada banyak waktu, ketika tanpa alasan, aku merasa sangat ceria dan penuh semangat."
  },
  {
    "id": 55,
    "text": "Dalam beberapa minggu terakhir aku merasa kelelahan tanpa alasan khusus."
  },
  {
    "id": 56,
    "text": "Sudah beberapa lama ini aku merasa sangat bersalah karena aku tidak bisa melakukan sesuatu dengan benar lagi."
  },
  {
    "id": 57,
    "text": "Kurasa aku orang yang sangat ramah dan terbuka."
  },
  {
    "id": 58,
    "text": "Aku menjadi sangat gelisah dalam beberapa minggu terakhir."
  },
  {
    "id": 59,
    "text": "Aku mencatat pengeluaranku dengan sangat teliti sehingga aku siap jika ada kebutuhan yang muncul."
  },
  {
    "id": 60,
    "text": "Aku tidak seberuntung orang lain dalam hidup."
  },
  {
    "id": 61,
    "text": "Ide-ide terus berputar-putar di kepalaku dan tidak mau hilang."
  },
  {
    "id": 62,
    "text": "Aku menjadi sangat putus asa dan sedih tentang hidup dalam satu atau dua tahun terakhir."
  },
  {
    "id": 63,
    "text": "Banyak orang telah memata-matai kehidupan pribadiku selama bertahun-tahun."
  },
  {
    "id": 64,
    "text": "Aku tidak tahu mengapa, tetapi terkadang aku mengatakan hal-hal kejam hanya untuk membuat orang lain tidak bahagia."
  },
  {
    "id": 65,
    "text": "Aku terbang melintasi Atlantik 30 kali tahun lalu."
  },
  {
    "id": 66,
    "text": "Kebiasaanku menyalahgunakan narkoba telah menyebabkanku absen kerja di masa lalu."
  },
  {
    "id": 67,
    "text": "Aku punya banyak ide yang melampaui zaman."
  },
  {
    "id": 68,
    "text": "Akhir-akhir ini, aku harus memikirkan segala sesuatunya berulang kali tanpa alasan yang jelas."
  },
  {
    "id": 69,
    "text": "Aku menghindari sebagian besar situasi sosial karena aku mengharapkan orang lain mengkritik atau menolakku."
  },
  {
    "id": 70,
    "text": "Aku sering berpikir bahwa aku tidak pantas mendapatkan hal-hal baik yang terjadi padaku."
  },
  {
    "id": 71,
    "text": "Saat aku sendirian, aku sering merasakan kehadiran seseorang di dekatku yang tidak bisa dilihat."
  },
  {
    "id": 72,
    "text": "Aku merasa tidak memiliki tujuan dan tidak tahu ke mana arah hidupku."
  },
  {
    "id": 73,
    "text": "Aku sering membiarkan orang lain membuat keputusan penting untukku."
  },
  {
    "id": 74,
    "text": "Aku sepertinya tidak bisa tidur, dan bangun dalam keadaan sama lelahnya dengan saat aku pergi tidur."
  },
  {
    "id": 75,
    "text": "Akhir-akhir ini, aku banyak berkeringat dan merasa sangat tegang."
  },
  {
    "id": 76,
    "text": "Aku terus memiliki pikiran aneh yang aku harap bisa aku singkirkan."
  },
  {
    "id": 77,
    "text": "Aku memiliki banyak masalah dalam mencoba mengendalikan dorongan untuk minum berlebihan."
  },
  {
    "id": 78,
    "text": "Bahkan ketika aku bangun, aku sepertinya tidak memperhatikan orang yang ada di dekatku."
  },
  {
    "id": 79,
    "text": "Aku sering kali kesal dan bersungut-sungut."
  },
  {
    "id": 80,
    "text": "Sangat mudah bagiku untuk mendapatkan banyak teman."
  },
  {
    "id": 81,
    "text": "Aku malu dengan beberapa pelecehan yang aku alami ketika aku masih muda."
  },
  {
    "id": 82,
    "text": "Aku selalu memastikan bahwa pekerjaanku direncanakan dan diorganisir dengan baik."
  },
  {
    "id": 83,
    "text": "Suasan hatiku sepertinya banyak berubah dari satu hari ke hari berikutnya."
  },
  {
    "id": 84,
    "text": "Aku terlalu tidak yakin pada diri sendiri untuk berisiko mencoba sesuatu yang baru."
  },
  {
    "id": 85,
    "text": "Aku tidak menyalahkan siapa pun yang memanfaatkan seseorang yang membiarkannya."
  },
  {
    "id": 86,
    "text": "Sudah beberapa lama ini aku merasa sedih dan tidak bersemangat dan sepertinya tidak bisa keluar dari perasaan itu."
  },
  {
    "id": 87,
    "text": "Aku sering marah pada orang yang melakukan sesuatu dengan lambat."
  },
  {
    "id": 88,
    "text": "Aku tidak pernah hanya duduk diam saat aku berada di pesta."
  },
  {
    "id": 89,
    "text": "Aku mengawasi keluargaku dengan cermat sehingga aku tahu siapa yang bisa dan siapa yang tidak bisa dipercaya."
  },
  {
    "id": 90,
    "text": "Terkadang aku merasa bingung dan kesal ketika orang bersikap baik padaku."
  },
  {
    "id": 91,
    "text": "Penggunaan apa yang disebut obat-obatan terlarang telah menyebabkan pertengkaran keluarga."
  },
  {
    "id": 92,
    "text": "Aku sendirian hampir sepanjang waktu dan aku lebih suka seperti itu."
  },
  {
    "id": 93,
    "text": "Ada anggota keluargaku yang mengatakan aku egois dan hanya memikirkan diri sendiri."
  },
  {
    "id": 94,
    "text": "Orang bisa dengan mudah mengubah ideku, meskipun aku merasa pikiranku sudah bulat."
  },
  {
    "id": 95,
    "text": "Aku sering membuat orang marah karena mengatur mereka."
  },
  {
    "id": 96,
    "text": "Orang-orang pernah mengatakan di masa lalu bahwa aku menjadi terlalu tertarik dan terlalu bersemangat tentang terlalu banyak hal."
  },
  {
    "id": 97,
    "text": "Aku percaya pada pepatah, 'cepat tidur dan cepat bangun...'"
  },
  {
    "id": 98,
    "text": "Perasaanku terhadap orang-orang penting dalam hidupku sering kali beralih dari mencintai mereka menjadi membenci mereka."
  },
  {
    "id": 99,
    "text": "Dalam kelompok sosial aku hampir selalu sangat malu dan tegang."
  },
  {
    "id": 100,
    "text": "Kurasa aku tidak ada bedanya dengan orang tuaku yang menjadi agak pecandu alkohol."
  },
  {
    "id": 101,
    "text": "Kurasa aku tidak menjalankan banyak tanggung jawab keluargaku seserius yang seharusnya."
  },
  {
    "id": 102,
    "text": "Sejak aku masih kecil, aku telah kehilangan kontak dengan dunia nyata."
  },
  {
    "id": 103,
    "text": "Orang-orang licik sering mencoba mendapatkan pujian atas hal-hal yang telah aku lakukan atau pikirkan."
  },
  {
    "id": 104,
    "text": "Aku tidak bisa merasakan banyak kesenangan karena aku tidak merasa pantas mendapatkannya."
  },
  {
    "id": 105,
    "text": "Aku memiliki sedikit keinginan untuk pertemanan yang dekat."
  },
  {
    "id": 106,
    "text": "Aku telah memiliki banyak periode dalam hidupku ketika aku sangat ceria dan menghabiskan begitu banyak energi sehingga aku jatuh ke dalam suasana hati yang rendah."
  },
  {
    "id": 107,
    "text": "Aku telah benar-benar kehilangan nafsu makan dan sulit tidur hampir setiap malam."
  },
  {
    "id": 108,
    "text": "Aku sangat khawatir tentang ditinggal sendirian dan harus mengurus diri sendiri."
  },
  {
    "id": 109,
    "text": "Ingatan akan pengalaman yang sangat mengecewakan di masa laluku terus kembali menghantui pikiranku."
  },
  {
    "id": 110,
    "text": "Aku menjadi sampul depan beberapa majalah tahun lalu."
  },
  {
    "id": 111,
    "text": "Aku sepertinya kehilangan minat pada sebagian besar hal yang biasa aku anggap menyenangkan, seperti seks."
  },
  {
    "id": 112,
    "text": "Aku merasa berkecil hati dan sedih hampir sepanjang hidupku sejak aku masih sangat muda."
  },
  {
    "id": 113,
    "text": "Aku pernah terlibat masalah dengan hukum beberapa kali."
  },
  {
    "id": 114,
    "text": "Cara yang baik untuk menghindari kesalahan adalah dengan memiliki rutinitas dalam melakukan sesuatu."
  },
  {
    "id": 115,
    "text": "Orang lain sering menyalahkanku atas hal-hal yang tidak aku lakukan."
  },
  {
    "id": 116,
    "text": "Aku harus bersikap sangat kasar pada beberapa orang untuk membuat mereka tetap pada jalurnya."
  },
  {
    "id": 117,
    "text": "Orang-orang berpikir aku terkadang membicarakan hal-hal yang aneh atau berbeda dari mereka."
  },
  {
    "id": 118,
    "text": "Ada waktu-waktu ketika aku tidak bisa melewati hari tanpa obat-obatan terlarang."
  },
  {
    "id": 119,
    "text": "Orang-orang mencoba membuatku percaya bahwa aku gila."
  },
  {
    "id": 120,
    "text": "Aku akan melakukan sesuatu yang nekat untuk mencegah orang yang aku cintai meninggalkanku."
  },
  {
    "id": 121,
    "text": "Aku makan secara berlebihan beberapa kali seminggu."
  },
  {
    "id": 122,
    "text": "Aku sepertinya mengacaukan peluang bagus yang datang padaku."
  },
  {
    "id": 123,
    "text": "Aku selalu sulit menghentikan diri sendiri dari perasaan murung dan tidak bahagia."
  },
  {
    "id": 124,
    "text": "Saat aku sendirian dan jauh dari rumah, aku sering mulai merasa tegang dan panik."
  },
  {
    "id": 125,
    "text": "Orang-orang terkadang merasa terganggu padaku karena mereka bilang aku bicara terlalu banyak atau terlalu cepat untuk mereka."
  },
  {
    "id": 126,
    "text": "Kebanyakan orang sukses saat ini entah beruntung atau tidak jujur."
  },
  {
    "id": 127,
    "text": "Aku tidak akan terlibat dengan orang lain kecuali aku yakin mereka akan menyukaiku."
  },
  {
    "id": 128,
    "text": "Aku merasa sangat depresi tanpa alasan yang bisa aku temukan."
  },
  {
    "id": 129,
    "text": "Bertahun-tahun kemudian aku masih mengalami mimpi buruk tentang kejadian yang benar-benar mengancam nyawaku."
  },
  {
    "id": 130,
    "text": "Aku tidak punya energi lagi untuk berkonsentrasi pada tanggung jawab sehari-hariku."
  },
  {
    "id": 131,
    "text": "Minum alkohol membantu saat aku merasa sedih."
  },
  {
    "id": 132,
    "text": "Aku benci memikirkan beberapa cara aku dilecehkan sebagai seorang anak."
  },
  {
    "id": 133,
    "text": "Bahkan di saat-saat baik, aku selalu takut bahwa segalanya akan segera memburuk."
  },
  {
    "id": 134,
    "text": "Terkadang aku merasa seperti orang gila atau tidak nyata ketika hal-hal mulai berjalan buruk dalam hidupku."
  },
  {
    "id": 135,
    "text": "Sendirian, tanpa bantuan seseorang yang dekat untuk diandalkan, benar-benar menakutkanku."
  },
  {
    "id": 136,
    "text": "Aku tahu aku telah menghabiskan lebih banyak uang daripada yang seharusnya untuk membeli obat-obatan terlarang."
  },
  {
    "id": 137,
    "text": "Aku selalu memastikan bahwa pekerjaanku selesai sebelum meluangkan waktu untuk kegiatan santai."
  },
  {
    "id": 138,
    "text": "Aku bisa tahu bahwa orang-orang membicarakanku saat aku lewat di depan mereka."
  },
  {
    "id": 139,
    "text": "Aku sangat pandai membuat alasan ketika aku mendapat masalah."
  },
  {
    "id": 140,
    "text": "Aku percaya aku sedang dikomploti."
  },
  {
    "id": 141,
    "text": "Aku merasa kebanyakan orang berpandangan buruk tentangku."
  },
  {
    "id": 142,
    "text": "Aku sering kali merasa tidak ada apa-apa di dalam diriku, seperti aku kosong dan hampa."
  },
  {
    "id": 143,
    "text": "Terkadang aku memaksakan diri untuk muntah setelah makan."
  },
  {
    "id": 144,
    "text": "Kurasa aku berusaha keras untuk mendorong orang lain mengagumi hal-hal yang aku katakan atau lakukan."
  },
  {
    "id": 145,
    "text": "Aku menghabiskan hidupku dengan mengkhawatirkan satu hal atau lainnya."
  },
  {
    "id": 146,
    "text": "Aku selalu bertanya-tanya apa alasan sebenarnya ketika seseorang bersikap sangat baik padaku."
  },
  {
    "id": 147,
    "text": "Ada pikiran-pikiran tertentu yang terus muncul berulang kali di pikiranku."
  },
  {
    "id": 148,
    "text": "Sedikit hal dalam hidup yang memberiku kesenangan."
  },
  {
    "id": 149,
    "text": "Aku merasa gemetar dan sulit tidur karena ingatan menyakitkan tentang kejadian masa lalu terus berputar di pikiranku."
  },
  {
    "id": 150,
    "text": "Menatap ke depan saat setiap hari dimulai membuatku merasa sangat tertekan."
  },
  {
    "id": 151,
    "text": "Aku tidak pernah bisa menghilangkan perasaan bahwa aku tidak berharga bagi orang lain."
  },
  {
    "id": 152,
    "text": "Aku memiliki masalah minuman keras yang telah aku coba hentikan tetapi gagal."
  },
  {
    "id": 153,
    "text": "Seseorang telah mencoba mengendalikan pikiranku."
  },
  {
    "id": 154,
    "text": "Aku telah mencoba melakukan bunuh diri."
  },
  {
    "id": 155,
    "text": "Aku bersedia membuat diriku kelaparan agar lebih kurus daripada aku yang sekarang."
  },
  {
    "id": 156,
    "text": "Aku tidak mengerti mengapa beberapa orang tersenyum padaku."
  },
  {
    "id": 157,
    "text": "Aku belum melihat mobil dalam sepuluh tahun terakhir."
  },
  {
    "id": 158,
    "text": "Aku menjadi sangat tegang dengan orang yang tidak aku kenal baik karena mereka mungkin ingin menyakitiku."
  },
  {
    "id": 159,
    "text": "Seseorang harus menjadi sangat luar biasa untuk bisa memahami kemampuan khususku."
  },
  {
    "id": 160,
    "text": "Hidupku saat ini masih terganggu oleh kilas balik dari sesuatu yang mengerikan yang terjadi padaku."
  },
  {
    "id": 161,
    "text": "Aku sepertinya menciptakan situasi dengan orang lain di mana aku terluka atau merasa ditolak."
  },
  {
    "id": 162,
    "text": "Aku sering tersesat dalam pikiranku dan melupakan apa yang terjadi di sekitarku."
  },
  {
    "id": 163,
    "text": "Orang-orang bilang aku orang yang kurus, tapi aku merasa paha dan bagian belakangku terlalu besar."
  },
  {
    "id": 164,
    "text": "Ada kejadian-kejadian mengerikan dari masa laluku yang muncul berulang kali menghantui pikiran dan mimpiku."
  },
  {
    "id": 165,
    "text": "Selain keluargaku, aku tidak punya teman dekat."
  },
  {
    "id": 166,
    "text": "Aku bertindak cepat hampir sepanjang waktu dan tidak memikirkan segala sesuatunya sebagaimana mestinya."
  },
  {
    "id": 167,
    "text": "Aku sangat berhati-hati untuk menjaga hidupku sebagai masalah pribadi sehingga tidak ada yang bisa memanfaatkanku."
  },
  {
    "id": 168,
    "text": "Aku sangat sering mendengar segala sesuatunya dengan begitu baik sehingga itu menggangguku."
  },
  {
    "id": 169,
    "text": "Aku selalu bersedia menyerah kepada orang lain dalam perselisihan karena aku takut akan kemarahan atau penolakan mereka."
  },
  {
    "id": 170,
    "text": "Aku mengulangi perilaku tertentu berulang-ulang, terkadang untuk mengurangi kecemasanku dan terkadang untuk menghentikan sesuatu yang buruk terjadi."
  },
  {
    "id": 171,
    "text": "Aku telah serius memikirkan baru-baru ini untuk mengakhiri hidupku sendiri."
  },
  {
    "id": 172,
    "text": "Orang-orang memberitahuku bahwa aku adalah orang yang sangat pantas dan bermoral."
  },
  {
    "id": 173,
    "text": "Aku masih merasa ngeri saat memikirkan pengalaman traumatis yang aku alami bertahun-tahun yang lalu."
  },
  {
    "id": 174,
    "text": "Meskipun aku takut untuk berteman, aku berharap punya lebih banyak teman daripada yang aku miliki sekarang."
  },
  {
    "id": 175,
    "text": "Ada orang-orang yang seharusnya menjadi temanku yang ingin menyakitiku."
  }
];