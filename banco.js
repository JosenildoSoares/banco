function banco(conta, saldo, tipo, agencia, deposito, saque){
    this.conta = conta;
    this.saldo = saldo;
    this.saque = saque;
    this.tipo = tipo;
    this.agencia = agencia;
    this.deposito = deposito;
    this.buscarSaldo = buscarSaldo;
    this.depositar = depositar;
    this.sacar = sacar;
    this.numConta = numConta;
    function buscarSaldo(){
        return this.saldo;
    }
    function depositar(deposito){
        this.saldo = saldo + deposito;
    }
    function sacar (saque){
        this.saldo = saldo - saque;
    }
    function numConta(){
        return this.conta;
    }
}

saldo = 500

conta =parseFloat(prompt("Digite a sua conta: "));
tipo = parseFloat(prompt("Digite seu tipo de conta: "));
deposito = parseInt(prompt("Digite o valor a ser depositado: "));
agencia = parseFloat(prompt("Digite a sua agencia: "));

let minhaConta = new banco(conta, saldo, tipo, agencia, deposito);

minhaConta.depositar(deposito);

console.log('Saldo atual:R$', minhaConta.buscarSaldo(saldo));