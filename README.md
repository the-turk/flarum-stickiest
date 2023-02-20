# Stickiest

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-stickiest/blob/master/LICENSE) [![Latest Stable Version](https://img.shields.io/packagist/v/the-turk/flarum-stickiest?include_prereleases)](https://packagist.org/packages/the-turk/flarum-stickiest) [![Total Downloads](https://img.shields.io/packagist/dt/the-turk/flarum-stickiest.svg)](https://packagist.org/packages/the-turk/flarum-stickiest)

Stick, super stick or tag stick discussions to the top of the list.

Screenshots:

![Stickiest Modal](https://i.imgur.com/6kbvydS.png)

- [Super Sticky Discussion in All Discussions List](https://i.imgur.com/ANKsbBG.png)
- [Super Sticky & Tag Sticky Discussion in Tag's Discussion List](https://i.imgur.com/7q52yb4.png)

# Attention! 注意!

Everything on this page, except this section and the download command, is taken from [the-turk/flarum-stickiest(3.0.0)](https://github.com/the-turk/flarum-stickiest/releases/tag/3.0.0)

此页面的所有内容，除了本节和下载命令，均来自 [the-turk/flarum-stickiest(3.0.0)](https://github.com/the-turk/flarum-stickiest/releases/tag/3.0.0)

If you are installing for the first time, just follow the original

如果你是首次安装，遵循原文即可

If you want to uninstall the-turk/flarum-stickiest and install the modified version of stickiest from this repository, you must pay attention to the following two points.

如果你想要卸载已安装的 the-turk/flarum-stickiest 并安装本仓库的修改版 stickiest ，必须注意以下两点：

- You must close and purge the-turk/flarum-stickiest before installing and opening lrysia/flarum-stickiest
- 在安装并开启 lrysia/flarum-stickiest 前，必须关闭并重置 the-turk/flarum-stickiest 
- After Purging the-turk/flarum-stickiest, the database changes caused by the original plugin will be restored, so this plugin will not inherit the settings/database information of the original plugin
- 重置 the-turk/flarum-stickest 后，原插件造成的数据库变动将被还原，因此本插件不会继承原插件的设置/数据库信息

## Installation

```bash
composer require lrysia/flarum-stickiest
```

If you ever see an error like `General error: 1824 Failed to open the referenced table 'tags' ...` while activating `3.0.x`, check if the engine for the `tags` table is InnoDB or not. If not, try switching that to the InnoDB then run and try activating again:

**-- make sure you have that db backup.**
```sql
DELETE FROM `migrations` WHERE `migration` = '2021_07_04_000003_set_default_settings' AND `extension` = 'the-turk-stickiest';
```
```bash
php flarum migrate:reset --extension the-turk-stickiest
```
```sql
DROP TABLE `discussion_sticky_tag`;
```
```bash
php flarum migrate
```

## Updating

```bash
composer update the-turk/flarum-stickiest
php flarum cache:clear
```

Don't forget to run migrations if you're upgrading from `2.0.x`

```bash
composer require the-turk/flarum-stickiest:^3.0.0
php flarum migrate
php flarum cache:clear
```

If you have "foreign key" error while running migrations, see "Installation" notes.

## Usage

You may find this complicated in first use but I bet you'll get used to it.

Enable the extension and set the permissions, choose a badge for super stickied discussions if you like. Click on the "Sticky" button like you're using the `flarum/sticky` extension and read the descriptions within the modal.

## Links

- [Source code on GitHub](https://github.com/the-turk/flarum-stickiest)
- [Changelog](https://github.com/the-turk/blob/master/CHANGELOG.md)
- [Report an issue](https://github.com/the-turk/flarum-stickiest/issues)
- [Download via Packagist](https://packagist.org/packages/the-turk/flarum-stickiest)
