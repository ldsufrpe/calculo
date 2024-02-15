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
  "title": "Integral aproximada",
  "body": " Integral aproximada   Estrutura    Calcular integral aproximada usando a Regra do Trapézio    Calcular integral aproximada usando a Regra de Simpson      Em muitas aplicações de cálculo precisamos calcular uma integral definida. De fato, nem todas as funções que são integráveis tem suas primitivas conhecidas, impossibilitando a aplicação do Teorema Fundamental do Cálculo. Diante disto, métodos numéricos podem ser uma alternativa viável. Lembre-se que a integral definida é definida como um limite das somas de Riemann; assim, qualquer soma de Riemann pode ser usada como uma aproximação à integral. Já conhecemos a soma de Riemann do ponto médio, no qual a altura do retângulo é dada por . Aqui apresentaremos duas técnicas baseadas também na Soma de Riemann mas com outros critérios para aproximar o valor da integral.    Regra do Trapézio   Podemos aproximar o valor de uma integral definida usando trapézio em vez de retângulos. Na , a área abaixo do gráfico de $y=f(x)$ é aproximada por trapézios. A tecnica para obter tais aproximações é chamada de Regra do Trapézio. Para desenvolvê-la, considere uma função não negativa e contínua no intervalo . Divida o intervalo em subintervalos, cada um de largura De acordo com a podemos formar trapézios. Note que o primeiro trapézio tem área igual a Seguindo o mesmo raciocínio como os outros trapezios temos que a área das área é Dessa forma, o valor da integral definida usando a Regra do Trapézio é obtido por  Embora essa dedução pressuponha que seja contínua e não negativa em , a fórmula resultante é valida sempre que for contínua em .   Trapézios usados para aproximar a área sob o gráfico de , aproximando assim a integral definida.   (for accessibility)       Regra do Trapézio  Assuma que contínua em . Seja o número de subintervalos de e . Então      Use a Regra do Trapézio para calcular usando 4 subintervalos.    Já que , e temos . Nesse caso, os subintervalos são . Daí, . Portanto, de acordo com a :     (for accessibility)         Use a Regra do Trapézio para calcular usando cinco subintervalos.    Já que , e temos . Dessa forma, os subintervalos são Logo, . Portanto, de acordo com a :     (for accessibility)        Use a Regra do Trapézio para calcular para . Compare com o .    e         Use a Regra do Trapézio para calcular usando dois subintervalos. Compare com o .    e         Sugestão de vídeo    Problema Resolvido: Estimativa para         Regra de Simpson   Com a regra do ponto médio, estimamos áreas de regiões sob curvas usando retângulos. Em certo sentido, aproximamos a curva com funções constantes por partes. Com a Regra do trapézio, aproximamos a curva usando funções lineares por partes, em outras palavras, por polinômios do primeiro grau, em cada subintervalo. Na Regra de Simpson, é aproximada em cada subintervalo por um polinômio do segundo grau.  Para deduzir a Regra de Simpson, divida o intervalo em um número par de subintervalos, cada um de largura Em aproximamos a função pelo polinômio de grau dois que passa pelos pontos no qual Além disso, e já que . Pelo Teorema Fundamenta do Cálculo A repetição desse processo nos subintervalos fornece   Caso o número de subintervalos seja ímpar os coeficientes da expressão da Regra De Simpson obedecem a seguinte regra: e ocorrem com coeficiente 1; os aparecem com coeficiente 2 se é par e coeficiente 4 se é ímpar.    Regra de Simpson  Assuma que contínua em . Seja o número de subintervalos de e . Então      Use a Regra de Simpson para aproximar usando quatro subintervalos.    Do temos que . Portanto, de acordo com a :       Use a Regra de Simpson para calcular usando cinco subintervalos.    Do  . Portanto, de acordo com a :      Use a Regra de Simpson para calcular para . Compare com a .   depois        Use a Regra de Simpson para calcular usando 2 subintervalos. Compare com a .   Os coeficientes são .        Acurácia Comparando o resultados obtidos usando a Regra do Trapézio ( ) e a Regra de Simpson ( ) notamos que a segunda fornece uma melhor aproximação para o valor real da integral ( ).       Use a Regra do Trapézio para aproximar usando .        Use a Regra de Simpson para aproximar usando .       Para , e temos . Logo, pela :     "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "section-1.html#objectives-1",
  "type": "Objetivos",
  "number": "1",
  "title": "Estrutura",
  "body": " Estrutura    Calcular integral aproximada usando a Regra do Trapézio    Calcular integral aproximada usando a Regra de Simpson    "
},
{
  "id": "note-1",
  "level": "2",
  "url": "section-1.html#note-1",
  "type": "Nota",
  "number": "1.1",
  "title": "",
  "body": "Embora essa dedução pressuponha que seja contínua e não negativa em , a fórmula resultante é valida sempre que for contínua em . "
},
{
  "id": "fig0",
  "level": "2",
  "url": "section-1.html#fig0",
  "type": "Figura",
  "number": "1.2",
  "title": "",
  "body": " Trapézios usados para aproximar a área sob o gráfico de , aproximando assim a integral definida.   (for accessibility)   "
},
{
  "id": "ex1",
  "level": "2",
  "url": "section-1.html#ex1",
  "type": "Exemplo",
  "number": "1.3",
  "title": "",
  "body": "  Use a Regra do Trapézio para calcular usando 4 subintervalos.    Já que , e temos . Nesse caso, os subintervalos são . Daí, . Portanto, de acordo com a :     (for accessibility)      "
},
{
  "id": "ex2",
  "level": "2",
  "url": "section-1.html#ex2",
  "type": "Exemplo",
  "number": "1.5",
  "title": "",
  "body": "  Use a Regra do Trapézio para calcular usando cinco subintervalos.    Já que , e temos . Dessa forma, os subintervalos são Logo, . Portanto, de acordo com a :     (for accessibility)      "
},
{
  "id": "exer1",
  "level": "2",
  "url": "section-1.html#exer1",
  "type": "Exercício de Verificação",
  "number": "1.7",
  "title": "",
  "body": " Use a Regra do Trapézio para calcular para . Compare com o .    e       "
},
{
  "id": "exer2",
  "level": "2",
  "url": "section-1.html#exer2",
  "type": "Exercício de Verificação",
  "number": "1.8",
  "title": "",
  "body": " Use a Regra do Trapézio para calcular usando dois subintervalos. Compare com o .    e       "
},
{
  "id": "note-2",
  "level": "2",
  "url": "section-1.html#note-2",
  "type": "Nota",
  "number": "1.9",
  "title": "",
  "body": "Caso o número de subintervalos seja ímpar os coeficientes da expressão da Regra De Simpson obedecem a seguinte regra: e ocorrem com coeficiente 1; os aparecem com coeficiente 2 se é par e coeficiente 4 se é ímpar. "
},
{
  "id": "ex3",
  "level": "2",
  "url": "section-1.html#ex3",
  "type": "Exemplo",
  "number": "1.10",
  "title": "",
  "body": "  Use a Regra de Simpson para aproximar usando quatro subintervalos.    Do temos que . Portanto, de acordo com a :    "
},
{
  "id": "ex4",
  "level": "2",
  "url": "section-1.html#ex4",
  "type": "Exemplo",
  "number": "1.11",
  "title": "",
  "body": "  Use a Regra de Simpson para calcular usando cinco subintervalos.    Do  . Portanto, de acordo com a :    "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-1.html#exercise-3",
  "type": "Exercício de Verificação",
  "number": "1.12",
  "title": "",
  "body": " Use a Regra de Simpson para calcular para . Compare com a .   depois      "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-1.html#exercise-4",
  "type": "Exercício de Verificação",
  "number": "1.13",
  "title": "",
  "body": " Use a Regra de Simpson para calcular usando 2 subintervalos. Compare com a .   Os coeficientes são .      "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-1.html#exercise-5",
  "type": "Exercício",
  "number": "1.3.1",
  "title": "",
  "body": " Use a Regra do Trapézio para aproximar usando .      "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-1.html#exercise-6",
  "type": "Exercício",
  "number": "1.3.2",
  "title": "",
  "body": " Use a Regra de Simpson para aproximar usando .       Para , e temos . Logo, pela :   "
},
{
  "id": "references-backmatter",
  "level": "1",
  "url": "references-backmatter.html",
  "type": "Referêcias",
  "number": "2",
  "title": "Referências",
  "body": " Referências  LARSON, Ron. Cálculo Aplicado. Cursos Rápido.  Cengage Learning , 2011.  Stewart, James. Cálculo, Volume I.  Cengage Learning , 2013.  Pamini Thangarajah. Calculus for Scientists II.  Mount Royal University , 2020.  SILVA, Leon; SANTOS, Marcelo; Machado, Ricardo. Elementos de Computação Matemática com SageMath.  SBM , 2019.  "
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
