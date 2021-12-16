import {createStore, createApi} from 'effector'
import {useStore} from 'effector-react'

export const $isExpand = createStore<Boolean>(false)

export const {toggle} = createApi($isExpand, {
  toggle: state => !state,
})

$isExpand.watch(expand => {
  console.log('state:', expand);
})