import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/migration/migration-v4/v5-component-changes.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
