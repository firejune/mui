import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './premium-plan-release.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
