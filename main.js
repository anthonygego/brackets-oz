'use strict';

var LanguageManager = brackets.getModule('language/LanguageManager');

LanguageManager.defineLanguage('oz', {
  name: 'Oz',
  mode: 'oz',
  fileExtensions: ['oz'],
  blockComment: ['/*', '*/'],
  lineComment: ['%']
});

console.log('Oz syntax highlighting loaded.');