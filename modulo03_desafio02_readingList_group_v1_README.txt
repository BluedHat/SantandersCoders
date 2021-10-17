///////////////////////////////////////////////////////////

//Integrantes do Grupo

//Yan Matheus
//Marisa Salles
//Heloísa Bezerra

////////////////////////////// CÓDIGOS //////////////////////

Links do GitHub aonde os arquivos foram disponibilizados o acesso as soluções propostas realizado a partir de qualquer um  dos links
descritos a seguir.

Solução 1 - https://github.com/BluedHat/SantandersCoders/ -  FileName: modulo03_desafio02_readingList_group_v1.js
Solução 2 - https://github.com/yanvr/Desafio-BookList     -  FileName: 
Solução 3 -                                               -  FileName:

///////////////////////////  OBJETIVO ///////////////////// 

Objetivo:

Criar duas classes uma denominada Book -  contendo as caracterísiticas básicas de um livro
(Autor, generô, titulo, etc)
Criar um classe Booklist com o intuido de armazenas novos registros de livros contendo as seguintes particularidades:

1 - Os novos livros serão adicionados pelo método .addBook
2 - Os usuários precisam ter o poder de marcar um livro não lido, como lido
a partir do método .finished
3 - É necessário ser possível inserir nos livros a data de encerramento da leitura, bem como
o controle do que está sendo lido no momento, o que já foi lido e os possíveis novos interesses de leitura
4 - Não ha menção sobre limitações no Booklist.
5 - Itens adicionais serão bem vindos.

Com base nisto, propomos 3 soluções distintas para a criação do Booklist:

///////////////////// SOLUÇÕES ///////////////////////////////////

//////////////////// SOLUÇÃO 1 ////////////////////////////////////

Filename:  modulo03_desafio02_readingList_group_v1.js

Objetivo -  Como a manobra não é interativa houve exploração do array para armazenamento 
dos objetos e do console.table para retorno em tela


//////////////////////////  DESCRIÇÃO SUCINTA DOS ITENS DA SOLUÇÃO 1 //////////

Class Book - > Contém os parâmetros do Livros
Class Booklist -> Contém os detalhes da Biblioteca
Funções de BookList ->

.addBook    - cria um novo livro (parâmetros possíveis (title, genre, author, read, *DateRead))
DateRead    -  valor automatizado, gerado a partir do momento em que um livro é marcado como Lido
.finished   - altera o status de um livro não finalizado para finalizado. 
(parâmetros possíveis (title, genre, author, read, *DateRead))
.BookObject - Apresenta as sugestões para ler e confirma os itens registrados como leitura em andamento.
.searchByAuthor - Busca titulo pelo author na biblioteca geral
.searchByGenre  - Busca titulo pelo author na biblioteca geral
..searchByTitle - Busca titulo pelo author na biblioteca geral


///////////////////////// EXPLICAÇÃO DO FUNCIONAMENTO DA SOLUÇÃO 1 //////

1 - Booklist Extends Book
2 - Foram criadas uma biblioteca geral, Library e 2 bibliotecas secundárias, Livros Lidos/Em leitura e Livros Não Lidos
2 - A função .addBook já realiza as alterações necessárias em função da forma como o livro ingressa na Booklist
    status de Lido, Lendo ou Não Lido
3 - A função finished varre a biblioteca de livros não lidos/em leitura e permite ao usuário marcar o mesmo como lido.
    Esta função efetua a remoção do livro da biblioteca Não Lidos e o insere na Biblioteca Lidos. Em função disto, para 
    evitar possíveis erros a ação ação de remoção 
4 - Ao manipular um livro(finalizar ou inserir) o usuário recebe retorno em tela sobre quantos livros existem, os status dos mesmos (Para Ler ou Lido)
    e ao final da inserção ou remoção dos livros o panorama geral das bibliotecas
5 - A opção BookObjeto apresenta ao usuário sugestões para continuar lendo (todos os livros com status reading) e Os livros em que a leitura 
    não foi iniciada.

//////////////////// SOLUÇÃO 2 ////////////////////////////////////

//////////////////////////  DESCRIÇÃO SUCINTA DOS ITENS DA SOLUÇÃO 2 //////////

///////////////////////// EXPLICAÇÃO DO FUNCIONAMENTO DA SOLUÇÃO 2 //////

Objetivo - 

//////////////////// SOLUÇÃO 3 ////////////////////////////////////

//////////////////////////  DESCRIÇÃO SUCINTA DOS ITENS DA SOLUÇÃO 3 //////////

///////////////////////// EXPLICAÇÃO DO FUNCIONAMENTO DA SOLUÇÃO 3 //////

Objetivo - 

