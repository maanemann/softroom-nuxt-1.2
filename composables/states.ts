
// § nuxt-docs->-shared-state :
// // https://nuxt.com/docs/4.x/getting-started/state-management#shared-state

// § TODO: tilføj det indhold til `app.vue` som docs (ovenfor) angiver efter dette (nedenfor)

export const useColor = () => useState<string>('color', () => 'bg-rose-300/40')

