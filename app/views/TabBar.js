TMPNews.TabBar = M.TabBarView.design({

    childViews: 'tab1 tab2 tab3',

    anchorLocation: M.TOP,

    tab1: M.TabBarItemView.design({

        value: M.I18N.l('about'),

        events:{
            vclick:{
                target: TMPNews.PageController,
                action: 'setActivePage1'
            }
        }
    }),

    tab2: M.TabBarItemView.design({

        value: M.I18N.l('twitter'),

        events:{
            vclick:{
                target: TMPNews.PageController,
                action: 'setActivePage2'
            }
        }
    }),

    tab3: M.TabBarItemView.design({

        value: M.I18N.l('blog'),

        events:{
            vclick:{
                target: TMPNews.PageController,
                action: 'setActivePage3'
            }
        }
    })
});