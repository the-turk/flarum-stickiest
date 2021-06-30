# Stickiest

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-stickiest/blob/master/LICENSE) [![Latest Stable Version](https://img.shields.io/packagist/v/the-turk/flarum-stickiest.svg)](https://packagist.org/packages/the-turk/flarum-stickiest) [![Total Downloads](https://img.shields.io/packagist/dt/the-turk/flarum-stickiest.svg)](https://packagist.org/packages/the-turk/flarum-stickiest)

Stick, super stick or tag stick discussions to the top of the list.

Forked from the notorious `flarum/sticky` extension, **conflicts** with it and is in beta phase. Give me some feedback so we can tag this as stable.

Screenshots:

![Super Sticky Discussion](https://i.imgur.com/1XVXPLn.png)

- [Super Sticky Discussion in All Discussions List](https://i.imgur.com/ANKsbBG.png)
- [Super Sticky & Tag Sticky Discussion in Tag's Discussion List](https://i.imgur.com/7q52yb4.png)

## Requirements / Known Issues
It looks like this fork only works on **MariaDB 10.4+** atm. Using this on **MySQL v8.0.25** throws `Syntax error or access violation: 1235 This version of MySQL doesn’t yet support ‘nesting of unions at the right-hand side’`

## Installation

```bash
composer require the-turk/flarum-stickiest:^2.0@beta
```

## Usage

You may find this complicated in first use but I bet you'll get used to it.

Enable the extension and set the permissions, choose a badge for super stickied discussions if you like. Now you have couple of options to change sticky discussion's behavior:

1. Stick the discussion like you usually do and they'll behave as you're using the good ol' `flarum/sticky` extension.

2. Stick the discussion and then "super stick" it from the discussion's controls. They'll stick on top of the "All Discussions" list no matter what. These type of discussions shouldn't affect the behavior of non-super-stickied (which I call "Common Sticky") discussions.

3. Stick or super stick the discussion as described above, and click on the "Tag Sticky" button that located in the discussion's controls. Now the discussion should stick only to their tags and won't show up in the "All Discussions" list (even if they have unread posts). Click on the "All Sticky" button to undo it.

## Links

- [Source code on GitHub](https://github.com/the-turk/flarum-stickiest)
- [Changelog](https://github.com/the-turk/blob/master/CHANGELOG.md)
- [Report an issue](https://github.com/the-turk/flarum-stickiest/issues)
- [Download via Packagist](https://packagist.org/packages/the-turk/flarum-stickiest)
