/**
 * Selection Figure
 */

import Image from "./ui/image"
import React from "react"

let SelectionFigure = React.createClass({

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render() {
    let { caption, name, url } = this.props.item

    return (
      <figure className="ars-selection-figure">
        <Image className="ars-selection-photo" alt={ caption } src={ url } />
        <figcaption className="ars-selection-desc">
          <p className="ars-selection-title">{ name }</p>
          <p className="ars-selection-caption">{ caption }</p>
        </figcaption>
      </figure>
    )
  }

})

export default SelectionFigure