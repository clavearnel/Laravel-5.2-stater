var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
  mix.sass('app.scss');
    mix.scripts([
        '../bower/jquery/dist/jquery.min.js',
        '../bower/bootstrap/dist/js/bootstrap.min.js'
    ], 'public/js/vendor.js');
    mix.copy('resources/assets/bower/font-awesome/fonts', 'public/fonts');
  mix.scripts('app.js');
});
