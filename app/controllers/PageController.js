TMPNews.PageController = M.Controller.extend({

    page1:{},
    page2:{},
    page3:{},
    tab1:{},
    tab2:{},
    tab3:{},
    newsPage:{},
    carouselView:{},

    init:function (isFirstLoad) {

        if (isFirstLoad) {
            this.newsPage = M.ViewManager.getPage('newsPage');
            this.carouselView = M.ViewManager.getView(this.newsPage, 'newsCarousel');

            this.page1 = M.ViewManager.getView(this.newsPage, 'page1');
            this.page2 = M.ViewManager.getView(this.newsPage, 'page2');
            this.page3 = M.ViewManager.getView(this.newsPage, 'page3');

            this.tab1 = M.ViewManager.getView(TMPNews.TabBar, 'tab1');
            this.tab2 = M.ViewManager.getView(TMPNews.TabBar, 'tab2');
            this.tab3 = M.ViewManager.getView(TMPNews.TabBar, 'tab3');

        }
    },

    _setActiveTab:function (obj, tabIndex) {
        this.setActiveTab(tabIndex + 1);
    },

    setActiveTab:function (tabIndex) {
        var ind = tabIndex || 0;
        var setActiveTab = {};

        if (ind === 1) {
            setActiveTab = this.tab1;
        } else if (ind === 2) {
            setActiveTab = this.tab2;
        } else if (ind === 3) {
            setActiveTab = this.tab3;
        }
        TMPNews.TabBar.setActiveTab(setActiveTab);
    },

    setActivePage1:function () {
        this.carouselView.setActiveItem(this.page1);
    },

    setActivePage2:function (id) {
        this.carouselView.setActiveItem(this.page2);
    },

    setActivePage3:function (id, event) {
        this.carouselView.setActiveItem(this.page3);
    }

});