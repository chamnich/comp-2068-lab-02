const Movie = require('../models/movie');

exports.new = (req, res) => {
  res.render('movies/new', {
    title: 'New Movie'
  });
};

exports.index = (req, res) => {
  Movie.find()
  .then(movies => {
    res.render('movies/index', {
      movies: movies,
      title: 'Movies'
    });
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.redirect('/movies');
  });
};

exports.show = (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', {
        title: movie.title,
        movie: movie
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/movies');
    });
};

exports.create = (req, res) => {
  Movie.create(req.body.movie)
  .then(() => {
    req.flash('success', 'Your new movie was created successfully.')
    res.redirect('/movies');
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.render('movies/new', {
      movie: req.body.movie,
      title: 'New Movie'
    });
  });
};

exports.edit = (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/edit', {
        title: `Edit ${movie.title}`,
        movie: movie
      })
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/movies');
    });
};

exports.update = (req, res) => {
  Movie.updateOne({
    _id: req.body.id
  }, req.body.movie, {
    runValidators: true
  })
    .then(() => {
      req.flash('success', 'Your new movie was updated successfully.')
      res.redirect('/movies');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.render('movies/edit', {
        movie: req.body.movie,
        title: `Edit ${req.body.movie.title}`
      });
    });
};

exports.destroy = (req, res) => {
  Movie.deleteOne({
    _id: req.body.id
  })
    .then(() => {
      req.flash('success', 'Your movie was deleted succesfully');
      res.redirect("/movies");
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/movies');
    });
};