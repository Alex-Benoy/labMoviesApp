import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import TVHomePage from "./pages/tvHomePage";
import TVSeriesDetailsPage from "./pages/tvSeriesDetailsPage";
import ActorsPage from "./pages/actorsPage";
import SignInPage from "./pages/loginPage";
import { UserProvider } from "./contexts/loginContext"; // <-- ✅ ADD THIS LINE
import ActorDetailsPage from "./pages/actorDetailsPage";
import FantasyMoviePage from "./pages/FantasyMoviePage";
import ReviewsPage from "./pages/reviewsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider> {/* ✅ WRAP HERE */}
          <MoviesContextProvider>
            <SiteHeader />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/popular" element={<PopularMoviesPage />} />
              <Route path="/tv" element={<TVHomePage />} />
              <Route path="/tv/:id" element={<TVSeriesDetailsPage />} />
              <Route path="/actors" element={<ActorsPage />} />
              <Route path="/login" element={<SignInPage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/actors/:id" element={<ActorDetailsPage />} />
              <Route path="/fantasymovie" element={<FantasyMoviePage />} />
              <Route path="/review" element={<ReviewsPage />} />
            </Routes>
          </MoviesContextProvider>
        </UserProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Route, Navigate, Routes, useLocation } from "react-router-dom";
// import HomePage from "./pages/homePage";
// import MoviePage from "./pages/movieDetailsPage";
// import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
// import MovieReviewPage from "./pages/movieReviewPage";
// import SiteHeader from './components/siteHeader';
// import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from 'react-query/devtools';
// import MoviesContextProvider from "./contexts/moviesContext";
// import AddMovieReviewPage from './pages/addMovieReviewPage';
// import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
// import PopularMoviesPage from "./pages/popularMoviesPage";
// import TVHomePage from "./pages/tvHomePage";
// import TVSeriesDetailsPage from "./pages/tvSeriesDetailsPage";
// import ActorsPage from "./pages/actorsPage";
// import SignInPage from "./pages/loginPage";
// import { UserProvider } from "./contexts/loginContext";
// import ActorDetailsPage from "./pages/actorDetailsPage";
// import FantasyMoviePage from "./pages/FantasyMoviePage";
// import ProtectedRoute from "./components/protectedRoute";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 360000,
//       refetchInterval: 360000,
//       refetchOnWindowFocus: false
//     },
//   },
// });

// const AppWrapper = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ["/login"]; // Add other paths here if needed
//   const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

//   return (
//     <UserProvider>
//       <MoviesContextProvider>
//         {shouldShowHeader && <SiteHeader />}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/movies/:id" element={<MoviePage />} />

//           {/* ✅ Protected Route */}
//           <Route
//             path="/movies/favourites"
//             element={
//               <ProtectedRoute>
//                 <FavouriteMoviesPage />
//               </ProtectedRoute>
//             }
//           />

//           <Route path="/reviews/:id" element={<MovieReviewPage />} />
//           <Route path="/reviews/form" element={<AddMovieReviewPage />} />
//           <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
//           <Route path="/movies/popular" element={<PopularMoviesPage />} />
//           <Route path="/tv" element={<TVHomePage />} />
//           <Route path="/tv/:id" element={<TVSeriesDetailsPage />} />
//           <Route path="/actors" element={<ActorsPage />} />
//           <Route path="/login" element={<SignInPage />} />
//           <Route path="/actors/:id" element={<ActorDetailsPage />} />

//           {/* ✅ Protected Route */}
//           <Route
//             path="/fantasymovie"
//             element={
//               <ProtectedRoute>
//                 <FantasyMoviePage />
//               </ProtectedRoute>
//             }
//           />

//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </MoviesContextProvider>
//     </UserProvider>
//   );
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <BrowserRouter>
//       <AppWrapper />
//     </BrowserRouter>
//     <ReactQueryDevtools initialIsOpen={false} />
//   </QueryClientProvider>
// );

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
