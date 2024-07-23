import React, { ReactNode } from 'react';
import './Tooltip.css';

interface TooltipProps {
  text: string;
  position: 'top' | 'bottom';
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position, children }) => {
  return (
    <div className="relative has-tooltip">
      {children}
      <span className={`tooltip ${position}`}>
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
