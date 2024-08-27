const MODERATE_API_KEY = 'admin-123';

const moderateAuthMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (apiKey && apiKey === MODERATE_API_KEY) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized: Moderate admin access required.' });
    }
};

module.exports = moderateAuthMiddleware;
