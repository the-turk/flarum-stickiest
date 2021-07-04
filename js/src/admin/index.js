import app from 'flarum/app';

app.initializers.add('the-turk-stickiest', function () {
  app.extensionData.for('the-turk-stickiest').registerSetting({
    setting: 'the-turk-stickiest.badge_icon',
    type: 'text',
    label: app.translator.trans('the-turk-stickiest.admin.settings.badge_icon_label'),
    help: app.translator.trans('the-turk-stickiest.admin.settings.badge_icon_text'),
  });
});
