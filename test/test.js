/**
 * Created by bpeng on 7/25/16.
 */
import {assert} from 'chai';
import request from 'supertest';
import should from 'should';

describe('API end to end tests.', function() {

    let apiUrl = "http://localhost:8080/api";

    describe('Hello World', function() {
        it('should return Hello World.', function(done) {

            request(apiUrl)
                .get('/')
                .end(function(err, res) {
                    if (err) {
                        throw err;
                    }

                    res.text.should.equal('Hello world!');
                    res.status.should.equal(200);
                    done();
                });

        });
    });

    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});
