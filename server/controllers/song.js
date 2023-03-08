var Song = require('../models/song');

exports.song_create = (req, res, next) => {
  var song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
  });

  song.save({ new: true }, (err, song) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(song);
  });
};

exports.song_readone = (req, res, next) => {
  Song.findById(req.params.id, (err, song) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(song);
  });
};

exports.song_update = (req, res, next) => {
  Song.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (err, song) => {
      if (err) return next(err);
      res.status(200).send(song);
    }
  );
};

exports.song_delete = (req, res, next) => {
  Song.findByIdAndRemove(req.params.id, (err, song) => {
    if (err) return next(err);
    res.status(200).send(song);
  });
};

exports.song_all = (req, res, next) => {
  Song.find({}, (err, songs) => {
    if (err) return next(err);
    res.status(200).send(songs);
  });
};
