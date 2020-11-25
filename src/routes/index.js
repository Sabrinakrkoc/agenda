const admin = require('firebase-admin')

let serviceAccount = require('../../crud-firebase-app-4452a-firebase-adminsdk-b8nx3-c51b1d2752.json')

// admin.initializeApp({
//     credential: admin.credencial.cert(serviceAccount),
//     databaseUrl: 'https://crud-firebase-app-4452a.firebaseio.com/'
// })
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://crud-firebase-app-4452a.firebaseio.com"
  });

const db = admin.database()

const {Router} = require('express')
const router = Router()

//traer los datos de la base de datos
router.get('/', (req, res)=>{
    db.ref('contacts').once('value', (snapshot) =>{
        data = snapshot.val()
        res.render('index', {contacts: data})
    })
})

//dar de alta un contacto
router.post('/new-contact', async(req, res) => {
    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    await db.ref('contacts').push(newContact)
    res.redirect('/')
})

//borrar contacto
router.get('/delete-contact/:id', (req, res)=>{
    db.ref('contacts/' + req.params.id).remove()
    res.redirect('/')
})



module.exports = router