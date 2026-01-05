import { StationContext } from '@/App'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import StationList from './StationList'

const mockStations = [
  { id: 1, name: 'Station A', city: 'City X', lat: 0, lng: 0 },
  { id: 2, name: 'Station B', city: 'City Y', lat: 0, lng: 0 },
]

describe('StationList', () => {
  it('renders station names from context', () => {
    const contextValue = {
      stations: mockStations,
    }
    render(
      <StationContext.Provider value={contextValue}>
        <StationList />
      </StationContext.Provider>,
    )
    expect(screen.getByText('Station A')).toBeInTheDocument()
    expect(screen.getByText('Station B')).toBeInTheDocument()
  })
})
