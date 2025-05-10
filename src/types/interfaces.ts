export interface BaseMovieProps {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
  genre_ids?: number[];
}

export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; //some props are optional...
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface Review {
  author: string,
  content: string,
  agree: boolean,
  rating: number,
  movieId: number,
}


export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export type FilterOption = "title" | "genre";

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}




export interface Review {
  id: string;
  content: string
  author: string
}

export interface GenreData {
  genres: {
    id: string;
    name: string
  }[];
}

export interface DiscoverMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

// interface MovieContextInterface {
//   favourites: number[];
//   mustWatch: number[]; // ✅ New
//   addToFavourites: (movie: BaseMovieProps) => void;
//   removeFromFavourites: (movie: BaseMovieProps) => void;
//   addToMustWatch: (movie: BaseMovieProps) => void; // ✅ New
//   addReview: (movie: BaseMovieProps, review: Review) => void;
// }

export interface TVSeriesProps {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  first_air_date: string;
  poster_path?: string;
  genre_ids?: number[];
  favourite?: boolean;
}

export interface BaseTVSeriesListProps {
  series: TVSeriesProps[];
  action: (s: TVSeriesProps) => React.ReactNode;
}

export interface TVSeriesListPageTemplateProps extends BaseTVSeriesListProps {
  title: string;
}

export interface DiscoverTVSeries {
  page: number;
  total_pages: number;
  total_results: number;
  results: TVSeriesProps[];
}

export interface TVSeriesDetailsProps {
  id: number;
  name: string;
  overview: string;
  tagline?: string;
  genres: { id: number; name: string }[];
  homepage?: string;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
  episode_run_time: number[];
  number_of_seasons: number;
  number_of_episodes: number;
  poster_path?: string;
}

export interface ActorProps {
  homepage: any;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface SignInFormData {
  username: string;
  password: string;
}

export interface SignInResults {
  message: string;
  token: string;
}

export interface ActorDetailsProps {
  name: string;
  profile_path: string | null;
  birthday: string | null;
  place_of_birth: string | null;
  biography: string;
  popularity: number;
  known_for_department?: string;
  also_known_as?: string[];
}
