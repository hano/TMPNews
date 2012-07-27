TMPNews.NewsController = M.Controller.extend({


    init: function(isFirstLoad) {
        if(isFirstLoad) {
            TMPNews.PageController.init(isFirstLoad);
        }

    }

});