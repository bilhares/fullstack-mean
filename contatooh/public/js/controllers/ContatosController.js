angular.module('contatooh').controller('ContatosController', function ($scope, Contato) {
    $scope.filtro = '';
    $scope.contatos = [];
    $scope.mensagem = {texto: ''};
    
    $scope.init = function () {
        buscaContatos();
    };
    $scope.init();

    function buscaContatos() {
        Contato.query(
            function (contatos) {
                console.log(contatos);
                $scope.contatos = contatos;
            },
            function (erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto : 'Não deu cerrtooo'
                }

            }
        );
    }
    $scope.remove = function (contato) {
        Contato.delete({ id: contato._id }, buscaContatos,
            function (erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto : 'Não deu cerrtooo'
                }

            });
    }
});