export type SearchResultType = 'page' | 'user' | 'order'

export interface SearchResult {
  id: string
  label: string
  subLabel?: string
  type: SearchResultType
  route: string
}
