import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/migration/migration-v4/migrating-from-jss.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
