const routes = [
  {
    path: '/anasayfa',
    name: 'Anasayfa',
    component: require('../../components/Views/Home').default,
    visible: false
  },
  {
    path: '/krediler',
    name: 'Krediler',
    component: require('../../components/Views/Credits').default,
    routes: [
      {
        path: '/kredilerim',
        name: 'Kredilerim',
        component: require('../../components/Views/Credits/Credits').default,
      },
      {
        path: '/krediye-hemen-basvur',
        name: 'Krediye Hemen Başvur',
        component: require('../../components/Views/Credits/ApplyForCredit').default,
      },
      {
        path: '/odemelerim',
        name: 'Ödemelerim',
        component: require('../../components/Views/Credits/Payments').default,
      },
      {
        path: '/bildirimlerim',
        name: 'Bildirimlerim',
        component: require('../../components/Views/Credits/Notifications').default,
      },
    ]
  },
  {
    path: '/sigortalar',
    name: 'Sigortalar',
    component: require('../../components/Views/Insurance').default,
    routes: [
      // {
      //   path: '/police-satin-al',
      //   name: 'Poliçe Satın Al',
      //   component: require('../../components/Views/Credits').default, //
      // },
      {
        path: '/police-listesi',
        name: 'Poliçelerim',
        component: require('../../components/Views/Insurance/PolicyList').default,
        isHidden: true
      },
      {
        path: '/policelerim',
        name: 'Poliçelerim',
        component: require('../../components/Views/Insurance/Policies').default,
      },
      {
        path: '/police-bilgileri',
        name: 'Poliçe Bilgileri',
        component: require('../../components/Views/Insurance/PolicyInfo').default,
        isHidden: true
      },
      {
        path: '/police-detaylari',
        name: 'Poliçe Detaylari',
        component: require('../../components/Views/Insurance/PolicyDetails').default,
        isHidden: true
      },
      {
        path: '/police-basim-talebi',
        name: 'Poliçe Basım Talebi',
        component: require('../../components/Views/Insurance/PolicyPrintingRequest').default,
        isHidden: true
      },
      {
        path: '/teklif-basim-talebi',
        name: 'Teklif Basım Talebi',
        component: require('../../components/Views/Insurance/OfferPrintingRequest').default,
        isHidden: true
      },
      {
        path: '/plaka-bilgi-guncelleme',
        name: 'Plaka Bilgi Güncelleme',
        component: require('../../components/Views/Insurance/PlateInfoUpdate').default,
        isHidden: true
      },
      {
        path: '/bildirimlerim',
        name: 'Bildirimlerim',
        component: require('../../components/Views/Insurance/Notifications').default,
      },
    ]
  },
  {
    path: '/talepler',
    name: 'Taleplerim',
    component: require('../../components/Views/Requests').default,
    routes: [
      {
        path: '/kredi-karti-bilgileri',
        name: 'Kredi Kartı Bilgileri',
        component: require('../../components/Views/Requests/CreditCardsInfo').default,
        isHidden: true
      },
      {
        path: '/kredi-karti-bilgileri-tc-ile',
        name: 'Kredi Kartı Bilgileri TC İle',
        component: require('../../components/Views/Requests/CreditCardsInfoWithTC').default,
        isHidden: true
      },
      {
        path: '/yeni-talep',
        name: 'Yeni Talep',
        component: require('../../components/Views/Requests/NewRequest').default,
      },
      {
        path: '/acilan-talepler',
        name: 'Açılan Talepler',
        component: require('../../components/Views/Requests/OpenRequest').default
      },
      {
        path: '/teklifi-policelestir',
        name: 'Teklifi Poliçeleştir',
        component: require('../../components/Views/Requests/OfferPolicy').default,
        isHidden: true
      },
      {
        path: '/kasko-teklifleriniz',
        name: 'Kasko Teklifleriniz',
        component: require('../../components/Views/Requests/InsuranceOffers').default,
        isHidden: true
      },
    ]
  },
  {
    path: '/kisisel-bilgilerim',
    name: 'Kişisel Bilgilerim',
    component: require('../../components/Views/PersonalInformation').default
  },
  {
    path: '/izinli-pazarlama',
    name: 'İzinli Pazarlama',
    component: require('../../components/Views/PersonalInformation/AllowMarketing').default,
    visible: false
  }
];

export default routes;
