// app/weaverse/csp.ts
import type {AppLoadContext} from '@shopify/remix-oxygen';

// Example based on Weaverse Pilot theme
// See: [Pilot csp file on GitHub](https://github.com/Weaverse/pilot/blob/main/app/weaverse/csp.ts)
export function getWeaverseCsp(request: Request, context: AppLoadContext) {
  const url = new URL(request.url);
  const weaverseHost = context.env?.WEAVERSE_HOST || 'https://weaverse.io';
  const isDesignMode = url.searchParams.get('weaverse_design_mode') === 'true';

  const weaverseHosts = [
    new URL(weaverseHost).host,
    'weaverse.io',
    '*.weaverse.io',
    'shopify.com',
    '*.shopify.com',
    '*.myshopify.com',
  ];

  const updatedCsp: {[key: string]: string[] | string | boolean} = {
    frameAncestors: weaverseHosts,
    defaultSrc: [
      "'self'",
      'data:',
      // Add other necessary sources like CDN, fonts, etc.
      ...weaverseHosts,
    ],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      // Add other necessary sources
      ...weaverseHosts,
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      // Add other necessary sources
      ...weaverseHosts,
    ],
    connectSrc: [
      "'self'",
      // Add other necessary sources (APIs, etc.)
      ...weaverseHosts,
    ],
    // Add other directives as needed (imgSrc, fontSrc, etc.)
  };

  // In design mode, allow broader frame ancestors
  if (isDesignMode) {
    updatedCsp.frameAncestors = ['*'];
  }

  return updatedCsp;
}
