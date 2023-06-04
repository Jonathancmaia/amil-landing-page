import "./style.css";

const Form = () => {
    return (
        <form action="#">
            <input className="form-input" type="text" name="name" placeholder="Nome"/>
            <div>
                <input className="form-input" type="number" name="tel" placeholder="Telefone"/>
                <input className="form-input" type="email" name="email" placeholder="E-mail"/>
            </div>
            <div>
                <input className="form-input" type="text" name="dataNasc" placeholder="Data de Nascimento"/>
                <select className="form-input" type="text" name="city">
                    <option disabled selected>
                        Selecione sua cidade
                    </option>
                    <option value="Arujá">
                        Arujá
                    </option>
                    <option value="Guarulhos">
                        Guarulhos
                    </option>
                    <option value="Mogi das Cruzes">
                        Mogi das Cruzes
                    </option>
                    <option value="São Paulo">
                        São Paulo
                    </option>
                </select>
            </div>
            <div>
                <input type="checkbox" id="haveCnpj" name="haveCnpj" checked />
                <label htmlFor="haveCnpj">Possui CNPJ?</label>
            </div>
            <input className="form-input" type="number" name="cpf" placeholder="CPF"/>
            <div>
                <input type="checkbox" id="auth" name="auth" checked />
                <label htmlFor="auth">Autorizo a AMIL a coletar, registrar e armazenar os dados pessoais indicados nesse formulário para o propósito de enviar melhores ofertas de produtos que comercializa, assim como a compartilhar meus dados pessoais exclusivamente com as empresas contratadas para este fim e desejo receber mensagens de marketing e ofertas de produtos da Amil e de seus parceiros de negócio.</label>
            </div>
            <div>
                <input type="submit" value="ENVIAR" />
            </div>
        </form>
    );
};

export default Form;