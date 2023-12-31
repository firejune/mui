import * as React from 'react';
import AppTheme from 'src/modules/components/AppTheme';
import SignIn from 'src/pages/premium-themes/onepirate/SignIn';

export default function Page() {
  return (
    <AppTheme title="Onepirate theme - MUI" description="A onepirate theme">
      <SignIn />
    </AppTheme>
  );
}
