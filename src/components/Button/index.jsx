import classNames from 'classnames'
import { createElement } from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

function Button({ type, size, children}) {
  return (
	createElement('button', {
		type: type,
		className: classNames(styles.button,{
				[styles.normal]: size === "normal",
				[styles.large]: size === "large",
			})
	}, children)
  )
}

Button.propTypes = {
	  type: PropTypes.oneOf(['button', 'submit', 'reset']),
	  size: PropTypes.oneOf(['normal', 'large']),
}

Button.defaultProps = {
	  type: 'button',
	  size: 'normal',
}

export default Button