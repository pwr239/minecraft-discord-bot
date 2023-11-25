const config = {
    bot : {
        slashCommands: "1131318118313119756", // global veya sunucuIDsi yazın - slash olmayacaksa undefined yapın
	    token: "MTE1MTIyNjY4Mjg4NDIzMTIxOQ.G6QIh2.Rar7szAYu3Tm-N6_2pVyg8PT-mTc8OAL9mPZc4", //Bot Tokeniniz
	    prefix: ["."], //komut ön eki
        id: "1151226682884231219" //bot idsi
    },
    sunucu : {
        type: "java", //sunucu türü java veya bedrock 
 	    ip: "193.106.196.115", //sunucu adresi
        port: 25565, //sunucu portu java için varsayılan 25565 bedrock için varsayılan 19132
        site: "Yakında", //sunucu sitesi
        isim: "SauraNetwork", //sunucu ismi
        mcindir: "Oyuncuları için 3. parti minecraft indirme linki", //minecraft indirme linki
        vote: "Yakında!", //oy verme linki
        
    },
    kanal : {
	    aktif: false, //sesli kanalda online gösterme aktif mi(true) olsun kapalı mı(false)
	    id: "1174358083191971930", // sunucu online sayısının gözükeceği kanal (ses kanalı)
	    yazi: "• Aktif: {online}/{maxonline}" // kanalda gözükecek yazı || Varsayılan: • Aktif: {online}/{maxonline}
   },
    durum : {
	    mesaj: "{online} Kişi Sunucumuzda" // bot durumunda online sayısı || Varsayılan {online} Kişi Sunucumuzda 
   },
    ticket : {    
        parentOpened: "Talep kanallarının açılacağı kategori", //destek talep kanallarının açılacağı kategorinin idsi

        Category1: "Minecraft Sorunları", //Destek talebi detayı için kategori 3 || Varsayılan: Minecraft Sorunları
        Category2: "Bulduğunuz Buglar", //Destek talebi detayı için kategori 2 || Varsayılan: Bulduğunuz Buglar
        Category3: "Şikayetler", //Destek talebi detayı için kategori 3 || Varsayılan: Şikayetler
          
        roleSupport: "Destek Yetkilisi Rol İD", //Destek talebine bakacak kişilere verilecek rolün idsi
            
        logsTicket: "1149016849275686922", //Destek taleplerinin loglanacağı kanal
        ticketChannel: "Destek Talebi Açılacak Kanal İD" //Kullanıcıların destek talebi oluşturacağı kanalın idsi
    },
    oylama: {
        enabled: false, //oylama aktif mi? true: aktif false: pasif
        channelID: "Kullanıcıların Öneri yazabileceği kanal İD", //oylama kanalı
        emoji: "👍", //oylama emoji || Varsayılan: 👍
        emoji2: "👎", //oylama emoji || Varsayılan: 👎
        emoji3: "🤷", //oylama emoji || Varsayılan: 🤷
        altBaslik: { //alt başlık kullanılsın mı?
            enabled: false, //alt başlık kullanılsın mı? true: kullanılsın false: kullanılmasın
            arsivlemeSure: "1440" //alt başlık arşivlenme süresi (1440 dakika sonra [1440 dakika = 1 gün] arşivlenecek)
        } 

    }
}


module.exports = config;
