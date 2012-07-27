m_require('app/views/TabBar.js');

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
                tag: 'Item1',
                label: M.LabelView.design({
                    value: 'Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1',
                    cssClass: 'label red'
                })
            }),
            page2: M.CarouselItemView.design({
                childViews: 'label',
                tag: 'Item2',
                label: M.LabelView.design({
                    value: 'Item 2',
                    cssClass: 'label green'
                })
            }),
            page3: M.CarouselItemView.design({
                childViews: 'label',
                tag: 'Item3',
                label: M.LabelView.design({
                    value: 'Item 3',
                    cssClass: 'label blue'
                })
            })
        })
    })

});