import { graphql } from "@/generated/gql";

// export const ACTUAL_SUBSCRIPTIONS_COUNT = graphql(`
//   query ActualSubscriptionsCount($tg_channel_id: [bigint!], $from_date: timestamp!, $to_date: timestamp!) {
//     stat_user_aggregate(
//       where: {
//         joined_at: { _gte: $from_date, _lte: $to_date }
//         left_at: { _is_null: true }
//         tg_channel_id: { _in: $tg_channel_id }
//       }
//     ) {
//       aggregate {
//         count(columns: pk)
//       }
//     }
//   }
// `);

// // В качестве date нужно указывать текущее время в UTC минус 24 часа
// export const ER_24 = graphql(`
//   query er24($tg_channel_ids: [bigint!]!, $date: timestamp!) {
//     stat_post_aggregate(where: { tg_channel_id: { _in: $tg_channel_ids }, timestamp: { _lte: $date } }) {
//       aggregate {
//         sum {
//           view_24h
//         }
//       }
//     }
//   }
// `);

// export const COHORT_ANALYSIS_QUERY = graphql(`
//   query CohortAnalysis($end_date: date!, $start_date: date!, $tg_channel_id: bigint!) {
//     cohort_analysis_hasura(args: { start_date: $start_date, end_date: $end_date, tg_channel_id: $tg_channel_id }) {
//       join_date
//       left_date
//       joined_count
//       left_count
//     }
//   }
// `);

// export const INVITE_LINK_STATS_QUERY = graphql(`
//   query InviteLinkStats($tg_channel_id: bigint, $invite_links: [String!]!, $date_from: timestamp, $date_to: timestamp) {
//     unsubscribes: stat_user_aggregate(
//       where: {
//         tg_user_id: { _eq: $tg_channel_id }
//         invite_link: { _in: $invite_links }
//         left_at: { _is_null: false, _gte: $date_from, _lte: $date_to }
//       }
//     ) {
//       aggregate {
//         count
//       }
//     }
//     subscribes: stat_user_aggregate(
//       where: {
//         tg_user_id: { _eq: $tg_channel_id }
//         invite_link: { _in: $invite_links }
//         joined_at: { _is_null: false, _gte: $date_from, _lte: $date_to }
//       }
//     ) {
//       aggregate {
//         count
//       }
//     }
//   }
// `);

// export const INVITE_LINK_DICT_QUERY = graphql(`
//   query InviteLinksDict($tg_channel_id: bigint) {
//     stat_user(
//       distinct_on: invite_link
//       where: { tg_channel_id: { _eq: $tg_channel_id }, invite_link: { _is_null: false } }
//     ) {
//       invite_link
//     }
//   }
// `);

// export const SUBSCRIPTIONS_COUNT_QUERY = graphql(`
//   query SubscriptionsCount($tg_channel_id: bigint!, $from_date: timestamp!, $to_date: timestamp!) {
//     stat_user_aggregate(
//       where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _eq: $tg_channel_id } }
//     ) {
//       aggregate {
//         count(columns: pk)
//       }
//     }
//   }
// `);

// export const UNSUBSCRIPTIONS_COUNT_QUERY = graphql(`
//   query UnsubscriptionsCount($tg_channel_id: bigint!, $from_date: timestamp!, $to_date: timestamp!) {
//     stat_user_aggregate(
//       where: {
//         joined_at: { _gte: $from_date, _lte: $to_date }
//         tg_channel_id: { _eq: $tg_channel_id }
//         left_at: { _is_null: false }
//       }
//     ) {
//       aggregate {
//         count(columns: pk)
//       }
//     }
//   }
// `);

// export const USERS_WITH_LINK_COUNT_QUERY = graphql(`
//   query UsersWithLinkCounts($tg_channel_id: bigint!, $start_date: timestamp!, $end_date: timestamp!) {
//     without_link: stat_user_aggregate(
//       where: {
//         tg_channel_id: { _eq: $tg_channel_id }
//         joined_at: { _gte: $start_date, _lte: $end_date }
//         _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]
//       }
//     ) {
//       aggregate {
//         count
//       }
//     }
//     with_link: stat_user_aggregate(
//       where: {
//         tg_channel_id: { _eq: $tg_channel_id }
//         joined_at: { _gte: $start_date, _lte: $end_date }
//         is_joined_by_link: { _eq: true }
//       }
//     ) {
//       aggregate {
//         count
//       }
//     }
//   }
// `);

// export const HOURLY_USER_SIGNUPS_QUERY = graphql(`
//   query HourlyUserSignups($start_date: timestamp!, $end_date: timestamp!) {
//     hourly_user_signups(args: { end_date: $end_date, start_date: $start_date }) {
//       count
//       hour
//     }
//   }
// `);
