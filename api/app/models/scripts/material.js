const axios = require('axios');


var materials = [
    {
        "key": "book",
        "title": "Printed Books",
        "description": "Printed Books DEWI system",
        "image": "material-books.jpg",
    },
    {
        "key": "ebook",
        "title": "eBooks",
        "description": "e Books",
        "image": "material-ebooks.jpg",
    },
    {
        "key": "video",
        "title": "Video",
        "description": "All Videos",
        "image": "material-videos.jpg",
    },
    {
        "key": "audio",
        "title": "Audio",
        "description": "All Audio",
        "image": "material-audios.jpg",
    },
    {
        "key": "public",
        "title": "Publications",
        "description": "All Publications",
        "image": "material-publications.jpg",
    },
    {
        "key": "other",
        "title": "Uncategorized",
        "description": "Everything else",
        "image": "material-uncategorized.jpg",
    }
];

materials.forEach(data => {
axios.post('http://localhost:8080/materials', data)
.then((res) => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch((error) => {
    console.error(error)
  })
});
