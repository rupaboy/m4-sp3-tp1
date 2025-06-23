import React, { useState } from 'react';
import { usePizzaContext } from '../context/PizzaContext';
import { pizza } from '../utils/pizzaData';

const PizzaBuilder = () => {
    const { addPizza, pizzas } = usePizzaContext();

    const defaultOptions = {
        size: pizza.size[0].id,
        type: pizza.type[0].id,
        masa: pizza.masa[0].id,
        salsa: pizza.salsa[0].id,
        queso: pizza.queso[0].id,
        fiambres: pizza.fiambres[0].id,
        extras: [70], // "Sin extras" seleccionado por defecto
    };

    const [selectedSetup, setSelectedSetup] = useState(pizza.setup[0].id);
    const [selectedOptions, setSelectedOptions] = useState(defaultOptions); // Para pizzas completas
    const [selectedOptionsLeft, setSelectedOptionsLeft] = useState(defaultOptions); // Para mitad izquierda
    const [selectedOptionsRight, setSelectedOptionsRight] = useState(defaultOptions); // Para mitad derecha

    const handleOptionChange = (side, category, value) => {
        const setter =
            side === 'left'
                ? setSelectedOptionsLeft
                : side === 'right'
                ? setSelectedOptionsRight
                : setSelectedOptions;
        setter((prev) => ({
            ...prev,
            [category]: value,
        }));
    };

    const handleExtrasChange = (side, value) => {
        const setter =
            side === 'left'
                ? setSelectedOptionsLeft
                : side === 'right'
                ? setSelectedOptionsRight
                : setSelectedOptions;
    
        setter((prev) => {
            // Si se selecciona "sin extras", deshabilitar todos los demás extras
            if (value === 70) {
                return { ...prev, extras: [value] };
            }
            // Si ya está seleccionado "sin extras", permitir selección de otros extras eliminándolo
            if (prev.extras.includes(70)) {
                return {
                    ...prev,
                    extras: prev.extras.filter((extra) => extra !== 70).concat(value),
                };
            }
            // Manejo normal de selección/deselección
            return {
                ...prev,
                extras: prev.extras.includes(value)
                    ? prev.extras.filter((extra) => extra !== value)
                    : [...prev.extras, value],
            };
        });
    };

    const handleAddPizza = () => {
        const pizzaToAdd =
            selectedSetup === 1
                ? { setup: selectedSetup, options: selectedOptions }
                : {
                      setup: selectedSetup,
                      left: selectedOptionsLeft,
                      right: selectedOptionsRight,
                  };
        addPizza(pizzaToAdd);
    };

    return (
        <div className="grid grid-cols-2 gap-4 bg-orange-200">
            {/* Configuración de setup */}
            <div className="col-span-2">
                <h1>Configuración de la Pizza</h1>
                <select
                    onChange={(e) => setSelectedSetup(parseInt(e.target.value, 10))}
                    value={selectedSetup}
                >
                    {pizza.setup.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Opciones de la pizza completa */}
            {selectedSetup === 1 && (
                <div className="col-span-2">
                    <h1>Construye tu Pizza Completa</h1>
                    {Object.keys(pizza).map((category) =>
                        category === 'setup' ? null : (
                            <div key={category}>
                                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                                {category === 'extras' ? (
                                    pizza[category].map((option) => (
                                        <label key={option.id}>
                                            <input
                                                type="checkbox"
                                                value={option.id}
                                                checked={selectedOptions.extras.includes(option.id)}
                                                onChange={() =>
                                                    handleExtrasChange(null, option.id)
                                                }
                                            />
                                            {option.name}
                                        </label>
                                    ))
                                ) : (
                                    <select
                                        onChange={(e) =>
                                            handleOptionChange(null, category, parseInt(e.target.value, 10))
                                        }
                                        value={selectedOptions[category]}
                                    >
                                        {pizza[category].map((option) => (
                                            <option key={option.id} value={option.id}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        )
                    )}
                </div>
            )}

            {/* Opciones de la mitad izquierda */}
            {selectedSetup === 2 && (
                <div>
                    <h1>Construye tu Media Pizza - Izquierda</h1>
                    {Object.keys(pizza).map((category) =>
                        category === 'setup' ? null : (
                            <div key={category}>
                                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                                {category === 'extras' ? (
                                    pizza[category].map((option) => (
                                        <label key={option.id}>
                                            <input
                                                type="checkbox"
                                                value={option.id}
                                                checked={selectedOptions.extras.includes(option.id)}
                                                disabled={
                                                    selectedOptions.extras.includes(70) && option.id !== 70 // Deshabilitar otros si "sin extras" está seleccionado
                                                }
                                                onChange={() =>
                                                    handleExtrasChange('left', option.id)
                                                }
                                            />
                                            {option.name}
                                        </label>
                                    ))
                                ) : (
                                    <select
                                        onChange={(e) =>
                                            handleOptionChange(
                                                'left',
                                                category,
                                                parseInt(e.target.value, 10)
                                            )
                                        }
                                        value={selectedOptionsLeft[category]}
                                    >
                                        {pizza[category].map((option) => (
                                            <option key={option.id} value={option.id}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        )
                    )}
                </div>
            )}

            {/* Opciones de la mitad derecha */}
            {selectedSetup === 2 && (
                <div>
                    <h1>Construye tu Media Pizza - Derecha</h1>
                    {Object.keys(pizza).map((category) =>
                        category === 'setup' ? null : (
                            <div key={category}>
                                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                                {category === 'extras' ? (
                                    pizza[category].map((option) => (
                                        <label key={option.id}>
                                            <input
                                                type="checkbox"
                                                value={option.id}
                                                checked={selectedOptionsRight.extras.includes(option.id)}
                                                onChange={() =>
                                                    handleExtrasChange('right', option.id)
                                                }
                                            />
                                            {option.name}
                                        </label>
                                    ))
                                ) : (
                                    <select
                                        onChange={(e) =>
                                            handleOptionChange(
                                                'right',
                                                category,
                                                parseInt(e.target.value, 10)
                                            )
                                        }
                                        value={selectedOptionsRight[category]}
                                    >
                                        {pizza[category].map((option) => (
                                            <option key={option.id} value={option.id}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        )
                    )}
                </div>
            )}

            {/* Botón para agregar pizza */}
            <div className="col-span-2">
                <button className="bg-blue-500 text-white px-4 py-2" onClick={handleAddPizza}>
                    Agregar Pizza
                </button>
            </div>

            {/* Pizzas agregadas */}
            <div className="col-span-2">
                <h2>Pizzas Agregadas</h2>
                <ul>
                    {pizzas.map((pizza, index) => (
                        <li key={index}>
                            {pizza.setup === 1
                                ? `Completa: Tamaño ${pizza.options.size}`
                                : `Mitades: Izquierda (${pizza.left.size}) / Derecha (${pizza.right.size})`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PizzaBuilder;
