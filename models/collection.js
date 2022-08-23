const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const CollectionSchema = new Schema(
    {
        title: {type: String},
        images: [{
            imgSrc: {type: String, require: true},
            description: {type: String},
            photographer: {type: String},
            portfolioURL: {type: String}, 
            apiName: {type: String},
            apiID: {type: String}
            }]
    }
)

const Collection = mongoose.model('Collection', CollectionSchema); 

module.exports = Collection; 