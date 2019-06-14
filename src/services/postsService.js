import requestPromise from 'request-promise';

import { getSampleApi } from '../endpoints';

function getPosts() {
    const options = getSampleApi();
    return requestPromise(options);
}

module.exports = {
    getPosts
}