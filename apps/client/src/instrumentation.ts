import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({ serviceName: 'career-compass-next-client' })
}
