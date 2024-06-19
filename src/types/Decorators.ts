export function ValidaDebito(target: any,propertyKey: string, descriptor: PropertyDecorator){
    const originalMethod = descriptor.value;

    descriptor.value = function(valorDeDebito: number){
     if (valorDeDebito<= 0){
        throw new Error("O valor a ser debitado precisa ser maior que zero!")
        }
        if (valorDeDebito >this.saldo){
        throw new Error ("Seu saldo é insuficiente para efetivar a transação!")
        }
    }
}