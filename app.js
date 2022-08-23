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
    let container = document.getElementById("contenedor");
    let porcentaje = total * 0.15;
    let descuento = total - porcentaje;
    let tresCuotas = porcentaje * 3;
    let tresTotal = tresCuotas *3;
    let seisCuotas = porcentaje * 6;
    let seisTotal = seisCuotas * 6;
    let cuotas = prompt('En cuantas cuotas desea pagarlo? \n0. Transferencia bancaria (15% descuento) $' + descuento + '\n1. 1 x $' + total + ' ($' + total + ') \n3. 3 x $' + tresCuotas + ' ($' + tresTotal + ') \n6. 6 x $' + seisCuotas + ' ($' + seisTotal + ') \n99. Salir');
    while(cuotas != '99'){
        switch(cuotas){
            case '0':
                const hoy = new Date();
                const milisegundosPorDia = 86400000;
                const maniana = new Date(hoy.getTime() + milisegundosPorDia);
                container.innerHTML = '<h2>Gracias por su compra!!</h2><p>Debe realizar la transferencia bancaria al alias: PADEL.TO antes del ' + maniana.toLocaleString() + '</p>';
                break;
            case '1':
                container.innerHTML = '<h2>Gracias por su compra!!</h2><p>Su pago se realizará en 1 cuota de $' + precio + '</p>';
                break;
            case '3':
                container.innerHTML = '<h2>Gracias por su compra!!</h2><p>Su pago se realizará en 3 cuotas de $' + tresCuotas + '</p>';
                break;
            case '6':
                container.innerHTML = '<h2>Gracias por su compra!!</h2><p>Su pago se realizará en 6 cuotas de $' + seisCuotas + '</p>';
                break;
            default:
                alert('Opción incorrecta');
                cuotas = prompt('En cuantas cuotas desea pagarlo? \n1. 1 x $' + total + ' ($' + total + ') \n3. 3 x $' + tresCuotas + ' ($' + tresTotal + ') \n6. 6 x $' + seisCuotas + ' ($' + seisTotal + ') \n99. Salir');
                break;
        }
        cuotas = 99;
    }
}