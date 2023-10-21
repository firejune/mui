import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './docs-restructure-2022.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
