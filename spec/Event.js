/* global State, describe, it, expect, should */

describe('Event', function () {
  'use strict';

  var event = new Event();

  it('constructor() exists', function () {
    expect(Event).to.be.a('function');
  });

  it('addTrigger() exists', function () {
    expect(event.addTrigger).to.be.a('function');
  });

  it('hideTrigger() exists', function () {
    expect(event.hideTrigger).to.be.a('function');
  });

  it('showTrigger() exists', function () {
    expect(event.showTrigger).to.be.a('function');
  });

  it('getOutcome() exists', function () {
    expect(event.getOutcome).to.be.a('function');
  });

  it('changeState() exists', function () {
    expect(event.changeState).to.be.a('function');
  });

  it('transition() exists', function () {
    expect(event.transition).to.be.a('function');
  });

});
