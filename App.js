"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let PowerRate;
    (function (PowerRate) {
        PowerRate[PowerRate["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        PowerRate[PowerRate["fuerzaBatman"] = 1] = "fuerzaBatman";
        PowerRate[PowerRate["fuerzaFlash"] = 5] = "fuerzaFlash";
        PowerRate[PowerRate["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(PowerRate || (PowerRate = {}));
    ;
    const fuerzaFlash = PowerRate.fuerzaFlash;
    const fuerzaSuperman = PowerRate.fuerzaSuperman;
    const fuerzaBatman = PowerRate.fuerzaBatman;
    const fuerzaAcuaman = PowerRate.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
