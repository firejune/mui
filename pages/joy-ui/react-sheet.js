import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/joy/components/sheet/sheet.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
