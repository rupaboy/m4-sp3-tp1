export const pizza = {
    
    setup: [
        { id: 1, name: 'Completa', description: 'Pizza completa sin división',
            factor: 1 },
        { id: 2, name: 'Mitades', description: 'Dividir en dos mitades iguales',
            factor: 1.5},
    ],
    size: [
        {
            id: 100, name: 'S',
            description: 'Pizzeta para una persona',
            priceFactor: 0.6,
            sizeFactor: 0.2,
            maxPortions: 4
        },
        {
            id: 101, name: 'M',
            description: 'Pizza para dos a tres personas',
            priceFactor: 1,
            sizeFactor: 0.6,
            maxPortions: 8
        },
        {
            id: 102, name: 'L',
            description: 'Pizza para cuatro a seis personas',
            priceFactor: 1.3,
            maxPortions: 12,
            sizeFactor: 1,
        },
    ],
    type: [
            {
                id: 0, name: 'al molde',
                description: 'Masa alta, cocida en molde en horno tradicional',
                precio: 2000

            },
            {
                id: 1, name: 'a la piedra',
                description: 'Masa fina, cocida sobre piedra caliente para mayor crocancia',
                precio: 4000
            },
            {
                id: 2, name: 'a la plancha',
                description: 'Cocida sobre plancha de hierro, base crujiente',
                precio: 2500
            },
            {
                id: 3, name: 'a la parrilla',
                description: 'Cocida sobre brasas, con sabor ahumado característico',
                precio: 10000
            },
            {
                id: 4, name: 'al horno ahumada',
                description: 'Horno a leña, cocción rápida con sabor intenso',
                precio: 8000
            },
    ],
    masa: [
            {
                id: 10, name: 'tradicional',
                description: 'Masa de trigo blanca, esponjosa',
                precio: 2500
            },
            {
                id: 11, name: 'tradicional fina',
                description: 'Masa delgada de trigo, blanca y esponjosa',
                precio: 2500
            },
            {
                id: 12, name: 'integral',
                description: 'Masa de harina integral, sabor más rústico',
                precio: 3000
            },
            {
                id: 13, name: 'integral fina',
                description: 'Masa delgada de harina integral, sabor más rústico',
                precio: 3000
            },
            {
                id: 14, name: 'árabe',
                description: 'Masa de pan árabe, más seca y ligera',
                precio: 3500
            },
            {
                id: 15, name: 'árabe fina',
                description: 'Masa delgada de pan árabe, más seca y ligera',
                precio: 3500
            },
            {
                id: 16, name: 'sin gluten',
                description: 'Masa apta para celíacos, sin harina de trigo',
                precio: 5000
            },
            {
                id: 17, name: 'sin gluten fina',
                description: 'Masa delgada apta para celíacos, sin harina de trigo',
                precio: 5000
            },
    ], 
    salsa: [
            {
                id: 20, name: 'clásica de tomate',
                description: 'Tomate triturado con ajo, orégano y acéite',
                precio: 2000
            },
            {
                id: 21, name: 'de tomátes secos',
                description: 'Salsa intensa con tomates secos procesados',
                precio: 4000
            },
            {
                id: 22, name: 'bechamel',
                description: 'Salsa blanca cremosa a base de leche, harina y manteca',
                precio: 6500
            },
            {
                id: 23, name: 'barbacoa',
                description: 'Salsa dulce y ahumada para carnes',
                precio: 3000
            },
            {
                id: 24, name: 'arrabiata',
                description: 'Salsa de tomate picante, estilo italiano',
                precio: 3000
            },
            {
                id: 25, name: 'pesto',
                description: 'Salsa fresca de albahaca, ajo y aceite de oliva',
                precio: 5000
            },
            {
                id: 26, name: 'al aceite c/ajo',
                description: 'Base sin tomate, sólo aceite de oliva y ajo',
                precio: 1500
            },
            
    ],
    queso: [
            {
                id: 30, name: 'mozzarella',
                description: 'Queso clásico, funde suave y elástico',
                precio: 4000
            },
            {
                id: 31, name: 'cuatro quesos',
                description: 'Mezcla de quesos intensa y cremosa',
                precio: 6000
            },
            {
                id: 32, name: 'provolone',
                description: 'Queso firme, sabor fuerte y gratinado',
                precio: 5000
            },
            {
                id: 33, name: 'parmesano',
                description: 'Queso duro, rallado de sabor salado',
                precio: 4500
            },
            {
                id: 34, name: 'roquefort',
                description: 'Queso azul, intenso y salado',
                precio: 5500
            },
            {
                id: 35, name: 'cheddar',
                description: 'Queso amarillo, cremoso y de sabor marcado',
                precio: 4500
            },
            {
                id: 36, name: 'ricotta',
                description: 'Queso fresco, suave y granuloso',
                precio: 4000
            },
            {
                id: 37, name: 'burrata',
                description: 'Queso fresco italiano de centro cremoso',
                precio: 6000
            },
            {
                id: 38, name: 'vegano',
                description: 'Queso vegetal sin lácteos ni grasa animal',
                precio: 5000
            },
            {
                id: 39, name: 'sin queso',
                description: 'Pizza sin queso al gusto de algunos'
            }
    ],
    fiambres: [
            {
                id: 40, name: 's/fiambre',
                description: 'Sin topping de fiambres',
                precio: 0
            },
            {
                id: 41, name: 'jamón cocido',
                description: 'Jamón clásico, suave y salado',
                precio: 3000
            },
            {
                id: 42, name: 'jamón crudo',
                description: 'Jamón curado agregado post-horneado',
                precio: 4000
            },
            {
                id: 43, name: 'panceta',
                description: 'Tiras de bacon saladas y crocantes',
                precio: 3500
            },
            {
                id: 44, name: 'salame',
                description: 'Fiambre curado y especiado de sabor intenso',
                precio: 4000
            },
            {
                id: 45, name: 'longaniza',
                description: 'Embutido seco más grueso que el salame',
                precio: 4500
            },
            {
                id: 46, name: 'pepperoni',
                description: 'Salame picante, típico de Estados Unidos',
                precio: 4000
            },
            {
                id: 47, name: 'lomito ahumado',
                description: 'Corte de cerdo magro con sabor ahumado',
                precio: 4500
            },
            {
                id: 48, name: 'chorizo colorado',
                description: 'Chorizo seco con pimentón de fuerte sabor',
                precio: 4000
            },
            {
                id: 49, name: 'ternera',
                description: 'Carne de vaca cocida y desmenuzada',
                precio: 6000
            },
    ],

    extras: [
            {
                id: 50, name: 'aceitunas verdes',
                description: 'Clásicas, saladas y suaves',
                precio: 1000
            },
            {
                id: 51, name: 'aceitunas negras',
                description: 'Más amargas, sabor profundo',
                precio: 1200
            },
            {
                id: 52, name: 'huevo',
                description: 'Entero o picado, aporta sabor suave',
                precio: 2000
            },
            {
                id: 53, name: 'tomate',
                description: 'Rodajas frescas, jugosas y ácidas',
                precio: 2500
            },
            {
                id: 54, name: 'tomate cherry',
                description: 'Pequeños, dulces y decorativos',
                precio: 3500
            },
            {
                id: 55, name: 'morrones',
                description: 'Pimientos asados dulces y coloridos',
                precio: 4000
            },
            {
                id: 56, name: 'anchoas',
                description: 'Pescado salado, fuerte y sabroso',
                precio: 4000
            },
            {
                id: 57, name: 'cebollas',
                description: 'Cocidas semi-caramelizadas, sabor dulce',
                precio: 2500
            },
            {
                id: 58, name: 'albahaca fresca',
                description: 'Hojas verdes, aroma fresco',
                precio: 1000
            },
            {
                id: 59, name: 'rúcula',
                description: 'Hoja verde con sabor levemente picante',
                precio: 2000
            },
            {
                id: 60, name: 'espinaca',
                description: 'Hojas cocidas de sabor suave',
                precio: 1500
            },
            {
                id: 61, name: 'palmitos',
                description: 'Tallos suaves, textura delicada',
                precio: 7000
            },
            {
                id: 62, name: 'champignones',
                description: 'Hongos blancos de sabor terroso',
                precio: 6000
            },
            {
                id: 63, name: 'alcaparras',
                description: 'Pequeñas, ácidas y muy saladas',
                precio: 8000
            },
            {
                id: 65, name: 'piña',
                description: 'Ananá dulce para pizzas hawaianas',
                precio: 6000
            },
            {
                id: 70, name: 'sin extras',
                description: 'Pizza sin añadidos extra',
                precio: 0
            },
            
    ],
}