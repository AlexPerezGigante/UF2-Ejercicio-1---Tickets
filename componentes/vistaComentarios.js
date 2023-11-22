// Creamos objeto vistaComentarios con la plantilla del h1 y h2. Creamos script que indica que se ha hecho
export const vistaComentarios = {
  template: `<div class="d-flex">
  <h1>Comentarios</h1><button class="btn btn-link ms-auto"> < Volver</button>
  </div>
  <h2 class="my-4">Código ticket: <span>123456</span></h2>`,
  script: () => {
    console.log('inyectamos h1 y h2')
  }
}
