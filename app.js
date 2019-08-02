const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.:+',
      runes = 'ᛆᛒᛍᛑᚧᛂᚠᚵᚼᛁᚴᛚᛘᚿᚮᛔᛩᚱᛋᛐᚢᚡᚥᛪᛦᛎ᛫᛬᛭',
      accents       = 'ÁČĎÉĚÍĽŇÓŘŠŤÚŮÝŽ',
      accentsInAscii = 'ACDEEILNORSTUUYZ',
      common = " .;,!?-\n\m\t",
      latin_runes = latin + runes + common,
      runes_latin = runes + latin + common;

let text = '';

if (location.hash.length) {
  text = decodeURI(location.hash).substr(1);
}      

var app = new Vue({
  el: '#app',
  data: {
    translated: '',
    text: text
  },
  created: function () {this.translate()},
  methods: {
      translate: function () {
        text = this.text.toLocaleUpperCase().split('')
            .map(char=>accents.indexOf(char)>=0 ? accentsInAscii[accents.indexOf(char)] : char)
            .join('');
        this.translated = this.text
            .split('')
            .map(char=>latin_runes[runes_latin.indexOf(char)])
            .join('');
        this.text = text;
    	},
      swap: function () {
      	let tmp = this.text;
        this.text = this.translated;
        this.translated = tmp;
      }
  }
})
