/** 
 * Запуск бота
 */
require('dotenv').config();
const { Scenes, session, Telegraf } = require('telegraf');
const { start, backMenu, startSceneOne } = require('./controllers/commands');
const { menuSceneOne } = require('./scenes/scene1');

// подключение бота
const bot = new Telegraf(process.env.BOT_TOKEN);
// регистрация сцен (пример: new Scenes.Stage([menuSceneOne, menuSceneTwo, menuSceneTree]))
const stage = new Scenes.Stage([menuSceneOne]);

bot.use(session());
bot.use(stage.middleware());
bot.start(start);

// прослушка на сообщение 
bot.hears('Возврат в меню', backMenu)
bot.hears('Конечная сумма', startSceneOne)
//bot.hears('Второй сценарий', startSceneTwo)

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));