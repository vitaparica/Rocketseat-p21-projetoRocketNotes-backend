/**
 MÉTODOS PADRÃO DENTRO DE UM CONTROLLER:

   * index  - GET para listar vários registros;
   * show   - GET para exibir um registro específico;
   * create - POST para criar um registro;
   * update - PUT para atualizar um registro;
   * delete - DELETE para remover um registro;

*/

const AppError = require("../utils/AppError");

class UsersController {
    create(request, response) {
        const { name, email, password } = request.body;

        if(!name){
            throw new AppError("Nome é obrigatório!");
        };

        if(!email){
            throw new AppError("Email é obrigatório!");
        };

        if(!password){
            throw new AppError("Por favor, digite sua senha.");
        };

        response.status(201).json({ name, email, password });
    };
};

module.exports = UsersController;