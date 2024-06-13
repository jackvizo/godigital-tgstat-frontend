'use client'

import { COHORT_ANALYSIS_QUERY } from "@/lib/graphql/dashboard.gql"
import { useQuery } from "@apollo/client"
import { Box, Card, Typography } from "@mui/material"

export interface ClientContainerProps { };

export function ClientContainer(props: ClientContainerProps) {
  const cohortQuery = useQuery(COHORT_ANALYSIS_QUERY, {
    variables: {
      tg_channel_id: 5,
      start_date: '2024-08-01',
      end_date: '2024-08-07'
    }
  })

  return (
    <Box>
      <Typography gutterBottom>Когортный анализ</Typography>
      <Card sx={{ p: 3 }}>
        <pre>
          {cohortQuery.loading ? 'Loading' : JSON.stringify(cohortQuery.data?.cohort_analysis_hasura || [], null, 2)}
        </pre>
      </Card>
    </Box>
  )
}
