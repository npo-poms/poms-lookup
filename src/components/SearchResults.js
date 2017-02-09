import React from 'react'
import { AutoSizer, Column, Table } from 'react-virtualized'

import './SearchResults.css'

const SearchResults = ({
  results = [],
  onSearchResultClick = () => {}
}) => {
  const rowGetter = ({ index }) => results[index]

  const onRowClick = ({ rowData }) => {
    if (rowData && rowData.mid) {
      onSearchResultClick({ mid: rowData.mid })
    }
  }

  return (
    <div className='SearchResults'>
      <AutoSizer>
        {({ width, height }) => (
          <Table
            width={width}
            height={height}
            headerHeight={60}
            rowGetter={rowGetter}
            rowCount={results.length}
            rowHeight={60}
            onRowClick={onRowClick}
          >
            <Column
              dataKey='mid'
              label='MID'
              width={160}
            />
            <Column
              dataKey='title'
              label='Titel'
              width={200}
              flexGrow={1}
            />
            <Column
              dataKey='date'
              label='Datum'
              width={120}
            />
            <Column
              dataKey='type'
              label='Type'
              width={110}
            />
          </Table>
        )}
      </AutoSizer>
    </div>
  )
}

export default SearchResults
