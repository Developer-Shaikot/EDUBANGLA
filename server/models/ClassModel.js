const { model, Schema } = require("mongoose");

const classSchema = new Schema({
	classTitle: {
        type: String,
        required: true,
        trim: true,
    },
});


