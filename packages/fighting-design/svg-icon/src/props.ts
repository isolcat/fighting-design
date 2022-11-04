import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type { HandleMouseEventInterface } from '../../_interface'

export const Props = {
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  color: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  click: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null
  }
} as const

export type SvgIconPropsType = ExtractPropTypes<typeof Props>
