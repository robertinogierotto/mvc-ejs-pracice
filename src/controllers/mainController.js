// Acá nos falta nuestra fuente de datos
const platos = [
    {
        id: 1,
        nombre: 'Carpaccio fresco',
        descripcion: 'Entrada Carpaccio de salmón con cítricos U$S 65.50',
        precio: 'U$S 65.50',
        descripcionD: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
    {
        id: 2,
        nombre: 'Risotto de berenjena',
        descripcion: 'Risotto de berenjena y queso de cabra U$S 47.00',
        precio: 'U$S 47.00',
    },
    {
        id: 3,
        nombre: 'Mousse de arroz',
        descripcion: 'Mousse de arroz con leche y aroma de azahar U$S 27.50',
        precio: 'U$S 27.50',
        
    },
    {
        id: 4,
        nombre: 'Espárragos blancos',
        descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico U$S 37.50',
        precio: 'U$S 37.50',
    }
]

// Acá nos falta un objeto literal con las acciones para cada ruta

const main = {
    index: (req,res) => {
        res.render('index', { platos: platos });
    },
    detalleDelPlato: (req,res) => {
        const parametro = req.params.idPlato
        const platoParaEnviar = platos.find( platos => platos.id == parametro)
        res.render('detalleMenu', { plato: platoParaEnviar} );
    }
}
// Acá exportamos el resultado

module.exports = main;