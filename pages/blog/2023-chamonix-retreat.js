import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './2023-chamonix-retreat.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
