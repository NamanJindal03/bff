import React, { createContext, useContext } from 'react';

const DeviceContext = createContext();

export const useDevice = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
  const isMobileDevice = () => {
    const userAgent = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  };
  const value = {
    isMobile: isMobileDevice(),
  };

  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
};