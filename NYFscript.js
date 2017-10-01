		$(document).ready(function () {
			$('#logoTextSectionLinks').hide(); //when page load hide logo of links pages
			
			var mainTextString = 'It’s all about the work. Our six international awards competitions' +
				' honor and recognize the World’s Best Work and the men and women who create it. ' +
				'<br />' +
				' We celebrate the exceptional and innovative content being created today.' +
				' Our international competitions cross over regional, national and continental' + 
				' boundaries to provide a truly complete representation of the very best in creative' +
				' communications.' +
				'<br />' +
				' All entries are judged by panels of award-winning creative professionals from across' + 
				' the globe who are acknowledged leaders in their respective fields.  By using our honest,' + 
				' fair and cutting-edge matrix judging process, we remain the industry hallmark for award' + 
				' competitions.';
				
			var textNYFA = 'Advertising Awards honor advertising excellence through 19 competitions in' + 
				'all media from 80+ countries and represent the full spectrum of today’s advertising' + 
				'communications around the world.' ;
               			   
			// When hover with mouse on main area - homepage
			$('#mainAreaSection').mouseenter(function () {
				$('html, body').css({
					
					'height': '100%' ,
					'margin': '0', 'padding': '0' ,
	
					'background': 'url(images/nyf-2.jpg) no-repeat center center fixed' ,
	
					'-webkit-background-size': 'cover', 
					'-moz-background-size': 'cover', 
					'-o-background-size': 'cover', 
					'background-size': 'cover'
				});
				
				$('#logoTextSectionLinks').hide();
				$('#logoTextSection').show();
				
				$('img.NYFlogo').attr({
					'src': 'images/ad-logo.png',
				});
				
				$('span.NYFlogoText5').text('INTERNATIONAL AWARDS COMPETITION FOR THE WORLD\'S BEST WORK');
				
				$('p#mainText').html(mainTextString);
				
			});
			
						
			// When hover with the mouse on the advertising award box
			$('#adAwardsLink').mouseenter(function () {
				$('html, body').css({
					
					'height': '100%' ,
					'margin': '0', 'padding': '0' ,
	
					'background': 'url(images/ad-1.jpg) no-repeat center center fixed' ,
	
					'-webkit-background-size': 'cover', 
					'-moz-background-size': 'cover', 
					'-o-background-size': 'cover', 
					'background-size': 'cover'
				});
			
				$('img.NYFlogo').attr({
					'src': 'images/ad-logo.png',
				});
				
				$('span.NYFlogoText3').text('ADVERTISING');
				$('span.NYFlogoText5').text('WORLD\'S BEST ADVERTISING');
				
				$('p#mainText').text(
					'Advertising Awards honor advertising excellence through 19 competitions in all media from 80+ countries and represent the full spectrum of today’s advertising communications around the world.'  
				);
				
				$('#logoTextSection').hide();
				$('#logoTextSectionLinks').show();
				
			})
			
			// Radio 
			$('#radioAwards').mouseenter(function () {
				$('html, body').css({
					
					'height': '100%' ,
					'margin': '0', 'padding': '0' ,
	
					'background': 'url(images/Radio-1.jpg) no-repeat center center fixed' ,
	
					'-webkit-background-size': 'cover', 
					'-moz-background-size': 'cover', 
					'-o-background-size': 'cover', 
					'background-size': 'cover'
				});
				
				$('img.NYFlogo').attr({
					'src': 'images/radio-logo.png',
				});
				
				$('span.NYFlogoText3').text('RADIO');
				$('span.NYFlogoText5').text('WORLD\'S BEST RADIO PROGRAMS&trade;');
				
				$('p#mainText').text(
					'Radio Awards honor innovative audio content in all genres and formats from independent producers, networks, and stations around the globe.' 
				);
				
				$('#logoTextSection').hide();
				$('#logoTextSectionLinks').show();

			});
			
			//TV & Film 
			$('#tvFilmsAwards').mouseenter(function () {
				$('html, body').css({
					
					'height': '100%' ,
					'margin': '0', 'padding': '0' ,
	
					'background': 'url(images/tvf-1.jpg) no-repeat center center fixed' ,
	
					'-webkit-background-size': 'cover', 
					'-moz-background-size': 'cover', 
					'-o-background-size': 'cover', 
					'background-size': 'cover'
				});
				
				$('img.NYFlogo').attr({
					'src': 'images/tv-film-logo.png',
				});
				
				$('span.NYFlogoText3').text('TV&FILM');
				$('span.NYFlogoText5').text('WORLD\'S BEST TELEVISION AND FILMS;');
				
				$('p#mainText').text(
					'TV & Film Awards honor content in all lengths and across all platforms from around the world. Our categories encourage the next generation of story-tellers.' 
				);
				
				$('#logoTextSection').hide();
				$('#logoTextSectionLinks').show();
				
			});
			
			// Global
			$('#globalAwards').mouseenter(function () {
				$('html, body').css({
					
					'height': '100%' ,
					'margin': '0', 'padding': '0' ,
	
					'background': 'url(images/globals-1.jpg) no-repeat center center fixed' ,
	
					'-webkit-background-size': 'cover', 
					'-moz-background-size': 'cover', 
					'-o-background-size': 'cover', 
					'background-size': 'cover'
				});		 
				
				$('img.NYFlogo').attr({
					'src': 'images/global-logo.png',
				});
				
				$('span.NYFlogoText3').text('GLOBAL');
				$('span.NYFlogoText5').text('WORLD\'S BEST HEALTHCARE AND WELLNESS ADVERTISING');
				
				$('p#mainText').text(
					'Global Awards honor excellence in healthcare communications and celebrates healthcare and wellness advertising, pharmaceutical (RX) advertising and communications on a global scale.' 
				);
				
				$('#logoTextSection').hide();
				$('#logoTextSectionLinks').show();
				
				
			});
			
			// MIDAS 
			$('#midasAwards').mouseenter(function () {
				$('html, body').css({
					
					'height': '100%' ,
					'margin': '0', 'padding': '0' ,
	
					'background': 'url(images/NY-Festivals-bg-1-yellow.jpg) no-repeat center center fixed' ,
	
					'-webkit-background-size': 'cover', 
					'-moz-background-size': 'cover', 
					'-o-background-size': 'cover', 
					'background-size': 'cover'
				});
				
				$('img.NYFlogo').attr({
					'src': 'images/midas-logo-1.png',
				});
				
				$('span.NYFlogoText3').text('MIDAS');
				$('span.NYFlogoText5').text('WORLD\'S BEST FINANCIAL ADVERTISING');
				
				$('p#mainText').text(
					'Midas Awards honor excellence in financial services communications, including advertising and corporate communications for all mediums in the world-wide finance community.' 
				);
				
				$('#logoTextSection').hide();
				$('#logoTextSectionLinks').show();
				
			});
			
			// AME
			$('#ameAwards').mouseenter(function () {
				$('html, body').css({
					
					'height': '100%' ,
					'margin': '0', 'padding': '0' ,
	
					'background': 'url(images/ame-1.jpg) no-repeat center center fixed' ,
	
					'-webkit-background-size': 'cover', 
					'-moz-background-size': 'cover', 
					'-o-background-size': 'cover', 
					'background-size': 'cover'
				});
				
				$('img.NYFlogo').attr({
					'src': 'images/ame-logo.png',
				});
				
				$('span.NYFlogoText3').text('AME');
				$('span.NYFlogoText5').text('WORLD\'S BEST ADVERTISING AND MARKETING EFFECTIVENESS');
				
				$('p#mainText').text(
					'AME Awards honor excellence in marketing effectiveness.  Judges evaluate creative execution, strategic planning, and groundbreaking solutions to solve challenging marketing problems. Judging is divided by region allowing all entries to be reviewed in their social, economic, and cultural context.' 
				);
				
				$('#logoTextSection').hide();
				$('#logoTextSectionLinks').show();

			});
			
		});