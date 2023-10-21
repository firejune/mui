import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './mui-x-v6.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
