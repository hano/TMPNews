m_require('app/views/TabBar.js');
m_require('app/views/TwitterResultsTemplateView.js');

TMPNews.NewsPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: TMPNews.NewsController,
            action: 'init'
        }
    },

    cssClass: 'NewsPage',

    childViews: 'content',

    content: M.ScrollView.design({
        childViews: 'tabBar newsCarousel',

        tabBar: TMPNews.TabBar,

        newsCarousel : M.CarouselView.design({

            childViews: 'page1 page2 page3',

            sizeCalculator: M.CAROUSEL_SIZE_SURROUNDING_ELEMENT,

            events: {
                change: {
                    target: TMPNews.PageController,
                    action: '_setActiveTab'
                }
            },
            page1: M.CarouselItemView.design({
                childViews: 'label',
                tag:M.I18N.l('about'),
                label: M.LabelView.design({
                    value: 'Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1',
                    cssClass: 'label red'
                })
            }),
            page2: M.CarouselItemView.design({
                childViews: 'twitterList',

                tag:M.I18N.l('twitter'),

                twitterList: M.ListView.design({
                    contentBinding: {
                        target: TMPNews.TwitterController,
                        property: 'results'
                    },

                    listItemTemplateView: TMPNews.TwitterResultsTemplateView,

                    removeItemsOnUpdate: YES
                })
            }),
            page3: M.CarouselItemView.design({
                childViews: 'label',

                tag:M.I18N.l('twitter'),

                label: M.LabelView.design({
                    value: 'Item 3',
                    cssClass: 'label blue'
                })
            })
        })
    })

});