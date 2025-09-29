import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import CalendarContent from '../CalendarContent.vue';

describe('CalendarContent', () => {
  it('renders properly', () => {
    const wrapper = mount(CalendarContent);
    expect(wrapper.find('#container').exists()).toBe(true);
  });
});
