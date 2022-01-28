import React from 'react'

type AnonymousUnion = keyof { [key: string]: unknown }

export type Columns<T> = {
  id: T
  label: string
}[]

export type Rows<T extends AnonymousUnion> = {
  [P in T]: string
}[]

export type UniqueColumn<T> = T

type Props<T extends AnonymousUnion> = {
  columns: Columns<T>
  rows: Rows<T>
  uniqueColumn: UniqueColumn<T>
}

export const Table: React.VFC<Props<AnonymousUnion>> = ({ columns, rows, uniqueColumn }) => (
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
        <tr key={r[uniqueColumn]}>
          {columns.map(c => (
            <td key={c.id}>{r[c.id]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)
