const mongoose=require('mongoose');

const db='mongodb+srv://username:password@cluster0.ldp5q.mongodb.net/?retryWrites=true&w=majority'; //db url
//mongoose.set('useFindAndModify', false);

mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology:true})
    .then((res => console.log('Connect to db successfully!')))
    .catch(err => console.log(err))