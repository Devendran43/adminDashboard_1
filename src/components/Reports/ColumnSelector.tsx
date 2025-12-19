import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material'

interface ColumnOption {
  field: string
  headerName: string
}

interface ColumnSelectorProps {
  columns: ColumnOption[]
  selected: string[]
  onChange: (fields: string[]) => void
}

export default function ColumnSelector({
  columns,
  selected,
  onChange,
}: ColumnSelectorProps) {
  const toggle = (field: string) => {
    if (selected.includes(field)) {
      onChange(selected.filter(f => f !== field))
    } else {
      onChange([...selected, field])
    }
  }

  return (
    <Box>
      <Typography fontWeight={500} mb={1}>
        Select Columns
      </Typography>

      {columns.map(col => (
        <FormControlLabel
          key={col.field}
          control={
            <Checkbox
              checked={selected.includes(col.field)}
              onChange={() => toggle(col.field)}
            />
          }
          label={col.headerName}
        />
      ))}
    </Box>
  )
}
