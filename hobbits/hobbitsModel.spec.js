const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');

describe('hobbits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate();
    });

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
    describe('insert(', () => {

        it('should insert hobbits into the db', async () => {
            //insert a record
            await Hobbits.insert({name: 'Gaffer'});
            await Hobbits.insert({name: 'Frodo'});
            let hobbits = await db('hobbits');
            //assert the record was inserted
            expect(hobbits).toHaveLength(2);
        });
        
        it('should insert hobbits into the db', async () => {
            //insert a record
            const [id] = await Hobbits.insert({name: 'Gaffer'});
            const [id2] = await Hobbits.insert({name: 'Frodo'});
            let hobbit = await db('hobbits').where({id}).first();
            let hobbit2 = await db('hobbits').where({id : id2}).first();
            //assert the record was inserted
            expect(hobbit.name).toBe('Gaffer');
            expect(hobbit2.name).toBe('Frodo');
        });  
    });
});