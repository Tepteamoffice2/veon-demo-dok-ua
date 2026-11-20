// Facts of dok.ua for the homepage — only from veon/client.json (ids in comments). Nothing invented.

export const phoneMain = { label: "0 800 330 707", href: "tel:0800330707" }; // company.contacts.phones[0]
export const phonesOther = [ // company.contacts.phones[1–4]; purpose of each number — to confirm with the client
  { label: "(044) 221-06-15", href: "tel:+380442210615" },
  { label: "(050) 315-38-07", href: "tel:+380503153807" },
  { label: "(067) 484-63-84", href: "tel:+380674846384" },
  { label: "(093) 622-33-94", href: "tel:+380936223394" },
];
export const email = { label: "info@dok.ua", href: "mailto:info@dok.ua" }; // company.contacts.emails[0]
export const address = { // company.contacts.addresses[0]
  label: "м. Київ, вул. Перемоги, 9-а",
  map: "https://www.google.com/maps/search/?api=1&query=%D0%9A%D0%B8%D1%97%D0%B2%2C%20%D0%B2%D1%83%D0%BB.%20%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%BE%D0%B3%D0%B8%2C%209-%D0%B0",
};
export const socials = [ // socials[], all confirmed; YouTube — clean channel URL
  { name: "Instagram", href: "https://www.instagram.com/dok.ukraine" },
  { name: "Facebook", href: "https://www.facebook.com/DOK.Ukraine/" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCUTnO9hFohBLc6KtK25X9EQ" },
  { name: "TikTok", href: "https://www.tiktok.com/@dok.ukraine" },
];
export const apps = { // C-110
  ios: "https://apps.apple.com/ua/app/dok-ua-%D0%B0%D0%B2%D1%82%D0%BE%D0%B7%D0%B0%D0%BF%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%BD%D0%B8/id6449995553",
  android: "https://play.google.com/store/apps/details?id=com.kravchenko.maximus.dok.ua",
};

// products_services[1]
export const brands = ["Audi", "BMW", "Chevrolet", "Daewoo", "Fiat", "Ford", "Honda", "Hyundai", "Kia", "Lexus", "Mazda", "Mercedes", "Mitsubishi", "Nissan", "Opel", "Peugeot", "Renault", "Seat", "Skoda", "SsangYong", "Subaru", "Suzuki", "Toyota", "Volkswagen"];
// popular models on the current homepage (audit/screens/lh-desktop-1-full.jpg)
export const models = ["Daewoo Lanos", "Chevrolet Aveo", "Skoda Octavia", "Chevrolet Lacetti"];

// 9 groups of the category bar + popular parts from the current homepage list (audit/screens/lh-desktop-1-full.jpg)
export const catalog = [
  { group: "Усе для ТО", parts: ["Моторна олива", "Масляний фільтр", "Повітряний фільтр", "Фільтр салону"] },
  { group: "Гальмівна система", parts: ["Гальмівні колодки", "Гальмівні диски", "Гальмівна рідина"] },
  { group: "Двигун і вихлоп", parts: ["Ремінь ГРМ", "Свічки запалювання", "Лямбда-зонд"] },
  { group: "Підвіска і кермо", parts: ["Амортизатори", "Кульова опора", "Рульова тяга"] },
  { group: "Коробка передач", parts: ["Комплект зчеплення", "Трансмісійна олива", "ШРУС"] },
  { group: "Охолодження і опалення", parts: ["Помпа", "Термостат", "Радіатор пічки"] },
  { group: "Електрика і освітлення", parts: ["Акумулятор", "Котушка запалювання", "Датчик ABS"] },
  { group: "Кузов", parts: ["Зовнішнє дзеркало", "Щітки склоочисника"] },
  { group: "Автотовари і автохімія", parts: ["Антифриз", "Шини"] },
];

export const anchors = [
  { href: "#hero", label: "Підбір" },
  { href: "#vin-expert", label: "За VIN" },
  { href: "#guarantees", label: "Гарантії" },
  { href: "#delivery", label: "Доставка й оплата" },
  { href: "#contacts", label: "Контакти" },
];
