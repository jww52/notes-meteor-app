import React from 'react';
import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { mount } from 'enzyme';

import { NoteListItem } from './NoteListItem';
import { notes } from '../fixtures/fixtures';

if (Meteor.isClient) {
  describe('NoteListItem', function () {
    let Session;


    beforeEach(() => {
      Session = {
        set: expect.createSpy()
      };
    });

    it('should render title and timestamp', function (){
      const wrapper = mount(<NoteListItem note={notes[0]} Session={Session}/>);

      expect(wrapper.find('h5').text()).toBe(notes[0].title);
      expect(wrapper.find('p').text()).toBe('4/03/17');
    });

    it('should set default title if no title set', function() {
      const wrapper = mount(<NoteListItem note={notes[1]} Session={Session}/>);

      expect(wrapper.find('h5').text()).toBe('Untitled note');
    });

    it('shold call set on click', function() {
      // Render NoteListItem using either note and Session
      const wrapper = mount(<NoteListItem note={notes[0]} Session={Session}/>);
      // Find the div in the comonent and simulate click
      wrapper.find('div').simulate('click');
      //expect session.set to have been called with ''
      expect(Session.set).toHaveBeenCalledWith('selectedNoteId', notes[0]._id);

    });
  });
}
