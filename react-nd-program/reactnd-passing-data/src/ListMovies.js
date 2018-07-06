import React, {Component} from 'react';

class ListMovies extends Component {
  render() {
    console.log('profiles: ', this.props.profiles);
    console.log('users: ', this.props.users);
    console.log('movies: ', this.props.movies);
    return (
      <ol className='movie-list'>
      {this.props.profiles.map((movieProfile) => 
       <li key={movieProfile.id}>{this.props.users[movieProfile.userID].name}'s favorite movie is {this.props.movies[movieProfile.favoriteMovieID].name}</li>
      )}
      </ol>
    );
  }
}

export default ListMovies;