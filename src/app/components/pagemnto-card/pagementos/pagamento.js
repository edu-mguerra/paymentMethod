import './pagamento.css'
import react, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import minhaimg1 from "../imegs/Group6.png"
import minhaimg2 from "../imegs/Logo.png"
import { Pay } from '../for-payment/pay';
import { Parcelas } from '@/script/script';







export const Pagementos = () => {


  const click = () => {
    const none = document.querySelector('.area-pag'); // Corrige o seletor para usar a classe
    if (none) {
      const pagamento = document.querySelector('#pg');
      const opc = document.querySelector(".body");
      opc.classList.remove("opc");
      pagamento.classList.add('none');
    }
  };


  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showPag, setShowPag] = useState(false)
  const handleClick = (itemId) => {
    setSelectedItemId(itemId);
    setShowPag(true)
  }

  return (
    <div>
      {showPag ? (
        <Pay selectedItemId={selectedItemId} setShowPag={setShowPag} />
      ) : (
        <div className='area-pag'>
          <div
            onClick={click}
            style={{ textAlign: 'right', paddingRight: '10px', paddingTop: '10px', cursor: 'pointer' }}>
            <IoMdClose style={{ fontSize: '25px' }} />
          </div>

          <section className='hrd'>
            <Image
              className='hrd-img'
              src={minhaimg2}
              alt="Logo"
            />

            <p className='title'>João, como deseja pagar?</p>

            <fieldset>
              <legend>Pix</legend>
              <div className='opção'>
                <h3><span>1x</span> R$ 30.500,00</h3>
                <input
                  type='radio'
                  className='input-color'
                  name="paymentOption"
                  onClick={() => handleClick(1)}
                />
              </div>
              <p className='cash'>Ganhe <span>3%</span> de Cashback</p>
              <div className='back'>
                <p>🤑 <span>R$ 300,00</span> de volta no seu Pix na hora</p>
              </div>
            </fieldset>

            <div>

              {Parcelas.filter(option => option.id > 1).map((option, index) => (

                <fieldset className={index > 0 ? 'fild-map' : ''} key={option.id}>
                  {index === 0 && <legend className='prcl'>Pix parcelado</legend>}
                  <div className='prc-map'>
                    <div>
                      <h3><span>{option.TotalParcela}x</span>{(option.total / option.TotalParcela).toFixed(3)},00</h3>
                      <span>Total {(option.total).toFixed(3)}</span>
                    </div>
                    <input
                      type='radio'
                      className='input-color'
                      name="paymentOption"
                      onClick={() => handleClick(option.id)}
                    />
                  </div>
                </fieldset>
              ))}
            </div>
          </section>

          <Image
            className='img-pag'
            src={minhaimg1} 
            alt="Logo"
          />
          
        </div>
      )}
    </div>
  );
}

