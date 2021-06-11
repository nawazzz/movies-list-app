import React from "react"
import "./MovieDetails.scss"

class MovieDetails extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="homeButtonContainer">
          <a href="/" className="homeButton">Home</a>
        </div>
        <div className="mainContainer">
          <div>
            <img src={this.props.selectedMovie.Images[2]} style={{width: "100%"}}/>
          </div>
          <div className="movieDescriptionContainer">
            <h3>Movie Name: {this.props.selectedMovie.Title}</h3>
            <h5>Plot: {this.props.selectedMovie.Plot}</h5>
            <h6>Starring: {this.props.selectedMovie.Actors}</h6>
            <h6>Directed by: {this.props.selectedMovie.Director}</h6>
            <h6 className="rateMovie">Rate the movie: 
            {' '}<span className="ratingOneToFive">1</span>{' '}
              <span className="ratingOneToFive">2</span>{' '}
              <span className="ratingOneToFive">3</span>{' '}
              <span className="ratingOneToFive">4</span>{' '}
              <span className="ratingOneToFive">5</span>
            </h6>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default MovieDetails;
