const routes = (router) => {
  router.route('/')
    .get((req, res, next) => {
      res.render('index', {pageTitle: 'Index page', title: 'The index page'});
    });
  return router;
}

module.exports = routes;
