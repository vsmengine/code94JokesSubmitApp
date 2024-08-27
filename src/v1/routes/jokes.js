/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: The jokes managing API (Protected endpoint)
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - content
 *         - category
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the jole
 *         title:
 *           type: string
 *           description: The title of the joke
 *         author:
 *           type: string
 *           description: The author of the joke
 *         content:
 *           type: string
 *           description: The content of the joke
 *         category:
 *           type: string
 *           description: The category of the joke
 *       example:
 *         _id: 66cc5be81e7474523460a97b,
 *         title: Test title,
 *         author: Test author,
 *         category: Test category,
 *         content": Test content
 */

const express = require('express');

const router = express.Router();
const jokesController =  require('./../../controllers/jokeController');
const moderateAuthMiddleware = require('../../utils/moderateAuthMiddleware');

/**
 * @swagger
 * /joke:
*   post:
*     summary: Create a new joke
*     tags: [Jokes]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Joke'
*     responses:
*       200:
*         description: The joke is created.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Joke'
*       500:
*         description: A server error is occured
*/
router.post('/', async (req, res, next) => {
    jokesController.addJoke(req, res);
});

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Get all jokes ( Protected endpoint )
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: The list of jokes fetched
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 */
router.get('/', async (req, res, next) => {
    jokesController.getAllJokes(req, res);
});

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Get the joke by id
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the joke
 *     responses:
 *       200:
 *         description: The joke response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: The joke was not found
 */
router.get('/:id', async (req, res, next) => {
    jokesController.getJoke(req, res);
});

/**
 * @swagger
 * /jokes/{id}:
 *   put:
 *    summary: Update the joke by the id
 *    tags: [Jokes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the joke
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Joke'
 *    responses:
 *      200:
 *        description: The joke was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Joke'
 *      404:
 *        description: The joke was not found
 *      500:
 *        description: A server error is occured
 */
router.put('/:id', async (req, res, next) => {
    jokesController.updateJoke(req, res);
});

/**
 * @swagger
 * /jokes/{id}:
 *   delete:
 *     summary: Remove the joke by id
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the joke
 *     responses:
 *       200:
 *         description: The joke was deleted
 *       404:
 *         description: The joke was not found
 */
router.delete('/:id', async (req, res, next) => {
    jokesController.deleteJoke(req, res);
});

module.exports = router;
