import { mount } from '@vue/test-utils'
import Accordion from '@/components/Accordion'
import Table from '@/components/Table'

describe('Testing Accordion', () => {
  it('renders a Table for each password', () => {
    const wrapper = mount(Accordion, {
      propsDate: {
        password: [
          {
            id: 100,
            website: 'www.Input.Test.de',
            passwort: 'IputTest',
            arbeitsbereich: 'Privat'
          },
          {
            id: 101,
            website: 'www.Input.Test2.de',
            passwort: 'IputTest2',
            arbeitsbereich: 'Beruf'
          },
          {
            id: 102,
            website: 'www.Input.Test3.de',
            passwort: 'IputTest3',
            arbeitsbereich: 'Sonstiges'
          }
        ]
      }
    })
    const input = wrapper.findAllComponents(Table)
    expect(input.length).toBe(3) // 3 Accordions für 3 Einträge
  })
})
