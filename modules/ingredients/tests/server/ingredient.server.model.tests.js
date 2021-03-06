'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Ingredient = mongoose.model('Ingredient');

/**
 * Globals
 */
var user, ingredient;

/**
 * Unit tests
 */
describe('Ingredient Model Unit Tests:', function() {
  beforeEach(function(done) {
    user = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'test@test.com',
      username: 'username',
      password: 'password'
    });

    user.save(function() { 
      ingredient = new Ingredient({
        name: 'Ingredient Name',
        user: user
      });

      done();
    });
  });

  describe('Method Save', function() {
    it('should be able to save without problems', function(done) {
      this.timeout(0);
      return ingredient.save(function(err) {
        should.not.exist(err);
        done();
      });
    });

    it('should be able to show an error when try to save without name', function(done) { 
      ingredient.name = '';

      return ingredient.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  afterEach(function(done) { 
    Ingredient.remove().exec(function(){
      User.remove().exec(function(){
        done();  
      });
    });
  });
});
