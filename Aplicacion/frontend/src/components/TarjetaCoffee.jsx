export default function TarjetaCoffee({ image, name, size, milk, caffeine, price, description }) {
    return (
        <div className="relative max-w-sm mx-auto my-6 mt-40 ">
            

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[100px]  z-10  ">
                <img
                    src={image}
                    alt={`Imagen de ${name}`}
                    className="object-contain w-48 h-40 rounded-full inset-shadow-sm inset-shadow-indigo-500  bg-emerald-950 border-gray-100 cursor-pointer transition-all duration-300 hover:scale-110 " 
                />
            </div>


            <div className="group relative overflow-hidden rounded-2xl border border-emerald-950 bg-gray-100/85 shadow-md transition-all duration-300 hover:shadow-xl pt-16 p-6 cursor-pointer text-center h-full hover:bg-white">
                <h4 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{name}</h4>
                <div className="text-sm text-gray-500 mb-4 space-y-1">
                    <p>{size}</p>
                    <p>{milk}</p>
                    <p>{caffeine}</p>
                </div>

                <p className="text-lg font-bold text-gray-900 mb-3">{price}</p>
                <p className="text-sm text-gray-700 leading-relaxed">"{description}"</p>
            </div>
        </div>
    );
}