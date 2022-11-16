export const subscriptions = [
  {
    title: 'Бесплатная',
    price: 0,
    desc: 'Оплата в месяц. Бесплатный тариф предоставляет доступ ко всей коллекции музыки. Присутствует реклама',
    image: require('../assets/images/free-bg.jpg'),
  },
  {
    title: 'Стандартная',
    price: 250,
    desc: 'Оплата в месяц. Стандартный тариф предоставляет доступ ко всей коллекции музыки в среднем качестве',
    image: require('../assets/images/standart-bg.jpg'),
  },
  {
    title: 'Премиум',
    price: 500,
    desc: 'Оплата в месяц. Премиум тариф предоставляет доступ ко всей коллекции музыки в высоком качестве',
    image: require('../assets/images/premium-bg.jpg'),
  },
];

export const news = [
  {
    title: 'Music to Be Murdered By',
    desc: 'Новый альбом Eminem «Music to Be Murdered By» уже доступен в нашем сервисе. На альбоме вас ждёт 20 новых треков.',
    image: require('../assets/images/music-to-be-murdered-by.jpg'),
    author: {
      userpic: require('../assets/icons/avatar.png'),
      name: 'MUSIC BOX',
      date: 1579219200000,
    },
  },
  {
    title: 'Ordinary Man',
    desc: 'Легенда рока Оззи Озборн спустя 10 лет выпустил новый альбом Ordinary Man. Слушайте в числе первых на Music Box',
    image: require('../assets/images/ordinary-man.jpg'),
    author: {
      userpic: require('../assets/icons/avatar.png'),
      name: 'MUSIC BOX',
      date: 1582502400000,
    },
  },
];
