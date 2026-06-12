import React from 'react'
import { render } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export function renderWithProviders(ui:any){
  const server = setupServer(...handlers)
  server.listen({ onUnhandledRequest: 'warn' })
  const result = render(ui)
  // Return cleanup helpers and server
  return { ...result, server }
}
