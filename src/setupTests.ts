// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { server } from './mocks/server'
import { TextEncoder, TextDecoder } from 'fast-text-encoding'

// Assign the polyfilled TextEncoder and TextDecoder to global objects
;(global as any).TextEncoder = TextEncoder
;(global as any).TextDecoder = TextDecoder

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())
