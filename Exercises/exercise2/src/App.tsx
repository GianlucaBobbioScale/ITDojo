import './global.css';

import formDbResult from './utils/db.json';

import { LucasFinalForm } from './providers/LFF';
import { useCallback } from 'react';
import { TInput } from './utils/types';

function App() {
  const { inputs } = formDbResult;

  const handleSubmit = useCallback((body: { [key: string]: any }) => {
    console.log('Request con el siguiente body:', body);
  }, []);

  return (
    <div className="container">
      <LucasFinalForm
        {...{ title: 'Example Form', fields: inputs as TInput[], handleSubmit }}
      />
    </div>
  );
}

export default App;
