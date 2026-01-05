import { StationContext } from '@/App'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useContext, useState } from 'react'
import { Button } from './ui/button'
import { Label } from './ui/label'

const CityFilter = () => {
  const { cityFilter, setCityFilter, setSelectedStationId } =
    useContext(StationContext)
  const [selectKey, setSelectKey] = useState(0)

  const handleChange = (value) => {
    setCityFilter(value)
    setSelectedStationId(null)
  }

  const clear = () => {
    setCityFilter(null)
    setSelectedStationId(null)
    setSelectKey((k) => k + 1)
  }

  return (
    <div className="flex gap-2 w-full px-4 py-5 border-b absolute top-0 left-0 z-10 bg-background">
      <Label htmlFor="cityFilter" className="shrink-0">
        City filter
      </Label>
      <Select
        key={selectKey}
        id="cityFilter"
        value={cityFilter ?? undefined}
        onValueChange={handleChange}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Berlin">Berlin</SelectItem>
          <SelectItem value="Hamburg">Hamburg</SelectItem>
          <SelectItem value="Munich">Munich</SelectItem>
          <SelectItem value="Frankfurt">Frankfurt</SelectItem>
          <SelectItem value="Cologne">Cologne</SelectItem>
          <SelectItem value="Stuttgart">Stuttgart</SelectItem>
          <SelectItem value="Düsseldorf">Düsseldorf</SelectItem>
          <SelectItem value="Leipzig">Leipzig</SelectItem>
          <SelectItem value="Dresden">Dresden</SelectItem>
          <SelectItem value="Nuremberg">Nuremberg</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" onClick={clear} disabled={!cityFilter}>
        Clear filter
      </Button>
    </div>
  )
}

export default CityFilter
