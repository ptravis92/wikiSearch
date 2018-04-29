	$("#click").click(function(){
		var search = $("#search").val();
		var search = (search.split(" ")).join("%20");
		console.log(search);
		var artLink = "https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&srsearch=" + search + "&utf8=&format=json";
		console.log(artLink);
		$.getJSON( artLink, function( data ) {
			console.log(data.query.search[0]);
			for (var i = 0; i  < data.query.search.length; i++) {
				var pageId = data.query.search[i].pageid;
				$('#main').append(
					"<div class='result'><a target='_blank' href='http://en.wikipedia.org/wiki?curid="+ pageId +"'>" + 
							"<p>" + data.query.search[i].title + "</p> <p>" + data.query.search[i].snippet + "...</p></div></a>");
			};
		});
     $('html, body').animate({ scrollTop: "280%" });
	});