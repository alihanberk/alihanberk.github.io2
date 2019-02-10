import moment from 'moment';
import 'moment/min/locales';

export const products = [
  { name: 'Kasko', image: 'kasko.png', url: 'kasko.png' },
  { name: 'Trafik Sigortası', image: 'sigorta.png', url: 'trafik-sigortasi' },
  { name: 'Uzatılmış Garanti', image: 'garanti.png', url: 'uzatilmis-garanti' },
  { name: 'Kredi Koruma', image: 'kredikoruma.png', url: 'kredi-koruma' },
  { name: 'Kredi Koruma Plus', image: 'kredikorumaplus.png', url: 'kredi-plus' },
  { name: 'Araç Değer Koruma', image: 'aracdeger.png', url: 'arac-deger-koruma' },
  { name: 'Diğer Ürünlerimiz', image: 'diger.png', url: 'diger' }
];

export const menuLinks = [
  { url: '/urunler-hizmetler', title: 'Ürünler ve Hizmetler' },
  { url: '/hasar-hizmetleri', title: 'Hasar Hizmetleri' },
  { url: '/yetkili-servisler', title: 'Yetkili Servisler' },
  { url: '/bizi-taniyin', title: 'Bizi Tanıyın' }
];

export const socialLinks = [
  { url: 'https://www.facebook.com/volkswagendogusfinans', icon: 'fab fa-facebook-f' },
  { url: 'https://twitter.com/', icon: 'fab fa-twitter' },
  { url: 'https://www.linkedin.com/company/vdf', icon: 'fab fa-linkedin-in' },
  { url: 'https://www.instagram.com/', icon: 'fab fa-instagram' }
];

export const footerLinks = [
  { url: '/kurumsal', title: 'Kurumsal' },
  { url: '/yasal-uyari', title: 'Yasal Uyarı' },
  { url: '/gizlilik-sozlesmesi', title: 'Gizlilik Sözleşmesi' },
  { url: '/bilgi-toplumu', title: 'Bilgi Toplumu Hizmetleri' },
  { url: '/iletisim', title: 'İletişim' }
];

export const faqs = [
  {
    question: 'Neden Trafik Sigortası yaptırmalıyız?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortasıyla neleri güvence altına alırız?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortası ile Kasko arasındaki farklar nelerdir?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Zorunlu Trafik Sigortası’nda sigorta ettiren ile sigortalının farkı nedir?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortası Primleri şirketten şirkete değişkenlik gösterir mi?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Aracın kayıtlı olduğu il trafik sigortası primini etkiler mi?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortası manevi tazminat taleplerini karşılar mı?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortasının vade bitiminde yenilenmemesi durumunda yaptırım var mıdır?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Motorlu aracın kazaya karışıp karışmamasına trafik sigortasının primini etkiler mi?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortasında tazminat kaç gün içerisinde ödenir?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Kaza olması durumunda karşı taraf aracına ve sürücüsüne olasu verilecek zararları trafik sigortası ne ölçüde karşılanmaktadır?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortası ile Kasko arasındaki farklar nelerdir?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Zorunlu Trafik Sigortası’nda sigorta ettiren ile sigortalının farkı nedir?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortası Primleri şirketten şirkete değişkenlik gösterir mi?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Aracın kayıtlı olduğu il trafik sigortası primini etkiler mi?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortası manevi tazminat taleplerini karşılar mı?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortasının vade bitiminde yenilenmemesi durumunda yaptırım var mıdır?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Motorlu aracın kazaya karışıp karışmamasına trafik sigortasının primini etkiler mi?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
  {
    question: 'Trafik Sigortasında tazminat kaç gün içerisinde ödenir?',
    answer: 'Aliquam eget volutpat urna, sit amet imperdiet felis. Ut iaculis lectus venenatis massa mollis volutpat. Aliquam sit amet maximus felis. Fusce purus nisl, euismod sed risus non, laoreet malesuada neque. Aliquam hendrerit sit amet justo nec interdum. Donec porta eros lectus, quis aliquam tortor ornare sed. Ut vitae rutrum sem. In tempus dolore vulputate urna vitae ultricies. Cras blandit, lectus eu maximus ultricies, massa odio varius velit,'
  },
];

export const titles = {
  'bizi-taniyin': 'Bizi Tanıyın',
  'hasar-hizmetleri': 'Hasar Hizmetleri',
  'iletisim': 'İletişim',
  'kurumsal': 'Kurumsal',
  'odeme/kart-bilgileri': 'Kart Bilgileri',
  'odeme/odeme-sonucu': 'Ödeme Sonucu',
  'satin-al/': '',
  'sss': 'Sıkça Sorulan Sorular',
  'urunler-hizmetler': 'Ürünler & Hizmetler',
  'yetkili-servisler': 'Yetkili Servisler',
};

export const ccTR = {
  locale: {
    valid: '',
  },
  placeholders: {
    name: 'ADI SOYADI',
  },
};

export const years = () => {
  let currentYear = new Date().getFullYear();
  let _years = []
  for (let i = 0; i <= 20; i++) {
    _years.push(currentYear);
    currentYear++;
  }
  return _years;
}

export const months = (format) => {
  let _months = [];
  moment.locale('tr');
  for (var i = 0; i < 12; i++) {
    _months.push(moment().months(i).format(format));
  }
  return _months;
}