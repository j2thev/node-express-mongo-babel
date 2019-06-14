import { Item } from '../models';
import { PostsService } from '../services';

function search(req, res) {
    const findOptions = { ...req.query };

    Item.find(findOptions)
        .then(items => {
            res.status(200).json({
                items
            })
        })
        .catch(err => {
            res.status(400).json({
                error: err
            });
        });
}

function get(req, res) {
    const code = req.params.code;
    const findOptions = {
        code
    };

    Item.findOne(findOptions)
        .then(item => {
            const result = item || {};

            res.status(200).json({
                item: result
            })
        })
        .catch(err => {
            res.status(400).json({
                error: err
            });
        });
}

function create(req, res) {
    const item = req.body;

    Item.create(item)
        .then(newItem => {
            res.status(200).json({
                item: newItem
            });
        })
        .catch(err => {
            res.status(400).json({
                error: err
            });
        });
}

function update(req, res) {
    // TODO: Update Item
}

function getFromSampleApi(req, res) {
    PostsService.getPosts()
        .then(result => {
            res.status(200).json({
                posts: result
            })
        })
        .catch(err => {
            res.status(400).json({
                error: err
            })
        });
}

module.exports = {
    search,
    get,
    create,
    update,
    getFromSampleApi
}