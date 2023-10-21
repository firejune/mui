import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/joy/integrations/next-js-app-router/next-js-app-router.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
