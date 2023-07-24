import PropTypes from 'prop-types';


export default function Button({tittle, onClick}) {
  return (
    <button onClick={onClick}>{tittle}</button>
  )
}

Button.propTypes = {
  tittle: PropTypes.string,
  onClick: PropTypes.func
}