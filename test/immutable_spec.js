import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutablility',  () => {
  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 23;
      let nextState = increment(state);

      expect(nextState).to.equal(24);
      expect(state).to.equal(23);
    });
  });

  describe('a list', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Back To The Future', 'Forest Gump');
      let nextState = addMovie(state, 'Who Framed Roger Rabbit');

      expect(nextState).to.equal(List.of(
        'Back To The Future',
        'Forest Gump',
        'Who Framed Roger Rabbit'
      ));

      expect(state).to.equal(List.of(
        'Back To The Future',
        'Forest Gump'
      ));
    });
  });

  describe('a tree', () => {

    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });
  });

});
