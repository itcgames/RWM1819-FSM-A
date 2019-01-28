/* global State, describe, it, expect, should */

describe('TwoStateTwoEvent', function () {
  'use strict';

  var fsmTest = new TwoStateTwoEvent();

  it('constructor() exists', function () {
    expect(TwoStateTwoEvent).to.be.a('function');
  });

  it('createTrigger() exists', function () {
    expect(fsmTest.createTrigger).to.be.a('function');
  });

  it('changeState() exists', function () {
    expect(fsmTest.changeState).to.be.a('function');
  });

  it('useEvent() exists', function () {
    expect(fsmTest.useEvent).to.be.a('function');
  });

  it('update() exists', function () {
    expect(fsmTest.update).to.be.a('function');
  });

  it('draw() exists', function () {
    expect(fsmTest.draw).to.be.a('function');
  });

  it('non_deterministic() exists', function () {
    expect(fsmTest.non_deterministic).to.be.a('function');
  });

  it('drawTable() exists', function () {
    expect(fsmTest.drawTable).to.be.a('function');
  });

  it('drawGraph() exists', function () {
    expect(fsmTest.drawGraph).to.be.a('function');
  });

});
