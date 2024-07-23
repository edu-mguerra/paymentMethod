import { useEffect, useState } from "react";
import './infos.css';
import minhaimg1 from "../imegs/Group6.png";
import { HiChevronUp } from "react-icons/hi";
import Image from "next/image";



export const Info = ({optin}) => {

    const [expansion, setExpansion] = useState(false)
    const [identifier, setIdentifier] = useState('');


    const generateIdentifier = () => {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let identifier = ''; // Alterei de identifie para identifier

        for (let i = 0; i < 32; i++) {
            identifier += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        return identifier;
    };

    const updateIdentifier = () => {
        const newIdentifier = generateIdentifier();
        setIdentifier(newIdentifier);
    } // colocar em um componente separado

    useEffect(() => {
        updateIdentifier()
    }, [])
    const howWorks = () => {
        setExpansion(!expansion)
    }
    return (
        <>
            <div className='cet'>
                <div><p>CET: 0.5% :</p> </div>
                <div><h3>Total:{(optin.total * (0.5 / 100) + optin.total).toFixed(3)},00</h3></div>
            </div>
            <div className='how' onClick={howWorks}>
                <div className='how-it-works'>
                    <div>Como Funciona</div>
                    <div><HiChevronUp style={{ fontSize: '20px' }} /></div>
                </div>
                {expansion && (
                    <div>
                        <p className='text-cet'>
                            O Custo Efetivo Total (CET) é uma medida que representa o custo total de um empréstimo ou financiamento para o consumidor,
                            incluindo não apenas a taxa de juros nominal, mas também todos os encargos e taxas associados, como taxas administrativas,
                            seguros e outras despesas.
                        </p>
                    </div>
                )}
            </div>
            <div className='identifier'>
                <p>Identificador:<br />
                    <span id='valor'>{identifier}</span>
                </p>
            </div>
            <div className='img-pay'>
                <Image src={minhaimg1} />
            </div>
        </>
    )
}