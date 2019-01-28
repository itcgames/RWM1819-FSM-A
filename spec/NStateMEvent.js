/* global State, describe, it, expect, should */

describe('NStateMEvent', function () {
  'use strict';

  var fsmTest = new NStateMEvent();

  it('constructor() exists', function () {
    expect(NStateMEvent).to.be.a('function');
  });

  it('createTrigger() exists', function () {
    expect(fsmTest.createTrigger).to.be.a('function');
  });

  it('addState() exists', function () {
    expect(fsmTest.addState).to.be.a('function');
  });

  it('addEvent() exists', function () {
    expect(fsmTest.addEvent).to.be.a('function');
  });

  it('getAvailableEvents() exists', function () {
    expect(fsmTest.getAvailableEvents).to.be.a('function');
  });

  it('updateAvailableEvents() exists', function () {
    expect(fsmTest.updateAvailableEvents).to.be.a('function');
  });

  it('non_deterministic() exists', function () {
    expect(fsmTest.non_deterministic).to.be.a('function');
  });

  it('changeState() exists', function () {
    expect(fsmTest.changeState).to.be.a('function');
  });

  it('update() exists', function () {
    expect(fsmTest.update).to.be.a('function');
  });

  it('draw() exists', function () {
    expect(fsmTest.draw).to.be.a('function');
  });

  it('drawTable() exists', function () {
    expect(fsmTest.drawTable).to.be.a('function');
  });

  it('drawGraph() exists', function () {
    expect(fsmTest.drawGraph).to.be.a('function');
  });
});
