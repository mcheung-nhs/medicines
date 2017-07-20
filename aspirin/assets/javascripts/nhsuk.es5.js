'use strict';

var $ = require('jquery');
var cookieMessage = require('./modules/cookie-message');
var feedbackForm = require('./modules/feedback-form');
var analytics = require('./modules/analytics');
var labelFocus = require('./modules/label-focus');
var labelSelect = require('./modules/label-select');
var tabs = require('./modules/tabs');

cookieMessage('global-cookies-banner');

$(function () {
  feedbackForm.init();
  analytics.init();
  labelFocus.init();
  labelSelect.init();
  tabs.init();
});

