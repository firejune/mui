import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/joy/main-features/global-variants/global-variants.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
