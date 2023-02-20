/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/addStickiestBadge.js":
/*!****************************************!*\
  !*** ./src/forum/addStickiestBadge.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStickiestBadge)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Badge */ "flarum/components/Badge");
/* harmony import */ var flarum_components_Badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Badge__WEBPACK_IMPORTED_MODULE_3__);
/*
 * This file is part of Stickiest.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */





function addStickiestBadge() {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'badges', function (badges) {
    if (this.isStickiest()) {
      badges.add(this.isTagSticky() ? 'tag-stickiest' : 'stickiest', flarum_components_Badge__WEBPACK_IMPORTED_MODULE_3___default().component({
        type: 'stickiest',
        label: this.isTagSticky() ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('the-turk-stickiest.forum.badge.super_tag_sticky_tooltip') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('the-turk-stickiest.forum.badge.super_sticky_tooltip'),
        icon: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('stickiest.badge_icon')
      }), 10);
    }
  });
}

/***/ }),

/***/ "./src/forum/addStickyBadge.js":
/*!*************************************!*\
  !*** ./src/forum/addStickyBadge.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStickyBadge)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Badge */ "flarum/components/Badge");
/* harmony import */ var flarum_components_Badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Badge__WEBPACK_IMPORTED_MODULE_3__);
/*
 * This file is part of Stickiest.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */





function addStickyBadge() {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'badges', function (badges) {
    badges.has('sticky') ? badges.remove('sticky') : '';
    if ((this.isSticky() || this.isTagSticky()) && !this.isStickiest()) {
      badges.add(this.isTagSticky() ? 'tag-sticky' : 'sticky', flarum_components_Badge__WEBPACK_IMPORTED_MODULE_3___default().component({
        type: 'sticky',
        label: this.isTagSticky() ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('the-turk-stickiest.forum.badge.tag_sticky_tooltip') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('the-turk-stickiest.forum.badge.sticky_tooltip'),
        icon: 'fas fa-thumbtack'
      }), 10);
    }
  });
}

/***/ }),

/***/ "./src/forum/addStickyControl.js":
/*!***************************************!*\
  !*** ./src/forum/addStickyControl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStickyControl)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_StickiestModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/StickiestModal */ "./src/forum/components/StickiestModal.js");
/*
 * This file is part of Stickiest.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */






function addStickyControl() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2___default()), 'moderationControls', function (items, discussion) {
    if (discussion.canSticky() && (discussion.canStickiest() || discussion.canTagSticky())) {
      if (items.has('sticky')) items.remove('sticky');
      items.add('sticky', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
        icon: 'fas fa-thumbtack',
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_StickiestModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
            discussion: discussion
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('the-turk-stickiest.forum.discussion_controls.sticky_button')));
    }
  });
}

/***/ }),

/***/ "./src/forum/components/DiscussionSuperStickiedPost.js":
/*!*************************************************************!*\
  !*** ./src/forum/components/DiscussionSuperStickiedPost.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscussionSuperStickiedPost)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/EventPost */ "flarum/forum/components/EventPost");
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_2__);

/*
 * This file is part of Stickiest.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



var DiscussionSuperStickiedPost = /*#__PURE__*/function (_EventPost) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiscussionSuperStickiedPost, _EventPost);
  function DiscussionSuperStickiedPost() {
    return _EventPost.apply(this, arguments) || this;
  }
  var _proto = DiscussionSuperStickiedPost.prototype;
  _proto.icon = function icon() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('stickiest.badge_icon');
  };
  _proto.descriptionKey = function descriptionKey() {
    return this.attrs.post.content().stickiest ? 'the-turk-stickiest.forum.post_stream.discussion_super_stickied_text' : 'the-turk-stickiest.forum.post_stream.discussion_common_stickied_text';
  };
  return DiscussionSuperStickiedPost;
}((flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/StickiestModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/StickiestModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StickiestModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/tags/helpers/tagIcon */ "flarum/tags/helpers/tagIcon");
/* harmony import */ var flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8__);

/*
 * This file is part of Stickiest.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */









var StickiestModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StickiestModal, _Modal);
  function StickiestModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = StickiestModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    var discussion = this.attrs.discussion;
    var stickyTags = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(discussion.stickyTags() || []);
    this.isSticky = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(discussion.isSticky() || false);
    this.isStickiest = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(discussion.isStickiest() || false);
    this.isTagSticky = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(discussion.isTagSticky() || false);
    if (stickyTags().length > 0) {
      this.tagSlugs = flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_5___default()(stickyTags()).map(function (tag) {
        return tag.slug();
      });
    } else {
      this.tagSlugs = flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_5___default()(discussion.tags()).map(function (tag) {
        return tag.slug();
      });
    }
  };
  _proto.className = function className() {
    return 'StickiestModal';
  };
  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('the-turk-stickiest.forum.stickiest_modal.title', {
      title: m("em", null, this.attrs.discussion.title())
    });
  };
  _proto.content = function content() {
    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.bodyFields().toArray())), m("div", {
      className: "Modal-footer"
    }, this.footerFields().toArray())];
  };
  _proto.bodyFields = function bodyFields() {
    var _this = this;
    var items = new (flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default())();
    items.add('sticky', m("div", {
      className: "Form-group"
    }, flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default().component({
      state: !!Number(this.isSticky()),
      onchange: function onchange(value) {
        if (value === true) _this.isStickiest = _this.isTagSticky = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(false);
        _this.isSticky = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(value);
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('the-turk-stickiest.forum.stickiest_modal.sticky_label')), m("div", {
      className: "helpText"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('the-turk-stickiest.forum.stickiest_modal.sticky_text'))), 30);
    if (this.attrs.discussion.canStickiest()) {
      items.add('stickiest', m("div", {
        className: "Form-group"
      }, flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default().component({
        state: !!Number(this.isStickiest()),
        onchange: function onchange(value) {
          if (value === true) _this.isSticky = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(false);
          _this.isStickiest = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(value);
        }
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('the-turk-stickiest.forum.stickiest_modal.super_sticky_label')), m("div", {
        className: "helpText"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('the-turk-stickiest.forum.stickiest_modal.super_sticky_text'))), 20);
    }
    if (this.attrs.discussion.canTagSticky()) {
      items.add('tagSticky', m("div", {
        className: "Form-group"
      }, flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default().component({
        state: !!Number(this.isTagSticky()),
        onchange: function onchange(value) {
          if (value === true) _this.isSticky = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(false);
          _this.isTagSticky = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(value);
        }
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('the-turk-stickiest.forum.stickiest_modal.tag_sticky_label')), m("div", {
        className: "helpText"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('the-turk-stickiest.forum.stickiest_modal.tag_sticky_text'))), 10);
    }
    return items;
  };
  _proto.footerFields = function footerFields() {
    var _this2 = this;
    var items = new (flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default())();
    if (this.attrs.discussion.canTagSticky() && this.isTagSticky()) {
      items.add('tags', m("div", {
        className: "Form-group StickiestModal-tags"
      }, m("label", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('the-turk-stickiest.forum.stickiest_modal.tags_label')), m("div", null, this.attrs.discussion.tags().map(function (tag) {
        return m("label", {
          className: "checkbox"
        }, m("input", {
          type: "checkbox",
          checked: _this2.tagSlugs.indexOf(tag.slug()) > -1,
          onchange: function onchange(e) {
            if (e.target.checked && !(_this2.tagSlugs.indexOf(tag.slug()) > -1)) {
              _this2.tagSlugs.push(tag.slug());
            } else if (!e.target.checked) {
              var index = _this2.tagSlugs.indexOf(tag.slug());
              if (index > -1) _this2.tagSlugs.splice(index, 1);
            }
          },
          disabled: !tag.canStartDiscussion()
        }), flarum_tags_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_4___default()(tag), " ", tag.name());
      }))), 10);
    }
    items.add('submit', m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
      className: 'Button',
      type: 'submit',
      loading: this.loading,
      disabled: this.isTagSticky() && !(this.tagSlugs.length > 0)
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('the-turk-stickiest.forum.stickiest_modal.submit_button'))), -10);
    return items;
  };
  _proto.applyChanges = function applyChanges() {
    this.hide.bind(this)();
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().current.matches(DiscussionPage)) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default().current.get('stream').update();
    }
    m.redraw();
  };
  _proto.saveStickiest = function saveStickiest() {
    var _this3 = this;
    this.attrs.discussion.save({
      isStickiest: !this.isSticky() && this.isStickiest()
    }, {
      errorHandler: this.onerror.bind(this)
    }).then(this.applyChanges.bind(this))["catch"](function () {
      _this3.loading = false;
      m.redraw();
    });
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this4 = this;
    e.preventDefault();
    this.loading = true;
    this.attrs.discussion.save({
      isSticky: !this.isStickiest() && !this.isTagSticky() && this.isSticky()
    }, {
      errorHandler: this.onerror.bind(this)
    }).then(function () {
      if (_this4.attrs.discussion.canTagSticky()) {
        _this4.attrs.discussion.save({
          isTagSticky: !_this4.isSticky() && _this4.isTagSticky() && _this4.tagSlugs.length > 0,
          tagSlugs: _this4.isTagSticky() ? _this4.tagSlugs : [],
          relationships: {
            stickyTags: _this4.isTagSticky() ? _this4.attrs.discussion.tags().filter(function (tag) {
              return _this4.tagSlugs.indexOf(tag.slug()) > -1;
            }) : []
          }
        }, {
          errorHandler: _this4.onerror.bind(_this4)
        }).then(function () {
          if (_this4.attrs.discussion.canStickiest()) {
            _this4.saveStickiest.bind(_this4)();
          } else {
            _this4.applyChanges.bind(_this4)();
          }
        })["catch"](function () {
          _this4.loading = false;
          m.redraw();
        });
      } else if (_this4.attrs.discussion.canStickiest()) {
        _this4.saveStickiest.bind(_this4)();
      }
    })["catch"](function () {
      _this4.loading = false;
      m.redraw();
    });
  };
  return StickiestModal;
}((flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/DiscussionListItem */ "flarum/common/components/DiscussionListItem");
/* harmony import */ var flarum_common_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DiscussionSuperStickiedPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/DiscussionSuperStickiedPost */ "./src/forum/components/DiscussionSuperStickiedPost.js");
/* harmony import */ var _addStickyBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addStickyBadge */ "./src/forum/addStickyBadge.js");
/* harmony import */ var _addStickiestBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addStickiestBadge */ "./src/forum/addStickiestBadge.js");
/* harmony import */ var _addStickyControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addStickyControl */ "./src/forum/addStickyControl.js");
/*
 * This file is part of Stickiest.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */










