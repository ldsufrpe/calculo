var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-1",
  "level": "1",
  "url": "frontmatter-1.html",
  "type": "Pré-textual",
  "number": "",
  "title": "Pré-textual",
  "body": "   Leon Silva  Departamento de Matemática  Universidade Federal Rural de Pernambuco    Deibsom Silva  Departamento de Matemática  Universidade Federal Rural de Pernambuco      Aqui faremos um resumo das atividades da semana.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Seção",
  "number": "1",
  "title": "Técnicas de Integração",
  "body": " Técnicas de Integração   Estrutura    Calcular integral definida e indefinida usando o método de integração por partes.    Calcular integral indefinida usando o método de frações parciais.      Integração por Partes   A técnica de integração por partes baseia-se na Regra do Produto da derivação. É geralmente aplicada em integrandos que envolvam produtos de funções do tipo potência, exponenciais, logarítmicas e trigonométricas. Por exemplo, as integrais dos tipos . podem ser resolvidas com essa técnica. Considerando duas funções deriváveis e podemos derivar e obter . A integral de ambos os lados da igualdade acima produz que pode ser apresentada como Para facilitar vamos adotar , , obter , , esquecer a constante (por enquanto) e apresentar a fórmula a seguir.    Fórmula da integração por partes  Sejam e funções deriváveis depois .     Exemplos comuns de integração por partes      Determine .    Para utilizar devemos escolher com sabedoria, a partir do produto , o representante de e que torne a integral mais simples. Em geral, escolhe-se como a parte mais complexa do integrando cuja a integral seja conhecida, neste caso, tomamos , e, por exclusão, . Agora, encontramos aplicando a integral e aplicado a derivada . De posse das informações sobre , , e , é possível aplicar a fórmula de integração por partes e obter .     Determine .   Escolha .           Determine .    Escolha, e . Então, . Portanto,      Determine .   Escolha .          Utilização repetida da integração por partes     Determine .    Escolha e . Então, . Assim, aplicando a : Para calcular a integral do lado direito de , precisamos aplicar novamente a fórmula de integração por partes. Para isso, escolhemos e . Logo, . Daí, . Finalmente, a substituição de em fornece .        Determine .    Escolha e . Então, . Daí, a fórmula de integração por partes produz A integral do lado direito, , requer o uso da integração por partes mais uma vez. Agora, escolheremos e . Então, . Logo, . Substituindo em , obtemos . Quando adicionamos o termo em ambos os lados produzimos que pode ser escrito como .     Determine .   Inicie escolhendo .         Integração por partes de uma integral definida  Sejam e funções deriváveis depois em .     Integral definida   Encontre as integrais.    .   Embora não pareça um produto, podemos escrever e assim escolher e . Então, . Usando a fórmula para integração por partes para integrais definidas :      .   Escolha e . Então, . Portanto, .   Não escolhemos , embora ela seja uma função mais complicada do que , porque não é imediato saber quem seria . Contudo, usando , nos leva a , que geralmente parece ser mais simples do que .         Determine .   Escolha .    .    Estratégias para escolha de e      Escolha como a parte mais complexa do produto que se encaixe em uma fórmula básica de integração. Tome como o fator remanescente.    Escolha como a parte do produto cuja derivada seja uma função mais simples que . Tome como o fator remanescente.       Respostas diferentes?     Use dois métodos diferentes para determinar a integral .   Use os métodos de substituição e integração por partes. A igualdade pode ser útil.   Explique qualquer a diferença na forma das respostas obtidas.       Sugestão de vídeos    Problema resolvido:      Problema resolvido:      Problema resolvido:      Problema resolvido:         Integração por Frações Parciais   A técnica integração por frações parciais tem como princípio básico determinar a integral de uma função racional depois a partir da sua decomposição na soma de duas ou mais funções racionais mais simples, denominadas de frações parciais . Por exemplo, a decomposição permite a seguinte simplificação para o cálculo da integral . As estratégias para encontrar a decomposição em frações parciais de funções racionais são variadas. Algumas situações comuns são descritas a seguir e ilustradas mais adiante.    Decomposição em frações parciais  Dada uma função racional .   Se o grau de é menor do que o grau de , então   Fatore .    Para cada fator linear distinto , a decomposição deve ter um termo da forma .    Para cada fator linear repetido , a decomposição deve ter termos da forma .    Para cada fator que não pode ser fatorado, a decomposição deve ter um termo da forma .       Se o grau de é maior ou igual ao grau de efetue a divisão e aplique os passos anteriores no resto .       Determinando frações parciais   Determine .    De acordo com a decomposição por frações parciais , a fatoração sugere uma decomposição da forma Agora, resta determinar as constantes e . Para isso, multiplicamos cada lado da equação por obtendo logo, Como a igualdade é válida para qualquer , os termos constantes de ambos os lados têm que ser iguais. Da mesma forma, os coeficientes de , dos dois lados têm que ser iguais. Portanto, . Resolvendo essas equações , obtemos e . Finalmente, substituímos o integrando pela decomposição de frações parciais e aplicamos a integral: .      Determine .   Revise .        Determine .   Encontre e para que .         Integração com fatores repetidos   Determine .    A expressão contém um fator linear distinto e outro fator linear repetido. Logo, a decomposição por frações parciais sugere Multiplicando ambos os lados da igualdade por , obtemos , e quando comparamos os coeficientes de ambos os lados temos . Resolvendo essas equações, obtemos , e . Então, a integral original é obtida pela integração de outras três como segue . Para resolver a segunda integral fizemos uso da substituição e a regra da integral da função potência.      Determine .        Determine .             Função racional imprópria   Determine .    Uma estratégia para fatorar o denominador é encontrando uma de suas raízes e depois efetuar a divisão por . Observe que . Logo, é uma raíz e Então, a fatoração desejada é Já que existe um fator linear sem repetição e um fator de grau dois que não pode ser mais fatorado, a decomposição por frações parciais sugere Multiplicando ambos lados por , obtemos . Comparando os coeficientes dos dois lados chegamos a que fornece . Portanto, Mas, Logo,      Determine .   Dividindo o numerador pelo denominador:         Grau do numerador   Determine .    O grau numerador é maior que a do denominador. Revise as regras de decomposição por frações parciais e note que primeiro precisamos fazer uma divisão do integrando . Então Agora usaremos o método de frações parciais em . O denominador pode ser fatorado como . Portanto, a decomposição da fração parcial tem a forma: Multiplicando pelo mínimo denominador comum, , obtemos Substituindo encontra-se , e substituindo fornece . Logo, e portanto      Determine .          Epidemias   Um único indivíduo infectado entra em uma comunidade de 500 indivíduos suscetíveis à doença. A doença se dissemina a uma taxa proporcional ao produto do número total de infectados pelo número de indivíduos suscetíveis ainda não infectados. Um modelo para o tempo que a doença leva para se disseminar entre indivíduos é    Determine o tempo para que 75% da população seja infectada.   Quando o tempo é 0, .   O tempo é igual a     Determine o número de pessoas infectadas após 100 horas.           Sugestão de Vídeos    Decomposição por frações parciais:      Decomposição por frações parciais:      Decomposição por frações parciais:       Usando SageMath  O SageMath consegue calcular integrais em que o método de integração por partes:   Além disso, podemos decompor uma expressão do tipo em frações parciais usando o comando partial_fraction() . Veja a seguir:   A integral então pode ser calculada da forma que desejar. Integrando a expressão diretamente   ou decompondo a expressão em frações parciais e em seguinda calculando a integral   Escrever uma nota sobre a função log do sage.   Utilize a célular abaixo para calcular as integrais dos exemplos desta seção.        Resolva as integrais a seguir usando a técnica de integração por partes.     Determine a integral definida.           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=integral-tecnicas\/problema1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=integral-tecnicas\/problema1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=integral-tecnicas\/problema1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=integral-tecnicas\/problema1.pg      Determine a integral.  =  .         http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=integral-tecnicas\/problema2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=integral-tecnicas\/problema2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=integral-tecnicas\/problema2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=integral-tecnicas\/problema2.pg      Determine a integral.           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=integral-tecnicas\/problema3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=integral-tecnicas\/problema3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=integral-tecnicas\/problema3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=integral-tecnicas\/problema3.pg      Determine a integral.           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=integral-tecnicas\/problema4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=integral-tecnicas\/problema4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=integral-tecnicas\/problema4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=integral-tecnicas\/problema4.pg      Determine a integral.           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=integral-tecnicas\/problema5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=integral-tecnicas\/problema5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=integral-tecnicas\/problema5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=integral-tecnicas\/problema5.pg      Determine a integral.           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=integral-tecnicas\/problema6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=integral-tecnicas\/problema6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=integral-tecnicas\/problema6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=integral-tecnicas\/problema6.pg      Resolva:  (a)  .  (b)  .  (c) .                   http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=integral-tecnicas\/problema7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=integral-tecnicas\/problema7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=integral-tecnicas\/problema7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=integral-tecnicas\/problema7.pg      Determine a integral indefinida.  =  .  Dica: Integrar por partes com .         http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=integral-tecnicas\/problema8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=integral-tecnicas\/problema8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=integral-tecnicas\/problema8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=integral-tecnicas\/problema8.pg        Resolva as integrais a seguir usando a técnica de decomposição por frações parciais.     Decomponha a função a seguir usando frações parciais:   +             Já que , temos Então, e de modo que e Assim e    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=integral-tecnicas\/problema18.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=integral-tecnicas\/problema18.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=integral-tecnicas\/problema18.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=integral-tecnicas\/problema18.pg      Determine a integral.          Escrevendo temos ou Resolvendo para e , encotramos e , então    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=integral-tecnicas\/problema19.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=integral-tecnicas\/problema19.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=integral-tecnicas\/problema19.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=integral-tecnicas\/problema19.pg      Determine a integral.          nOTE QUE . Assim, escrevemos gerando ou Resolvendo para e , encontramos e , então    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=integral-tecnicas\/problema20.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=integral-tecnicas\/problema20.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=integral-tecnicas\/problema20.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=integral-tecnicas\/problema20.pg      Encontre          Usando problemas anteriores, temos     http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=integral-tecnicas\/problema21.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=integral-tecnicas\/problema21.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=integral-tecnicas\/problema21.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=integral-tecnicas\/problema21.pg      Seja uma função quadrática tal que e é uma função racional.  Encontre .           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=integral-tecnicas\/problema9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=integral-tecnicas\/problema9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=integral-tecnicas\/problema9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=integral-tecnicas\/problema9.pg      Determine a integral.           Primeiro faça a divisão entre numerador e denominador obtendo   A integral torna-se  + C + C .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=integral-tecnicas\/problema10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=integral-tecnicas\/problema10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=integral-tecnicas\/problema10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=integral-tecnicas\/problema10.pg      Determine a integral.           Primeiro faça a divisão entre numerador e denominador obtendo   A integral torna-se  + C + C .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=15&sourceFilePath=integral-tecnicas\/problema11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=15&sourceFilePath=integral-tecnicas\/problema11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=15&sourceFilePath=integral-tecnicas\/problema11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=15&sourceFilePath=integral-tecnicas\/problema11.pg      A forma da decomposição da fração parcial de uma função racional é dada abaixo.    ,  ,  .  Agora avalie a integral indefinida.                         SOLUTION  Multiplicando pelo mínimo denominador comum produz Rearranging terms on the right hand side, yields Reorganizando os termos do lado direito, fornece: Resolvendo o sitema obtem-se e então a decomopisição por frações parciais é Logo a integral desejada é    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=16&sourceFilePath=integral-tecnicas\/problema11.1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=16&sourceFilePath=integral-tecnicas\/problema11.1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=16&sourceFilePath=integral-tecnicas\/problema11.1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=16&sourceFilePath=integral-tecnicas\/problema11.1.pg      Escreva a forma da decomposição por frações parciais do integrando de:   Determine os coeficientes, e , nos quais e    ,              O numerador poder fatorado como . Uma vez que temos dois fatores lineares distintos, a decomposição por frações parciais tem a forma Multiplicando pelo mínimo denominador comum, , temos Subistituindo , gera , e substituindo fornece .  Assim a decomposição desejada é    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=17&sourceFilePath=integral-tecnicas\/problema12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=17&sourceFilePath=integral-tecnicas\/problema12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=17&sourceFilePath=integral-tecnicas\/problema12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=17&sourceFilePath=integral-tecnicas\/problema12.pg      Evaluate the integral.            Usando frações parciais, temos produzindo Logo,    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=18&sourceFilePath=integral-tecnicas\/problema13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=18&sourceFilePath=integral-tecnicas\/problema13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=18&sourceFilePath=integral-tecnicas\/problema13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=18&sourceFilePath=integral-tecnicas\/problema13.pg      Determine a integral.            Usando frações parciais, temos produzindo Logo,    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=19&sourceFilePath=integral-tecnicas\/problema14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=19&sourceFilePath=integral-tecnicas\/problema14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=19&sourceFilePath=integral-tecnicas\/problema14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=19&sourceFilePath=integral-tecnicas\/problema14.pg      Determine a integral.            Usando frações parciais, temos produzindo Logo,    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=20&sourceFilePath=integral-tecnicas\/problema15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=20&sourceFilePath=integral-tecnicas\/problema15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=20&sourceFilePath=integral-tecnicas\/problema15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=20&sourceFilePath=integral-tecnicas\/problema15.pg      Encontre          Usando resultados anteriores, temos     http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=21&sourceFilePath=integral-tecnicas\/problema16.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=21&sourceFilePath=integral-tecnicas\/problema16.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=21&sourceFilePath=integral-tecnicas\/problema16.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=21&sourceFilePath=integral-tecnicas\/problema16.pg      Determine a integral.          A decomposição por frações parciais fornece Expandindo e coletando as potências de , encontramos , então    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=22&sourceFilePath=integral-tecnicas\/problema17.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=22&sourceFilePath=integral-tecnicas\/problema17.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=22&sourceFilePath=integral-tecnicas\/problema17.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=22&sourceFilePath=integral-tecnicas\/problema17.pg       "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "section-1.html#objectives-1",
  "type": "Objetivos",
  "number": "1",
  "title": "Estrutura",
  "body": " Estrutura    Calcular integral definida e indefinida usando o método de integração por partes.    Calcular integral indefinida usando o método de frações parciais.    "
},
{
  "id": "ex-part-1",
  "level": "2",
  "url": "section-1.html#ex-part-1",
  "type": "Exemplo",
  "number": "1.1",
  "title": "<span class=\"process-math\">\\(\\integral{xe^x}{x}\\)<\/span>.",
  "body": "   Determine .    Para utilizar devemos escolher com sabedoria, a partir do produto , o representante de e que torne a integral mais simples. Em geral, escolhe-se como a parte mais complexa do integrando cuja a integral seja conhecida, neste caso, tomamos , e, por exclusão, . Agora, encontramos aplicando a integral e aplicado a derivada . De posse das informações sobre , , e , é possível aplicar a fórmula de integração por partes e obter .   "
},
{
  "id": "exer-part-1",
  "level": "2",
  "url": "section-1.html#exer-part-1",
  "type": "Exercício de Verificação",
  "number": "1.2",
  "title": "",
  "body": " Determine .   Escolha .      "
},
{
  "id": "ex-part-2",
  "level": "2",
  "url": "section-1.html#ex-part-2",
  "type": "Exemplo",
  "number": "1.3",
  "title": "<span class=\"process-math\">\\(\\integral{x\\sin{x}}{x}\\)<\/span>.",
  "body": "   Determine .    Escolha, e . Então, . Portanto,    "
},
{
  "id": "exer-part-2",
  "level": "2",
  "url": "section-1.html#exer-part-2",
  "type": "Exercício de Verificação",
  "number": "1.4",
  "title": "",
  "body": " Determine .   Escolha .      "
},
{
  "id": "ex-part-4a",
  "level": "2",
  "url": "section-1.html#ex-part-4a",
  "type": "Exemplo",
  "number": "1.5",
  "title": "<span class=\"process-math\">\\(\\integral{x^2e^x}{x}\\)<\/span>.",
  "body": "   Determine .    Escolha e . Então, . Assim, aplicando a : Para calcular a integral do lado direito de , precisamos aplicar novamente a fórmula de integração por partes. Para isso, escolhemos e . Logo, . Daí, . Finalmente, a substituição de em fornece .   "
},
{
  "id": "exer-part-4b",
  "level": "2",
  "url": "section-1.html#exer-part-4b",
  "type": "Exemplo",
  "number": "1.6",
  "title": "<span class=\"process-math\">\\(\\integral{e^x\\sin{x}}{x}\\)<\/span>.",
  "body": "   Determine .    Escolha e . Então, . Daí, a fórmula de integração por partes produz A integral do lado direito, , requer o uso da integração por partes mais uma vez. Agora, escolheremos e . Então, . Logo, . Substituindo em , obtemos . Quando adicionamos o termo em ambos os lados produzimos que pode ser escrito como .   "
},
{
  "id": "exer-part-4",
  "level": "2",
  "url": "section-1.html#exer-part-4",
  "type": "Exercício de Verificação",
  "number": "1.7",
  "title": "",
  "body": " Determine .   Inicie escolhendo .      "
},
{
  "id": "ex-part-3",
  "level": "2",
  "url": "section-1.html#ex-part-3",
  "type": "Exemplo",
  "number": "1.8",
  "title": "Integral definida.",
  "body": " Integral definida   Encontre as integrais.    .   Embora não pareça um produto, podemos escrever e assim escolher e . Então, . Usando a fórmula para integração por partes para integrais definidas :      .   Escolha e . Então, . Portanto, .   Não escolhemos , embora ela seja uma função mais complicada do que , porque não é imediato saber quem seria . Contudo, usando , nos leva a , que geralmente parece ser mais simples do que .       "
},
{
  "id": "exer-part-3",
  "level": "2",
  "url": "section-1.html#exer-part-3",
  "type": "Exercício de Verificação",
  "number": "1.10",
  "title": "",
  "body": " Determine .   Escolha .    .  "
},
{
  "id": "activity-1",
  "level": "2",
  "url": "section-1.html#activity-1",
  "type": "Atividade",
  "number": "1.1",
  "title": "Respostas diferentes?",
  "body": " Respostas diferentes?     Use dois métodos diferentes para determinar a integral .   Use os métodos de substituição e integração por partes. A igualdade pode ser útil.   Explique qualquer a diferença na forma das respostas obtidas.    "
},
{
  "id": "p-45",
  "level": "2",
  "url": "section-1.html#p-45",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "frações parciais "
},
{
  "id": "ex-frac-1a",
  "level": "2",
  "url": "section-1.html#ex-frac-1a",
  "type": "Exemplo",
  "number": "1.11",
  "title": "Determinando frações parciais.",
  "body": " Determinando frações parciais   Determine .    De acordo com a decomposição por frações parciais , a fatoração sugere uma decomposição da forma Agora, resta determinar as constantes e . Para isso, multiplicamos cada lado da equação por obtendo logo, Como a igualdade é válida para qualquer , os termos constantes de ambos os lados têm que ser iguais. Da mesma forma, os coeficientes de , dos dois lados têm que ser iguais. Portanto, . Resolvendo essas equações , obtemos e . Finalmente, substituímos o integrando pela decomposição de frações parciais e aplicamos a integral: .   "
},
{
  "id": "exer-frac-1a",
  "level": "2",
  "url": "section-1.html#exer-frac-1a",
  "type": "Exercício de Verificação",
  "number": "1.12",
  "title": "",
  "body": " Determine .   Revise .      "
},
{
  "id": "exer-frac-1b",
  "level": "2",
  "url": "section-1.html#exer-frac-1b",
  "type": "Exercício de Verificação",
  "number": "1.13",
  "title": "",
  "body": " Determine .   Encontre e para que .      "
},
{
  "id": "ex-frac-2",
  "level": "2",
  "url": "section-1.html#ex-frac-2",
  "type": "Exemplo",
  "number": "1.14",
  "title": "Integração com fatores repetidos.",
  "body": " Integração com fatores repetidos   Determine .    A expressão contém um fator linear distinto e outro fator linear repetido. Logo, a decomposição por frações parciais sugere Multiplicando ambos os lados da igualdade por , obtemos , e quando comparamos os coeficientes de ambos os lados temos . Resolvendo essas equações, obtemos , e . Então, a integral original é obtida pela integração de outras três como segue . Para resolver a segunda integral fizemos uso da substituição e a regra da integral da função potência.    "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-1.html#exercise-7",
  "type": "Exercício de Verificação",
  "number": "1.16",
  "title": "",
  "body": " Determine .      "
},
{
  "id": "exer-frac-2",
  "level": "2",
  "url": "section-1.html#exer-frac-2",
  "type": "Exercício de Verificação",
  "number": "1.17",
  "title": "",
  "body": " Determine .          "
},
{
  "id": "ex-frac-3",
  "level": "2",
  "url": "section-1.html#ex-frac-3",
  "type": "Exemplo",
  "number": "1.18",
  "title": "Função racional imprópria.",
  "body": " Função racional imprópria   Determine .    Uma estratégia para fatorar o denominador é encontrando uma de suas raízes e depois efetuar a divisão por . Observe que . Logo, é uma raíz e Então, a fatoração desejada é Já que existe um fator linear sem repetição e um fator de grau dois que não pode ser mais fatorado, a decomposição por frações parciais sugere Multiplicando ambos lados por , obtemos . Comparando os coeficientes dos dois lados chegamos a que fornece . Portanto, Mas, Logo,    "
},
{
  "id": "exer-frac-3",
  "level": "2",
  "url": "section-1.html#exer-frac-3",
  "type": "Exercício de Verificação",
  "number": "1.19",
  "title": "",
  "body": " Determine .   Dividindo o numerador pelo denominador:       "
},
{
  "id": "ex-frac-4",
  "level": "2",
  "url": "section-1.html#ex-frac-4",
  "type": "Exemplo",
  "number": "1.20",
  "title": "Grau do numerador.",
  "body": " Grau do numerador   Determine .    O grau numerador é maior que a do denominador. Revise as regras de decomposição por frações parciais e note que primeiro precisamos fazer uma divisão do integrando . Então Agora usaremos o método de frações parciais em . O denominador pode ser fatorado como . Portanto, a decomposição da fração parcial tem a forma: Multiplicando pelo mínimo denominador comum, , obtemos Substituindo encontra-se , e substituindo fornece . Logo, e portanto    "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-1.html#exercise-10",
  "type": "Exercício de Verificação",
  "number": "1.21",
  "title": "",
  "body": " Determine .      "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "section-1.html#activity-2",
  "type": "Atividade",
  "number": "1.2",
  "title": "Epidemias.",
  "body": " Epidemias   Um único indivíduo infectado entra em uma comunidade de 500 indivíduos suscetíveis à doença. A doença se dissemina a uma taxa proporcional ao produto do número total de infectados pelo número de indivíduos suscetíveis ainda não infectados. Um modelo para o tempo que a doença leva para se disseminar entre indivíduos é    Determine o tempo para que 75% da população seja infectada.   Quando o tempo é 0, .   O tempo é igual a     Determine o número de pessoas infectadas após 100 horas.        "
},
{
  "id": "note-3",
  "level": "2",
  "url": "section-1.html#note-3",
  "type": "Nota",
  "number": "1.22",
  "title": "",
  "body": "Escrever uma nota sobre a função log do sage. "
},
{
  "id": "sage-integral-partes-parciais",
  "level": "2",
  "url": "section-1.html#sage-integral-partes-parciais",
  "type": "Atividade",
  "number": "1.3",
  "title": "",
  "body": " Utilize a célular abaixo para calcular as integrais dos exemplos desta seção.   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-1.html#exercise-11",
  "type": "Exercício",
  "number": "1.6.1",
  "title": "",
  "body": "  Determine a integral definida.           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=integral-tecnicas\/problema1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=integral-tecnicas\/problema1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=integral-tecnicas\/problema1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=integral-tecnicas\/problema1.pg   "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-1.html#exercise-12",
  "type": "Exercício",
  "number": "1.6.2",
  "title": "",
  "body": "  Determine a integral.  =  .         http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=integral-tecnicas\/problema2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=integral-tecnicas\/problema2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=integral-tecnicas\/problema2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=integral-tecnicas\/problema2.pg   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-1.html#exercise-13",
  "type": "Exercício",
  "number": "1.6.3",
  "title": "",
  "body": "  Determine a integral.           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=integral-tecnicas\/problema3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=integral-tecnicas\/problema3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=integral-tecnicas\/problema3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=integral-tecnicas\/problema3.pg   "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-1.html#exercise-14",
  "type": "Exercício",
  "number": "1.6.4",
  "title": "",
  "body": "  Determine a integral.           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=integral-tecnicas\/problema4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=integral-tecnicas\/problema4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=integral-tecnicas\/problema4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=integral-tecnicas\/problema4.pg   "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-1.html#exercise-15",
  "type": "Exercício",
  "number": "1.6.5",
  "title": "",
  "body": "  Determine a integral.           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=integral-tecnicas\/problema5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=integral-tecnicas\/problema5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=integral-tecnicas\/problema5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=integral-tecnicas\/problema5.pg   "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-1.html#exercise-16",
  "type": "Exercício",
  "number": "1.6.6",
  "title": "",
  "body": "  Determine a integral.           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=integral-tecnicas\/problema6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=integral-tecnicas\/problema6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=integral-tecnicas\/problema6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=integral-tecnicas\/problema6.pg   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-1.html#exercise-17",
  "type": "Exercício",
  "number": "1.6.7",
  "title": "",
  "body": "  Resolva:  (a)  .  (b)  .  (c) .                   http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=integral-tecnicas\/problema7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=integral-tecnicas\/problema7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=integral-tecnicas\/problema7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=integral-tecnicas\/problema7.pg   "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-1.html#exercise-18",
  "type": "Exercício",
  "number": "1.6.8",
  "title": "",
  "body": "  Determine a integral indefinida.  =  .  Dica: Integrar por partes com .         http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=integral-tecnicas\/problema8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=integral-tecnicas\/problema8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=integral-tecnicas\/problema8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=integral-tecnicas\/problema8.pg   "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-1.html#exercise-19",
  "type": "Exercício",
  "number": "1.6.9",
  "title": "",
  "body": "  Decomponha a função a seguir usando frações parciais:   +             Já que , temos Então, e de modo que e Assim e    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=integral-tecnicas\/problema18.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=integral-tecnicas\/problema18.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=integral-tecnicas\/problema18.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=integral-tecnicas\/problema18.pg   "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-1.html#exercise-20",
  "type": "Exercício",
  "number": "1.6.10",
  "title": "",
  "body": "  Determine a integral.          Escrevendo temos ou Resolvendo para e , encotramos e , então    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=integral-tecnicas\/problema19.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=integral-tecnicas\/problema19.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=integral-tecnicas\/problema19.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=integral-tecnicas\/problema19.pg   "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-1.html#exercise-21",
  "type": "Exercício",
  "number": "1.6.11",
  "title": "",
  "body": "  Determine a integral.          nOTE QUE . Assim, escrevemos gerando ou Resolvendo para e , encontramos e , então    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=integral-tecnicas\/problema20.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=integral-tecnicas\/problema20.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=integral-tecnicas\/problema20.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=11&sourceFilePath=integral-tecnicas\/problema20.pg   "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "section-1.html#exercise-22",
  "type": "Exercício",
  "number": "1.6.12",
  "title": "",
  "body": "  Encontre          Usando problemas anteriores, temos     http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=integral-tecnicas\/problema21.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=integral-tecnicas\/problema21.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=integral-tecnicas\/problema21.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=12&sourceFilePath=integral-tecnicas\/problema21.pg   "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "section-1.html#exercise-23",
  "type": "Exercício",
  "number": "1.6.13",
  "title": "",
  "body": "  Seja uma função quadrática tal que e é uma função racional.  Encontre .           http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=integral-tecnicas\/problema9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=integral-tecnicas\/problema9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=integral-tecnicas\/problema9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=13&sourceFilePath=integral-tecnicas\/problema9.pg   "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "section-1.html#exercise-24",
  "type": "Exercício",
  "number": "1.6.14",
  "title": "",
  "body": "  Determine a integral.           Primeiro faça a divisão entre numerador e denominador obtendo   A integral torna-se  + C + C .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=integral-tecnicas\/problema10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=integral-tecnicas\/problema10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=integral-tecnicas\/problema10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=14&sourceFilePath=integral-tecnicas\/problema10.pg   "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "section-1.html#exercise-25",
  "type": "Exercício",
  "number": "1.6.15",
  "title": "",
  "body": "  Determine a integral.           Primeiro faça a divisão entre numerador e denominador obtendo   A integral torna-se  + C + C .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=15&sourceFilePath=integral-tecnicas\/problema11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=15&sourceFilePath=integral-tecnicas\/problema11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=15&sourceFilePath=integral-tecnicas\/problema11.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=15&sourceFilePath=integral-tecnicas\/problema11.pg   "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "section-1.html#exercise-26",
  "type": "Exercício",
  "number": "1.6.16",
  "title": "",
  "body": "  A forma da decomposição da fração parcial de uma função racional é dada abaixo.    ,  ,  .  Agora avalie a integral indefinida.                         SOLUTION  Multiplicando pelo mínimo denominador comum produz Rearranging terms on the right hand side, yields Reorganizando os termos do lado direito, fornece: Resolvendo o sitema obtem-se e então a decomopisição por frações parciais é Logo a integral desejada é    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=16&sourceFilePath=integral-tecnicas\/problema11.1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=16&sourceFilePath=integral-tecnicas\/problema11.1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=16&sourceFilePath=integral-tecnicas\/problema11.1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=16&sourceFilePath=integral-tecnicas\/problema11.1.pg   "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "section-1.html#exercise-27",
  "type": "Exercício",
  "number": "1.6.17",
  "title": "",
  "body": "  Escreva a forma da decomposição por frações parciais do integrando de:   Determine os coeficientes, e , nos quais e    ,              O numerador poder fatorado como . Uma vez que temos dois fatores lineares distintos, a decomposição por frações parciais tem a forma Multiplicando pelo mínimo denominador comum, , temos Subistituindo , gera , e substituindo fornece .  Assim a decomposição desejada é    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=17&sourceFilePath=integral-tecnicas\/problema12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=17&sourceFilePath=integral-tecnicas\/problema12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=17&sourceFilePath=integral-tecnicas\/problema12.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=17&sourceFilePath=integral-tecnicas\/problema12.pg   "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "section-1.html#exercise-28",
  "type": "Exercício",
  "number": "1.6.18",
  "title": "",
  "body": "  Evaluate the integral.            Usando frações parciais, temos produzindo Logo,    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=18&sourceFilePath=integral-tecnicas\/problema13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=18&sourceFilePath=integral-tecnicas\/problema13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=18&sourceFilePath=integral-tecnicas\/problema13.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=18&sourceFilePath=integral-tecnicas\/problema13.pg   "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "section-1.html#exercise-29",
  "type": "Exercício",
  "number": "1.6.19",
  "title": "",
  "body": "  Determine a integral.            Usando frações parciais, temos produzindo Logo,    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=19&sourceFilePath=integral-tecnicas\/problema14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=19&sourceFilePath=integral-tecnicas\/problema14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=19&sourceFilePath=integral-tecnicas\/problema14.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=19&sourceFilePath=integral-tecnicas\/problema14.pg   "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "section-1.html#exercise-30",
  "type": "Exercício",
  "number": "1.6.20",
  "title": "",
  "body": "  Determine a integral.            Usando frações parciais, temos produzindo Logo,    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=20&sourceFilePath=integral-tecnicas\/problema15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=20&sourceFilePath=integral-tecnicas\/problema15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=20&sourceFilePath=integral-tecnicas\/problema15.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=20&sourceFilePath=integral-tecnicas\/problema15.pg   "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "section-1.html#exercise-31",
  "type": "Exercício",
  "number": "1.6.21",
  "title": "",
  "body": "  Encontre          Usando resultados anteriores, temos     http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=21&sourceFilePath=integral-tecnicas\/problema16.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=21&sourceFilePath=integral-tecnicas\/problema16.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=21&sourceFilePath=integral-tecnicas\/problema16.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=21&sourceFilePath=integral-tecnicas\/problema16.pg   "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "section-1.html#exercise-32",
  "type": "Exercício",
  "number": "1.6.22",
  "title": "",
  "body": "  Determine a integral.          A decomposição por frações parciais fornece Expandindo e coletando as potências de , encontramos , então    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=22&sourceFilePath=integral-tecnicas\/problema17.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=22&sourceFilePath=integral-tecnicas\/problema17.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=22&sourceFilePath=integral-tecnicas\/problema17.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=22&sourceFilePath=integral-tecnicas\/problema17.pg   "
},
{
  "id": "references-backmatter",
  "level": "1",
  "url": "references-backmatter.html",
  "type": "Referêcias",
  "number": "2",
  "title": "Referências",
  "body": " Referências  LARSON, Ron. Cálculo Aplicado. Cursos Rápido.  Cengage Learning , 2011.  ANTON, Howard; BIVENS, Irl; DAVIS, Stephen. Cálculo.  Bookman , 2007.  HUGHES, Hallet et al. Cálculo de uma variável.  LTC , 2004.  Stewart, James. Cálculo, Volume I.  Cengage Learning , 2013.  SILVA, Leon; SANTOS, Marcelo; Machado, Ricardo. Elementos de Computação Matemática com SageMath.  SBM , 2019.  "
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
