//import test modules
import React from 'react';
import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { mount } from 'enzyme';
//import Component
import { NoteListHeader } from './NoteListHeader';
import { notes } from '../fixtures/fixtures';
//if on client, set up describe block
if (Meteor.isClient) {
  describe('NoteListHeader', function() {
    let meteorCall;
    let Session;

    beforeEach(function() {
      meteorCall = expect.createSpy();
      Session = {
        set: expect.createSpy()
      }
    });

  it('should call meteorCall onClick', function() {
      const wrapper = mount(<NoteListHeader meteorCall={meteorCall} Session={Session}/>);

      wrapper.find('button').simulate('click');
      meteorCall.calls[0].arguments[1](undefined, notes[0]._id);

      expect(meteorCall.calls[0].arguments[0]).toBe('notes.insert');
      expect(Session.set).toHaveBeenCalledWith('selectedNoteId', notes[0]._id);
    });

    // it should not set session for failed insert
    it('should not call meteorCall onClick', function() {
        const wrapper = mount(<NoteListHeader meteorCall={meteorCall} Session={Session}/>);

        wrapper.find('button').simulate('click');
        meteorCall.calls[0].arguments[1]({}, undefined);

        expect(meteorCall.calls[0].arguments[0]).toBe('notes.insert');
        expect(Session.set).toNotHaveBeenCalled();
      });

  });
};




  //simulate button click
  //assert spy was called correctly
