import './App.css';
import Router from './Router/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App  ">
      <QueryClientProvider client={queryClient}>
      <Router>  </Router>
      </QueryClientProvider>
     
    </div>
  );
}

export default App;
