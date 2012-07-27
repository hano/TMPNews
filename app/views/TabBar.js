TMPNews.TabBar = M.TabBarView.design({

    childViews: 'tab1 tab2 tab3',

    anchorLocation: M.TOP,

    tab1: M.TabBarItemView.design({
        value: 'Tab 1',
        page: '',
        events:{
            vclick:{
                target: TMPNews.PageController,
                action: 'setActivePage1'
            }
        }
    }),

    tab2: M.TabBarItemView.design({
        value: 'Tab 2',

        events:{
            vclick:{
                target: TMPNews.PageController,
                action: 'setActivePage2'
            }
        }
    }),

    tab3: M.TabBarItemView.design({
        value: 'Tab 3',
        events:{
            vclick:{
                target: TMPNews.PageController,
                action: 'setActivePage3'
            }
        }
    })
});