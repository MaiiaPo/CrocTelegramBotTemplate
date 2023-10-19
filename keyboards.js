const { Markup } = require('telegraf/markup.js');

export function getMainMenu() {
  return Markup.keyboard([
      ['Мои задачи', 'Добавить задачу'],
      ['Смотивируй меня']
  ]).resize().extra()
}