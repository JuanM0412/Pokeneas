const app = require('./config/app'); 
const apiRoutes = require('./app/routes/api')
const webRoutes = require('./app/routes/web')

app.use('/api', apiRoutes)
app.use('/', webRoutes)

app.listen(app.get('port'), () => {
    console.log(`Port: ${app.get('port')}`)
})