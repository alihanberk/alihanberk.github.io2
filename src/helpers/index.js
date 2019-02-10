export const days = (month, year) => {
  let date = new Date(year, month - 1, 1);
  let days = [];
  if (month && year) {
    while (date.getMonth() === month - 1) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
  }
  return days;
};

export const months = [
  { value: 1, name: 'Ocak' },
  { value: 2, name: 'Şubat' },
  { value: 3, name: 'Mart' },
  { value: 4, name: 'Nisan' },
  { value: 5, name: 'Mayıs' },
  { value: 6, name: 'Haziran' },
  { value: 7, name: 'Temmuz' },
  { value: 8, name: 'Ağustos' },
  { value: 9, name: 'Eylül' },
  { value: 10, name: 'Ekim' },
  { value: 11, name: 'Kasım' },
  { value: 12, name: 'Aralık' },
];

export const years = () => {
  let now = new Date();
  let currentYear = now.getFullYear();
  let _years = [];
  for (let i = 0; i < 100; i++) {
    _years.push(currentYear - i);
  };
  return _years;
};

export const toFixed = (value) => {
  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
