import knex from 'knex';
import path from 'path';//gerencia os caminhos da nossa app

//informações da nossa conecção
const connection = knex({
    client: 'sqlite3',//nome do banco de dados
    connection: {
        filename: path.resolve(__dirname, 'database.sql')//retorna caminhos de arquivos
    },
    useNullAsDefault: true,
});

export default connection;