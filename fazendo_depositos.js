const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '123456789',
    email: 'andre@email.com',
    fones: ['5512345', '55098765'],
    dependentes: [
        {
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '20/03/2011'},
        
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}    

console.log(cliente.saldo)
cliente.depositar(25)
console.log(cliente.saldo)