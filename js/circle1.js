let percent = Number(document.getElementsByClassName('percent').innerHTML)
var bar = new ProgressBar.Circle('.progressbar', {
	 	    color: '#aaa',
	  		// This has to be the same size as the maximum width to
	  		// prevent clipping
	  		strokeWidth: 5,
	  		trailWidth: 5,
	  		easing: 'easeInOut',
	  		duration: 1400,
	  		text: {
	    	autoStyleContainer: false,
	    	style: {
	    		 color: '#ffe600',
	    		 position: 'absolute',
			     top: '35%',
			     left: '30%',
      			 padding: 0,
      			 margin: 0
	    		},
  		},
  		from: { color: '#ffe600', width: 5 },
  		to: { color: '#ffe600', width: 5 },
  		// Set default step function for all animate calls
  		step: function(state, circle) {
    		circle.path.setAttribute('stroke', state.color);
    		circle.path.setAttribute('stroke-width', state.width);

    		var value = Math.round(circle.value() * 100);
    		if (value === 0) {
      			circle.setText('');
    		} else {
      			circle.setText(Math.round(value) + ' %');
    		}

 		 }
	});
	bar.text.style.fontFamily = '"Oswald"';
	bar.text.style.fontSize = '2.2rem';
	bar.text.style.fontWeight = '300';
	bar.text.style.Color = 'rgb(255, 230, 0)';

bar.animate(percent / 100);  // Number from 0.0 to 1.0
