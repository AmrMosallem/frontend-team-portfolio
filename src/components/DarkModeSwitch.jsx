import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Sun, Moon } from 'lucide-react';

// Keyframes for glow animation
const glow = keyframes`
  0% { box-shadow: 0 0 5px currentColor; }
  50% { box-shadow: 0 0 20px currentColor; }
  100% { box-shadow: 0 0 5px currentColor; }
`;

const SwitchContainer = styled.button`
  position: relative;
  width: 64px;
  height: 28px;
  border-radius: 999px;
  cursor: pointer;
  border: none;
  padding: 0;
  background: ${props => props.isDark ? 'var(--color-level-5)' : '#ffc680'};
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #ffffff;
  }

  &:hover {
    background: ${props => props.isDark ? '#4d3016' : 'var(--color-level-2)'};
  }
  @media (max-width:650px) {
    width: 48px;
    height: 20px;  
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  animation: ${glow} 3s infinite;
  color: ${props => props.isDark ? '#3b82f6' : '#fbbf24'};
  opacity: 0.2;
  transition: color 0.3s ease-in-out;
`;

const IconCircle = styled.div`
  position: absolute;
  top:50%;
  translate: 0 -50%;
  left: 4px;
  width: 24px;
  height: 80%;
  background: ${props => props.isDark ? '#0f172a' : 'white'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(${props => props.isDark ? '32px' : '0'});
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  @media (max-width:650px) {
    width: 18px;
    transform: translateX(${props => props.isDark ? '24px' : '0'});
  }
`;

const StyledIcon = styled.div`
  color: ${props => props.isDark ? 'var(--color-level-1)' : '#f59e0b'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease-in-out;
`;

const DarkModeSwitch = (props) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        localStorage.setItem('darkMode', !isDark);
        props.setDarkMode(!isDark);
    };
   useEffect(() => {
        setIsDark(localStorage.getItem('darkMode') === 'true');
        props.setDarkMode(localStorage.getItem('darkMode') === 'true');
    }, []);
    return (
        <SwitchContainer onClick={toggleTheme} isDark={isDark}>
            <GlowEffect isDark={isDark} />
            <IconCircle isDark={isDark}>
                <StyledIcon isDark={isDark}>
                    {isDark ? <Moon size={14} /> : <Sun size={14} />}
                </StyledIcon>
            </IconCircle>
        </SwitchContainer>
    );
};

export default DarkModeSwitch;