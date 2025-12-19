import {
  Box,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { globalSearchService } from './globalSearch.service'
import type { SearchResult } from './globalSearch.types'

export default function GlobalSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query) {
        setResults([])
        return
      }
      const data = await globalSearchService.search(query)
      setResults(data)
      setOpen(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  const handleSelect = (route: string) => {
    navigate(route)
    setOpen(false)
    setQuery('')
  }

  return (
    <Box position="relative" width={320}>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        sx={{
          backgroundColor: 'background.paper',
          px: 2,
          py: 1,
          borderRadius: 2,
        }}
      >
        <SearchIcon fontSize="small" />
        <InputBase
          placeholder="Search users, orders, pages..."
          fullWidth
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query && setOpen(true)}
        />
      </Box>

      {open && results.length > 0 && (
        <Paper
          sx={{
            position: 'absolute',
            top: '110%',
            width: '100%',
            zIndex: 10,
            maxHeight: 320,
            overflowY: 'auto',
          }}
        >
          <List>
            {results.map(r => (
              <ListItemButton
                key={r.id}
                onClick={() => handleSelect(r.route)}
              >
                <ListItemText
                  primary={r.label}
                  secondary={r.subLabel || r.type.toUpperCase()}
                />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  )
}
