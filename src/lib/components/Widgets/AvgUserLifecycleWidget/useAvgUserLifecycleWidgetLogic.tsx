// src/lib/components/Widgets/AvgUserLifecycleWidget/useAvgUserLifecycleWidgetLogic.tsx
import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { useQuery } from '@apollo/client';

const AVG_USER_LIFECYCLE_QUERY = graphql(`
  query AvgUserLifecycle($tg_channel_ids: _int8!) {
    get_avg_user_lifecycle(args: { tg_channel_ids: $tg_channel_ids }) {
      avg_lifecycle_days
    }
  }
`);

export interface UseAvgUserLifecycleWidgetLogicProps {
  tgChannelIds: number[];
}

export function useAvgUserLifecycleWidgetLogic({ tgChannelIds }: UseAvgUserLifecycleWidgetLogicProps) {
  const auth = useAuth();
  const { loading, error, data } = useQuery(AVG_USER_LIFECYCLE_QUERY, {
    skip: !auth?.session?.data?.accessToken,
    variables: {
      tg_channel_ids: `{${tgChannelIds.join(',')}}`
    },
  });

  return {
    loading,
    error,
    data: (data?.get_avg_user_lifecycle?.[0]?.avg_lifecycle_days ?? 0).toFixed(2),
  };
}
