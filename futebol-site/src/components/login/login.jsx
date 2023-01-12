import React, { useState } from 'react';
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent } from 'mdb-react-ui-kit';
import "./style.css"


export default function App() {
    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);


    return (
        <>
            <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <div className='contentModal'>
                    <div className='tituloModal'>
                        Login
                    </div>
                    <div className='bodyModal'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                            </svg>
                            <input type="text" placeholder='Usuário' />
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" /></svg>
                            <input type="password" placeholder='Password' />
                        </div>
                        <button>Entrar</button>
                        <p>Esqueceu a senha?</p>
                    </div>
                    <div className='footerModal'>
                        Não possui cadastro?
                        <b>
                            Cadastre-se!
                        </b>
                    </div>
                </div>
            </MDBModal>
        </>
    );
}