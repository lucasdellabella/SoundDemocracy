import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            name: 'sound name',
            uploadedBy: 'john doe',
            data: 'Sample sound',
        }, {
            name: 'sound name',
            uploadedBy: 'john doe',
            data: 'Sample sound',
        }]
    }
});
