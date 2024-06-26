$.fn.navigation = function() {
    // Cache selectors
    // console.log('this', this);
    var lastId,
        topMenu = this,
        newMenuHeight = topMenu.outerHeight(),
        MenuHeight = topMenu.outerHeight() + 1,
        menuItems = topMenu.find(".navbar-nav a"),
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        }),

        noScrollAction = false;
    menuItems.click(function(e) {
        console.log(newMenuHeight);
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - newMenuHeight;
        noScrollAction = true;
        $("html, body").stop().animate({
            scrollTop: offsetTop
        }, {
            duration: 1000,
            complete: function() {
                menuItems
                    .parent().removeClass("active")
                    .end().filter("[href='" + href + "']").parent().addClass("active");
                setTimeout(function() { noScrollAction = false; }, 10);
            }
        });
        e.preventDefault();
    });

    $(window).scroll(function() {
        if (!noScrollAction) {
            var fromTop = $(this).scrollTop() + MenuHeight - newMenuHeight;
            var cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop) {
                    return this;
                }
            });
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";

            if (lastId !== id) {
                lastId = id;
                menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
            };
        };
    });
}