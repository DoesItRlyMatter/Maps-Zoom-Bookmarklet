javascript:(function() {
    /* level of zoom on map, change this value for more or less zoom. */
    /* var zoomlevel = x.xx */
    /* get current url */
    var currentUrl = window.location.href;
    /* iterate url, look for zoom(z) & separator(,) */
    for (var letter = 0; letter < currentUrl.length; letter++) {
        if (currentUrl.charAt(letter) == "z") {
            /* save position of z */
            var posz = letter;    }
        else if (currentUrl.charAt(letter) == ",") {
            /* save position of , */
            var poscom = letter;    }
        /* check if "z" and "," found, create new url */
        else if (currentUrl.charAt(posz) == "z" && currentUrl.charAt(poscom) == ",") {
            /* creation of new url, remove old zoomlevel and added new specified zoom level */
            /* replace number with zoomlevel variable */
            var newUrl = currentUrl.slice(0, poscom) + ",6" + currentUrl.slice(posz, currentUrl.length);
            /* load new url */
            window.location.href = newUrl;
        }
    }
})()
