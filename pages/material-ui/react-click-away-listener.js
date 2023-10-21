import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/components/click-away-listener/click-away-listener.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
