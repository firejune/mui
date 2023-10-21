import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/components/grid2/grid2.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
