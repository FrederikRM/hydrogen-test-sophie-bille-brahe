// app/weaverse/schema.server.ts
import type {HydrogenThemeSchema} from '@weaverse/hydrogen';
import pkg from '../../package.json'; // Use your project's package

// Example based on Weaverse Pilot theme
// See: [Pilot schema file on GitHub](https://github.com/Weaverse/pilot/blob/main/app/weaverse/schema.server.ts)
export const themeSchema: HydrogenThemeSchema = {
  info: {
    version: pkg.version,
    author: 'Your Store Name', // Customize
    name: 'Your Theme Name', // Customize
    authorProfilePhoto: '', // Optional: URL to author photo
    documentationUrl: 'https://weaverse.io/docs',
    supportUrl: 'https://weaverse.io/contact',
  },
  // Define Theme settings accessible in Weaverse Studio > Theme > Customize
  inspector: [
    {
      group: 'Colors',
      inputs: [
        {
          type: 'color',
          label: 'Primary Button',
          name: 'primaryButtonColor',
          defaultValue: '#000000',
        },
        // Add more color settings...
      ],
    },
    {
      group: 'Layout',
      inputs: [
        {
          type: 'range',
          label: 'Page width',
          name: 'pageWidth',
          configs: {
            min: 1000,
            max: 1600,
            step: 10,
            unit: 'px',
          },
          defaultValue: 1280,
        },
        // Add more layout settings...
      ],
    },
    // Add more groups like Typography, etc.
  ],
  // Define i18n settings (optional but recommended)
  i18n: {
    // Refer to Pilot schema for a full example
  },
};
