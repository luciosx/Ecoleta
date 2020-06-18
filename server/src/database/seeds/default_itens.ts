import Knex from 'knex';

//insere itens predefinidos na tabela items
export async function seed(knex: Knex) {
    await knex('items').insert([
        {title: 'Lampadas', image: 'lampadas.svg'},
        {title: 'Pilha e Baterias', image: 'baterias.svg'},
        {title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
        {title: 'Resíduos Eletrônicos', image: 'eletronicos.svg'},
        {title: 'Resíduos Orgânicos', image: 'organicos.svg'},
        {title: 'Óleo de Cozinha', image: 'oleo.svg'},
    ]);
}