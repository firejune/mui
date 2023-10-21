import * as React from 'react';
import MarkdownDocs from 'src/modules/components/MarkdownDocs';
import * as pageProps from 'data/joy/customization/theme-builder/theme-builder.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} disableCssVarsProvider disableToc />;
}
