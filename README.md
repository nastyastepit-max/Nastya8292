Добро пожаловать в "APPLE", где каждая деталь создана для истинных ценителей технологий Apple. Мы – ваш специализированный магазин, посвященный совершенству и инновациям iPhone.

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
