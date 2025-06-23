import React, { createContext, useContext, useState } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

    // Función para generar un uniqueId basado en las propiedades de la pizza
    const generateUniqueId = (pizzaConfig) => {
        const { size, type, masa, salsa, queso, fiambres, extras } = pizzaConfig;

        //Los extras son un array
        const extrasIds = extras.sort().join('-');// Concatener siempre en el mismo órden
        return `${size}-${type}-${masa}-${salsa}-${queso}-${fiambres}-${extrasIds}`;
    };

    const addPizza = (pizzaConfig) => {
        const uniqueId = generateUniqueId(pizzaConfig);
        if (!pizzas.some((pizza) => pizza.id === uniqueId)) {
            setPizzas([...pizzas, { ...pizzaConfig, id: uniqueId }]);
        }
    };

    return (
        <PizzaContext.Provider value={{ pizzas, addPizza }}>
            {children}
        </PizzaContext.Provider>
    );
};

export const usePizzaContext = () => {
    return useContext(PizzaContext);
};
