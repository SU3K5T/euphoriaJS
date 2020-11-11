const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		  b = prompt('Насколько оцените его?', '');

	if (a != null && b != null && a != '' && b != '') {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
}





if (personalMovieDB.count < 10) {
	alert('You are not a film lover(');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30 ) {
	alert('You are a typical viewer');
} else if (personalMovieDB.count > 30){
	alert('You are film lover)');
} else {
	alert('You type not correct(');
}



console.log(personalMovieDB);














