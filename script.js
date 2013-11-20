$h1 = $("<h1>Hello</h1>");

$(document).ready(function () {
    $('#bios-head').after("<p>Dr. Buchanan, D.D.S.</p>");
    //now move all <p> into header
    //$('#logo').after($('p'));
});

$(document).ready(function () {
    //load logo and nav
    $('header').append("<img itemprop=\"logo\" src=\"images/ReflectionsLogo.JPG\" alt=\"Reflections Dental Centre\">");
    $('nav').append("<ul><li><a href=\"index.html\">Home</a></li>");
    $('nav').append("<li><a href=\"team.html\">Our Team</a></li>");
    $('nav').append("<li><a href=\"contact.html\">Contact</a></li></ul>");
    
    //load footer
    $('footer').append("<div id=\"info\" itemscope itemtype =\"http://schema.org/LocalBusiness\"></div>");
    $('#info').append("<address itemprop=\"address\">5033 37th Ave NE, Seattle, WA 91805</address>");
    $('#info').append("<p id=\"phone\" itemprop=\"telephone\">(206) 238 - 2692</p>");
    $('#info').append("<p id=\"fax\" itemprop=\"faxNumber\">(206) 555 - 2692</p>");
    $('#info').append("<time itemprop=\"openingHours\" datetime=\"Tu,Th 16:00-20:00\">Tuesdays and Thursdays 4-8pm</time>");
});


$(document).ready(function () {
    $(document).keydown(function () {
        $('div').animate({left:'+=10px'},500);
    });
});