module.exports = {
    home: (req, res) => {
        
        res.render('index' , {
            title : 'Labrinth',
            css: 'index.css'
        })
    }
}