import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            name: 'sound name',
            uploadedBy: 'john doe',
            data: 'Sample sound',
            url: 'https://s3.amazonaws.com/www.sound-democracy.xyz/samples/EDM-6.mp3'
        }, {
            name: 'sound name',
            uploadedBy: 'john doe',
            data: 'Sample sound',
            url: 'https://s3.amazonaws.com/www.sound-democracy.xyz/samples/Renegade-Heart.mp3'
        }]
    }
});
