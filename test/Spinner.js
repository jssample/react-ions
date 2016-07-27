import React from 'react'
import { shallow, mount } from 'enzyme'
import Spinner from '../src/components/Spinner/Spinner'

describe('Spinner', () => {
  let wrapper

  it('displays a dots spinner', () => {
    wrapper = shallow(<Spinner type='spinner-dots' />)
    expect(wrapper.hasClass('spinner-wrap')).to.equal(true)
    expect(wrapper.childAt(0).hasClass('spinner-dots')).to.equal(true)
    expect(wrapper.childAt(0).childAt(0).childAt(0).hasClass('dot1')).to.equal(true)
    expect(wrapper.childAt(0).childAt(0).childAt(1).hasClass('dot2')).to.equal(true)
  })

  it('displays a bounce spinner', () => {
    wrapper = shallow(<Spinner type='spinner-bounce' />)
    expect(wrapper.childAt(0).hasClass('spinner-bounce')).to.equal(true)
    expect(wrapper.childAt(0).childAt(0).childAt(0).hasClass('bounce1')).to.equal(true)
    expect(wrapper.childAt(0).childAt(0).childAt(1).hasClass('bounce2')).to.equal(true)
    expect(wrapper.childAt(0).childAt(0).childAt(2).hasClass('bounce3')).to.equal(true)
  })

  it('has a loading state', () => {
    wrapper = shallow(<Spinner loading={true} type='spinner-bounce' />)
    expect(wrapper.props().className).to.equal('spinner-wrap loading')
  })

  it('can be set to position: fixed', () => {
    wrapper = shallow(<Spinner loading={true} type='spinner-bounce' position='fixed' />)
    expect(wrapper.props().className).to.equal('spinner-wrap loading fixed')
  })

  it('can take an optClass', () => {
    wrapper = shallow(<Spinner loading={true} type='spinner-bounce' optClass='testing' />)
    expect(wrapper.props().className).to.equal('spinner-wrap loading testing')
  })

})