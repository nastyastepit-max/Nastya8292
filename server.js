const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Разрешаем доступ к файлам в текущей папке

// Простые маршруты для демонстрации
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    console.log('Регистрация:', { name, email, password });
    
    // Имитация успешной регистрации
    res.json({
        success: true,
        data: {
            id: 1,
            name,
            email,
            message: 'Пользователь успешно зарегистрирован'
        }
    });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Вход:', { email, password });
    
    // Имитация успешного входа
    res.json({
        success: true,
        data: {
            id: 1,
            name: 'Тестовый пользователь',
            email,
            message: 'Авторизация успешна'
        }
    });
});

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "iPhone 14 Pro",
            price: 999.99,
            description: "Новый iPhone с динамическим островом",
            category: "Смартфоны",
            image_url: "https://via.placeholder.com/300x200/007AFF/ffffff?text=iPhone+14"
        },
        {
            id: 2,
            name: "Samsung Galaxy S23",
            price: 849.99,
            description: "Флагманский смартфон с лучшей камерой",
            category: "Смартфоны",
            image_url: "https://via.placeholder.com/300x200/34C759/ffffff?text=Galaxy+S23"
        },
        {
            id: 3,
            name: "MacBook Pro 16\"",
            price: 2399.99,
            description: "Мощный ноутбук для профессионалов",
            category: "Ноутбуки",
            image_url: "https://via.placeholder.com/300x200/000000/ffffff?text=MacBook+Pro"
        },
        {
            id: 4,
            name: "Sony WH-1000XM5",
            price: 349.99,
            description: "Наушники с продвинутым шумоподавлением",
            category: "Аксессуары",
            image_url: "https://via.placeholder.com/300x200/FF9500/ffffff?text=Sony+Headphones"
        }
    ];
    
    res.json({
        success: true,
        data: products,
        count: products.length
    });
});

app.get('/api/products/1/reviews', (req, res) => {
    const reviews = [
        {
            id: 1,
            user_name: "Александр",
            stars: 5,
            review: "Отличный телефон! Батарея держит долго, камера супер."
        },
        {
            id: 2,
            user_name: "Мария",
            stars: 4,
            review: "Хороший аппарат, но дороговат. В целом рекомендую."
        },
        {
            id: 3,
            user_name: "Дмитрий",
            stars: 5,
            review: "Пользуюсь месяц - полный восторг! Все работает идеально."
        }
    ];
    
    res.json({
        success: true,
        data: reviews,
        count: reviews.length
    });
});

app.get('/api/shops', (req, res) => {
    const shops = [
        {
            id: 1,
            address: "г. Москва, ул. Тверская, д. 15",
            phone: "+7 (495) 123-45-67"
        },
        {
            id: 2,
            address: "г. Санкт-Петербург, Невский пр., д. 28",
            phone: "+7 (812) 987-65-43"
        },
        {
            id: 3,
            address: "г. Екатеринбург, ул. Ленина, д. 42",
            phone: "+7 (343) 456-78-90"
        }
    ];
    
    res.json({
        success: true,
        data: shops,
        count: shops.length
    });
});

// Главная страница API
app.get('/api', (req, res) => {
    res.json({
        success: true,
        message: 'API TechStore работает!',
        endpoints: {
            auth: ['POST /api/register', 'POST /api/login'],
            products: ['GET /api/products', 'GET /api/products/1/reviews'],
            shops: ['GET /api/shops']
        }
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
    console.log(`📦 API доступно по адресу: http://localhost:${PORT}/api`);
    console.log(`🖥️  Сайт: откройте файл index.html в браузере`);
});

// Обработка graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Сервер останавливается...');
    process.exit(0);
});