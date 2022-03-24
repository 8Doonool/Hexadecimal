const TelegramBot = require('node-telegram-bot-api');

const token = '5284904150:AAFXAPO6T1YrKnHI5oAEgpWVeXJJMUH_nWY';

const bot = new TelegramBot(token, {polling: true});

const arrMessageBot = ['Привет,', 'Здаров,', 'Hola,', 'Hello,', 'Доброго времени суток,', 'Здравствуй,'];

const roundMatch = (max, min) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

bot.on('message', msg => {
    const {id: id, first_name: userName} = msg.chat;

    if (/Здаров/gi.test(msg.text)) {
        bot.sendMessage(id, `${arrMessageBot[roundMatch(4, 0)]} ${userName}`);
    }
});