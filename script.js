$(document).ready(function () {

//        $.get('https://www.reddit.com/r/aww/.json').done(function(responseBody) {
//            console.log(responseBody.data.children[0].data.title);
//        }).fail(function() {
//            console.log("FAIL");
//        }).always(function() {
//            console.log("ALWAYS");
//        });

    var i = 1;

    $("#inputText").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#btn").click();
        
        }
    });

    $('#btn').on('click', function reload02() {

        $('#btn').on('click', function () {
            $('#container').empty();
        });
        
        
        var inputText = $('#inputText').val();
        $.get("https://www.reddit.com/r/" + inputText + "/.json").done(function (responseBody) {
            var array01 = responseBody.data.children;
            var data01 = responseBody;

            array01.forEach(function (posts) {
                $('#container').append("<div class='divTitle' id='divTitle'" + i + ">" + "<a href='http://reddit.com/" + posts.data.permalink + "'>" + posts.data.title + "</a>" + "</div>");

                $('#container').append("<div class='divAuth' id='divAuth'" + i + ">" + "<a href='http://reddit.com/user/" + posts.data.author + "'>" + posts.data.author + "</div>");

                if (posts.data.thumbnail == "self") {
                    console.log("selfImage");
                } else {

                    $('#container').append("<div class='divImg' id='divImg'" + i + ">" + "<a href='" + posts.data.url + "'>" + "<img src='" + posts.data.thumbnail + "' id='images'></a>" + "</div>");
                }

                $('#container').append("<div class='divComm' id='divComm'" + i + '>' + "<a href='https://www.reddit.com/r/" + inputText + "/comments/" + posts.data.id + "'>" + posts.data.num_comments + " Comments</a></div><br>");

                console.log(posts.data.title);
                i++;



            });
//            console.log(array01);
//            console.log(data01);


        }).fail(function() {
            $('#cont02').append("<img src='1496076290226.jpg' id='catImg'><br>SubReddit <span id='invalid'>" + inputText + "</span> not found.<br>Please try again.");
        });;
        



    });





});