type Props = {
  onClick: () => void
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ onClick, children }) => (
  <button type="button" onClick={() => onClick()}>
    {children}
  </button>
)
