import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/components/switches/switches.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
