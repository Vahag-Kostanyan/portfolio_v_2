import React from 'react';

const IconWrapper = ({ Icon, lightColor, darkColor, theme, size = 24 }) => {
  const color = theme === 'dark' ? darkColor : lightColor;
  return <Icon color={color} size={size} />;
};

export default IconWrapper;
