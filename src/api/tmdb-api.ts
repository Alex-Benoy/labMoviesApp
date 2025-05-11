import { DiscoverTVSeries } from "../types/interfaces";

export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovie = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};


export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
  ).then( (response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getLanguages = () => {
  return fetch(
    `https://api.themoviedb.org/3/configuration/languages?api_key=${
      import.meta.env.VITE_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch languages. Response status: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};




export const getMovieImages = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("failed to fetch images");
    }
    return response.json();
  }).then((json) => json.posters)
    .catch((error) => {
      throw error
    });
};


export const getMovieReviews = (id: string | number) => { //movie id can be string or number
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch upcoming movies: ${response.status}`);
    }
    return response.json();
  });
};

export const getPopularMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch popular movies. Status: ${response.status}`);
    return response.json();
  });
};

// api/tmdb-api.ts
export const getTVSeries = async (): Promise<DiscoverTVSeries> => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1`);
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
};

export const getTVSeriesDetails = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get TV series data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getPopularActors = () => {
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch popular actors. Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getActorDetails = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get actor data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const addReviewFrontend = async (review:{}) => {
    try {
      console.log("Sending review to API:", review); // Debugging log
      const response = await fetch("https://e9246nzte4.execute-api.eu-west-1.amazonaws.com/prod/frontendreviews", {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to post review. Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Review successfully posted:", result);
      return result;
    } catch (error) {
      console.error("Error posting review:", error);
      throw error;
    }
  };

  export const getFrontendReview = async () => {
    try {
      const response = await fetch("https://e9246nzte4.execute-api.eu-west-1.amazonaws.com/prod/frontendreviews", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch reviews. Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Fetched reviews:", result);
      return result.data; // Assuming the response is an array of reviews
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw error;
    }
  };
  
  export const addFantasyMovie = async (movie: Record<string, any>) => {
  try {
    console.log("Sending movie to API:", movie);

    const response = await fetch("https://e9246nzte4.execute-api.eu-west-1.amazonaws.com/prod/fantasymovies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error(`Error posting movie. Status: ${response.status}, Details: ${errorDetails}`);
      throw new Error(`Failed to post movie. Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Movie successfully posted:", result);
    return result;
  } catch (error) {
    console.error("Error posting movie:", error);
    throw error;
  }
};

export const getFantasyMovie = async () => {
    try {
      const response = await fetch("https://e9246nzte4.execute-api.eu-west-1.amazonaws.com/prod/fantasymovies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch reviews. Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Fetched reviews:", result);
      return result.data; // Assuming the response is an array of reviews
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw error;
    }
  };