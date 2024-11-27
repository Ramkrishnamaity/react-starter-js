import './App.css'
import Index from './components/common/Index'

function App() {

  return (
    <div>
      <Index />

      <Routes>
        <Route path="/" element={<Protector><Home /></Protector>} />
        <Route path="/dashboard" element={<Protector><Dashboard /></Protector>} />
        <Route path="/login" element={<Protector><Login /></Protector>} />
        <Route path="/signup" element={<Protector><SignUp /></Protector>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
