Добро пожаловать в "APPLE", где каждая деталь создана для истинных ценителей технологий Apple. Мы – ваш специализированный магазин, посвященный совершенству и инновациям iPhone.
Полный ассортимент iPhone: От самых последних флагманов до проверенных временем классических моделей. У нас вы найдете все варианты памяти и цвета, чтобы каждый наш клиент нашел свой идеальный гаджет.
•  Оригинальные аксессуары: Помимо смартфонов, у нас представлен широкий выбор 100% оригинальных аксессуаров: стильные и защитные чехлы, мощные зарядные устройства, беспроводные наушники AirPods, а также умные часы Apple Watch, которые идеально дополняют вашу экосистему.
очему выбирают "APPLE":

•  Подлинность и качество: Мы гарантируем подлинность каждого устройства и аксессуара. Только оригинальная продукция с официальной гарантией Apple.
•  Экспертная консультация: Наши специалисты – настоящие знатоки мира Apple. Они помогут вам сравнить модели, расскажут о всех функциях и подберут именно то, что соответствует вашим потребностям и стилю жизни.
•  Безупречный сервис: Мы предлагаем не просто продажу, а полноценный опыт. Помощь с активацией нового iPhone, перенос данных со старого устройства, гибкие условия оплаты и кредитования – всё для вашего удобства.
•  Уютная атмосфера: В нашем магазине вас ждет комфортная обстановка, где вы сможете "вживую" протестировать любую модель iPhone и познакомиться с аксессуарами.

Откройте для себя совершенство технологий Apple вместе с "iPremium". Ждем вас за вашим новым iPhone и незабываемым опытом покупки!

### Структура базы данных

#### Таблицы:
* Users (Пользователи)
```sqlite-sql
id INTEGER PRIMARY KEY AUTOINCREMENT
name TEXT
email TEXT UNIQUE
password TEXT NOT NULL
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```
* Products (Товары)
```sqlite-sql
id INTEGER PRIMARY KEY AUTOINCREMENT
name TEXT
price REAL
description TEXT
image_url TEXT
category TEXT
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```
* Reviews (Отзывы)
```sqlite-sql
id INTEGER PRIMARY KEY AUTOINCREMENT
user_id INTEGER NOT NULL
product_id INTEGER NOT NULL
review TEXT NOT NULL
stars INTEGER CHECK (stars >= 1 AND stars <= 5) NOT NULL
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
FOREIGN KEY(user_id) REFERENCES users(id)
FOREIGN KEY(product_id) REFERENCES products(id)
```
* Shops (Магазины)
```sqlite-sql
id INTEGER PRIMARY KEY AUTOINCREMENT
address TEXT
phone TEXT
latitude REAL
longitude REAL
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

### Структура проекта
```text
backend/
├── database.js          # Класс для работы с базой данных
├── server.js           # Основной файл сервера
├── package.json        # Зависимости и скрипты
├── database.db         # Файл базы данных (создается автоматически)
└── images/             # Папка для статических файлов
    └── products/       # Изображения товаров
```
