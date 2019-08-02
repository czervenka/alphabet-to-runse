const latin = 'abcdefghijklmnopqrstuvwxyz.:+',
      runes = 'ᛆᛒᛍᛑᚧᛂᚠᚵᚼᛁᚴᛚᛘᚿᚮᛔᛩᚱᛋᛐᚢᚡᚥᛪᛦᛎ᛫᛬᛭',
      accents       = 'áčďéěíľňóřšťúůýž',
      accentsInAscii = 'acdeeilnorstuuyz',
      common = " .;,!?-\n\m\t",
      latin_runes = latin + runes + common,
      runes_latin = runes + latin + common;
      
var app = new Vue({
  el: '#app',
  data: {
    translated: '',
    text: ''
  },
  methods: {
      translate: function () {
        this.translated = this.text
            .toLocaleLowerCase()
            .split('')
            .map(char=>accents.indexOf(char)>=0 ? accentsInAscii[accents.indexOf(char)] : char)
            .map(char=>latin_runes[runes_latin.indexOf(char)])
            .join('');
    	},
      swap: function () {
      	let tmp = this.text;
        this.text = this.translated;
        this.translated = tmp;
      }
  }
})
