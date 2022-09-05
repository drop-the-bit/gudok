import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from 'button'

export default {
  title: '테스트/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'child elements',
      control: 'text',
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
