const products = {

    tipo: [
            {
                id: 0, name: 'al molde',
                description: 'Masa alta, cocida en molde en horno tradicional.',
            },
            {
                id: 1, name: 'a la piedra',
                description: 'Masa fina, cocida sobre piedra caliente para mayor crocancia.',
            },
            {
                id: 2, name: 'a la plancha',
                description: 'Cocida sobre plancha de hierro, base crujiente.',
            },
            {
                id: 3, name: 'a la parrilla',
                description: 'Cocida sobre brasas, con sabor ahumado característico.',
            },
            {
                id: 4, name: 'a la leña (ahumada)',
                description: 'Horno a leña, cocción rápida con sabor intenso.',
            },
    ],

    masa: [
            {
                id: 10, name: 'tradicional',
                description: 'Masa de trigo blanca, esponjosa.',
            },
            {
                id: 11, name: 'tradicional fina',
                description: 'Masa delgada de trigo, blanca y esponjosa.',
            },
            {
                id: 12, name: 'integral',
                description: 'Masa de harina integral, sabor más rústico'
            },
            {
                id: 13, name: 'integral fina',
                description: 'Masa delgada de harina integral, sabor más rústico'
            },
            {
                id: 14, name: 'árabe',
                description: 'Masa de pan árabe, más seca y ligera'
            },
            {
                id: 15, name: 'árabe fina',
                description: 'Masa delgada de pan árabe, más seca y ligera'
            },
            {
                id: 16, name: 'sin gluten',
                description: 'Masa apta para celíacos, sin harina de trigo'
            },
            {
                id: 17, name: 'sin gluten fina',
                description: 'Masa delgada apta para celíacos, sin harina de trigo' 
            },
    ], 

    salsa: [
            {
                id: 20, name: 'clásica de tomate',
                description: 'Tomate triturado con ajo, orégano y acéite'
            },
            {
                id: 21, name: 'de tomátes secos',
                description: 'Salsa intensa con tomates secos procesados'
            },
            {
                id: 22, name: 'bechamel',
                description: 'Salsa blanca cremosa a base de leche, harina y manteca'
            },
            {
                id: 23, name: 'barbacoa',
                description: 'Salsa dulce y ahumada para carnes' 
            },
            {
                id: 24, name: 'arrabiata',
                description: 'Salsa de tomate picante, estilo italiano' 
            },
            {
                id: 25, name: 'pesto',
                description: 'Salsa fresca de albahaca, ajo y aceite de oliva' 
            },
            {
                id: 26, name: 'al aceite c/ajo',
                description: 'Base sin tomate, sólo aceite de oliva y ajo' 
            },
            
    ],

    queso: [
            {
                id: 30, name: 'mozzarella',
                description: 'Queso clásico, funde suave y elástico'
            },
            {
                id: 31, name: 'cuatro quesos',
                description: 'Mezcla de quesos intensa y cremosa'
            },
            {
                id: 32, name: 'provolone',
                description: 'Queso firme, sabor fuerte y gratinado' 
            },
            {
                id: 33, name: 'parmesano',
                description: 'Queso duro, rallado de sabor salado'
            },
            {
                id: 34, name: 'roquefort',
                description: 'Queso azul, intenso y salado' 
            },
            {
                id: 35, name: 'cheddar',
                description: 'Queso amarillo, cremoso y de sabor marcado' 
            },
            {
                id: 36, name: 'ricotta',
                description: 'Queso fresco, suave y granuloso' 
            },
            {
                id: 37, name: 'pategrás',
                description: 'Queso semiduro, sabroso y fundente'
            },
            {
                id: 38, name: 'burrata',
                description: 'Queso fresco italiano de centro cremoso'
            },
            {
                id: 39, name: 'vegano',
                description: 'Queso vegetal sin lácteos ni grasa animal' 
            },
    ],

    fiambres: [
            {
                id: 40, name: 's/fiambre',
                description: 'Sin topping de fiambres'
            },
            {
                id: 41, name: 'jamón cocido',
                description: 'Jamón clásico, suave y salado'
            },
            {
                id: 42, name: 'jamón crudo',
                description: 'Jamón curado agregado post-horneado'
            },
            {
                id: 43, name: 'panceta',
                description: 'Tiras de bacon saladas y crocantes' 
            },
            {
                id: 44, name: 'salame',
                description: 'Fiambre curado y especiado de sabor intenso' 
            },
            {
                id: 45, name: 'longaniza',
                description: 'Embutido seco más grueso que el salame' 
            },
            {
                id: 46, name: 'pepperoni',
                description: 'Salame picante, típico de Estados Unidos' 
            },
            {
                id: 47, name: 'lomito ahumado',
                description: 'Corte de cerdo magro con sabor ahumado' 
            },
            {
                id: 48, name: 'chorizo colorado',
                description: 'Chorizo seco con pimentón de fuerte sabor' 
            },
            {
                id: 49, name: 'ternera',
                description: 'Carne de vaca cocida y desmenuzada' 
            },
            

    ],

    extras: [
            {
                id: 50, name: 'aceitunas verdes',
                description: 'Clásicas, saladas y suaves'
            },
            {
                id: 51, name: 'aceitunas negras',
                description: 'Más amargas, sabor profundo'
            },
            {
                id: 52, name: 'huevo',
                description: 'Entero o picado, aporta sabor suave'
            },
            {
                id: 53, name: 'tomate',
                description: 'Rodajas frescas, jugosas y ácidas'
            },
            {
                id: 54, name: 'tomate cherry',
                description: 'Pequeños, dulces y decorativos'
            },
            {
                id: 55, name: 'morrones',
                description: 'Pimientos asados dulces y coloridos' 
            },
            {
                id: 56, name: 'anchoas',
                description: 'Pescado salado, fuerte y sabroso'
            },
            {
                id: 57, name: 'cebollas',
                description: 'Cocidas semi-caramelizadas, sabor dulce'
            },
            {
                id: 58, name: 'albahaca fresca',
                description: 'Hojas verdes, aroma fresco' 
            },
            {
                id: 59, name: 'rúcula',
                description: 'Hoja verde con sabor levemente picante'
            },
            {
                id: 60, name: 'espinaca',
                description: 'Hojas cocidas de sabor suave' 
            },
            {
                id: 61, name: 'palmitos',
                description: 'Tallos suaves, textura delicada'
            },
            {
                id: 62, name: 'champignones',
                description: 'Hongos blancos de sabor terroso'
            },
            {
                id: 63, name: 'alcaparras',
                description: 'Pequeñas, ácidas y muy saladas' 
            },
            {
                id: 65, name: 'piña',
                description: 'ananá dulce para pizzas hawaianas' 
            },
            
    ],
}