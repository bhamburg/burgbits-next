import { Merriweather, Raleway } from 'next/font/google'

export const raleway = Raleway({ 
  subsets: ['latin'], 
  weight: ['700'] 
})

export const merriweather = Merriweather({ 
  subsets: ['latin'], 
  weight: ['400'],
  display: 'swap',
})