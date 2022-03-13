function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoup (nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ju = new clientePoup('Ju', '06355968903', 'ju@email.com', 100, 200)
console.table(ju)

clientePoup.prototype.depositarPoup =  function (valor){
    this.saldoPoup += valor
}

ju.depositarPoup(35)
console.log(ju.saldoPoup)