import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import  WalletOptions  from './WalletOptions'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <WalletOptions/>
      </QueryClientProvider> 
    </WagmiProvider>
  )
}
export default App;