const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const CollectionSchema = new Schema(
    {
        imgURL: {type: String, require: true}
    }
)

const Collection = mongoose.model('Collection', CollectionSchema); 

module.exports = Collection; 