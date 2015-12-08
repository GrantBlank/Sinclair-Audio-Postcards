// TESTING SINCLAIR
// DEFINE A DEFERRED OBJECT
$load = new $.Deferred();

// LOAD YOUR CONTENT INTO A DIV

$('#article-wrapper').loadContent({
	'scrapeResource': 'http://www.miamiherald.com/2014/02/11/3927377/poll-shows-outsized-support-for.html #storyBodyContent p',
	'fallback': 'data.html',
	'def': $load
});

// BEGIN LAYOUT CODE BLOCK

$.when($load).then(function() {

	$('#wide').folio({
	'pageTitle' : 'Black eyed peas, the Southern way',
	'folioTitle' : '',
	'shortUrl' : 'http://goo.gl/Ea5ADw',
	'flat' : true,
	'tracker' : true
	});

	$('body').simpleFooter([
	{
		'name' : '',
		'url' : ''
	},
	{
		'name' : '',
		'url' : ''
	},
	{
		'name' : '',
		'url' : ''
	},
	{
		'name' : '',
		'url' : ''
	}
	]);
	

	
	// DEFINE YOUR PARAGRAPHS
	
	$story = $('#article-wrapper p')
	// $story.layoutMode()
	// BEGIN LAYOUT LOGIC HERE
	
	$story.eq(3).photo({
	    'blockType': 'splash',
	    'url' : 'img/1207_MALO_Pecan_Picker_114.JPG',
	    'credit' : 'Grant Blankenship/GPB',
	    'cutline' : 'James Jenkins picks through the leaves for handfuls of paper shell pecans next to a boarded up home on Telfair Street in Macon. Jenkins says he is always on the lookout for pecans as he moves around town. Having grown up in Florida, the abundance in yards of pecans is still a novelty to him. &#34Here is one of the spots I keep returning to,&#34 he said. &#34Because its been fruitful.&#34'
	});
	
	$story.eq(0).audio({
		'blockType' : 'splash',
		'name' : 'first-audio',
		'mp3src' : 'https://s3.amazonaws.com/gpbassets/pecan_picker_mixdown_01.mp3',
		'oggsrc' : 'https://s3.amazonaws.com/gpbassets/pecan_picker_mixdown_01.ogg',
		'headline' : 'Seen and Heard: On The Lookout For Abandoned Pecans',
		'readout' : 'James Jenkins grew up in Florida around oranges and mangoes. Living in Macon, GA, pecans are exotic. He gathers them wherever he sees them in the Fall.'
	});
	
	
	$story.eq(2).photo({
	    'blockType': 'splash',
	    'url' : 'img/1207_MALO_Pecan_Picker_115.JPG',
	    'credit' : 'Grant Blankenship/GPB',
	    'cutline' : 'James Jenkins holds a handful of paper shell pecans.'
	});


});
	
	

	
	
	
	
	
	


	
