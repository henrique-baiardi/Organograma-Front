import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

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

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome..." />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo..." />
                <CampoTexto label="Endereço" placeholder="Digite seu endereço..." />
                <CampoTexto label="Outros" placeholder="Digite algo que achar nescessario..." />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario