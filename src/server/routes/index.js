const path = require('path');
const rootSendPath = path.join(__dirname,'../../public');
const routes = (router) => {
  router.route('/getfile')
    .get((req,res,next) => {
      const sendOptions = {
        root: rootSendPath,
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }
      res.sendFile('js/getIP.js', sendOptions);
    });

  router.route('/')
    .get((req, res, next) => {
      res.render('index', {pageTitle: 'Index page', title: 'The index page'});
    });
  return router;
}

module.exports = routes;