flarum_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('the-turk-stickiest', function () {
  (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().postComponents.discussionSuperStickied) = _components_DiscussionSuperStickiedPost__WEBPACK_IMPORTED_MODULE_5__["default"];
  (flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default().prototype.isStickiest) = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('isStickiest');
  (flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default().prototype.isTagSticky) = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('isTagSticky');
  (flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default().prototype.canStickiest) = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('canStickiest');
  (flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default().prototype.canTagSticky) = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('canTagSticky');
  (flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default().prototype.stickyTags) = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default().hasMany('stickyTags');
  (0,_addStickyBadge__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_addStickiestBadge__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_addStickyControl__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'oncreate', function (out, vnode) {
    var $discussionItem = $(vnode.dom).find('.DiscussionListItem-content');

    // select sticky discussions
    var $sticky = $discussionItem.find('.item-sticky');
    var $tagSticky = $discussionItem.find('.item-tag-sticky');
    var $stickiest = $discussionItem.find('.item-stickiest');
    var $tagStickiest = $discussionItem.find('.item-tag-stickiest');
    if ($sticky.length) {
      $sticky.closest('.DiscussionListItem').addClass('Stickiest-stickyItem');
    }
    if ($tagSticky.length) {
      $tagSticky.closest('.DiscussionListItem').addClass('Stickiest-tagStickyItem');
    }
    if ($stickiest.length) {
      $stickiest.closest('.DiscussionListItem').addClass('Stickiest-stickiestItem');
    }
    if ($tagStickiest.length) {
      $tagStickiest.closest('.DiscussionListItem').addClass('Stickiest-tagStickiestItem');
    }
  });
}, -1);

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/DiscussionListItem":
/*!*****************************************************************************!*\
  !*** external "flarum.core.compat['common/components/DiscussionListItem']" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/DiscussionListItem'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/components/Badge":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Badge']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Badge'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/EventPost":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/EventPost']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/EventPost'];

/***/ }),

/***/ "flarum/forum/utils/DiscussionControls":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/DiscussionControls']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/DiscussionControls'];

/***/ }),

/***/ "flarum/models/Discussion":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['models/Discussion']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['models/Discussion'];

/***/ }),

/***/ "flarum/tags/helpers/tagIcon":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['tags/helpers/tagIcon']" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['tags/helpers/tagIcon'];

/***/ }),

/***/ "flarum/tags/utils/sortTags":
/*!************************************************************!*\
  !*** external "flarum.core.compat['tags/utils/sortTags']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['tags/utils/sortTags'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/Stream":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/Stream']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/Stream'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/*
 * This file is part of Stickiest.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map