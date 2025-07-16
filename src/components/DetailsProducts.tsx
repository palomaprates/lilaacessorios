
type ProductData =
{
    title: string;
    image: string;
    description: string;
};
type DetailsProductsProps = {
    isOpen: boolean;
    closeModal: () => void;
    product: ProductData | null;
};

export default function DetailsProducts({isOpen, closeModal, product}: DetailsProductsProps) {
    if (!isOpen || !product) return null;
    return (
        <section>
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div onClick={closeModal} className="fixed inset-0 bg-black opacity-80 flex items-center justify-center z-30"/>
        <div className="bg-white p-6 rounded shadow-lg w-96 relative z-40">
            <h2 className="text-lg leading-relaxed">{product.title}</h2>
            <img src={product.image} alt={product.title} className="w-full h-auto object-cover mb-4 rounded" />
            <p className="text-gray-700">{product.description}</p>
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer">
                    ✖
            </button>
        </div>
    </div>
        </section>
    );
}