import { useState } from 'react';
import './addCard.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from 'next/image';
import img from '../imegs/Logo.png';
import { Prazo } from '../prazo/prazo';
import { PagPix } from '../pagpix/pagPix';
import { Parcelas } from '@/script/script';
import { Info } from '../infos/infos';

export const AddCard = ({ setCpag, selectedItemId }) => {
    const optin = Parcelas.find(option => option.id === selectedItemId);

    const click = () => {
        setCpag(false);
    };

    const validateForm = (e) => {
        e.preventDefault();
        const form = document.getElementById('pag-form');
        const inputs = form.querySelectorAll('input');

        let allValid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                allValid = false;
            }
        });

        if (allValid) {
            alert('Todos os campos estão corretos. Processando pagamento...');
            const pagamento = document.querySelector('#pg')
            const opc = document.querySelector(".body")
            pagamento.classList.add("none")
            opc.classList.remove("opc")
        } else {
            alert('Por favor, verifique os campos e tente novamente.');
        }
    };

    return (
        <div className='card1'>

            <div className='doubt' onClick={click}>
                <IoMdArrowRoundBack className='io'
                    style={{ fontSize: '25px', left: '-170px', position: 'relative', color: '#03d69d' }}
                />
            </div>
            <Image src={img} style={{ marginTop: '10px' }} />

            <p className='title'>João, pague o restante em 1x no cartão</p>

            <form id="pag-form">
                <fieldset className='inputs-card'>
                    <legend className='n-card1'>Nome Completo</legend>
                    <input type='text' required />
                </fieldset>
                <fieldset className='inputs-card cpf'>
                    <legend className='n-cpf'>CPF</legend>
                    <input type='text' required />
                </fieldset>
                <fieldset className='inputs-card n-card'>
                    <legend className='n-card2' >Número do Cartão</legend>
                    <input type='text' required />
                </fieldset>
                <div className='input-fex'>
                    <fieldset className='inputs-card'>
                        <legend className='n-card3'>Vencimento</legend>
                        <input type='text' required />
                    </fieldset>
                    <fieldset className='inputs-card n-cvv'>
                        <legend className='n-card4' >CVV</legend>
                        <input type='text' required />
                    </fieldset>
                </div>
            </form>
            <div className='pag' onClick={validateForm}>
                <p>Pagar</p>
            </div>
            <div className='term'>
                <Prazo />
            </div>
            <div>
                <PagPix optin={optin} />
            </div>
            <div className='info'>
                <Info optin={optin} />
            </div>
        </div>
    )
}
