TMPNews.TwitterController = M.Controller.extend({

    results: null,

    userResults: null,

    searchString: null,

    username: null,

    search: function(test) {
        var searchString = 'themproject'; //M.ViewManager.getView('page1', 'searchField').value;
        if(!searchString) {
            M.DialogView.alert({
                title: 'Error',
                message: 'Please enter a search string!'
            });
            return;
        }

        M.LoaderView.show('looking for \'' + searchString + '\'');

        TMPNews.TweetModel.find({
            urlParams: {
                query: 'q=' + searchString,
                rpp: 10
            },
            callbacks: {
                success: {
                    action: function(records) {
                        M.LoaderView.hide();
                        if(records && records.length === 0) {
                            M.DialogView.alert({
                                title: 'Nothing found...',
                                message: 'Your search for \'' + searchString + '\' didn\'t bring up any results. Please try something else.'
                            });
                        } else {
                            TMPNews.TwitterController.set('results', records);
                            TMPNews.TwitterController.set('searchString', 'Results for \'' + searchString + '\'');
                        }
                    }
                },
                error: {
                    action: function(request, error) {
                        M.LoaderView.hide();
                        M.DialogView.alert({
                            title: 'Request failed',
                            message: 'The search could not be performed! Please check your network status, enter a valid search string and try again.'
                        });
                    }
                }
            }
        });
    }

});