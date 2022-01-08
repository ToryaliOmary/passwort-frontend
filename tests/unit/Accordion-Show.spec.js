import { mount } from '@vue/test-utils'
import Accordion from '@/components/Accordion'

describe('Testing Accordion', () => {
  it('should not show by default', () => {
    const wrapper = mount(Accordion)
    expect(wrapper.find('#collapseOne').classes()).not.toContain('show')
  })
})
