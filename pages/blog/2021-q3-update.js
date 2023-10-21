import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './2021-q3-update.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}