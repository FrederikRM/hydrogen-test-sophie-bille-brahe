// app/weaverse/components.ts
import type {HydrogenComponent} from '@weaverse/hydrogen';

import * as Paragraph from '~/components/paragraph';
// Import your theme components

// ... other component imports

// Register the components you want to use in Weaverse
export const components: HydrogenComponent[] = [
  Paragraph,
  // Add all components intended for Weaverse editing...
];
