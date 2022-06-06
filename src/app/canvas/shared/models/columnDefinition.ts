export interface ColumnDefinition {
  name: string
  label?: string
  field?: string | ((row: any) => any)
  class?: string | ((row: any) => any)
  headerClass?: string
  align?: 'center' | 'left' | 'right'
  type?: 'text' | 'icon'| 'template'
  icon?: string
}
