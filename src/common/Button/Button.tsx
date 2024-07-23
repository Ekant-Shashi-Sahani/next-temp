import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  loading = false,
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  const baseClasses = "rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm";
  const variantClasses = variant === 'primary'
    ? "bg-indigo-600 text-white hover:bg-indigo-500"
    : "bg-gray-600 text-white hover:bg-gray-500";
  const sizeClasses = size === 'small'
    ? "text-xs px-2.5 py-1.5"
    : size === 'large'
    ? "text-lg px-4 py-3"
    : "text-sm px-3.5 py-2.5";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses}`}
      disabled={loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
