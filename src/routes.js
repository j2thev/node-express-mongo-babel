import { IndexController, ItemController } from './controllers';
 
export default function routes(app) {
    app.get('/', IndexController.index);

    app.get('/item', ItemController.search);
    app.get('/item/:code', ItemController.get);
    app.post('/item', ItemController.create);
    app.put('/item/:code', ItemController.update);

    app.get('/items/posts', ItemController.getFromSampleApi);
}