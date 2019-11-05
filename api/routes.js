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
            title: 'Computer science'
        },
        {
            id: '100',
            name:'Philosophy and psychology',
            title: 'Philosophy'
        },{
            id: '200',
            name:'Religion',
            title: 'Religion'
        },{
            id: '300',
            name:'Social sciences',
            title: 'Social sciences'
        },{
            id: '400',
            name:'Language',
            title: 'Language'
        },{
            id: '500',
            name:' Pure Science',
            title: ' Science'
        },{
            id: '600',
            name:'Technology',
            title: 'Technology'
        },{
            id: '700',
            name:'Arts and recreation',
            title: 'Arts and recreation'
        },{
            id: '800',
            name:'Literature',
            title: 'Literature'
        },{
            id: '900',
            name:'History and geography',
            title: 'History and geography'
        },
    ]);
});
// Export API routes
module.exports = router;