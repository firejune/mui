import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/material/components/menus/menus.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
