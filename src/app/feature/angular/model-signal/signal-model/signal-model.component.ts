import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-signal-model',
  standalone: true,
  imports: [],
  template: `1. Model Signal
            <br>
            <div (click)="toggle()"> Hazme click y cambiaré el valor de la propiedad del componente.</div>`,
  styleUrl: './signal-model.component.css'
})
export class SignalModelComponent {

  // This is a model input.
  checked = model(false);
  // This is a standard input.
  disabled = input(false);

  toggle() {
    // Mientras que los standard inputs son read-only,
    // tú puedes write directamente en el model-inputs.
    this.checked.set(!this.checked());
    console.log(this.checked());
  }

  //Diferencias Entre model() e input()
  //1. Tanto las funciones input() como model() son formas de definir entradas basadas en Signals en Angular,
  //pero difieren en algunas formas:
  //1.1 model() define tanto una entrada como una salida.
  //1.2 ModelSignal es una WritableSignal, lo que significa que su valor
  //se puede cambiar desde cualquier lugar utilizando los métodos set y update.
  //1.3 Los Model-Inputs no admiten transformaciones de entrada, mientras que las Input-Signals sí.

  // Cuándo usar Model signal?
  //Utilice Input-model en componentes que existen para modificar un valor
  //- en función de la interacción del usuario.
  //- Los controles de formulario personalizados,
  //como un selector de fecha o un cuadro combinado,
  //deben utilizar entradas de modelo para su valor principal.

}
