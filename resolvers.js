const user = {
    _id: 1,
    name: "Josh",
    email: "josh@blah.com",
    picture: "https://cloudinary.com/asdf"
}

module.exports = {
    Query: {
        me: () => user
    }
}