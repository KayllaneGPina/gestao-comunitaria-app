# Sistema de Gestão Comunitária (Expo / React Native)

Aplicativo simples para **associações, ONGs e grupos comunitários** gerenciarem atividades e voluntários. O projeto foi criado para ajudar todas as pessoas que querem fazer o bem.

## O que o app faz (visão rápida)

- Lista de atividades com filtros por categoria (multisseleção).
- Tela de criação de atividades (salva localmente na sessão do app).
- Tela de detalhes da atividade com instruções para participação.
- Lista simples de membros/voluntários.
- Animações de entrada e interações simples.

## Estrutura do projeto

```
sistema-gestao-comunitaria/
├─ App.js
├─ app.json
├─ package.json
├─ babel.config.js
├─ context/
│  └─ ActivitiesContext.js
├─ components/
│  ├─ AnimatedCard.js
│  ├─ MultiSelectChips.js
│  └─ ActivityForm.js
├─ screens/
│  ├─ HomeScreen.js
│  ├─ ActivitiesScreen.js
│  ├─ ActivityDetails.js
│  ├─ NewActivityScreen.js
│  └─ MembersScreen.js
└─ README.md
```

## Pré-requisitos (para executar na máquina)

- Node.js LTS (recomendado >= 18)
- NPM (vem com Node.js) ou Yarn
- Expo CLI: não é obrigatório instalar globalmente — use `npx expo start`

Opcional:
- Emulador Android (Android Studio) ou iOS (Xcode) configurado localmente.
- App **Expo Go** no celular para testar via QR Code.

## Passo a passo para executar o projeto

1. **Baixar o projeto** 
   ```bash
   git clone https://github.com/KayllaneGPina/gestao-comunitaria-app.git
   ```

2. **Abrir o terminal** na pasta do projeto e instalar dependências:
   ```bash
   npm install
   ```
   Caso haja advertência sobre pacotes nativos, rode também:
   ```bash
   npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
   ```

3. **Iniciar o Metro / Expo**:
   ```bash
   npm start
   ```
   Isso abrirá o painel do Expo no navegador com as opções de execução (Android, iOS, Web, QR Code).

4. **Rodar no celular (Expo Go)**:
   - Abra o app Expo Go no celular e escaneie o QR code mostrado no painel do Expo.

5. **Rodar em emulador Android** (se configurado):
   - No painel do Expo, pressione `a` ou clique em `Run on Android device/emulator`.

6. **Limpar cache (se necessário)**:
   ```bash
   npx expo start -c
   ```

## Como usar (fluxo do app)

- **Início:** botões rápidos para ver atividades ou criar nova atividade.
- **Atividades:** use os chips de filtro (multisseleção) para filtrar por categorias.
- **Criar Atividade:** preencha título, local, descrição e selecione categorias — a atividade será adicionada à lista localmente.
- **Detalhes:** abrir atividade para ver informações e botão "Quero ser voluntário".

## Como isso atende os tópicos do trabalho

- **2.1 Interface interativa:** telas com botões de chamada à ação, formulários e interações com `Pressable`.
- **2.2 Componentes de lista e multivalorados:** `FlatList` + `MultiSelectChips` para filtrar por múltiplas categorias.
- **2.3 Principais modelos de navegação:** usa **Bottom Tabs** (Abas) para navegação principal e **Stack** para telas de detalhe/criação.
- **2.4 Recursos de estilização e animação:** `AnimatedCard` usa `Animated` para transições sutis; estilos via `StyleSheet`.

## Observações

- Este projeto é um protótipo didático — dados são mantidos apenas em memória (não há backend nem persistência após fechar o app).

## Resultado
[![Assista ao vídeo de apresentação](assets/video-thumb.png)](video/WhatsApp%20Video%202025-08-27%20at%2022.22.18.mp4)

---
Licença: uso acadêmico.
