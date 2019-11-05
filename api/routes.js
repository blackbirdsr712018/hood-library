// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

router.get('/classes', (req, res) => {

    res.json( [
        {
            id: '000',
            name:'Computer science, information and general works',
            title: 'Computer science',
            image: 'cs.jpg'
        },
        {
            id: '100',
            name:'Philosophy and psychology',
            title: 'Philosophy',
            image: 'ps.jpg',
            sections:[
                {id:'000', title:'Computer science'},
                {id:'010', title:'Bibliographies'},
                {id:'020', title:'Library & information sciences'},
                {id:'030', title:'Encyclopedias & books of facts'},
            ]
        },{
            id: '200',
            name:'Religion',
            title: 'Religion',
            image: 're.jpg'
    
        },{
            id: '300',
            name:'Social sciences',
            title: 'Social sciences',
            image: 'sc.jpg'
        },{
            id: '400',
            name:'Language',
            title: 'Language',
            image: 'ln.jpg'
        },{
            id: '500',
            name:' Pure Science',
            title: ' Science',
            image: 'sp.jpg'
        },{
            id: '600',
            name:'Technology',
            title: 'Technology',
            image: 'tc.jpg'
        },{
            id: '700',
            name:'Arts and recreation',
            title: 'Arts and recreation',
            image: 'ar.jpg'
        },{
            id: '800',
            name:'Literature',
            title: 'Literature',
            image: 'li.jpg'
        },{
            id: '900',
            name:'History and geography',
            title: 'History and geography',
            image: 'hi.jpg'
        },
    ]);
});
// Export API routes
module.exports = router;