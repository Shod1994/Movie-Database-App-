# Movie Database

A project to store and display information about movies, including title, genre, release date, and other relevant details.

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

This project is a movie database application designed to store and manage movie details. The app allows users to add, edit, and delete movies, and provides a search function to find movies based on different criteria.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js , Express
- **API**: Uses The Movie Database (TMDb) API

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/shod1994/movie-database.git

```

2. Navigate to the project folder:

```bash
   cd movie-database
```

3. Install dependencies:

```bash
    npm install
```

4. Start the development server:

```bash
npm start
```

## Usage

- Visit http://localhost:300 in your browser.
- Search for movies using the search bar
- Click on a movie to view details
- Add movies to your watchlist

## API Configuration

This project uses the TMDb API. To set it up:

1. Sign up at TMDb.
2. Get your API Key from the developer section.
3. Create a .env file and add:

```bash
REACT_APP_TMDB_API_KEY=your_api_key_here
```
