import React from "react"

class FilteredMovie extends React.Component {

  render() {
    console.log(this.props)
    return(
      <React.Fragment>
        <div className="movieCardContainer">
          <div className="movieImageContainer" style={{width: "300px"}}>
            <img src={this.props.searchedMovie[0].Images[0]} style={{width: "100%", height: "200px"}}/>
          </div>
          <div className="styleMovieTitle">
            {this.props.searchedMovie[0].Title}
          </div>
        </div>
      </React.Fragment>
    )
  }
} 
export default FilteredMovie;