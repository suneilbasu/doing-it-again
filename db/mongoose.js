const mongoose = require('mongoose')

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(
    // "mongodb+srv://suneilbasu:somethingElse@cluster0.bpc1d.mongodb.net/tzar?retryWrites=true&w=majority"
    "mongodb+srv://superuser:p9ZV8mrRqzNG7Q3@cluster0.9fxz9.mongodb.net/tzar?retryWrites=true&w=majority"
    // "mongodb://locahost:27017/retry"

  )
}

// superuser
// p9ZV8mrRqzNG7Q3
