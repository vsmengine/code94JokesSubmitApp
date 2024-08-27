const authService = require('./../services/authService');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'sampath_vithanage';

const getAuthUser = async (req, res) => {
    const userData = req.body;
    const user = await authService.getAuthUser(userData);

    if (!user) {
        return res.status(400).send({
            message: 'User doesnt exsist',
            data: null
        });
    }

    // TODO: bycript password when encripted
    // const isValidPassword = await bcrypt.compare(userData.password, user.password);
    // if (!validPassword) return res.status(400).json({ message: 'Password doesnt match' });
    if (user && user.password !== userData.password) {
        return res.status(400).send({
            message: 'Password doesnt match',
            data: null
        });
    }
    
    if (user && user.password === userData.password) {
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).send({ token });
    }
}

module.exports = {
    getAuthUser
}
