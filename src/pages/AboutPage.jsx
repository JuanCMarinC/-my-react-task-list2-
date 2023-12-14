
import { Container, Heading } from '@chakra-ui/react'
function AboutPage() {
  return (
    <div>
      <Container>
            <Heading mb={4}>¿Qué es mi producto y para qué sirve?</Heading>
            <br></br>
            <br></br>
            <p>El my-react-task-list es una aplicación de gestión de tareas diseñada para facilitar la organización personal y mejorar la productividad. Con una interfaz intuitiva y fácil de usar, esta aplicación permite a los usuarios realizar un seguimiento efectivo de sus tareas diarias.</p>

        <br></br>
        <br></br>
        <Heading mb={4}>¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?</Heading>
<Heading mb={5}>Agregar Tareas:</Heading> <p>Los usuarios pueden rápidamente agregar nuevas tareas con título, descripción y estado de completado o pendiente. Esto simplifica la entrada de información y ayuda a mantener un registro claro de las actividades.</p>

<Heading mb={2}>Eliminar Tareas:</Heading> <p>La función de eliminar tareas permite a los usuarios gestionar su lista, eliminando aquellas que ya no son relevantes. Esto contribuye a mantener la lista de tareas actualizada y enfocada en las actividades importantes.</p>

<Heading mb={2}>Editar Tareas:</Heading> <p>La capacidad de editar tareas brinda flexibilidad a los usuarios para ajustar detalles como el título y la descripción según sea necesario. Esto es útil para realizar cambios o actualizaciones en las tareas existentes.</p>

<Heading mb={2}>Almacenamiento Local:</Heading> <p>Todas las tareas y su estado se almacenan localmente en el navegador del usuario utilizando localStorage. Esto garantiza que la información persista incluso después de cerrar la aplicación, permitiendo una experiencia continua y sin pérdida de datos.</p>

<Heading mb={2}>Carga Automática:</Heading><p>Gracias al uso del hook useEffect, el listado de tareas se carga automáticamente desde localStorage al iniciar la aplicación. Esto asegura que los usuarios siempre tengan acceso inmediato a su información, incluso después de cerrar y volver a abrir la aplicación.</p>

<p>En resumen, my-react-task-list simplifica la gestión de tareas, ofreciendo una solución eficiente y accesible para usuarios que buscan organizar su trabajo de manera efectiva.</p>

  </Container>
    </div>

  );
}

export default AboutPage;
