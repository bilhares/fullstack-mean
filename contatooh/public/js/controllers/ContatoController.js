angular.module('contatooh').controller('ContatoController', function ($scope, $routeParams, Contato) {
    
    if ($routeParams.contatoId) {
        Contato.get({ id: $routeParams.contatoId },
            function (contato) {
                $scope.contato = contato;
            },
            function (err) {
                console.log(err);

                $scope.mensagem = {
                    texto: 'nao deu '
                };
            }
        );
    } else {
        $scope.contato = new Contato();
    }
    $scope.salva = function () {
        $scope.contato.$save().then(
            function () {
                $scope.mensagem = {
                    texto: 'Salvo com sucesso'
                };
                $scope.contato = new Contato();
            }
        ).catch(function (err) {
            $scope.mensagem = { texto: 'deu ruim' };
            console.log(err);

        });
    }

});