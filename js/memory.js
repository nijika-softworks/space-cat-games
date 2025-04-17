// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "php",
			img: "https://i.ibb.co/pjbgXskj/OIP-1.jpg",
			id: 1,
		},
		{
			name: "css3",
			img: "https://i.ytimg.com/vi/Y1Ev-U0Yvwg/maxresdefault.jpg",
			id: 2
		},
		{
			name: "html5",
			img: "https://i.ibb.co/MykV0RJs/OIP-2.jpg",
			id: 3
		},
		{
			name: "jquery",
			img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ham_%284%29.jpg/1024px-Ham_%284%29.jpg",
			id: 4
		}, 
		{
			name: "javascript",
			img: "https://th.bing.com/th/id/R.46040306368aefaee29eb2835bb88353?rik=XfZaJ5R%2bb%2biHnw&pid=ImgRaw&r=0",
			id: 5
		},
		{
			name: "node",
			img: "https://images-cdn.9gag.com/photo/aDDp0vK_700b.jpg",
			id: 6
		},
		{
			name: "photoshop",
			img: "https://www.digitaltrends.com/wp-content/uploads/2018/01/Teddybot-Blue.jpg?p=1",
			id: 7
		},
		{
			name: "python",
			img: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/02/laptop-burning-fire.jpg",
			id: 8
		},
		{
			name: "rails",
			img: "https://pngimg.com/uploads/egg/egg_PNG40810.png",
			id: 9
		},
		{
			name: "sass",
			img: "https://th.bing.com/th/id/OIP.nWMw8PW5HXLQY25sU2Ke6QHaDt?rs=1&pid=ImgDetMain",
			id: 10
		},
		{
			name: "sublime",
			img: "https://miro.medium.com/v2/resize:fit:1200/1*9pvXZvs89Cu8Au2W9r3eYw.png",
			id: 11
		},
		{
			name: "wordpress",
			img: "https://i.ibb.co/spMRjk2z/44a1680c4b1c7146a4201c0ebd836d7e.jpg",
			id: 12
		},
	];
    
	Memory.init(cards);


})();