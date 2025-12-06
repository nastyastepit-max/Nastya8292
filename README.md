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



Стили

<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary: #0a0a0a;
            --secondary: #1a1a1a;
            --accent: #ff00ae;
            --accent-hover: #00a3cc;
            --text: #e0e0e0;
            --text-light: #a0a0a0;
            --success: #00cc88;
            --warning: #b2cf1d;
            --border: #333;
            --card-bg: #1a1a1a;
        }

        body {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: var(--text);
            line-height: 1.6;
            min-height: 100vh;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        /* Header Styles */
        header {
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(10px);
            color: var(--text);
            padding: 1rem 0;
            box-shadow: 0 2px 30px rgba(0, 212, 255, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid var(--border);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--text);
            text-decoration: none;
            background: linear-gradient(45deg, var(--accent), #0099ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 2rem;
        }

        nav ul li a {
            color: var(--text);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s;
            padding: 8px 16px;
            border-radius: 6px;
        }

        nav ul li a:hover {
            color: var(--accent);
            background: rgba(0, 212, 255, 0.1);
        }

        .auth-buttons {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .user-info {
            display: none;
            align-items: center;
            gap: 12px;
            color: var(--text);
        }

        .user-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: linear-gradient(45deg, var(--accent), #0099ff);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: var(--primary);
            border: 2px solid var(--accent);
        }

        .btn {
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            border: none;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .btn-primary {
            background: linear-gradient(45deg, var(--accent), #0099ff);
            color: var(--primary);
        }

        .btn-outline {
            background: transparent;
            border: 2px solid var(--accent);
            color: var(--accent);
        }

        .btn-success {
            background: var(--success);
            color: var(--primary);
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
        }

        .btn-primary:hover {
            background: linear-gradient(45deg, var(--accent-hover), #0077cc);
        }

        .btn-outline:hover {
            background: var(--accent);
            color: var(--primary);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 26, 46, 0.8) 100%),
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="%2300d4ff" fill-opacity="0.03" points="0,1000 1000,0 1000,1000"/></svg>');
            color: var(--text);
            padding: 6rem 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            background: linear-gradient(45deg, #fff, var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero p {
            font-size: 1.3rem;
            max-width: 700px;
            margin: 0 auto 3rem;
            color: var(--text-light);
        }

        /* Products Section */
        .section-title {
            text-align: center;
            margin: 4rem 0 3rem;
            font-size: 2.5rem;
            color: var(--text);
            position: relative;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background: linear-gradient(45deg, var(--accent), #0099ff);
            margin: 1rem auto;
            border-radius: 2px;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }

        .product-card {
            background: var(--card-bg);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            transition: all 0.3s;
            border: 1px solid var(--border);
            position: relative;
        }

        .product-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(45deg, var(--accent), #0099ff);
        }

        .product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(0, 212, 255, 0.2);
            border-color: var(--accent);
        }

        .product-image {
            width: 100%;
            height: 370px;
            object-fit: cover;
            background: var(--secondary);
        }

        .product-info {
            padding: 1.5rem;
        }

        .product-name {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 0.8rem;
            color: var(--text);
        }

        .product-description {
            color: var(--text-light);
            margin-bottom: 1.2rem;
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .product-price {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent);
            margin-bottom: 1rem;
        }

        .product-category {
            display: inline-block;
            background: rgba(0, 212, 255, 0.1);
            color: var(--accent);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            margin-bottom: 1rem;
            border: 1px solid rgba(0, 212, 255, 0.3);
        }

        /* Reviews Section */
        .reviews-section {
            background: var(--secondary);
            padding: 4rem 0;
            margin: 4rem 0;
            position: relative;
        }

        .reviews-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(45deg, var(--accent), #0099ff);
        }

        .reviews-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
        }

        .review-card {
            background: var(--primary);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border);
            transition: all 0.3s;
        }

        .review-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent);
        }

        .review-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.2rem;
        }

        .review-author {
            font-weight: 600;
            color: var(--text);
        }

        .review-stars {
            color: var(--warning);
            font-size: 1.2rem;
        }

        .review-text {
            color: var(--text-light);
            font-style: italic;
            line-height: 1.6;
        }

        /* Shops Section */
        .shops-section {
            padding: 4rem 0;
        }

        .shops-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
        }

        .shop-card {
            background: var(--card-bg);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border);
            transition: all 0.3s;
        }

        .shop-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent);
        }

        .shop-address {
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text);
            font-size: 1.1rem;
        }

        .shop-phone {
            color: var(--accent);
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
        }

        /* Auth Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            z-index: 2000;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background: var(--card-bg);
            padding: 2.5rem;
            border-radius: 16px;
            width: 90%;
            max-width: 420px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            border: 1px solid var(--border);
            position: relative;
        }

        .modal-content::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(45deg, var(--accent), #0099ff);
            border-radius: 16px 16px 0 0;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }

        .modal-header h2 {
            color: var(--text);
            font-size: 1.8rem;
        }

        .close-modal {
            background: none;
            border: none;
            font-size: 1.8rem;
            cursor: pointer;
            color: var(--text-light);
            transition: color 0.3s;
        }

        .close-modal:hover {
            color: var(--accent);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.8rem;
            font-weight: 500;
            color: var(--text);
        }

        .form-control {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid var(--border);
            border-radius: 8px;
            font-size: 1rem;
            background: var(--primary);
            color: var(--text);
            transition: all 0.3s;
        }

        .form-control:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
        }

        .form-footer {
            margin-top: 2rem;
            text-align: center;
        }

        .form-footer a {
            color: var(--accent);
            text-decoration: none;
            font-weight: 500;
        }

        .form-footer a:hover {
            text-decoration: underline;
        }

        /* Notification */
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 8px;
            color: var(--primary);
            font-weight: 600;
            z-index: 3000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .notification.show {
            transform: translateX(0);
        }

        .notification.success {
            background: var(--success);
        }

        .notification.error {
            background: var(--warning);
        }

        /* Footer */
        footer {
            background: var(--primary);
            color: var(--text-light);
            padding: 4rem 0 2rem;
            border-top: 1px solid var(--border);
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 3rem;
            margin-bottom: 3rem;
        }

        .footer-column h3 {
            margin-bottom: 1.5rem;
            font-size: 1.3rem;
            color: var(--text);
        }

        .footer-column ul {
            list-style: none;
        }

        .footer-column ul li {
            margin-bottom: 0.8rem;
        }

        .footer-column ul li a {
            color: var(--text-light);
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-column ul li a:hover {
            color: var(--accent);
        }

        .copyright {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid var(--border);
            color: var(--text-light);
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 1rem;
            }

            nav ul {
                flex-wrap: wrap;
                justify-content: center;
            }

            nav ul li {
                margin: 0.5rem;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.1rem;
            }

            .section-title {
                font-size: 2rem;
            }
        }
    </style>
