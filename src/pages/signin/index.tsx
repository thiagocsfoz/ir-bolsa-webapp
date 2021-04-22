import React, {useContext, useState} from 'react';
import { useAuth } from '../../contexts/auth';
import { FiMail, FiLock } from "react-icons/fi";

import { Container, Content } from "./styles";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Signin: React.FC = () => {
    const context = useAuth();
    const [formData, setFormData] = useState({email: "", password: ""})

    function handleLogin() {
        context.Login(formData);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    console.log(context);
    return (
        <Container>
            <Content>
                <form>
                    <h1>Faça seu login</h1>

                    <Input
                        icon={FiMail}
                        name="email"
                        placeholder="E-mail"
                        autoComplete="false"
                        onChange={handleChange}
                    />

                    <Input
                        icon={FiLock}
                        name="password"
                        type="password"
                        placeholder="Senha"
                        onChange={handleChange}
                    />

                    <Button onClick={handleLogin}>Acessar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </form>
            </Content>
        </Container>
    );
};

export default Signin;