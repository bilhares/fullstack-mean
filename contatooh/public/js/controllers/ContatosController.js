angular.module('contatooh').controller('ContatosController', function ($scope, $resource) {
    $scope.filtro = '';
    $scope.contatos = [];
    var Contato = $resource('/contatos/:id');

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

            }
        );
    }
    $scope.remove = function (contato) {
        Contato.delete({ id: contato._id }, buscaContatos,
            function (erro) {
                console.log(erro);

            });
    }
});