function Movies(info) {
    let movies = [];

    for (let i = 0; i < info.length; i++) {
        if (info[i].includes(`addMovie`)) {
            let movieName = info[i].split(`addMovie `)[1];
            let movieObj = { name: movieName };
            movies.push(movieObj);
        }
        else if (info[i].includes(`directedBy`)) {
            let [movieName, movieDirector] = info[i].split(` directedBy `);
            let movie = movies.find(movie => movie.name == movieName);

            if (movie)
                movie.director = movieDirector;
        }
        else if (info[i].includes(`onDate`)) {
            let [movieName, movieDate] = info[i].split(` onDate `);
            let movie = movies.find(movie => movie.name == movieName);

            if (movie)
                movie.date = movieDate;
        }
    }
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].name && movies[i].director && movies[i].date) {
            console.log(JSON.stringify(movies[i]));
        }
    }
}