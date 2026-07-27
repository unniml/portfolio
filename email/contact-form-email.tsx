import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Section,
  Text,
  Link,
  Hr,
  Preview,
  Container
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  name: string
  email: string
  message: string
}

export default function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from contact form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container className='mx-auto px-10 py-10'>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight text-3xl text-black">New Contact Form Submission</Heading>
              <Text className="mb-4">You have received a new message:</Text>
              <Text className="mb-2">Name: {name}</Text>
              <Text className="mb-2">Email: {email}</Text>
              <Text className="mb-2">{message}</Text>
              <Hr className="my-4" />
              <Text className="text-sm text-gray-600">This is an automated message.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
