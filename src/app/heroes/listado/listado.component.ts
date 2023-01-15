import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Batman', 'Spiderman', 'Hulk', 'Thor','Super Man', 'Goku', 'Mr. Fantastico'];
  heroeBorrado: string = '';
  borrar(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
  
}
