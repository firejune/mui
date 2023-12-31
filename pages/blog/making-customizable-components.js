import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './making-customizable-components.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
