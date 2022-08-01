type AnonymousUnion = keyof { [key: string]: unknown }

export type Columns<T> = {
  id: T
  label: string
}[]

type Row<T extends AnonymousUnion> = {
  [P in T]: { content: string; el?: JSX.Element } | { content?: string; el: JSX.Element }
}
export type RowEl<T, C extends AnonymousUnion> = (r: T) => Row<C>

export type Rows<T extends unknown[]> = T

type Props<T extends AnonymousUnion> = {
  columns: Columns<T>
  rowEl: RowEl<any, T>
  rows: Rows<unknown[]>
}

export const Table: React.FC<Props<AnonymousUnion>> = ({ columns, rowEl, rows }) => (
  <table>
    <thead>
      <tr>
        {columns.map(c => (
          <th key={c.id}>{c.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map(r => (
        <tr key={rowEl(r)['id']?.content}>
          {columns.map(c => {
            const re = rowEl(r)[c.id]
            return re ? <td key={c.id}>{re.content ? re.content : re.el}</td> : <td key={c.id} />
          })}
        </tr>
      ))}
    </tbody>
  </table>
)
