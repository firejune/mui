import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './material-ui-v4-is-out.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
