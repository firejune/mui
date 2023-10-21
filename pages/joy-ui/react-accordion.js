import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/joy/components/accordion/accordion.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
