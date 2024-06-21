/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query ERAvg($from_date: timestamp!, $to_date: timestamp!, $tg_channel_ids: [bigint!]) {\n    stat_user_aggregate(\n      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _in: $tg_channel_ids } }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n    stat_post_aggregate(where: { timestamp: { _gte: $from_date, _lte: $to_date } }) {\n      aggregate {\n        sum {\n          views\n        }\n      }\n    }\n  }\n": types.ErAvgDocument,
    "\n  query AvgUserLifecycle($tg_channel_ids: _int8!) {\n    get_avg_user_lifecycle(args: { tg_channel_ids: $tg_channel_ids }) {\n      avg_lifecycle_days\n    }\n  }\n": types.AvgUserLifecycleDocument,
    "\n  query CohortAnalysis($end_date: date!, $start_date: date!, $tg_channel_ids: _int8!) {\n    cohort_analysis(args: { start_date: $start_date, end_date: $end_date, tg_channel_ids: $tg_channel_ids }) {\n      join_date\n      left_date\n      joined_count\n      left_count\n    }\n  }\n": types.CohortAnalysisDocument,
    "\n  query ER24($tg_channel_ids: [bigint!]!, $date: timestamp!) {\n    stat_post_aggregate(where: { tg_channel_id: { _in: $tg_channel_ids }, timestamp: { _lte: $date } }) {\n      aggregate {\n        sum {\n          view_24h\n        }\n      }\n    }\n  }\n": types.Er24Document,
    "\n  query SubscribesUsersByLinksAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {\n    without_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    with_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        is_joined_by_link: { _eq: true }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.SubscribesUsersByLinksAggregatesDocument,
    "\n  query SignupsByPeriod1($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {\n    user_signups_by_period(\n      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }\n    ) {\n      count\n      time_bucket\n    }\n  }\n": types.SignupsByPeriod1Document,
    "\n  query UnsubscribesByPeriod($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {\n    user_unsubscribes_by_period(\n      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }\n    ) {\n      count\n      time_bucket\n    }\n  }\n": types.UnsubscribesByPeriodDocument,
    "\n  query SignupsByPeriod(\n    $end_date: timestamp!\n    $start_date: timestamp!\n    $time_period: String!\n    $tg_channel_ids: _int8!\n  ) {\n    user_signups_by_period(\n      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }\n    ) {\n      count\n      time_bucket\n    }\n  }\n": types.SignupsByPeriodDocument,
    "\n  query TotalSubscribers($tg_channel_id: [bigint!]) {\n    stat_user_aggregate(where: { left_at: { _is_null: true }, tg_channel_id: { _in: $tg_channel_id } }) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n": types.TotalSubscribersDocument,
    "\n  query UnsubscribesByPeriods($start_date: timestamp!, $end_date: timestamp!, $tg_channel_ids: _int8!) {\n    unsubscribes_by_periods(args: { start_date: $start_date, end_date: $end_date, tg_channel_ids: $tg_channel_ids }) {\n      interval_label\n      count\n      percentage\n    }\n  }\n": types.UnsubscribesByPeriodsDocument,
    "\n  query UnsubscribesUsersByLinksAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {\n    without_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        left_at: { _gte: $start_date, _lte: $end_date }\n        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    with_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        left_at: { _gte: $start_date, _lte: $end_date }\n        is_joined_by_link: { _eq: true }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.UnsubscribesUsersByLinksAggregatesDocument,
    "\nquery SubcribesUnsubscribesPieAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {\n  subscribes: stat_user_aggregate(\n    where: {\n      tg_channel_id: { _in: $tg_channel_ids }\n      joined_at: { _gte: $start_date, _lte: $end_date }\n    }\n  ) {\n    aggregate {\n      count\n    }\n  }\n  unsubscribes: stat_user_aggregate(\n    where: {\n      tg_channel_id: { _in: $tg_channel_ids }\n      left_at: { _gte: $start_date, _lte: $end_date, _is_null: false }\n    }\n  ) {\n    aggregate {\n      count\n    }\n  }\n}\n": types.SubcribesUnsubscribesPieAggregatesDocument,
    "\n  query UnsubscriptionsCount($tg_channel_id: [bigint!], $from_date: timestamp!, $to_date: timestamp!) {\n    stat_user_aggregate(\n      where: {\n        joined_at: { _gte: $from_date, _lte: $to_date },\n        tg_channel_id: { _in: $tg_channel_id },\n        left_at: { _is_null: false }\n      }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n": types.UnsubscriptionsCountDocument,
    "\n  query UnsubscriptionRate($from_date: timestamp!, $to_date: timestamp!, $tg_channel_ids: [bigint!]) {\n    stat_user_aggregate(\n      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _in: $tg_channel_ids } }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n    stat_post_aggregate(where: { timestamp: { _gte: $from_date, _lte: $to_date } }) {\n      aggregate {\n        sum {\n          views\n        }\n      }\n    }\n  }\n": types.UnsubscriptionRateDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ERAvg($from_date: timestamp!, $to_date: timestamp!, $tg_channel_ids: [bigint!]) {\n    stat_user_aggregate(\n      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _in: $tg_channel_ids } }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n    stat_post_aggregate(where: { timestamp: { _gte: $from_date, _lte: $to_date } }) {\n      aggregate {\n        sum {\n          views\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ERAvg($from_date: timestamp!, $to_date: timestamp!, $tg_channel_ids: [bigint!]) {\n    stat_user_aggregate(\n      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _in: $tg_channel_ids } }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n    stat_post_aggregate(where: { timestamp: { _gte: $from_date, _lte: $to_date } }) {\n      aggregate {\n        sum {\n          views\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AvgUserLifecycle($tg_channel_ids: _int8!) {\n    get_avg_user_lifecycle(args: { tg_channel_ids: $tg_channel_ids }) {\n      avg_lifecycle_days\n    }\n  }\n"): (typeof documents)["\n  query AvgUserLifecycle($tg_channel_ids: _int8!) {\n    get_avg_user_lifecycle(args: { tg_channel_ids: $tg_channel_ids }) {\n      avg_lifecycle_days\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CohortAnalysis($end_date: date!, $start_date: date!, $tg_channel_ids: _int8!) {\n    cohort_analysis(args: { start_date: $start_date, end_date: $end_date, tg_channel_ids: $tg_channel_ids }) {\n      join_date\n      left_date\n      joined_count\n      left_count\n    }\n  }\n"): (typeof documents)["\n  query CohortAnalysis($end_date: date!, $start_date: date!, $tg_channel_ids: _int8!) {\n    cohort_analysis(args: { start_date: $start_date, end_date: $end_date, tg_channel_ids: $tg_channel_ids }) {\n      join_date\n      left_date\n      joined_count\n      left_count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ER24($tg_channel_ids: [bigint!]!, $date: timestamp!) {\n    stat_post_aggregate(where: { tg_channel_id: { _in: $tg_channel_ids }, timestamp: { _lte: $date } }) {\n      aggregate {\n        sum {\n          view_24h\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ER24($tg_channel_ids: [bigint!]!, $date: timestamp!) {\n    stat_post_aggregate(where: { tg_channel_id: { _in: $tg_channel_ids }, timestamp: { _lte: $date } }) {\n      aggregate {\n        sum {\n          view_24h\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SubscribesUsersByLinksAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {\n    without_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    with_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        is_joined_by_link: { _eq: true }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query SubscribesUsersByLinksAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {\n    without_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    with_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        is_joined_by_link: { _eq: true }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SignupsByPeriod1($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {\n    user_signups_by_period(\n      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }\n    ) {\n      count\n      time_bucket\n    }\n  }\n"): (typeof documents)["\n  query SignupsByPeriod1($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {\n    user_signups_by_period(\n      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }\n    ) {\n      count\n      time_bucket\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UnsubscribesByPeriod($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {\n    user_unsubscribes_by_period(\n      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }\n    ) {\n      count\n      time_bucket\n    }\n  }\n"): (typeof documents)["\n  query UnsubscribesByPeriod($end_date: timestamp!, $start_date: timestamp!, $time_period: String!, $tg_channel_ids: _int8!) {\n    user_unsubscribes_by_period(\n      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }\n    ) {\n      count\n      time_bucket\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SignupsByPeriod(\n    $end_date: timestamp!\n    $start_date: timestamp!\n    $time_period: String!\n    $tg_channel_ids: _int8!\n  ) {\n    user_signups_by_period(\n      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }\n    ) {\n      count\n      time_bucket\n    }\n  }\n"): (typeof documents)["\n  query SignupsByPeriod(\n    $end_date: timestamp!\n    $start_date: timestamp!\n    $time_period: String!\n    $tg_channel_ids: _int8!\n  ) {\n    user_signups_by_period(\n      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }\n    ) {\n      count\n      time_bucket\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TotalSubscribers($tg_channel_id: [bigint!]) {\n    stat_user_aggregate(where: { left_at: { _is_null: true }, tg_channel_id: { _in: $tg_channel_id } }) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n"): (typeof documents)["\n  query TotalSubscribers($tg_channel_id: [bigint!]) {\n    stat_user_aggregate(where: { left_at: { _is_null: true }, tg_channel_id: { _in: $tg_channel_id } }) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UnsubscribesByPeriods($start_date: timestamp!, $end_date: timestamp!, $tg_channel_ids: _int8!) {\n    unsubscribes_by_periods(args: { start_date: $start_date, end_date: $end_date, tg_channel_ids: $tg_channel_ids }) {\n      interval_label\n      count\n      percentage\n    }\n  }\n"): (typeof documents)["\n  query UnsubscribesByPeriods($start_date: timestamp!, $end_date: timestamp!, $tg_channel_ids: _int8!) {\n    unsubscribes_by_periods(args: { start_date: $start_date, end_date: $end_date, tg_channel_ids: $tg_channel_ids }) {\n      interval_label\n      count\n      percentage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UnsubscribesUsersByLinksAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {\n    without_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        left_at: { _gte: $start_date, _lte: $end_date }\n        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    with_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        left_at: { _gte: $start_date, _lte: $end_date }\n        is_joined_by_link: { _eq: true }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query UnsubscribesUsersByLinksAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {\n    without_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        left_at: { _gte: $start_date, _lte: $end_date }\n        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    with_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _in: $tg_channel_ids }\n        left_at: { _gte: $start_date, _lte: $end_date }\n        is_joined_by_link: { _eq: true }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery SubcribesUnsubscribesPieAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {\n  subscribes: stat_user_aggregate(\n    where: {\n      tg_channel_id: { _in: $tg_channel_ids }\n      joined_at: { _gte: $start_date, _lte: $end_date }\n    }\n  ) {\n    aggregate {\n      count\n    }\n  }\n  unsubscribes: stat_user_aggregate(\n    where: {\n      tg_channel_id: { _in: $tg_channel_ids }\n      left_at: { _gte: $start_date, _lte: $end_date, _is_null: false }\n    }\n  ) {\n    aggregate {\n      count\n    }\n  }\n}\n"): (typeof documents)["\nquery SubcribesUnsubscribesPieAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {\n  subscribes: stat_user_aggregate(\n    where: {\n      tg_channel_id: { _in: $tg_channel_ids }\n      joined_at: { _gte: $start_date, _lte: $end_date }\n    }\n  ) {\n    aggregate {\n      count\n    }\n  }\n  unsubscribes: stat_user_aggregate(\n    where: {\n      tg_channel_id: { _in: $tg_channel_ids }\n      left_at: { _gte: $start_date, _lte: $end_date, _is_null: false }\n    }\n  ) {\n    aggregate {\n      count\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UnsubscriptionsCount($tg_channel_id: [bigint!], $from_date: timestamp!, $to_date: timestamp!) {\n    stat_user_aggregate(\n      where: {\n        joined_at: { _gte: $from_date, _lte: $to_date },\n        tg_channel_id: { _in: $tg_channel_id },\n        left_at: { _is_null: false }\n      }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n"): (typeof documents)["\n  query UnsubscriptionsCount($tg_channel_id: [bigint!], $from_date: timestamp!, $to_date: timestamp!) {\n    stat_user_aggregate(\n      where: {\n        joined_at: { _gte: $from_date, _lte: $to_date },\n        tg_channel_id: { _in: $tg_channel_id },\n        left_at: { _is_null: false }\n      }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UnsubscriptionRate($from_date: timestamp!, $to_date: timestamp!, $tg_channel_ids: [bigint!]) {\n    stat_user_aggregate(\n      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _in: $tg_channel_ids } }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n    stat_post_aggregate(where: { timestamp: { _gte: $from_date, _lte: $to_date } }) {\n      aggregate {\n        sum {\n          views\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UnsubscriptionRate($from_date: timestamp!, $to_date: timestamp!, $tg_channel_ids: [bigint!]) {\n    stat_user_aggregate(\n      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _in: $tg_channel_ids } }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n    stat_post_aggregate(where: { timestamp: { _gte: $from_date, _lte: $to_date } }) {\n      aggregate {\n        sum {\n          views\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;