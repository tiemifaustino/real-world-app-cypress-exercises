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

| CT-02                | Login com credenciais inválidas                                            |
|----------------------|----------------------------------------------------------------------------|
| Pré-condições        | Usuário não possui acesso ao sistema (Username inexistente)                |
| Passo a passo        | 1 - Acessar tela de login (URL: http://localhost:3000/signin)              |
|                      | 2 - Inserir Username inválido (`test2026`)                                 |
|                      | 3 - Inserir Password válido (`s3cret`)                                     |
|                      | 4 - Clicar no botão "Sign in"                                              |
| Resultado esperado   | Deve ser exibida uma mensagem de erro informando que o usuário ou senha    |
|                      | está incorreto                                                             |
| Resultado encontrado | O mesmo que o resultado esperado                                           |
| Status               | ✅ Passou                                                                  |
| Suite de teste       | Tela de login                                                              |
| Ambiente de teste    | Web - Google Chrome 144.0.7559.110 (64 bits) - Windows 11                  |

<br>

| CT-03                | Cadastro de um novo usuário com informações válidas                                   |
|----------------------|---------------------------------------------------------------------------------------|
| Pré-condições        | Usuário não possui cadastro prévio no sistema                                         |
|                      | Página de cadastro está disponível e acessível                                        |
| Passo a passo        | 1 - Acessar tela de login (URL: http://localhost:3000/signin)                         |
|                      | 2 - Clicar no link de cadastro (Don't have an account? Sign Up)                       |
|                      | 3 - Preencher os campos `First Name`, `Last Name`, `Username`                         |
|                      | 4 - Preencher uma senha válida conforme regra do sistema nos campos                   |
|                      |     `Password` e `Confirm password`                                                   |
|                      | 5 - Clicar no botão "Sign up"                                                         |
| Resultado esperado   | Usuário deve ser cadastrado com sucesso e redirecionado para a tela de login          |
| Resultado encontrado | O mesmo que o resultado esperado                                                      |
| Status               | ✅ Passou                                                                             |
| Suite de teste       | Cadastro de usuário                                                                   |
| Ambiente de teste    | Web - Google Chrome 144.0.7559.110 (64 bits) - Windows 11                             |

<br>

