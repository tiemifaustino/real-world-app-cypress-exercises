**1. Caso de Teste: Login com sucesso.**

**Descrição**: Verifique se é possível fazer login com um usuário válido, inserindo as informações corretas. 

---

**2. Caso de Teste: Tentar fazer login com credenciais inválidas.**

**Descrição:** Garanta que o sistema exiba uma mensagem de erro ao tentar fazer login com credenciais inválidas (email ou senha incorretos). 

---

**3. Caso de Teste: Registro de novo usuário com sucesso.**

**Descrição:** Verifique se é possível registrar um novo usuário com informações válidas.

---

**4. Caso de Teste: Tentar registrar um novo usuário com informações incompletas.**

**Descrição:** Garanta que o sistema exiba mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias.

<br>

# Casos de Teste

| CT-01                | Login com e-mail e senha válidos                                           |
|----------------------|----------------------------------------------------------------------------|
| Pré-condições        | Usuário tem acesso ao sistema                                              |
| Passo a passo        | 1 - Acessar tela de login (URL: http://localhost:3000/signin)              |
|                      | 2 - Inserir Username válido (`Heath93`)                                    |
|                      | 3 - Inserir Password válido (`s3cret`)                                     |
|                      | 4 - Clicar no botão "Sign in"                                              |
| Resultado esperado   | Usuário conecta com sucesso e é redirecionado para a tela principal (Home) |
| Resultado encontrado | O mesmo que o resultado esperado                                           |
| Status               | ✅ Passou                                                                  |
| Suite de teste       | Tela de login                                                              |
| Ambiente de teste    | Web - Google Chrome 144.0.7559.110 (64 bits) - Windows 11                  |

<br>