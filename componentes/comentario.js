export const comentario = {
  template: ` 
    <form action="" class="form card p-3 shadow">
      <label for="comentario" class="form-label">Comentario: </label>
      <textarea class="form-control" col="3"></textarea>
      <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
      <div class="d-flex align-items-center">
        <input type="datetime-local" class="form-control w-25">
        <button class="btn btn-success ms-auto">Añadir comentario</button>
      </div>
    </form>`,
  script: () => {
    console.log('Componente comentario inyectado')
  }

}
