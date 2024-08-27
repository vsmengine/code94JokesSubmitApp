const {JokeSchema, JokeModel} = require('../models/jokeModel');

const getAllJokes = async () => {
    // Get all jokkes data
    const jokes = await JokeModel.find();
    return jokes;
}

const getJoke = async (id) => {
    // Get joke data
    const joke = await JokeModel.findOne({regId : id});
    return joke;
}

const addJoke = async (data) => {
    // Add joke data
    const newJoke = new JokeModel(data);
    const exsistJoke = await JokeModel.findOne({title : newJoke.title});

    if (!exsistJoke) {
        const joke = await newJoke.save();
        console.log("Saved successfully");
        return joke;
    } else {
        console.log("Already exsists");
        return exsistJoke;
    }
}

const updateJoke = async (id, data) => {
    // Update joke data
    const exsistJoke = await JokeModel.findOne({_id : id});
    const newJoke = {...data};

    const info = await exsistJoke.updateOne(newJoke);
    if (!!info.modifiedCount) {
        console.log("Saved successfully", info);
        return {...exsistJoke._doc, ...newJoke};
    } else {
        console.log("Something went wrong");
        return null;
    }
}

const deleteJoke = async (id) => {
    // Delete joke data
    const joke = await JokeModel.findOneAndDelete({_id : id});
    if (joke._id == id) {
        console.log("Saved successfully");
        return joke;
    } else {
        console.log("Something went wrong");
        return null;
    }
}

module.exports = {
    getAllJokes,
    getJoke,
    addJoke,
    updateJoke,
    deleteJoke
}
