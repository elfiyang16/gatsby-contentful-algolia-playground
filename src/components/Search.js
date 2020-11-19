import algoliasearch from 'algoliasearch/lite'
import { default as React, useState } from 'react'
import { InstantSearch } from 'react-instantsearch-dom'
import StyledSearchBox from './SearchBox'
import StyledSearchResult from './SearchResult'

const theme = {
  foreground: '#050505',
  background: 'white',
  faded: '#888',
}

export default function Search({ indices }) {
  const [query, setQuery] = useState()
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_SEARCH_KEY
  )

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <StyledSearchBox />
      <StyledSearchResult show={query && query.length > 0} indices={indices} />
    </InstantSearch>
  )
}
