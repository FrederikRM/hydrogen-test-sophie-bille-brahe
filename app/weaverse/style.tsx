// app/weaverse/style.tsx
import {useThemeSettings} from '@weaverse/hydrogen';

export function GlobalStyle() {
  const settings = useThemeSettings();
  if (settings) {
    const {
      colorBackground,
      colorText,
      // ... other settings extracted from theme
      pageWidth,
    } = settings;

    return (
      <style
        id="global-theme-style"
        key="global-theme-style"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              /* Layout */
              --height-nav: ${settings.navHeightMobile}rem;
              --page-width: ${pageWidth}px;
              
              /* Add more CSS variables based on your settings */
            }
          `,
        }}
      />
    );
  }
  return null;
}
