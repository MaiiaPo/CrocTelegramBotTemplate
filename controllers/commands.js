const { mainMenu } = require('../buttons/buttons');

const start = (ctx) =>
    ctx.reply(`
      Привет, я инвестиционный калькулятор
        
      Что ты хочешь вычислить?
    `, {
        disable_web_page_preview: true,
        parse_mode: 'HTML',
        ...mainMenu
    });


const backMenu = ctx => {
  ctx.reply('Возвращаю тебя в меню', {
      disable_web_page_preview: true,
      parse_mode: 'HTML',
      ...mainMenu
  });
}

const startSceneOne = (ctx) => ctx.scene.enter('sceneOne');

module.exports = {
  start,
  backMenu,
  startSceneOne
}