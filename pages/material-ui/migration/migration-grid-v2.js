import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/migration/migration-grid-v2/migration-grid-v2.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
