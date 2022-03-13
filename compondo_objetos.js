const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '123456789',
    email: 'andre@email.com',
    fones: ['5512345', '55098765']
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataDeNasc: '20/03/2011'
}

//console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)