
export const getDesignTokens = (mode:any) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            
          }
        : {
            // palette values for dark mode
            
          }),
    },
  });
  