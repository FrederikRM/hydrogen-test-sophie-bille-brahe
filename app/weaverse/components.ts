// app/weaverse/components.ts
import type {HydrogenComponent} from '@weaverse/hydrogen';
import * as Heading from '~/components/heading';
import * as Link from '~/components/link';
import * as Paragraph from '~/components/paragraph';
// Import your theme components
import * as HeroImage from '~/sections/hero-image';

// ... other component imports

// Register the components you want to use in Weaverse
export let components: HydrogenComponent[] = [
  Heading,
  Link,
  HeroImage,
  FeaturedProducts,
  Paragraph,
  // Add all components intended for Weaverse editing...
];
