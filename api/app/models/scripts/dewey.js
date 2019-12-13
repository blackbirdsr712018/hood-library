const axios = require('axios');

const deweys = [
    {
        "key": "300",
        "className": "Computer Science 2",
        "description": "Computer science, information & general works",
        "image": "000.jpg",
        "subjects": [
            {
                "key": "000",
                "title": "Computer science, knowledge & systems",
                "icon": ""
            },
            {
                "key": "010",
                "title": "Bibliographies",
                "icon": ""
            },
            {
                "key": "020",
                "title": " Library & information sciences",
                "icon": ""
            },
            {
                "key": "030",
                "title": "Encyclopedias & books of facts",
                "icon": ""
            },
            {
                "key": "040",
                "title": "Data processing & computer science",
                "icon": ""
            },
            {
                "key": "050",
                "title": "Magazines, journals & serials",
                "icon": ""
            },
            {
                "key": "060",
                "title": "Associations, organizations & museums",
                "icon": ""
            },
            {
                "key": "070",
                "title": "News media, journalism & publishing",
                "icon": ""
            },
            {
                "key": "080",
                "title": "Quotations",
                "icon": ""
            },
            {
                "key": "090",
                "title": " Manuscripts & rare books",
                "icon": ""
            }
           
        ]
    },
    {
        "key": "400",
        "className": "Philosophy2",
        "description": "Philosophy & psychology",
        "image": "100.jpg",
        "subjects": [
            {
                "key": "100",
                "title": "Philosophy & psychology",
                "icon": ""
            },
            {
                "key": "110",
                "title": " Metaphysics",
                "icon": ""
            },
            {
                "key": "120",
                "title": "Epistemology",
                "icon": ""
            },
            {
                "key": "130",
                "title": "Parapsychology & occultism",
                "icon": ""
            },
            {
                "key": "140",
                "title": "Philosophical schools of thought",
                "icon": ""
            },
            {
                "key": "150",
                "title": " Psychology",
                "icon": ""
            },
            {
                "key": "160",
                "title": "Philosophical logic",
                "icon": ""
            },
            {
                "key": "170",
                "title": " Ethics",
                "icon": ""
            },
            {
                "key": "180",
                "title": "Ancient, medieval, & Eastern philosophy",
                "icon": ""
            },
            {
                "key": "190",
                "title": "Modern Western philosophy",
                "icon": ""
            }
           
        ]
    }
]


deweys.forEach(data => {
    axios.post('http://localhost:8080/deweys', data)
    .then((res) => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })
    });