import './pay.css';
import { Parcelas } from '@/script/script';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import Image from 'next/image';
import img from '../imegs/Logo.png';
import imgQr from '../imegs/qr.png';
import { useEffect, useState } from 'react';
import { PagPix } from '../pagpix/pagPix';
import { Prazo } from '../prazo/prazo';
import { Info } from '../infos/infos';
import { AddCard } from '../add-card/addCard';


export const Pay = ({ selectedItemId, setShowPag }) => {
    const optin = Parcelas.find(option => option.id === selectedItemId);
    const [copyt, setCopyt] = useState(null)
    const [loand, setLoand] = useState(false)
    const [cpag, setCpag] = useState(false)


    const copy = () => {
        const text = 'https://www.linkedin.com/in/eduardo-guerra-mh/';
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopyt('Copiado com sucesso!');
                setTimeout(() => setCopyt(null), 2000); // Limpa o texto após 3 segundos
            })
            .catch(err => console.error('Erro ao copiar: ', err));
    };

    const cardPag = async () => {
        setCpag(true);


    };


    useEffect(() => {
        const interval = setInterval(() => {
            setLoand(true);
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className='pix'>
            {cpag ? (
                <AddCard setCpag={setCpag} selectedItemId={selectedItemId} setShowPag={setShowPag} />
            ) : (
                <div>
                    <div className='doubt'>
                        <IoMdArrowRoundBack className='io'
                            style={{ fontSize: '25px', left: '-170px', position: 'relative', color: '#03d69d' }}
                            onClick={() => setShowPag(false)}
                        />
                    </div>

                    <Image src={img} className='img-woovi' />

                    {optin.id === 1 ? <h3 className='tile-pag'> Pague o valor total {(optin.total).toFixed(3)},00 pelo Pix</h3> : <h3 className='tile-pag'>João, pague a entrada de {(optin.total / optin.TotalParcela).toFixed(3)},00 pelo Pix</h3>}

                    {selectedItemId ? (
                        <div>
                            <div className='img-qr'>
                                <Image src={imgQr} />
                            </div>

                            <div className='copy-qr' onClick={copy}>
                                <p>Clique para copiar QR CODE</p>
                                <FaCopy
                                    style={{ color: ' #ffff', paddingLeft: '10px', fontSize: '25px' }}
                                />
                            </div>
                            {copyt && <span className="copied-text">{copyt}</span>}

                            <div className='prazo'>
                                <Prazo />
                            </div>

                            <div className='parcelass'>
                                {optin.id > 1 && loand && (
                                    <div className='card-button' onClick={cardPag}>
                                        <p>Adicionar cartão para pagamento</p>
                                    </div>
                                )}
                                <PagPix optin={optin} />
                            </div>

                            <div>
                                <Info optin={optin} />
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            )}
        </div>
    );
};