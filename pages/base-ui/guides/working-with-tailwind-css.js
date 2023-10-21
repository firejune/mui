import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/base/guides/working-with-tailwind-css/working-with-tailwind-css.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
