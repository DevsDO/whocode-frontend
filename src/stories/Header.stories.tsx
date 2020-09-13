// Button.stories.tsx

import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import Header from "../components/header"

export default {
  title: "Components/Header",
  component: Header,
} as Meta

const Template = args => <Header {...args} />

export const Basic = Template.bind({})
Basic.args = { siteTitle: "Developers Who Code" }
