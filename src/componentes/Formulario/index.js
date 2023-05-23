import './Formulario.css'
import CampoTexto from '../CampoTexto';

// 
const Formulario = () => {

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Endereço" placeholder="Digite seu endereço" />
                <CampoTexto label="Outros" placeholder="Digite algo que achar nescessario" />
            </form>
        </section>
    )
}

export default Formulario