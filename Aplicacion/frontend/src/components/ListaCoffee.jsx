import TarjetaCoffee from "./TarjetaCoffee";

import cm from "../assets/coffeimg/cm.png";
import by from "../assets/coffeimg/by.png";
import cbf from "../assets/coffeimg/cbf.png";
import mf from "../assets/coffeimg/mf.png";
import ml from "../assets/coffeimg/ml.png";
import sar from "../assets/coffeimg/sar.png";


export default function ListaCoffee() {

    const coffees = [
        {
            id: 1,
            image: cm,
            name: "Caramel Macchiato",
            size: "Grande (16 oz)",
            milk: "Entera",
            caffeine: "150-170 mg",  
            price: "$76",  
            description: "Leche al vapor manchada con espresso y acabado con caramelo"

        },
        {
            id: 2,
            image: by,
            name: "Berry Yogurt Frappuccino",
            size: "Grande (16 oz)",
            milk: "Yogurth",
            caffeine: "0 mg",  
            price: "$86",  
            description: "Yogur natural mezclado con salsa de moras y hielo"

        },
        {
            id: 3,
            image: cbf,
            name: "Caramel Ribbon Crunch Frapuchino",
            size: "Grande (16 oz)",
            milk: "Entera",
            caffeine: "90-120 mg",  
            price: "$82",  
            description: "Jarabe de caramelo mezclado con café, leche e hielo, coronado con crema y salsa de caramelo"

        },
        {
            id: 4,
            image: mf,
            name: "Mocha Frappuccino",
            size: "Grande (16 oz)",
            milk: "Entera",
            caffeine: "90-120 mg",  
            price: "$94",  
            description: "Salsa de chocolate con café, leche e hielo mezclados"

        },
        {
            id: 5,
            image: ml,
            name: "Matcha Latte",
            size: "Grande (16 oz)",
            milk: "Entera",
            caffeine: "70-80 mg",  
            price: "$76",  
            description: "Té matcha en polvo con leche al vapor, sabor vegetal y suave"

        },
        {
            id: 6,
            image: sar,
            name: "Strawberry Acai Refresher",
            size: "Grande (16 oz)",
            milk: "Agua",
            caffeine: "30 mg",  
            price: "$82",  
            description: "Refrescante combinación de fresa y acai con hielo"

        },

    ];
    return(
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3  place-items-center py-6 px-4">
            {coffees.map((c) =>(
                <TarjetaCoffee
                key = {c.id}
                image={c.image}
                name={c.name}
                size={c.size}
                milk={c.milk}
                caffeine={c.caffeine}
                price={c.price}
                description={c.description}
                />
            ))}
        </div>
    );

}