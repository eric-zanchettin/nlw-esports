interface ButtonProps {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return <button>{children}</button>
};

function App() {
  return (
    <>
      <Button>
        Send 1
      </Button>
      <Button>
        Send 2
      </Button>
      <Button>
        Send 3
      </Button>
    </>
  )
}

export default App
