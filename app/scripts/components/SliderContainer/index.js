/**
 * This file will hold the Slider Div in Main Page
 * 
 */
import React, { Children } from 'react';

const ScrollbarState = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2,
};

class SliderContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      scrollbarPostion: 0,
      currentScrollState: ScrollbarState.LEFT,
    };
    this.slider = React.createRef();
  }

  /**
   * move scrollbar of slider when 'next' and 'previous' button is clicked
  * @memberof SliderContainer
  * @param state boolean - false : move left,  true: move right
  */


  navigate(state) {
    const container = this.slider.current;

    console.log(container.offsetWidth, container.clientWidth)
    if (state) {
      container.scrollLeft -= container.offsetWidth
      let postion = this.state.scrollbarPostion - container.clientWidth
      this.setState({ scrollbarPostion: postion })
      if (postion <= 0) {
        this.setState({ currentScrollState: ScrollbarState.LEFT })
        this.setState({ scrollbarPostion: 0 })
      }
      else {
        this.setState({ currentScrollState: ScrollbarState.MIDDLE })
      }
    }
    else if (!state) {
      container.scrollLeft += container.clientWidth
      let postion = this.state.scrollbarPostion + container.clientWidth
      this.setState({ scrollbarPostion: postion })
      if (this.state.scrollbarPostion + container.clientWidth >= container.scrollWidth) {
        this.setState({ currentScrollState: ScrollbarState.RIGHT })
        this.setState({ scrollbarPostion: container.scrollWidth - container.clientWidth })
      }
      else {
        this.setState({ currentScrollState: ScrollbarState.MIDDLE })
      }
    }
  }
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   * 
   * @returns JSX
   * @memberof Home
  */
  render() {
    const { currentScrollState } = this.state
    return (
      <div className="SliderContainer">
        <div className="HeaderContent">
          <p className="ResultText">{`${this.props.children.length} products are searched`}</p>
          <button
            className="ArrowButtom"
            disabled={currentScrollState == ScrollbarState.LEFT}
            onClick={() => this.navigate(true)}
          >
            Preview
          </button>
          <button
            className="ArrowButtom"
            disabled={currentScrollState == ScrollbarState.RIGHT}
            onClick={() => this.navigate(false)}
          >
            Next
          </button>
        </div>
        <div ref={this.slider} className="SliderContent">
          {this.props.children}
        </div>

      </div>
    );
  }


}

// Export out the React Component
module.exports = SliderContainer;