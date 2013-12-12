$(function() {
	carousel = new Carousel();
});

function Carousel() {
	this.$carousel = $('#carousel');
	this.$date = $('#date');
	this.$description = $('#description');

	this.fillData();
	this.bindEvents();
}

Carousel.prototype = {
	bindEvents: function() {
		var that = this;

		this.$carousel.on('slid.bs.carousel', function () { //cuando se completa la trancision
			that.fillData();
		})
	},

	fillData: function() {
		var that = this;

		var $currentSlide = $('.item.active');
		this.$date.empty();
		this.$description.empty();

		$.each($currentSlide.children(":hidden"), function(i, item) {
			if (i == 0) {
				var day = $(item).val().split("-")[0];
				var month = $(item).val().split("-")[1];
				var $dayH3 = $('<h3>', { text: day });
				var $monthP = $('<p>', { text: month });
				that.$date.append($dayH3, $monthP);
			} else if (i == 1) {
				var title = $(item).val();
				var $titleH3 = $('<h3>', { text: title});
				that.$description.append($titleH3);
			} else {
				var description = $(item).val();
				var $descP = $('<p>', { text: description});
				that.$description.append($descP);
			}
		});
	}
}