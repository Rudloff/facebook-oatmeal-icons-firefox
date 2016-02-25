/*global require*/
var self = require('sdk/self');
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
    include: '*.facebook.com',
    contentStyleFile: self.data.url('css/icons.css')
});
