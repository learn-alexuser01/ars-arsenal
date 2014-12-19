/**
 * Button
 */

var React = require('react/addons')
var cx    = React.addons.classSet

var Button = React.createClass({

  getDefaultProps() {
    return {
      raised : false,
      type   : 'button'
    }
  },

  getClassName(base) {
    var mods = cx({
      'ars-button' : true,
      'ars-button-raised' : this.props.raised
    })

    return cx(base, mods)
  },

  render() {
    var { className, children, ...attrs} = this.props

    return (
      <button className={ this.getClassName(className) } { ...attrs }>
        { children }
      </button>
    )
  }

})

module.exports = Button
