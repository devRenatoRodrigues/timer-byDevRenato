import PropTypes from 'prop-types';


export default function Button({tittle, onClick, type, className }) {
  return (
    <button 
    onClick={onClick}
    type={ type }
    className={className}
    >{tittle}</button>
  )
}

Button.propTypes = {
  tittle: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
}