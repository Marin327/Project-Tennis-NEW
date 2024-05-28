const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Портът по подразбиране е 3000
const HOST = 'www.teniss123bg.com'; // Хостът на сайта

// Маршрут за основна страница
app.get('/', (req, res) => {
  res.send('Добре дошли във вашия сайт www.tennisBG123.com!');
});

// Запуск на сървъра
app.listen(PORT, HOST, () => {
  console.log(`Сървърът стартира на адрес http://${HOST}:${PORT}`);
});