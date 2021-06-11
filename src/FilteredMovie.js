import React from "react"

class FilteredMovie extends React.Component {

  render() {
    console.log(this.props)
    return(
      <React.Fragment>
        <div className="movieCardContainer">
          
            {this.props.searchedMovie.map((elm, index) => {
              return(
                <React.Fragment>
                  <div className="movieImageContainer" style={{width: "300px"}}>
                    <img src={elm.Images[0]} style={{width: "100%", height: "200px"}}/>
                  </div>
                  <div className="styleMovieTitle">
                    {elm.Title}
                  </div>
                </React.Fragment>
              )
            })}
          </div>
      </React.Fragment>
    )
  }
} 
export default FilteredMovie;