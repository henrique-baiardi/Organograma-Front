import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

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

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Formulario Salvo com Sucesso!')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome..." />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo..." />
                <CampoTexto obrigatorio={true} label="Endereço" placeholder="Digite seu endereço..." />
                <CampoTexto obrigatorio={false} label="Outros" placeholder="Digite algo que achar nescessario..." />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao > Criar Card </Botao>
            </form>
        </section>
    )
}

export default Formulario