import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
  title: '테스트/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    disabled: {
      description: '비활성화',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'test',
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  disabled: true,
}
