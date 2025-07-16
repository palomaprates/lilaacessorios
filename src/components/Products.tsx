import anelsize from '../assets/anelsize.png'
import pulseiraolho from '../assets/pulseirasolho.png'
import stoantonio from '../assets/stoantonio.png'
type ProductData = {
    title: string;
    image: string;
    description: string;
};

export default function Products()
{
    const products : ProductData[] = [
        {
            title: 'Filigranas',
            image: stoantonio,
            description: 'Filigrana Patrono Lisboa', 
        },
        {
            title: 'Jóias em Aço',
            image: anelsize,
            description: 'Anel em aço banhado a ouro', 
        },
        {
            title: 'Jóias artesanais',
            image: pulseiraolho,
            description: 'pulseira.', 
        },

    ]
    return(

        <div className=''>
        <div className='grid grid-cols-1 justify-center md:grid-cols-3 gap-32 p-7'>
        {products.map((product, index) =>
        <div key={index}
        className='overflow-hidden transform transition duration-300 hover:scale-105 w-80 rounded-1xl'>
        <img src={product.image} alt={product.title} className='w-full h-full object-cover' />
        <div className='pt-2'>
        <p className="text-lg leading-relaxed font-medium flex justify-center">{product.title}</p>    
        </div>    
        </div>
        )}
        </div>    
        </div>
        );
}

