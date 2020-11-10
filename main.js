const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
	  b = prompt('Насколько оцените его?', ''),
	  c = prompt('Один из последних просмотренных фильмов?', ''),
	  d = prompt('Насколько оцените его?', '');

let secondPrivat = 12;


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
personalMovieDB.privat = secondPrivat;
console.log(personalMovieDB);

console.log(personalMovieDB.privat);

let age = 55;
if (age >= 14 && age <= 90) {
	console.log("true");
	
} else {
	console.log('false');
	
}




