

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as S from "./Login.styles"
import Logo from "../../assets/logo.png"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "operational"
    })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login attempt:", formData)
        navigate("/dashboard")
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleRoleSelect = (role) => {
        setFormData({
            ...formData,
            role
        })
    }

    const roles = [
        { id: "operacional", name: "Operacional" },
        { id: "administrativo", name: "Administrativo" },
        { id: "contabilidade", name: "Contabilidade" },
        { id: "trabalhador", name: "Trabalhador" }
    ]

    return (
        <S.PageContainer>
            <S.LoginCard>
                <S.Header>
                    <S.Title>Acesse sua conta</S.Title>
                    <S.Subtitle>Acompanhe seus serviços em um só lugar.</S.Subtitle>
                </S.Header>

                <S.Section>
                    <S.SectionTitle>Operacional</S.SectionTitle>
                    <S.RoleGrid>
                        {roles.map((role) => (
                            <S.RoleButton
                                key={role.id}
                                selected={formData.role === role.id}
                                onClick={() => handleRoleSelect(role.id)}
                                type="button"
                            >
                                {role.name}
                            </S.RoleButton>
                        ))}
                    </S.RoleGrid>
                </S.Section>

                <form onSubmit={handleSubmit}>
                    <S.Section>
                        <S.SectionTitle>E-mail profissional</S.SectionTitle>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid #d1d1d1',
                                borderRadius: '4px',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                    </S.Section>

                    <S.Section>
                        <S.SectionTitle>Senha</S.SectionTitle>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid #d1d1d1',
                                borderRadius: '4px',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                        <S.InputHint>Use pelo menos 4 caracteres</S.InputHint>
                    </S.Section>

                    <S.ForgotPassword href="#">
                        Esqueceu sua senha?
                    </S.ForgotPassword>

                    <S.AccessButton type="submit">
                        Acesso
                    </S.AccessButton>
                </form>

            </S.LoginCard>
                <S.Footer>
                <S.Logo src={Logo} alt="Logo SGS" />
                <S.BrandName>SGS - Sistema de Gestão de Serviços</S.BrandName>
                    <S.BrandDescription>
                    Gerencie seus processos e operações de forma integrada e eficiente.
                    </S.BrandDescription>
                    <S.Developer>
                    Desenvolvido por <strong>ATSD IT Solutions</strong>
                    </S.Developer>
                </S.Footer>
        </S.PageContainer>
    )
}

export default Login