/**
 * Первый сценарий бота:
 * первый шаг - ввод первого параметра пользователем,
 * второй шаг - ввод второго параметра пользователем,
 * третий шаг - вывод результата
 */
const { Telegraf, Scenes } = require('telegraf');
const { backMenu } = require('../controllers/commands');
const { backButtonMenu, mainMenu } = require('../buttons/buttons');


const stepOne = Telegraf.on('text', async ctx => {
  try {
    ctx.wizard.state.data = {}; // стейт для хранения введенных пользователем данных
    await ctx.reply('Введи первый параметр'); // что должен ввести пользователь
    return ctx.wizard.next()
  } catch (error) {
      console.log(error)
      ctx.reply('Упс... Произошла какая - то ошибка');
  }
});

// второй шаг сцены
const stepTwo = Telegraf.on('text', async ctx => {
  try {
    ctx.wizard.state.data.firsParam = ctx.message.text; // сохраняем ввод пользователя в стейт
    await ctx.reply('Введи второй параметр');
    return ctx.wizard.next()
  } catch (error) {
      console.log(error)
      ctx.reply('Упс... Произошла какая - то ошибка');
  }
});

// третий шаг сцены
const result = Telegraf.on('text', async ctx => {
  try {
    ctx.wizard.state.data.secondParam = ctx.message.text;
    const { firsParam, secondParam } = ctx.wizard.state.data;
    // ...
    // тут должна быть обработка полученных данных и вывод
    await ctx.reply(`Результат: ${+firsParam + +secondParam}`, {
      ...mainMenu
  })
    return ctx.scene.leave()
  } catch (error) {
      console.log(error)
      ctx.reply('Упс... Произошла какая - то ошибка');
  }
});

// передаём конструктору название сцены и шаги сцен
const menuSceneOne = new Scenes.WizardScene('sceneOne', stepOne, stepTwo, result);

menuSceneOne.enter(ctx => ctx.reply('Для начала введи стартовый капитал', {
  ...backButtonMenu
}));

// вешаем прослушку hears на сцену
menuSceneOne.hears('Возврат в меню', ctx => {
  ctx.scene.leave();
  return backMenu(ctx);
})

// экспортируем сцену
module.exports = {
  menuSceneOne
};
