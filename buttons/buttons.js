/**
 * Кнопки для бота
 */
const { Markup } = require('telegraf');

// основное меню
const mainMenu =
Markup.keyboard([
  ['Конечная сумма'],
  ['Второй сценарий'],
  ['Возврат в меню']
]).resize()


// возврат
const backButtonMenu =
    Markup.keyboard([
      ['Возврат в меню'],
    ]).resize()


// запуск бота
const startCallbackButton =
    Markup.inlineKeyboard([
        Markup.button.callback(
            'Старт',
            'test_callback'
        ),
    ]).resize()

module.exports = {
    mainMenu,
    backButtonMenu,
    startCallbackButton
}