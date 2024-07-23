import { useEffect, useState } from 'react';
import './pagPix.css';
import { FaRegCircle } from "react-icons/fa";
import { RiLoader4Fill } from "react-icons/ri";
import { ImCheckboxChecked } from "react-icons/im";


export const PagPix = ({ optin }) => {

    const [loand, setLoand] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setLoand(true);
        }, 3000);

        return () => clearInterval(interval);
    }, [])
    return (
        <div>
            
            {optin.TotalParcela === 2 ? (
                <div className='prcll'>
                    <div>
                        {!loand ? <RiLoader4Fill className='loand' /> : <p><ImCheckboxChecked style={{ color: '#03d69d', borderRadius: '10px' }} /> 1ª Parcela no Pix</p>}
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 2ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                </div>
            ) : optin.TotalParcela === 3 ? (
                <div className='prcll'>
                    <div>
                        {!loand ? <RiLoader4Fill className='loand' /> : <p><ImCheckboxChecked style={{ color: '#03d69d', borderRadius: '10px' }} /> 1ª Parcela no Pix</p>}
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 2ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 3ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                </div>
            ) : optin.TotalParcela === 4 ? (
                <div className='prcll'>
                    <div>
                        {!loand ? <RiLoader4Fill className='loand' /> : <p><ImCheckboxChecked style={{ color: '#03d69d', borderRadius: '10px' }} /> 1ª Parcela no Pix</p>}
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 2ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 3ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 4ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                </div>
            ) : optin.TotalParcela === 5 ? (
                <div className='prcll'>
                    <div>
                        {!loand ? <RiLoader4Fill className='loand' /> : <p><ImCheckboxChecked style={{ color: '#03d69d', borderRadius: '10px' }} /> 1ª Parcela no Pix</p>}
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 2ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 3ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 4ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 5ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                </div>
            ) : optin.TotalParcela === 6 ? (
                <div className='prcll'>
                    <div>
                        {!loand ? <RiLoader4Fill className='loand' /> : <p><ImCheckboxChecked style={{ color: '#03d69d', borderRadius: '10px' }} /> 1ª Parcela no Pix</p>}
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 2ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 3ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 4ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 5ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 6ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                </div>
            ) : optin.TotalParcela === 7 ? (
                <div className='prcll'>
                    <div>
                        {!loand ? <RiLoader4Fill className='loand' /> : <p><ImCheckboxChecked style={{ color: '#03d69d', borderRadius: '10px' }} /> 1ª Parcela no Pix</p>}
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 2ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 3ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 4ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 5ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 6ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                    <div>
                        <p><FaRegCircle /> 7ª No Cartão</p>
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                </div>
            ) : optin.TotalParcela === 1 ? (
                <div className='prcll'>
                    <div>
                        {!loand ? <RiLoader4Fill className='loand' /> : <p><ImCheckboxChecked style={{ color: '#03d69d', borderRadius: '10px' }} /> 1ª Parcela no Pix</p>}
                        <p>{(optin.total / optin.TotalParcela).toFixed(3)},00</p>
                    </div>
                </div>
            ) : (
                <p></p>
            )
            }

        </div>
    );
};
