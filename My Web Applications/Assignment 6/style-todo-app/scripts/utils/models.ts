
export type Listener = {
    targetId: string,
    eventType: string,
    callback(): void
}

export type LoggedUser = {
    id: string,
    username: string,
    isAdmin: boolean
  }