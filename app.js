const productos = [];
let continuar = 'S';
while (continuar == 'S'){
    let producto = prompt('¿Que producto desea comprar? \n1. Cubre Grip \n2. Protector de paleta \n3. Funda para paleta');
    switch(producto){
        case '1':
            productos.push({producto: 'Cubre Grip', precio: 500});
            break;
        case '2':
            productos.push({producto: 'Protector de paleta', precio: 1000});
            break;
        case '3':
            productos.push({producto: 'Funda para paleta', precio: 2500});
            break;
        default:
            alert('Producto no reconocido')
            break;
    }
    continuar = prompt('¿Desea elegir otro producto? \nS. Si')
}
let total = 0;
for (const prod of productos){
    total = total + prod.precio;
}
calcularCuotas(total);

function calcularCuotas(total){
    porcentaje = total * 0.15;
    tresCuotas = porcentaje * 3;
    tresTotal = tresCuotas *3;
    seisCuotas = porcentaje * 6;
    seisTotal = seisCuotas * 6;
    cuotas = prompt('En cuantas cuotas desea pagarlo? \n1. 1 x $' + total + ' ($' + total + ') \n3. 3 x $' + tresCuotas + ' ($' + tresTotal + ') \n6. 6 x $' + seisCuotas + ' ($' + seisTotal + ') \n99. Salir');
    while(cuotas != '99'){
        switch(cuotas){
            case '1':
                alert('Gracias por su compra!! \nSu pago se realizará en 1 cuota de $' + precio);
                break;
            case '3':
                alert('Gracias por su compra!! \nSu pago se realizará en 3 cotas de $' + tresCuotas);
                break;
            case '6':
                alert('Gracias por su compra!! \nSu pago se realizará en 6 cotas de $' + seisCuotas);
                break;
            default:
                alert('Opción incorrecta');
                cuotas = prompt('En cuantas cuotas desea pagarlo? \n1. 1 x $' + total + ' ($' + total + ') \n3. 3 x $' + tresCuotas + ' ($' + tresTotal + ') \n6. 6 x $' + seisCuotas + ' ($' + seisTotal + ') \n99. Salir');
                break;
        }
        alert('Vuelva pronto!!');
        cuotas = 99;
    }
}
