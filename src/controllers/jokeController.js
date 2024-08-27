const jokeService =  require('../services/jokeService');

const getAllJokes = async (req, res) => {
    // Get all jokes
    const jokes = await jokeService.getAllJokes();
    res.send(jokes);
}

const getJoke = async (req, res) => {
    // Get joke
    const id = req.param('id');
    const joke = await jokeService.getJoke(id);
    res.send(joke);
}

const addJoke = async (req, res) => {
    // Add joke
    const data = req.body;
    const joke = await jokeService.addJoke(data);
    res.send(joke);
}

const updateJoke = async (req, res) => {
    // Update joke
    const id = req.param('id');
    const data = req.body;
    const joke = await jokeService.updateJoke(id, data);
    res.send(joke);
}

const deleteJoke = async (req, res) => {
    // Delete joke
    const id = req.param('id');
    const joke = await jokeService.deleteJoke(id);
    res.send(joke);
}

module.exports = {
    getAllJokes,
    getJoke,
    addJoke,
    updateJoke,
    deleteJoke
}
