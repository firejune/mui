import * as React from 'react';
import TopLayoutBlog from 'src/modules/components/TopLayoutBlog';
import { docs } from './aggregation-functions.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
