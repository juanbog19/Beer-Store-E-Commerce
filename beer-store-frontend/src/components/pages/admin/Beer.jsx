// import { useDispatch, useSelector } from "react-redux";
// import { getBeers } from "../../../store/beersSlice";
import axiosURL from '../../../tools/axiosInstance'
import { useEffect, useState } from "react";
import Section from '../../UI/Section';
import { Link } from 'react-router-dom';
import Icons from '../../UI/Icons';
import { faEdit, faPlug, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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


    return (
        <div>
            <div className="mb-3 text-center">
                <h2>Lista de Cervezas</h2>
                <div className='flex flex-start ml-20 px-20'>
                    <Link className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to={`/beer`}>
                    <Icons icon={faPlus} /> Agregar producto  
                    </Link>
                </div>
                <Section>
                    <ul>
                        {beers.map((beer) => (
                            <li className="flex justify-between my-2 border-b border-secondary" key={beer.id}>
                                <div className="flex">
                                    <img src={beer.img.url} alt={`logo of the beer ${name}`} className="rounded-full shadow-lg w-14 h-14" />
                                    <div className="ml-2">
                                        <h3 className="text-xl font-bold">{beer.name}</h3>
                                        <div className="font-light">{beer.description}</div>
                                        <p className="text-lg font-semibold text-primary">$ {beer.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <Link className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to={`/beer`}>
                                        <Icons icon={faEdit} />
                                    </Link>
                                    <Link className="px-1 py-1 mr-2 text-gray-100 bg-primary hover:bg-secondary" to={`/beer`}>
                                        <Icons icon={faTrashAlt} />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>
        </div>
    )
}
