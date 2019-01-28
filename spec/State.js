/* global State, describe, it, expect, should */

describe('State', function () {
  'use strict';

  var state = new State("test");

  it('constructor() exists', function () {
    expect(State).to.be.a('function');
  });

  it('update() exists', function () {
    expect(state.update).to.be.a('function');
  });

  it('draw() exists', function () {
    expect(state.draw).to.be.a('function');
  });


});
