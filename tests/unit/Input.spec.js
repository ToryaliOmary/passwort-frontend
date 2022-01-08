import Input from '@/components/Input'
import { mount } from '@vue/test-utils'
import NewPassword from '@/views/NewPassword'

describe('testing Input', () => {
  it('should have Input - Component', () => {
    const wrapper = mount(NewPassword) // Seite wird gemounted (GET)

    const accordion = wrapper.findComponent(Input)
    expect(accordion.exists()).toBeTruthy()
  })
})
