import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './2023-mui-values.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
