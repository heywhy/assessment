declare module 'compiled-lang/*.json' {
  import { IntlConfig } from '@formatjs/intl'

  const messages: IntlConfig['messages']
  export default messages
}
