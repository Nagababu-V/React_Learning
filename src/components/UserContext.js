import React from 'react'
// Context tipic first create the context at top level

// Default value can be passed through the string to the CreateContext method.
const UserContext =React.createContext('Code evolution')

const UserProvider =UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext