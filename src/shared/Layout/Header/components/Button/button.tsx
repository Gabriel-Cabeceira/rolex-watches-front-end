import React, { useEffect, useState } from 'react';
import { MenuToggle } from './button.styles';

interface IButtonMenu {
  onClick: () => void;
}

export const ButtonMenu: React.FC<IButtonMenu> = ({ onClick }) => {
  const [active, setActive] = useState(false);
  const [rotateIcon, setRotateIcon] = useState('0');
  const [iconPosition, setIconPosition] = useState('0');
  const [barIconMenu, setBarIconMenu] = useState(`0 8px 0 #FFFFFF`);

  // Controla o efeito de rotação do ícone do botão Menu
  useEffect(() => {
    if (active) {
      setRotateIcon('45deg');
      setIconPosition('0');
      setBarIconMenu('0 0 0 #000000');
    } else {
      setRotateIcon('0deg');
      setIconPosition('8px');
      setBarIconMenu(`0 8px 0 #FFFFFF`);
    }
  }, [active]);

  return (
    <MenuToggle
      rotate={rotateIcon}
      translateY={iconPosition}
      boxShadow={barIconMenu}
      onClick={() => {
        setActive(!active);
        onClick(); 
      }}
    />
  );
};
