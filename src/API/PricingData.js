export const CONTACT_URL = 'https://t.me/jle4alika';

export const tabs = [
    { id: 'bots', label: 'Боты' },
    { id: 'web', label: 'Веб' },
    { id: 'api', label: 'API' },
    { id: 'design', label: 'Дизайн' }
];

export const pricingData = {
    bots: {
        plans: [
            {
                name: 'БАЗОВЫЙ',
                price: '15 000₽',
                description: 'Простой бот с базовым функционалом',
                features: ['До 5 функциональных кнопок', 'MySQL база данных', 'Админ-панель', 'Базовая аналитика'],
                buttonText: 'Заказать',
                contactUrl: CONTACT_URL
            },
            {
                name: 'МАГАЗИН',
                price: 'от 35 000₽',
                description: 'Полноценный бот для продаж',
                features: ['Неограниченные кнопки', 'PostgreSQL', 'Платежные шлюзы', 'Персонализация', 'Рассылки'],
                buttonText: 'Заказать',
                popular: true,
                contactUrl: CONTACT_URL
            },
            {
                name: 'ENTERPRISE',
                price: 'от 70 000₽',
                description: 'Сложные решения с интеграциями',
                features: ['Все из "Магазина"', 'ИИ интеграции', 'Микросервисы', 'Redis кэширование'],
                buttonText: 'Обсудить',
                contactUrl: CONTACT_URL
            }
        ]
    },
    web: {
        plans: [
            {
                name: 'LANDING PAGE',
                price: '25 000₽',
                description: 'Одностраничный сайт',
                features: ['Адаптивный дизайн', 'Формы обратной связи', 'Подключение домена', '2 недели поддержки'],
                buttonText: 'Заказать',
                contactUrl: CONTACT_URL
            },
            {
                name: 'КОРПОРАТИВНЫЙ',
                price: '70 000₽',
                description: 'Многостраничный сайт с CMS',
                features: ['До 10 страниц', 'Django CMS', 'Блог / Новости', 'Мультиязычность'],
                buttonText: 'Заказать',
                popular: true,
                contactUrl: CONTACT_URL
            },
            {
                name: 'МАГАЗИН',
                price: 'от 100 000₽',
                description: 'Полноценный e-commerce',
                features: ['Каталог товаров', 'Онлайн-оплата', 'Личный кабинет', 'Интеграция доставки'],
                buttonText: 'Обсудить',
                contactUrl: CONTACT_URL
            }
        ]
    },
    api: {
        plans: [
            {
                name: 'БАЗОВЫЙ',
                price: 'от 30 000₽',
                description: 'Простое API для вашего сервиса',
                features: ['REST API', 'Документация', 'Аутентификация', 'Базовое кэширование'],
                buttonText: 'Заказать',
                contactUrl: CONTACT_URL
            },
            {
                name: 'ПРОДВИНУТЫЙ',
                price: 'от 60 000₽',
                description: 'Масштабируемое API решение',
                features: ['GraphQL + REST', 'Микросервисы', 'Redis кэширование', 'WebSocket'],
                buttonText: 'Заказать',
                popular: true,
                contactUrl: CONTACT_URL
            },
            {
                name: 'ENTERPRISE',
                price: 'от 120 000₽',
                description: 'Высоконагруженные системы',
                features: ['Балансировка нагрузки', 'Кластеризация', '24/7 мониторинг', 'Поддержка'],
                buttonText: 'Обсудить',
                contactUrl: CONTACT_URL
            }
        ]
    },
    design: {
        plans: [
            {
                name: 'ЛОГОТИП',
                price: '10 000₽',
                description: 'Уникальный логотип',
                features: ['3 концепта', '2 круга правок', 'Исходники', 'Все форматы'],
                buttonText: 'Заказать',
                contactUrl: CONTACT_URL
            },
            {
                name: 'БРЕНДБУК',
                price: 'от 40 000₽',
                description: 'Фирменный стиль',
                features: ['Логотип', 'Цветовая палитра', 'Типографика', 'Гайдлайн'],
                buttonText: 'Заказать',
                popular: true,
                contactUrl: CONTACT_URL
            },
            {
                name: 'UI/UX',
                price: 'от 80 000₽',
                description: 'Дизайн интерфейсов',
                features: ['Исследование', 'Прототипы', 'UI дизайн', 'Адаптив'],
                buttonText: 'Обсудить',
                contactUrl: CONTACT_URL
            }
        ]
    }
};

export const additionalServices = [
    {
        iconKey: 'server',
        title: 'Развёртывание',
        price: '5 000₽',
        description: 'Настройка сервера, домен, SSL'
    },
    {
        iconKey: 'flask',
        title: 'Тестирование',
        price: '10 000₽',
        description: 'Функциональное, нагрузочное, security'
    },
    {
        iconKey: 'fileAlt',
        title: 'Техническая документация',
        price: '8 000₽',
        description: 'Описание API, архитектуры, инструкции'
    },
    {
        iconKey: 'database',
        title: 'Миграция данных',
        price: 'от 15 000₽',
        description: 'Перенос с других платформ, бэкапы'
    },
    {
        iconKey: 'shieldAlt',
        title: 'Безопасность',
        price: '12 000₽',
        description: 'Аудит, pentest, настройка защиты'
    },
    {
        iconKey: 'bolt',
        title: 'Оптимизация скорости',
        price: '10 000₽',
        description: 'Core Web Vitals, кэширование, CDN'
    },
    {
        iconKey: 'headset',
        title: 'Поддержка 24/7',
        price: '15 000₽/мес',
        description: 'Круглосуточный мониторинг и реакция'
    }
];

export const faqData = [
    {
        question: 'Какой срок разработки?',
        answer: 'Простой бот — 3-5 дней, магазин — 2-3 недели, сложный проект — 1-2 месяца.'
    },
    {
        question: 'Как происходит оплата?',
        answer: 'Предоплата 50% для новых клиентов. Для постоянных — по факту. Принимаю карты, крипту.'
    },
    {
        question: 'Есть ли поддержка после сдачи?',
        answer: 'Да, базовая поддержка включена. Дополнительная — 3000₽/месяц.'
    },
    {
        question: 'Как оформить заказ?',
        answer: 'Можно оформить заказ через форму обратной связи или заказать на кворк. Предпочитаю работать через Telegram.'
    },
    {
        question: 'Можно ли не использовать мой проект в портфолио?',
        answer: 'Конечно можно, любая публикация согласовывается с заказчиком.'
    },
    {
        question: 'Рассматриваю ли я сотрудничество?',
        answer: 'Вообще - Да, но все зависит от проекта, времени и условий.'
    }
];