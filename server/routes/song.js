module.exports = (app) => {
  var express = require('express');
  var router = express.Router();
  var upload = require('../middleware/song');
  var uploads = require('../controllers/song');

  router.post('/', upload.single('file'), uploads.song_create);

  router.get('/:id', uploads.song_readone);

  router.put('/:id', uploads.song_update);

  router.delete('/:id', uploads.song_delete);

  router.get('/', uploads.song_all);

  app.use('/api/songs', router);
};
