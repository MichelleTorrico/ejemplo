module.exports = {
    producto: (req, res) => {
        
        res.render('Carga' , {
            title : 'Cargar producto',
            css: 'carga.css'
        })
    }
}