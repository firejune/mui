import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './spotlight-damien-tassone.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
