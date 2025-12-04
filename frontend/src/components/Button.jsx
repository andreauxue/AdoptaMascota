import PropTypes from 'prop-types';

const Button = ({
  text,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
  icon = null
}) => {
  const baseStyles = "px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg active:scale-95",
    secondary: "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg active:scale-95",
    danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg active:scale-95",
    outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-95",
    ghost: "bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'outline', 'ghost']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  icon: PropTypes.node
};

export default Button;
