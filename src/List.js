import React from "react"
import './List.scss'

class List extends React.Component {

  render() {
    return(
      <React.Fragment>
        <ul className="listMainContainer">
          {this.props.allMovies && this.props.allMovies.map((elm, index) => {
            return (
              <React.Fragment>
                <div className="movieCardContainer" 
                onClick={() => this.props.handleMovieSelection(elm)} 
                >
                  <div className="movieImageContainer">
                    <img src={elm.Images[0]} style={{width: "100%", height: "200px"}}/>
                  </div>
                  <div className="styleMovieTitle">
                    {elm.Title}
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }

}
export default List;