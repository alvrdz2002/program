import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  preguntasFrecuentes = [
    
    { pregunta: '¿Cómo puedo verificar la calidad del trabajo de un freelancer antes de contratarlo?', respuesta: 'Antes de contratar a un freelancer, revisa su perfil para ver sus proyectos anteriores, calificaciones y comentarios de otros clientes. Puedes pedir muestras de trabajo, realizar entrevistas y discutir detalladamente tus expectativas para asegurarte de que se ajuste a tus necesidades.', portada:'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/external-user-tracking-app-inipagistudio-mixed-inipagistudio.png' },
    { pregunta: '¿Qué debo hacer si surge un problema durante el proyecto?', respuesta: 'Si surge un problema, comunícate primero con el freelancer para abordar la situación. Si no puedes resolverlo directamente, puedes utilizar las herramientas de resolución de disputas de la plataforma o ponerte en contacto con el servicio de atención al cliente para obtener asistencia adicional.', portada:'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/external-user-tracking-app-inipagistudio-mixed-inipagistudio.png' },
    { pregunta: '¿Cuánto tiempo tarda en liberarse el pago?', respuesta: 'Cada proyecto tiene diferentes limites acordados entre el cliente y el freelancer, el  promedio de duracion de nuestro trabajo de la plataforma es de un mes.', portada:'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/external-user-tracking-app-inipagistudio-mixed-inipagistudio.png' },
    { pregunta: '¿Cómo funciona el proceso de contratación?', respuesta: 'busca en la sección de proyectos disponibles o publica tu propio proyecto. Revisa los perfiles de los freelancers, sus habilidades y calificaciones. Cuando encuentres a alguien adecuado, puedes enviarles un mensaje o hacerles una oferta.', portada:'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/external-user-tracking-app-inipagistudio-mixed-inipagistudio.png' },
    // Agrega más preguntas según sea necesario
  ];

  constructor() {
    this.respuestasAbiertas = Array(this.preguntasFrecuentes.length).fill(false);
  }
  

  respuestasAbiertas: boolean[] = [];

  toggleRespuesta(index: number): void {
    this.respuestasAbiertas[index] = !this.respuestasAbiertas[index];
  }
}
