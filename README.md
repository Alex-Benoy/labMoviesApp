# MoviesApp - React + TypeScript + Vite

MoviesApp is a modern web application built using React, TypeScript, and Vite. It allows users to explore movies, TV series, and actors, as well as manage their favorite movies, reviews, and fantasy movie collection. The app uses The Movie Database (TMDb) API for fetching movie data and is deployed to AWS Cloud using S3, CloudFront, and DynamoDB.

## Features

- **Home Screen**: Displays a list of movies.
- **Upcoming Movies**: A page that shows movies releasing soon.
- **Popular Movies**: Displays a list of popular movies.
- **TV Series**: A page dedicated to TV series.
- **Actors**: A page showcasing actors in the movie industry.
- **Details Pages**: Individual detail pages for movies, TV series, and actors where additional information is provided.
- **Favorite Movies**: Allows users to mark movies as favorites.
- **Movie Reviews**: Users can write reviews for their favorite movies.
- **Review Management**: All reviews added by the user are displayed on a separate page.
- **FantasyMovie Page**: Users can create their own fantasy movie by adding custom movie details (title, description, etc.) and manage their fantasy movie list.
- **Movie Filters**: Users can filter movies by genres and languages.
- **Login**: User authentication is implemented using AWS CDK integration.
- **Cloud Deployment**: The app is deployed to AWS S3 and CloudFront for scalable performance.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript.
- **Vite**: A next-generation, fast build tool.
- **TMDb API**: The Movie Database API for fetching movie, actor, and TV series data.
- **AWS S3**: Used for static website hosting.
- **AWS CloudFront**: A CDN to deliver the web app globally.
- **AWS DynamoDB**: A NoSQL database for storing reviews.
- **AWS CDK**: Infrastructure-as-Code (IaC) tool used to set up the login functionality.

## Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/Alex-Benoy/labMoviesApp.git
cd labMoviesApp
