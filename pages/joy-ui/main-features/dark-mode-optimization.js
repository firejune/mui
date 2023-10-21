import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/joy/main-features/dark-mode-optimization/dark-mode-optimization.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
