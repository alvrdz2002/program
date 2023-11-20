// postulados.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-postulados',
  templateUrl: './postulados.component.html',
  styleUrls: ['./postulados.component.css']
})
export class PostuladosComponent {
  searchTerm: string = '';
  selectedCategory: string = '';
  jobList: any[]  = [
    {
      title: 'Desarrollador Web',
      categoria: 'desarrollo',
      description: 'Estamos buscando un desarrollador web experimentado para un emocionante proyecto.',
      companyName: 'Mainsoft',
      companyLogo: '../../assets/empresas/mainsoft.png'
    },
    {
      title: 'Diseñador Gráfico',
      categoria: 'diseno',
      description: 'Únete a nuestro equipo como diseñador gráfico y trabaja en proyectos creativos.',
      companyName: 'Softteck Company inc.',
      companyLogo: '../../assets/empresas/softteck.jpg'
    },
    {
      title: 'Arquitecto de base de datos',
      categoria: 'db',
      description: 'Se necesita alguien que organice toda la base de datos de nuestro sistema.',
      companyName: 'Nissas inc.',
      companyLogo: '../../assets/empresas/nissan.png'
    },
    {
      title: 'Desarrollador Web',
      categoria: 'desarrollo',
      description: 'Estamos buscando un desarrollador web experimentado para un emocionante proyecto.',
      companyName: 'Mainsoft',
      companyLogo: '../../assets/empresas/mainsoft.png'
    },
    {
      title: 'Tester',
      categoria: 'tester',
      description: 'Crecimiento y confort, 2 bases que se ofrecen en mas de 4 idiomas, todo esto con trabajo remoto, mas prestaciones.',
      companyName: 'Punto singular',
      companyLogo: '../../assets/empresas/puntosing.png'
    },
    // Agrega más trabajos según sea necesario
  ];
  filteredJobs(): any[] {
    return this.jobList.filter(job =>
      job.categoria.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory === '' || job.categoria === this.selectedCategory)
    );
  }
}