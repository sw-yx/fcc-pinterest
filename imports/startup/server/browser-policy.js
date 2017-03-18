import { BrowserPolicy } from 'meteor/browser-policy-common';

// https://themeteorchef.com/tutorials/using-the-browser-policy-package
BrowserPolicy.content.allowFontOrigin('fonts.gstatic.com');
// BrowserPolicy.content.allowImageUrlForAll();
BrowserPolicy.content.allowImageOrigin('*.com');
BrowserPolicy.content.allowImageOrigin('*.it');
// BrowserPolicy.content.allowImageOrigin('i.reddituploads.com');
// BrowserPolicy.content.allowImageOrigin('imgs.xkcd.com');
