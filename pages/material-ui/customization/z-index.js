import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/customization/z-index/z-index.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
