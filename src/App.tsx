import React from 'react';
import { Button, ThemeProvider } from '@aircall/tractor';

import { AppLayout } from './components/AppLayout';

function App() {
  return (
    <ThemeProvider>
        <AppLayout>
            <Button>Delete</Button>
        </AppLayout>
    </ThemeProvider>
  );
}

export default App;
