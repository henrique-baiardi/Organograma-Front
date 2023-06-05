import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

// 
const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Gestão e Inovação'
    ]

    const [nome, setName] = useState('')
    const [cargo, setPosition] = useState('')
    const [endereço, setAdress] = useState('')
    const [outros, setOthers] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Formulario Salvo com Sucesso!')
        console.log(`Nome = ${nome}, Cargo = ${cargo}, endereço = ${endereço}, time = ${time}`)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome..." 
                    valor={nome}
                    aoAlterar={valor => setName(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo..." 
                    valor={cargo}
                    aoAlterar={valor => setPosition(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Endereço" 
                    placeholder="Digite seu endereço..."  
                    valor={endereço}
                    aoAlterar={valor => setAdress(valor)}
                />
                <CampoTexto 
                    obrigatorio={false} 
                    label="Outros" 
                    placeholder="Digite algo que achar nescessario..." 
                    valor={outros}
                    aoAlterar={valor => setOthers(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao > Criar Card </Botao>
            </form>
        </section>
    )
}

export default Formulario