import React from 'react';
import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
  describe('NoteListItem', function () {

    it('should render title and timestamp', function (){
      const title = 'My title';
      const updatedAt = 1491254901151;
      const wrapper = mount(<NoteListItem note={{title, updatedAt}}/>);

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('4/05/17');
    });

    it('should set default title if no title set', function() {
      const title = undefined;
      const updatedAt = 1491254901151;
      const wrapper = mount(<NoteListItem note={{title, updatedAt}}/>);

      expect(wrapper.find('h5').text()).toBe('Untitled note');
    });
  });
}
