import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './lab-tree-view-to-mui-x.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
