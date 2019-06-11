const routes = (router) => {
  router.route('/')
    .get((req, res, next) => {
      res.render('index', {title: 'The index page'});
    });
  return router;
}

module.exports = routes;
