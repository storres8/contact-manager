import React from 'react'; 
import PropTypes from 'prop-types'; 
import classnames from 'classnames';

function TextInputGroup({
  label,
  name, 
  value,
  placeholder,
  type, 
  change, 
  htmlFor,
  id,
  error,
}) {
  
  return (
    <div>
      <div className="form-group">
        <label htmlFor={htmlFor}>{label}</label>
        <input 
        type={type} 
        name={name}
        id={id} 
        className={classnames('form-control', {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value = {value}  
        onChange = {change}/>
        {error && <div className="invalid-feedback">{error}</div>}
        {id === 'phone' ? <small id="phoneHelp" className="form-text text-muted">Ex: xxx-xxx-xxxx</small> 
          :null}
      </div>
    </div>
  )
}

TextInputGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  change: PropTypes.func,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
}

TextInputGroup.defaultProps = {
  type: 'text'
}


export default TextInputGroup