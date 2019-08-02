const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.:+',
      runes = 'ᛆᛒᛍᛑᚧᛂᚠᚵᚼᛁᚴᛚᛘᚿᚮᛔᛩᚱᛋᛐᚢᚡᚥᛪᛦᛎ᛫᛬᛭',
      accents       = 'ÁČĎÉĚÍĽŇÓŘŠŤÚŮÝŽ',
      accentsInAscii = 'ACDEEILNORSTUUYZ',
      common = " .;,!?-\n\m\t",
      latin_runes = latin + runes + common,
      runes_latin = runes + latin + common;


var app = new Vue({
  el: '#app',
  data: {
    translated: '',
    text: ''
  },
  created: function () {
      let urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('t')) {
          this.text = urlParams.get('t');
          this.translate();
      }
  },
  methods: {
      translate: function () {
        console.log('translating', this.text);
        text = this.text.toLocaleUpperCase().split('')
            .map(char=>accents.indexOf(char)>=0 ? accentsInAscii[accents.indexOf(char)] : char)
        this.translated = text
            .map(char=>latin_runes[runes_latin.indexOf(char)])
            .join('');
        this.text = text.join('');
        console.log('translated', this.translated);
    	},
      swap: function () {
      	let tmp = this.text;
        this.text = this.translated;
        this.translated = tmp;
      }
  }
})
