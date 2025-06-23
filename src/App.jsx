import React from 'react';
import { PizzaProvider } from './context/PizzaContext';
import PizzaBuilder from './components/PizzaBuilder';

function App() {
    return (
        <PizzaProvider>
            <PizzaBuilder/>
        </PizzaProvider>
    );
}

export default App;
