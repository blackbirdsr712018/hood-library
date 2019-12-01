db.createUser(
    {
        user : "hoodlib",
        pwd : "awsome",
        roles: [
            {
            role : "readWrite",
            db : "hood-lib"
            }
        ]
    }
)
