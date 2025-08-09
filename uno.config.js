import { defineConfig, presetUno } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        120: '#0D0D0D',
        DEFAULT: '#1A1A1A',
        80: '#333333',
        60: '#4D4D4D',
        40: '#666666',
        20: '#B3B3B3',
        10: '#E6E6E6',
      },
      gray: {
        140: '#0A0A0A',
        120: '#171717',
        DEFAULT: '#262626',
        70: '#404040',
        60: '#525252',
        50: '#737373',
        40: '#A3A3A3',
        30: '#D4D4D4',
        20: '#E5E5E5',
        10: '#F5F5F5',
      },
    },
  },
  shortcuts: {
    'border-only-r':
      'border-r-[1px] border-r-gray-10 border-solid border-t-0 border-b-0 border-l-0',
    'border-custom': 'border border-solid border-gray-20 rounded-2 p-4',
    btn: 'inline-block rounded-lg px-3 py-2 text-xs font-medium text-center text-white transition-colors duration-300 cursor-pointer',
    'btn-outline':
      'border border-black text-gray-1 hover:border-primary hover:bg-primary hover:text-white cursor-pointer',
    'btn-primary':
      'border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer',
    'btn-add':
      'bg-transparent border border-green text-green font-semibold hover:text-white hover:bg-green-500 cursor-pointer',
    'btn-del':
      'bg-transparent border border-red text-red font-semibold hover:text-white hover:bg-red-500 cursor-pointer',
    'btn-edit':
      'bg-transparent border border-blue text-blue-700 font-semibold hover:text-white hover:bg-blue-500 cursor-pointer',
    input:
      'border border-solid rounded-lg py-2.5 mx-3 bg-white outline-none transition-2 focus:border-gray-50 focus:shadow-inset shadow-sm',
  },
  presets: [presetUno(), presetDaisy()],
})
