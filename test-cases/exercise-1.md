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

| CT-01                | Login com Username e Password válidos                                      |
| -------------------- | -------------------------------------------------------------------------- |
| Pré-condições        | Usuário tem acesso ao sistema                                              |
| Passo a passo        | 1 - Acessar tela de login (URL: http://localhost:3000/signin)              |
|                      | 2 - Inserir Username válido (`Heath93`)                                    |
|                      | 3 - Inserir Password válido (`s3cret`)                                     |
|                      | 4 - Clicar no botão "Sign in"                                              |
| Resultado esperado   | Usuário conecta com sucesso e é redirecionado para a tela principal (Home) |
| Resultado encontrado | O mesmo que o resultado esperado                                           |
| Status               | ✅ Passou                                                                  |
| Suite de teste       | Tela de login                                                              |
| Ambiente de teste    | Web - Google Chrome 156.0.8078.80 (64 bits) - Windows 11                   |

<br>

| CT-02                | Login com Username inválido                                             |
| -------------------- | ----------------------------------------------------------------------- |
| Pré-condições        | Usuário não possui acesso ao sistema (Username inexistente)             |
| Passo a passo        | 1 - Acessar tela de login (URL: http://localhost:3000/signin)           |
|                      | 2 - Inserir Username inválido (`test2026`)                              |
|                      | 3 - Inserir Password válido (`s3cret`)                                  |
|                      | 4 - Clicar no botão "Sign in"                                           |
| Resultado esperado   | Deve ser exibida uma mensagem de erro informando que o usuário ou senha |
|                      | está incorreto                                                          |
| Resultado encontrado | O mesmo que o resultado esperado                                        |
| Status               | ✅ Passou                                                               |
| Suite de teste       | Tela de login                                                           |
| Ambiente de teste    | Web - Google Chrome 156.0.8078.80 (64 bits) - Windows 11                |

<br>

| CT-03                | Cadastro de um novo usuário com informações válidas                             |
| -------------------- | ------------------------------------------------------------------------------- |
| Pré-condições        | Usuário não possui cadastro prévio no sistema                                   |
|                      | Página de cadastro está disponível e acessível                                  |
| Passo a passo        | 1 - Acessar tela de login (URL: http://localhost:3000/signin)                   |
|                      | 2 - Clicar no link de cadastro (Don't have an account? Sign Up)                 |
|                      | 3 - Preencher os campos `First Name`, `Last Name`, `Username` com dados válidos |
|                      | 4 - Preencher uma senha válida conforme regra do sistema nos campos             |
|                      | `Password` e `Confirm password`                                                 |
|                      | 5 - Clicar no botão "Sign up"                                                   |
| Resultado esperado   | Usuário deve ser cadastrado com sucesso e redirecionado para a tela de login    |
| Resultado encontrado | O mesmo que o resultado esperado                                                |
| Status               | ✅ Passou                                                                       |
| Suite de teste       | Cadastro de usuário                                                             |
| Ambiente de teste    | Web - Google Chrome 156.0.8078.80 (64 bits) - Windows 11                        |

<br>

| CT-04                | Exibição de mensagens de erro nos campos de preenchimento obrigatório do cadastro      |
| -------------------- | -------------------------------------------------------------------------------------- |
| Pré-condições        | Página de cadastro está disponível e acessível                                         |
| Passo a passo        | 1 - Acessar tela de login (URL: http://localhost:3000/signin)                          |
|                      | 2 - Clicar no link de cadastro (Don't have an account? Sign Up)                        |
|                      | 3 - Clicar dentro do campo `First Name`                                                |
|                      | 4 - Clicar fora do campo                                                               |
|                      | 5 - Observar que a mensagem de erro "First Name is required" é exibida em vermelho     |
|                      | abaixo do campo                                                                        |
|                      | 6 - Clicar dentro do campo `Last Name`                                                 |
|                      | 7 - Clicar fora do campo                                                               |
|                      | 8 - Observar que a mensagem de erro "Last Name is required" é exibida em vermelho      |
|                      | abaixo do campo                                                                        |
|                      | 9 - Clicar dentro do campo `Username`                                                  |
|                      | 10 - Clicar fora do campo                                                              |
|                      | 11 - Observar que a mensagem de erro "Username is required" é exibida em vermelho      |
|                      | abaixo do campo                                                                        |
|                      | 12 - Clicar dentro do campo `Password`                                                 |
|                      | 13 - Clicar fora do campo                                                              |
|                      | 14 - Observar que a mensagem de erro "Enter your password" é exibida em vermelho       |
|                      | abaixo do campo                                                                        |
|                      | 15 - Clicar dentro do campo `Confirm Password`                                         |
|                      | 16 - Clicar fora do campo                                                              |
|                      | 17 - Observar que a mensagem de erro "Confirm your password" é exibida em vermelho     |
|                      | abaixo do campo                                                                        |
|                      | 18 - Observar que o botão `SIGN UP` permanece desabilitado                             |
| Resultado esperado   | Devem ser exibidas mensagens de erro ao tentar registrar um novo usuário sem preencher |
|                      | todas as informações obrigatórias, e o botão `SIGN UP` deve permanecer desabilitado    |
| Resultado encontrado | O mesmo que o resultado esperado                                                       |
| Status               | ✅ Passou                                                                              |
| Suite de teste       | Cadastro de usuário                                                                    |
| Ambiente de teste    | Web - Google Chrome 156.0.8078.80 (64 bits) - Windows 11                               |

<br>
