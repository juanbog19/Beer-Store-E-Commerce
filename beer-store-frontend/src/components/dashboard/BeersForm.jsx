import axiosURL from '../../tools/axiosInstance'
import { useEffect, useState } from "react";
import Section from '../UI/Section';
import { Link } from 'react-router-dom';
import Icons from '../UI/Icons';
import { faEdit, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';

export default function Beer() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axiosURL.get('/api/beers?populate=*');
                const responseData = resp.data.data || [];
                setBeers(responseData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (beerId) => {
        try {
            await axiosURL.delete(`/api/beers/${beerId}`);
            alert('¡Eliminado con éxito!');
            setBeers(prevBeers => prevBeers.filter(beer => beer.id !== beerId));
        } catch (error) {
            console.error('Error al eliminar la cerveza:', error);
        }
    }    

    return (
        <div>
          <Sidebar />
            <div className="mb-3 text-center">
                <h3><b>Lista de Cervezas</b></h3>
                <div className='flex flex-start ml-20 px-20'>
                    <Link className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to={`/admin/beers/create`}>
                    <Icons icon={faPlus} /> Agregar producto  
                    </Link>
                </div>
                <Section>
                    <ul>
                        {beers.map((beer) => (
                            <li className="flex justify-between my-2 border-b border-secondary" key={beer.id}>
                                <div className="flex">
                                    {beer.img !== null ? <img src={beer.img} alt={`logo of the beer ${name}`} className="rounded-full shadow-lg w-14 h-14" /> : ''}
                                    <div className="ml-2">
                                        <h3 className="text-xl font-bold">{beer.name}</h3>
                                        <div className="font-light">{beer.description}</div>
                                        <div className="font-light">{beer.type}</div>
                                        <p className="text-lg font-semibold text-primary">$ {beer.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <Link className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to={`/admin/beers/edit/${beer.id}`}>
                                        <Icons icon={faEdit} /> Editar
                                    </Link>
                                    <button className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" onClick={() => handleDelete(beer.id)}><Icons icon={faTrashAlt} /> Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>
        </div>
    )
}
