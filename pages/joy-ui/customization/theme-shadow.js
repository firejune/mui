import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/joy/customization/theme-shadow/theme-shadow.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
