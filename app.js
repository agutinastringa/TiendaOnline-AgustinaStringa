const productos = [];
let continuarCompra = true;
while (continuarCompra){
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
    continuarCompra = confirm('¿Desea elegir otro producto?')
}
let total = 0;
calcularTotal(productos);
calcularCuotas(total);

function calcularTotal(productos){
    for (const prod of productos){
        total = total + prod.precio;
    }
}

function calcularCuotas(total){
    porcentaje = total * 0.15;
    descuento = total - porcentaje;
    tresCuotas = porcentaje * 3;
    tresTotal = tresCuotas *3;
    seisCuotas = porcentaje * 6;
    seisTotal = seisCuotas * 6;
    cuotas = prompt('En cuantas cuotas desea pagarlo? \n0. Transferencia bancaria (15% descuento) $' + descuento + '\n1. 1 x $' + total + ' ($' + total + ') \n3. 3 x $' + tresCuotas + ' ($' + tresTotal + ') \n6. 6 x $' + seisCuotas + ' ($' + seisTotal + ') \n99. Salir');
    while(cuotas != '99'){
        switch(cuotas){
            case '0':
                const hoy = new Date();
                const milisegundosPorDia = 86400000;
                const maniana = new Date(hoy.getTime() + milisegundosPorDia);
                alert('Gracias por su compra!! \nDebe realizar la transferencia bancaria al alias: PADEL.TO antes del ' + maniana.toLocaleString());
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