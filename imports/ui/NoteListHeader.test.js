//import test modules
import React from 'react';
import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { mount } from 'enzyme';
//import Component
import { NoteListHeader } from './NoteListHeader';
//if on client, set up describe block
if (Meteor.isClient) {
  describe('NoteListHeader', function() {

  it('should call meteorCall onClick', function() {
      //create spy
      const spy = expect.createSpy();
      //render component with spy
      const wrapper = mount(<NoteListHeader meteorCall={spy}/>);

      wrapper.find('button').simulate('click');

      expect(spy).toHaveBeenCalledWith('notes.insert');
  });

  });
};




  //simulate button click
  //assert spy was called correctly
