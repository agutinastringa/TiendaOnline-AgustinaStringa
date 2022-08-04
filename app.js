let producto = prompt('¿Que producto desea comprar? \n1. Cubre Grip \n2. Protector de paleta \n3. Funda para paleta \n99. Salir');
while (producto != '99'){
    let precio;
    switch(producto){
        case '1':
            precio = 500;
            calcularCuotas(precio);
            break;
        case '2':
            precio = 1000;
            calcularCuotas(precio);
            break;
        case '3':
            precio = 2500;
            calcularCuotas(precio);
            break;
        default:
            alert('Producto no reconocido')
            break;
    }
    producto = prompt('¿Que producto desea comprar? \n1.Cubre Grip \n2. Protector de paleta \n3. Funda para paleta \n99. Salir');
}

function calcularCuotas(precio){
    porcentaje = precio * 0.15;
    tresCuotas = porcentaje * 3;
    tresTotal = tresCuotas *3;
    seisCuotas = porcentaje * 6;
    seisTotal = seisCuotas * 6;
    cuotas = prompt('En cuantas cuotas desea pagarlo? \n1. 1 x $' + precio + ' ($' + precio + ') \n3. 3 x $' + tresCuotas + ' ($' + tresTotal + ') \n6. 6 x $' + seisCuotas + ' ($' + seisTotal + ') \n99. Salir');
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
                cuotas = prompt('En cuantas cuotas desea pagarlo? \n1. 1 x $' + precio + ' ($' + precio + ') \n3. 3 x $' + tresCuotas + ' ($' + tresTotal + ') \n6. 6 x $' + seisCuotas + ' ($' + seisTotal + ') \n99. Salir');
                break;
        }
        alert('Vuelva pronto!!');
        cuotas = 99;
    }
}
