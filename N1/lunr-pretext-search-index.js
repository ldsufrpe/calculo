var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-1",
  "level": "1",
  "url": "frontmatter-1.html",
  "type": "Pré-textual",
  "number": "",
  "title": "Pré-textual",
  "body": "   Leon Silva  Departamento de Matemática  Universidade Federal Rural de Pernambuco    Deibsom Silva  Departamento de Matemática  Universidade Federal Rural de Pernambuco      Nesta semana vamos apresentar o conteúdo referente ao cálculo integral e as equações diferenciais.   "
},
{
  "id": "sec-integral-indefinida",
  "level": "1",
  "url": "sec-integral-indefinida.html",
  "type": "Seção",
  "number": "1",
  "title": "Integral Indefinida",
  "body": " Integral Indefinida   Estrutura    Calcular a primitiva de uma função.    Definir a integral indefinida.    Introduzir o conceito de equações diferenciais.      Primitiva    Seja uma função definida em um intervalo aberto veja em wikipedia  . Uma primitiva é uma função definida em , de modo que para todo em .     É comum reescrever como .    Determinando Primitivas   A primitiva de em é .    De fato, uma vez que para todo , para todo em .     Primitivas mais gerais    Considere . A função é, também, uma primitiva de em .    Segue do fato de , seja qual for o número .     Encontre pelo menos 3 primitivas para a função constante .    , , .   Se é constante então a derivada de é , logo é uma primitiva de . O mesmo acontece para e . É fácil perceber que , na qual é uma constante, é uma primitiva de para qualquer que seja o valor de .    Quantas primitivas pode ter uma função?     Se é uma primitiva de em um intervalo aberto , então , seja qual for o valor da constante , é também uma primitiva de em .     O garante que uma vez conhecida uma primitiva de um função, todas as outras são iguais, a menos de uma constante, como o leitor pôde verificar no . É comum se referir a expressão como a família de primitivas de .  O processo para encontrar a primitiva de uma função define uma operação denominada integral indefinida de em relação a . Como todas as primitivas de são da forma , usaremos a notação , na qual é chamada de integrando e de constante de integração .   Como se lê   A integral de em relação a é igual a mais uma constante.    O símbolo e o símbolo   O símbolo que parece um \"S esticado verticalmente\" é denominado sinal de integral . Sua origem vem da palavra sum (soma, em português) que diz respeito a definição de integral definida, tópico que será apresentado no momento adequado.  O símbolo de diferencial  serve para identificar a variável independente. Neste contexto, quando estamos diante da diferencial saiba mais em wikipedia  devemos calcular a integral em relação a , assim como indica integração em relação a variável .     Determinação de integrais indefinidas  Determine cada integral a seguir:      Já que é uma primitiva para , segue da igualdade que .        Uma vez que , obtem-se .        Como é uma primitiva de , pois , concluímos que .      Primitiva particular   Para a função , determine a primitiva, , que satisfaça .    A função é a família de primitivas, uma vez que . A condição fornece a possibilidade de determinar o valor de fazendo para obter . Portanto, a primitiva desejada é .     Integral da função potência       Integração da função potência     Determine .   O integrando é uma função potência, então basta usar a fórmula da e obter .    Determine .   Novamente usando a fórmula da resultamos em , que de forma simplificada se torna igual a .       Para a função , encontre a primitiva, , que satisfaça .   Revise o         Para a função , encontre a primitiva, , que satisfaça .   Revise o         Verificando fatos   Usando o que foi aprendido até aqui, faça uma demonstração da  .    Experimente derivar o lado direito da igualdade solicitada.       Integral da função potência para : .    A fórmula da não é válida para . Logo não é possível utilizá-la para obter a integral indefinida de . O passo natural é encontrar uma função cuja derivada seja . Sabe-se que . Então, . De fato, o logaritmo natural não está definido para valores menores que zero. Mas, , para . Então, . De e concluímos que é primitiva de se e que é primitiva de se . Mais diretamente, podemos afirmar que é uma primitiva de . Portanto, .       Integral da função exponencial:     Como , concluímos que a função exponencial é sua própria primitiva. Logo,      e   A integral das funções seno e cosseno:     Seguem do fato de .     Propriedadades da Integral Indefinida  Se uma constante e e são primitivas de e , respectivamente, então                     Aplicando propriedades   Determine cada integral:   .         .           Integração de funções polinomiais   Determine cada integral.   .         .           Primitiva particular   Encontre sabendo que , e .    A família de primitivas de é naturalmente Assim como todas as primitivas de tem a forma Uma vez que deve satisfazer e temos que nos fornece e . Por fim, encontramos .     Determine    Revise o e .        Encontre sabendo que , e .   Revise o e .         Tabela de integrais   Tabela de integração    Fórmula                    Tabela de integração    Fórmula                    Reescrever antes de integrar      .   Somando e subtraindo 1 do numerador do integrando, podemos reescrever a integral de modo permitir aplicar as fórmulas sugeridas na . Os passos seguintes são ilustramos logo abaixo:        .           Identidades trigonométricas   Determine .          Determine .   Verifique que a igualdade é verdadeira.        Determine .   Consulte a .         Sugestão de Vídeos    Conceito de Primitivas:     Resolvendo  e      Integrais de funções constantes:     Resolvendo      Integral de funções básicas:       Tecnologia   Usando o software SageMath   Software matemático pode ser útil para calcular integrais complicadas. Um ótima opção é utilizar sistema de computação algébrica SageMath . Com uma sintaxe simples e baseada em Python Linguagem de programação. O SageMath (abreviaremos como Sage ) é open-source  Uso gratuito e de código aberto. e tem sido bastante utilizado por professores e estudantes de todos os níveis para conferir cálculos algébricos complicados. Uma boa referência em língua portuguesa para este software pode ser encontrado na página . Detalhes sobre os comandos são resumidos em .    Sintaxe dos comandos  Com o SageMath , usando o comando integral(f, x) é possível calcular a integral indefinida de em relação a variável . Por exemplo, o pode ser resolvido com o comando: Mas se a função depender da variável , por exemplo, ? Basta declarar a variável usando o comando var('t') . Para obter a integral com a notação matemática usual, o Sage possui o comando show , observe:   Nas células acima pode-se notar que os comandos \/ , * , ^  + , - , representam a operações de divisão, multiplicação, potenciação, soma e subtração, respectivamente. Existe muitos outros comandos de operações matemáticas importantes, confira em .    Usando a célula do Sage abaixo, confira todas as integrais apresentadas até aqui. Se a resposta produzida não estiver de acordo com a sua, mostre que elas são equivalentes.      Faça você mesmo   O avanço dos softwares matemáticos tornou possível calcular vários tipos de integrais que dariam muito trabalho se feitos à mão. Usando o conteúdo aprendido até aqui encontre .  Use Sage para encontrar a integral do item anterior.          Exercícios    Determine as integrais indefinidas abaixo:  a) =  .  b) =  .  c) =  .                       http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-11.pg      Considere a função . Qual a primitiva de ?        Relembre que para um termos na forma a primitiva é apenas o termo cuja derivada é . Isto é, na qual é uma constante desconhecida. A primitiva da constante é dada por . Então, para encontrar a primitiva desta expressão, aplicamos esta regra termo a termos obtendo:   Na qual é uma constante arbitrária.    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-5.pg      Determine a integral indefinida:   + .        Basta verificar que    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-12.pg      Considere a função .  Seja a primitiva de com .  Então         : Já que , temos  Portanto    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-1.pg      Encontre a primitiva mais geral da função .  Primitiva =   Primeiro reescreva a função como segue: Então a primitiva mais geral é:    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-2.pg      Dada a função com e .  Encontre   e determine              Para resolver esses problemas, usaremos o fato de que a primitiva mais geral de é para alguma constante . Então, começamos encontrando a primitiva da segunda derivada .   Precisamos descobrir qual é essa constante . Para isso, vamos usar as informações fornecidas no problema sobre . A saber, . Logo, temos  Portanto, .  Agora, procedemos como antes, desta vez encontrando a primitiva de e usar informações sobre para encontrar . A primitive, e o valor de , são obtidos como segue:    Portanto, a função de modo que .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-3.pg      Determine a seguinte integral definida              http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-14.pg      Considere a função . Seja a primitiva de com .  Então         Para resolver este problema, você precisa lembrar que a derivada de é . Não é difícil derivar isso usando a identidade e a regra do quociente para derivadas.  Com isso em mente, encontre a primitiva geral de que será . Agora usando o fato de e que , devemos ter .  Portanto, pondo 1.5 nesta expressão, obtemos:     http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-9.pg    Encontre uma função tal que e, além disso, e .    Encontre a função sabendo que          Note que Encontre usando .  Encontre usando .  Logo, .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-7.pg      Encontre a seguinte derivada e estabeleça uma fórmula de integração correspondente.                    Usaremos a Regra do Quociente para computar a derivada.    Se integrarmos isso, teremos o que começamos com mais uma constante arbitrária.    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-13.pg      Determine a integral indefinida e verifique sua resposta usando derivada.                 http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-15.pg      "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "sec-integral-indefinida.html#objectives-1",
  "type": "Objetivos",
  "number": "1",
  "title": "Estrutura",
  "body": " Estrutura    Calcular a primitiva de uma função.    Definir a integral indefinida.    Introduzir o conceito de equações diferenciais.    "
},
{
  "id": "def-primitiva",
  "level": "2",
  "url": "sec-integral-indefinida.html#def-primitiva",
  "type": "Definição",
  "number": "1.1",
  "title": "",
  "body": "  Seja uma função definida em um intervalo aberto veja em wikipedia  . Uma primitiva é uma função definida em , de modo que para todo em .   "
},
{
  "id": "note-1",
  "level": "2",
  "url": "sec-integral-indefinida.html#note-1",
  "type": "Nota",
  "number": "1.2",
  "title": "",
  "body": " É comum reescrever como .  "
},
{
  "id": "ex-primitiva1",
  "level": "2",
  "url": "sec-integral-indefinida.html#ex-primitiva1",
  "type": "Exemplo",
  "number": "1.3",
  "title": "Determinando Primitivas.",
  "body": " Determinando Primitivas   A primitiva de em é .    De fato, uma vez que para todo , para todo em .   "
},
{
  "id": "ex-primitiva2",
  "level": "2",
  "url": "sec-integral-indefinida.html#ex-primitiva2",
  "type": "Exemplo",
  "number": "1.4",
  "title": "Primitivas mais gerais.",
  "body": " Primitivas mais gerais    Considere . A função é, também, uma primitiva de em .    Segue do fato de , seja qual for o número .   "
},
{
  "id": "exc-primitiva1",
  "level": "2",
  "url": "sec-integral-indefinida.html#exc-primitiva1",
  "type": "Exercício de Verificação",
  "number": "1.5",
  "title": "",
  "body": " Encontre pelo menos 3 primitivas para a função constante .    , , .   Se é constante então a derivada de é , logo é uma primitiva de . O mesmo acontece para e . É fácil perceber que , na qual é uma constante, é uma primitiva de para qualquer que seja o valor de .  "
},
{
  "id": "thm-primitiva",
  "level": "2",
  "url": "sec-integral-indefinida.html#thm-primitiva",
  "type": "Teorema",
  "number": "1.6",
  "title": "",
  "body": "  Se é uma primitiva de em um intervalo aberto , então , seja qual for o valor da constante , é também uma primitiva de em .    "
},
{
  "id": "p-15",
  "level": "2",
  "url": "sec-integral-indefinida.html#p-15",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "família "
},
{
  "id": "p-16",
  "level": "2",
  "url": "sec-integral-indefinida.html#p-16",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral indefinida integrando constante de integração "
},
{
  "id": "note-2",
  "level": "2",
  "url": "sec-integral-indefinida.html#note-2",
  "type": "Nota",
  "number": "1.7",
  "title": "O símbolo <span class=\"process-math\">\\((\\displaystyle\\int)\\)<\/span> e o símbolo <span class=\"process-math\">\\((\\dd x)\\)<\/span>.",
  "body": " O símbolo e o símbolo   O símbolo que parece um \"S esticado verticalmente\" é denominado sinal de integral . Sua origem vem da palavra sum (soma, em português) que diz respeito a definição de integral definida, tópico que será apresentado no momento adequado.  O símbolo de diferencial  serve para identificar a variável independente. Neste contexto, quando estamos diante da diferencial saiba mais em wikipedia  devemos calcular a integral em relação a , assim como indica integração em relação a variável .   "
},
{
  "id": "ex-integral-indefinida-1",
  "level": "2",
  "url": "sec-integral-indefinida.html#ex-integral-indefinida-1",
  "type": "Exemplo",
  "number": "1.8",
  "title": "Determinação de integrais indefinidas.",
  "body": " Determinação de integrais indefinidas  Determine cada integral a seguir:      Já que é uma primitiva para , segue da igualdade que .        Uma vez que , obtem-se .        Como é uma primitiva de , pois , concluímos que .    "
},
{
  "id": "exer-primitiva-particular",
  "level": "2",
  "url": "sec-integral-indefinida.html#exer-primitiva-particular",
  "type": "Exemplo",
  "number": "1.9",
  "title": "Primitiva particular.",
  "body": " Primitiva particular   Para a função , determine a primitiva, , que satisfaça .    A função é a família de primitivas, uma vez que . A condição fornece a possibilidade de determinar o valor de fazendo para obter . Portanto, a primitiva desejada é .   "
},
{
  "id": "ex-integral-indefinida-2",
  "level": "2",
  "url": "sec-integral-indefinida.html#ex-integral-indefinida-2",
  "type": "Exemplo",
  "number": "1.10",
  "title": "Integração da função potência.",
  "body": " Integração da função potência     Determine .   O integrando é uma função potência, então basta usar a fórmula da e obter .    Determine .   Novamente usando a fórmula da resultamos em , que de forma simplificada se torna igual a .     "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-2",
  "type": "Exercício de Verificação",
  "number": "1.11",
  "title": "",
  "body": " Para a função , encontre a primitiva, , que satisfaça .   Revise o       "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-3",
  "type": "Exercício de Verificação",
  "number": "1.12",
  "title": "",
  "body": " Para a função , encontre a primitiva, , que satisfaça .   Revise o       "
},
{
  "id": "activity-1",
  "level": "2",
  "url": "sec-integral-indefinida.html#activity-1",
  "type": "Atividade",
  "number": "1.1",
  "title": "Verificando fatos.",
  "body": " Verificando fatos   Usando o que foi aprendido até aqui, faça uma demonstração da  .    Experimente derivar o lado direito da igualdade solicitada.   "
},
{
  "id": "ex-integral-indefinida-3",
  "level": "2",
  "url": "sec-integral-indefinida.html#ex-integral-indefinida-3",
  "type": "Exemplo",
  "number": "1.13",
  "title": "<span class=\"process-math\">\\(\\integral{\\frac{1}{x}}{x}\\)<\/span>.",
  "body": "   Integral da função potência para : .    A fórmula da não é válida para . Logo não é possível utilizá-la para obter a integral indefinida de . O passo natural é encontrar uma função cuja derivada seja . Sabe-se que . Então, . De fato, o logaritmo natural não está definido para valores menores que zero. Mas, , para . Então, . De e concluímos que é primitiva de se e que é primitiva de se . Mais diretamente, podemos afirmar que é uma primitiva de . Portanto, .   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-integral-indefinida.html#example-7",
  "type": "Exemplo",
  "number": "1.14",
  "title": "<span class=\"process-math\">\\(\\integral{e^x}{x}\\)<\/span>.",
  "body": "   Integral da função exponencial:     Como , concluímos que a função exponencial é sua própria primitiva. Logo,    "
},
{
  "id": "ex-integral-indefinida4",
  "level": "2",
  "url": "sec-integral-indefinida.html#ex-integral-indefinida4",
  "type": "Exemplo",
  "number": "1.15",
  "title": "<span class=\"process-math\">\\(\\integral{\\sin{x}}{x}\\)<\/span> e <span class=\"process-math\">\\(\\integral{\\cos{x}}{x}\\)<\/span>.",
  "body": " e   A integral das funções seno e cosseno:     Seguem do fato de .   "
},
{
  "id": "ex1-prop-integral-indefinida",
  "level": "2",
  "url": "sec-integral-indefinida.html#ex1-prop-integral-indefinida",
  "type": "Exemplo",
  "number": "1.16",
  "title": "Aplicando propriedades.",
  "body": " Aplicando propriedades   Determine cada integral:   .         .         "
},
{
  "id": "ex2-prop-integral-indefinida",
  "level": "2",
  "url": "sec-integral-indefinida.html#ex2-prop-integral-indefinida",
  "type": "Exemplo",
  "number": "1.17",
  "title": "Integração de funções polinomiais.",
  "body": " Integração de funções polinomiais   Determine cada integral.   .         .         "
},
{
  "id": "primitiva-segunda-derivada",
  "level": "2",
  "url": "sec-integral-indefinida.html#primitiva-segunda-derivada",
  "type": "Exemplo",
  "number": "1.18",
  "title": "Primitiva particular.",
  "body": " Primitiva particular   Encontre sabendo que , e .    A família de primitivas de é naturalmente Assim como todas as primitivas de tem a forma Uma vez que deve satisfazer e temos que nos fornece e . Por fim, encontramos .   "
},
{
  "id": "exe-trig",
  "level": "2",
  "url": "sec-integral-indefinida.html#exe-trig",
  "type": "Exercício de Verificação",
  "number": "1.19",
  "title": "",
  "body": " Determine    Revise o e .      "
},
{
  "id": "exe-primitiva-segunda-derivada",
  "level": "2",
  "url": "sec-integral-indefinida.html#exe-primitiva-segunda-derivada",
  "type": "Exercício de Verificação",
  "number": "1.20",
  "title": "",
  "body": " Encontre sabendo que , e .   Revise o e .      "
},
{
  "id": "tabela1-integrais",
  "level": "2",
  "url": "sec-integral-indefinida.html#tabela1-integrais",
  "type": "Tabela",
  "number": "1.21",
  "title": "Tabela de integração",
  "body": " Tabela de integração    Fórmula                  "
},
{
  "id": "tabela2-integrais",
  "level": "2",
  "url": "sec-integral-indefinida.html#tabela2-integrais",
  "type": "Tabela",
  "number": "1.22",
  "title": "Tabela de integração",
  "body": " Tabela de integração    Fórmula                  "
},
{
  "id": "ex3-prop-integral-indefinida",
  "level": "2",
  "url": "sec-integral-indefinida.html#ex3-prop-integral-indefinida",
  "type": "Exemplo",
  "number": "1.23",
  "title": "Reescrever antes de integrar.",
  "body": " Reescrever antes de integrar      .   Somando e subtraindo 1 do numerador do integrando, podemos reescrever a integral de modo permitir aplicar as fórmulas sugeridas na . Os passos seguintes são ilustramos logo abaixo:        .         "
},
{
  "id": "ex4",
  "level": "2",
  "url": "sec-integral-indefinida.html#ex4",
  "type": "Exemplo",
  "number": "1.24",
  "title": "Identidades trigonométricas.",
  "body": " Identidades trigonométricas   Determine .        "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-6",
  "type": "Exercício de Verificação",
  "number": "1.25",
  "title": "",
  "body": " Determine .   Verifique que a igualdade é verdadeira.      "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-7",
  "type": "Exercício de Verificação",
  "number": "1.26",
  "title": "",
  "body": " Determine .   Consulte a .      "
},
{
  "id": "technology-1",
  "level": "2",
  "url": "sec-integral-indefinida.html#technology-1",
  "type": "Tecnologia",
  "number": "1.27",
  "title": "Usando o software SageMath.",
  "body": " Usando o software SageMath   Software matemático pode ser útil para calcular integrais complicadas. Um ótima opção é utilizar sistema de computação algébrica SageMath . Com uma sintaxe simples e baseada em Python Linguagem de programação. O SageMath (abreviaremos como Sage ) é open-source  Uso gratuito e de código aberto. e tem sido bastante utilizado por professores e estudantes de todos os níveis para conferir cálculos algébricos complicados. Uma boa referência em língua portuguesa para este software pode ser encontrado na página . Detalhes sobre os comandos são resumidos em .    Sintaxe dos comandos  Com o SageMath , usando o comando integral(f, x) é possível calcular a integral indefinida de em relação a variável . Por exemplo, o pode ser resolvido com o comando: Mas se a função depender da variável , por exemplo, ? Basta declarar a variável usando o comando var('t') . Para obter a integral com a notação matemática usual, o Sage possui o comando show , observe:   Nas células acima pode-se notar que os comandos \/ , * , ^  + , - , representam a operações de divisão, multiplicação, potenciação, soma e subtração, respectivamente. Existe muitos outros comandos de operações matemáticas importantes, confira em .    Usando a célula do Sage abaixo, confira todas as integrais apresentadas até aqui. Se a resposta produzida não estiver de acordo com a sua, mostre que elas são equivalentes.      Faça você mesmo   O avanço dos softwares matemáticos tornou possível calcular vários tipos de integrais que dariam muito trabalho se feitos à mão. Usando o conteúdo aprendido até aqui encontre .  Use Sage para encontrar a integral do item anterior.       "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-8",
  "type": "Exercício",
  "number": "1.5.1",
  "title": "",
  "body": "  Determine as integrais indefinidas abaixo:  a) =  .  b) =  .  c) =  .                       http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-11.pg   "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-9",
  "type": "Exercício",
  "number": "1.5.2",
  "title": "",
  "body": "  Considere a função . Qual a primitiva de ?        Relembre que para um termos na forma a primitiva é apenas o termo cuja derivada é . Isto é, na qual é uma constante desconhecida. A primitiva da constante é dada por . Então, para encontrar a primitiva desta expressão, aplicamos esta regra termo a termos obtendo:   Na qual é uma constante arbitrária.    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-5.pg   "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-10",
  "type": "Exercício",
  "number": "1.5.3",
  "title": "",
  "body": "  Determine a integral indefinida:   + .        Basta verificar que    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-12.pg   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-11",
  "type": "Exercício",
  "number": "1.5.4",
  "title": "",
  "body": "  Considere a função .  Seja a primitiva de com .  Então         : Já que , temos  Portanto    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-1.pg   "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-12",
  "type": "Exercício",
  "number": "1.5.5",
  "title": "",
  "body": "  Encontre a primitiva mais geral da função .  Primitiva =   Primeiro reescreva a função como segue: Então a primitiva mais geral é:    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-2.pg   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-13",
  "type": "Exercício",
  "number": "1.5.6",
  "title": "",
  "body": "  Dada a função com e .  Encontre   e determine              Para resolver esses problemas, usaremos o fato de que a primitiva mais geral de é para alguma constante . Então, começamos encontrando a primitiva da segunda derivada .   Precisamos descobrir qual é essa constante . Para isso, vamos usar as informações fornecidas no problema sobre . A saber, . Logo, temos  Portanto, .  Agora, procedemos como antes, desta vez encontrando a primitiva de e usar informações sobre para encontrar . A primitive, e o valor de , são obtidos como segue:    Portanto, a função de modo que .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-3.pg   "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-14",
  "type": "Exercício",
  "number": "1.5.7",
  "title": "",
  "body": "  Determine a seguinte integral definida              http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-14.pg   "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-15",
  "type": "Exercício",
  "number": "1.5.8",
  "title": "",
  "body": "  Considere a função . Seja a primitiva de com .  Então         Para resolver este problema, você precisa lembrar que a derivada de é . Não é difícil derivar isso usando a identidade e a regra do quociente para derivadas.  Com isso em mente, encontre a primitiva geral de que será . Agora usando o fato de e que , devemos ter .  Portanto, pondo 1.5 nesta expressão, obtemos:     http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-9.pg   "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-16",
  "type": "Exercício",
  "number": "1.5.9",
  "title": "",
  "body": "Encontre uma função tal que e, além disso, e . "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-17",
  "type": "Exercício",
  "number": "1.5.10",
  "title": "",
  "body": "  Encontre a função sabendo que          Note que Encontre usando .  Encontre usando .  Logo, .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-7.pg   "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-18",
  "type": "Exercício",
  "number": "1.5.11",
  "title": "",
  "body": "  Encontre a seguinte derivada e estabeleça uma fórmula de integração correspondente.                    Usaremos a Regra do Quociente para computar a derivada.    Se integrarmos isso, teremos o que começamos com mais uma constante arbitrária.    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-13.pg   "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec-integral-indefinida.html#exercise-19",
  "type": "Exercício",
  "number": "1.5.12",
  "title": "",
  "body": "  Determine a integral indefinida e verifique sua resposta usando derivada.                 http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-15.pg   "
},
{
  "id": "sec-eq-diferenciais",
  "level": "1",
  "url": "sec-eq-diferenciais.html",
  "type": "Seção",
  "number": "2",
  "title": "Equações Diferenciais",
  "body": " Equações Diferenciais   Curvas Integrais  Se é uma primitiva da função então os gráficos de são denominados curvas integrais de .   Na mostramos as curvas integrais da função para alguns valores da constante . Observe que as curvas integrais são translações Deslocamentos verticais e horizontais do gráfico de uma função conhecida. da curva .   Curvas integrais da função .   Teste       Curvas integrais     Encontre a equação da curva integral, , da função que passe pelo ponto .   Segue da que a curva integral de um função é a sua primitiva mais uma constante. Neste caso, . O próximo passo é encontra o valor de que garanta que qua a curva integral passe pelo ponto . Para isso, fazemos e obtemos . Portanto, é a curva solicitada.    Encontre a equação da curva integral, , da função que passe pelo ponto .   Uma vez que é uma primitiva de , a curva integral é dada por . O valor de para que a curva integral passe pelo ponto satisfaz , logo . Portanto, é a curva solicitada.       Encontre a equação da curva integral, , da função que passe pelo ponto .   Revise .    .     Integral e Equações diferenciais    Uma equação diferencial é uma igualdade matemática que envolve derivadas e uma função desconhecida . Por exemplo, a igualdade é uma equação diferencial. Nesse caso, a função desconhecida pode ser encontrada usando a integral indefinida como a seguir Portanto, dizemos que a função é uma solução geral da equação diferencial . De forma geral, dada uma função conhecida a igualdade     é uma denominada equação diferencial e resolvê-la significa encontrar a função que satisfaça . Isto é, obter a primitiva de . Mais diretamente, a solução geral da equação diferencial é dada por      .    Resolvendo equações diferênciais    Encontre a solução geral da equação diferencial .    Já que é uma primitiva de , a solução para a equação diferencial é       Resolva a equação diferencial .    Resolver a equação diferencial é equivalente a obter a integral .     Encontre a solução geral da equação .   Revise .    .     Problema de valor inicial  Frequentemente estamos interessados em encontrar uma única solução para a equação diferencial. Por exemplo, no encontramos a equação para uma curva integral que passa por . O Problema de encontrar uma função , que satisfaça e cuja curva integral passa pelo ponto é denominado problema de valor inicial e geralmente apresentado da forma         Resolvendo problemas de valor inicial    Resolva o seguinte problema de valor inicial .    No encontramos a solução geral da equação diferencial . Para resolver o problema de valor inicial deve-se obter o valor de para que . Nota-se que , pois . Logo, a curva integral procurada é .      Resolva o seguinte problema de valor inicial .    Sabe-se do que a solução geral da equação diferencial . Como a curva deve satisfazer , obtemos de modo que vale . Portanto a solução é .  Curva integral que passa pelo ponto .           Encontre a solução do problema de valor inicial .   Revise .        Encontre a solução do problema de valor inicial .   Revise .          Sugestão de Vídeos    Equações Diferenciais:        Campos de Direções  Sabe-se que a inclinação da reta tangente à curva em dado ponto é dada por para cada . A Equação revela que a inclinação das retas tangentes às curvas integrais de no ponto é exatamente . Com isso é possível visualizar as \"direções\" das curvas integrais plotando pequenas porções de suas retas tangentes em cada ponto de uma região retangular. Como resultado teremos o que denominamos de campo de direções . Na podemos observar que mesmo não conhecendo a curva integral é possível ter a perspectiva geométrica do seu gráfico.    Campo de direções das curvas integrais de .       Campo de direções e as curvas integrais da função .   Teste       Faça você mesmo   Curvas integrais e campos de direções       Sugestão de Vídeos    Campos de direções:                    Resolva:     Sabendo que o gráfico de passa pelo ponto e que a inclinação de sua reta tangente em é , quanto vale ?        Lembre-se de que o gráfico de \\ (f (x) \\) passando pelo ponto , isso simplesmente significa . Similarmente, a inclinação da linha tangente em sendo significa que a derivada de em é esta fórmula. Isto é, .  Agora, encotreamos a primitiva de . Isto é dado por . O fado que nos permite obter como segue.   Portanto a função é dada por:   Conectando o ponto 4, dá .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-6.pg      O problema de valor inicial          Note que Encontre usando .  Logo, .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-8.pg     Mostre que é uma solução do problema de valor inicial    O problema de valor inicial          Encontre por definição .  Assim, .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-4.pg      Use um recurso gráfico computacional ( ) para gerar um campo de direções de cada equação diferencial:    na região e   na região e   na região e    "
},
{
  "id": "curvas-integrais",
  "level": "2",
  "url": "sec-eq-diferenciais.html#curvas-integrais",
  "type": "Definição",
  "number": "2.1",
  "title": "",
  "body": "Se é uma primitiva da função então os gráficos de são denominados curvas integrais de . "
},
{
  "id": "fig-familia-primitiva",
  "level": "2",
  "url": "sec-eq-diferenciais.html#fig-familia-primitiva",
  "type": "Figura",
  "number": "2.2",
  "title": "",
  "body": " Curvas integrais da função .   Teste    "
},
{
  "id": "ex1-curvas-integrais",
  "level": "2",
  "url": "sec-eq-diferenciais.html#ex1-curvas-integrais",
  "type": "Exemplo",
  "number": "2.3",
  "title": "Curvas integrais.",
  "body": " Curvas integrais     Encontre a equação da curva integral, , da função que passe pelo ponto .   Segue da que a curva integral de um função é a sua primitiva mais uma constante. Neste caso, . O próximo passo é encontra o valor de que garanta que qua a curva integral passe pelo ponto . Para isso, fazemos e obtemos . Portanto, é a curva solicitada.    Encontre a equação da curva integral, , da função que passe pelo ponto .   Uma vez que é uma primitiva de , a curva integral é dada por . O valor de para que a curva integral passe pelo ponto satisfaz , logo . Portanto, é a curva solicitada.     "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec-eq-diferenciais.html#exercise-20",
  "type": "Exercício de Verificação",
  "number": "2.4",
  "title": "",
  "body": " Encontre a equação da curva integral, , da função que passe pelo ponto .   Revise .    .  "
},
{
  "id": "p-177",
  "level": "2",
  "url": "sec-eq-diferenciais.html#p-177",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "equação diferencial solução geral equação diferencial "
},
{
  "id": "ex-diferencial-1",
  "level": "2",
  "url": "sec-eq-diferenciais.html#ex-diferencial-1",
  "type": "Exemplo",
  "number": "2.5",
  "title": "",
  "body": "  Encontre a solução geral da equação diferencial .    Já que é uma primitiva de , a solução para a equação diferencial é    "
},
{
  "id": "ex-diferencial-2",
  "level": "2",
  "url": "sec-eq-diferenciais.html#ex-diferencial-2",
  "type": "Exemplo",
  "number": "2.6",
  "title": "",
  "body": "  Resolva a equação diferencial .    Resolver a equação diferencial é equivalente a obter a integral .   "
},
{
  "id": "exer1-sol-geral",
  "level": "2",
  "url": "sec-eq-diferenciais.html#exer1-sol-geral",
  "type": "Exercício de Verificação",
  "number": "2.7",
  "title": "",
  "body": " Encontre a solução geral da equação .   Revise .    .  "
},
{
  "id": "p-187",
  "level": "2",
  "url": "sec-eq-diferenciais.html#p-187",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "problema de valor inicial "
},
{
  "id": "ex1-pvi",
  "level": "2",
  "url": "sec-eq-diferenciais.html#ex1-pvi",
  "type": "Exemplo",
  "number": "2.8",
  "title": "",
  "body": "  Resolva o seguinte problema de valor inicial .    No encontramos a solução geral da equação diferencial . Para resolver o problema de valor inicial deve-se obter o valor de para que . Nota-se que , pois . Logo, a curva integral procurada é .   "
},
{
  "id": "ex2-pvi",
  "level": "2",
  "url": "sec-eq-diferenciais.html#ex2-pvi",
  "type": "Exemplo",
  "number": "2.9",
  "title": "",
  "body": "  Resolva o seguinte problema de valor inicial .    Sabe-se do que a solução geral da equação diferencial . Como a curva deve satisfazer , obtemos de modo que vale . Portanto a solução é .  Curva integral que passa pelo ponto .        "
},
{
  "id": "exer-pvi-1",
  "level": "2",
  "url": "sec-eq-diferenciais.html#exer-pvi-1",
  "type": "Exercício de Verificação",
  "number": "2.11",
  "title": "",
  "body": "  Encontre a solução do problema de valor inicial .   Revise .        Encontre a solução do problema de valor inicial .   Revise .       "
},
{
  "id": "p-200",
  "level": "2",
  "url": "sec-eq-diferenciais.html#p-200",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "campo de direções "
},
{
  "id": "fig-campo-direcoes",
  "level": "2",
  "url": "sec-eq-diferenciais.html#fig-campo-direcoes",
  "type": "Figura",
  "number": "2.12",
  "title": "",
  "body": " Campo de direções das curvas integrais de .     "
},
{
  "id": "fig-campo-direcoes-curva",
  "level": "2",
  "url": "sec-eq-diferenciais.html#fig-campo-direcoes-curva",
  "type": "Figura",
  "number": "2.13",
  "title": "",
  "body": " Campo de direções e as curvas integrais da função .   Teste    "
},
{
  "id": "campos-curvas-sageinterativo",
  "level": "2",
  "url": "sec-eq-diferenciais.html#campos-curvas-sageinterativo",
  "type": "Tecnologia",
  "number": "2.14",
  "title": "Faça você mesmo.",
  "body": " Faça você mesmo   Curvas integrais e campos de direções    "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "sec-eq-diferenciais.html#exercise-23",
  "type": "Exercício",
  "number": "2.5.1",
  "title": "",
  "body": "  Sabendo que o gráfico de passa pelo ponto e que a inclinação de sua reta tangente em é , quanto vale ?        Lembre-se de que o gráfico de \\ (f (x) \\) passando pelo ponto , isso simplesmente significa . Similarmente, a inclinação da linha tangente em sendo significa que a derivada de em é esta fórmula. Isto é, .  Agora, encotreamos a primitiva de . Isto é dado por . O fado que nos permite obter como segue.   Portanto a função é dada por:   Conectando o ponto 4, dá .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-6.pg   "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "sec-eq-diferenciais.html#exercise-24",
  "type": "Exercício",
  "number": "2.5.2",
  "title": "",
  "body": "  O problema de valor inicial          Note que Encontre usando .  Logo, .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-8.pg   "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "sec-eq-diferenciais.html#exercise-25",
  "type": "Exercício",
  "number": "2.5.3",
  "title": "",
  "body": "Mostre que é uma solução do problema de valor inicial "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "sec-eq-diferenciais.html#exercise-26",
  "type": "Exercício",
  "number": "2.5.4",
  "title": "",
  "body": "  O problema de valor inicial          Encontre por definição .  Assim, .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=local\/Library\/Pretext\/N1\/pretext-4.pg   "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec-eq-diferenciais.html#exercise-27",
  "type": "Exercício",
  "number": "2.5.5",
  "title": "",
  "body": " na região e "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "sec-eq-diferenciais.html#exercise-28",
  "type": "Exercício",
  "number": "2.5.6",
  "title": "",
  "body": " na região e "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "sec-eq-diferenciais.html#exercise-29",
  "type": "Exercício",
  "number": "2.5.7",
  "title": "",
  "body": " na região e "
},
{
  "id": "references-backmatter",
  "level": "1",
  "url": "references-backmatter.html",
  "type": "Referêcias",
  "number": "3",
  "title": "Referências",
  "body": " Referências  LARSON, Ron. Cálculo Aplicado. Cursos Rápido.  Cengage Learning , 2011.  ANTON, Howard; BIVENS, Irl; DAVIS, Stephen. Cálculo.  Bookman , 2007.  HUGHES, Hallet et al. Cálculo de uma variável.  LTC , 2004.  Stewart, James Cálculo, Volume I.  Cengage Learning , 2013.  SILVA, Leon; SANTOS, Marcelo; Machado, Ricardo. Elementos de Computação Matemática com SageMath.  SBM , 2019.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
