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
    "\n  query CohortAnalysis($end_date: date!, $start_date: date!, $tg_channel_id: bigint!) {\n    cohort_analysis_hasura(args: { start_date: $start_date, end_date: $end_date, tg_channel_id: $tg_channel_id }) {\n      join_date\n      left_date\n      joined_count\n      left_count\n    }\n  }\n": types.CohortAnalysisDocument,
    "\n  query InviteLinkStats($tg_channel_id: bigint, $invite_links: [String!]!, $date_from: timestamp, $date_to: timestamp) {\n    unsubscribes: stat_user_aggregate(\n      where: {\n        tg_user_id: { _eq: $tg_channel_id }\n        invite_link: { _in: $invite_links }\n        left_at: { _is_null: false, _gte: $date_from, _lte: $date_to }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    subscribes: stat_user_aggregate(\n      where: {\n        tg_user_id: { _eq: $tg_channel_id }\n        invite_link: { _in: $invite_links }\n        joined_at: { _is_null: false, _gte: $date_from, _lte: $date_to }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.InviteLinkStatsDocument,
    "\n  query InviteLinksDict($tg_channel_id: bigint) {\n    stat_user(\n      distinct_on: invite_link\n      where: { tg_channel_id: { _eq: $tg_channel_id }, invite_link: { _is_null: false } }\n    ) {\n      invite_link\n    }\n  }\n": types.InviteLinksDictDocument,
    "\n  query SubscriptionsCount($tg_channel_id: bigint!, $from_date: timestamp!, $to_date: timestamp!) {\n    stat_user_aggregate(\n      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _eq: $tg_channel_id } }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n": types.SubscriptionsCountDocument,
    "\n  query UnsubscriptionsCount($tg_channel_id: bigint!, $from_date: timestamp!, $to_date: timestamp!) {\n    stat_user_aggregate(\n      where: {\n        joined_at: { _gte: $from_date, _lte: $to_date }\n        tg_channel_id: { _eq: $tg_channel_id }\n        left_at: { _is_null: false }\n      }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n": types.UnsubscriptionsCountDocument,
    "\n  query UsersWithLinkCounts($tg_channel_id: bigint!, $start_date: timestamp!, $end_date: timestamp!) {\n    without_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _eq: $tg_channel_id }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    with_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _eq: $tg_channel_id }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        is_joined_by_link: { _eq: true }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.UsersWithLinkCountsDocument,
    "\n  query HourlyUserSignups($start_date: timestamp!, $end_date: timestamp!) {\n    hourly_user_signups(args: { end_date: $end_date, start_date: $start_date }) {\n      signup_count\n      hour\n    }\n  }\n": types.HourlyUserSignupsDocument,
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
export function graphql(source: "\n  query CohortAnalysis($end_date: date!, $start_date: date!, $tg_channel_id: bigint!) {\n    cohort_analysis_hasura(args: { start_date: $start_date, end_date: $end_date, tg_channel_id: $tg_channel_id }) {\n      join_date\n      left_date\n      joined_count\n      left_count\n    }\n  }\n"): (typeof documents)["\n  query CohortAnalysis($end_date: date!, $start_date: date!, $tg_channel_id: bigint!) {\n    cohort_analysis_hasura(args: { start_date: $start_date, end_date: $end_date, tg_channel_id: $tg_channel_id }) {\n      join_date\n      left_date\n      joined_count\n      left_count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query InviteLinkStats($tg_channel_id: bigint, $invite_links: [String!]!, $date_from: timestamp, $date_to: timestamp) {\n    unsubscribes: stat_user_aggregate(\n      where: {\n        tg_user_id: { _eq: $tg_channel_id }\n        invite_link: { _in: $invite_links }\n        left_at: { _is_null: false, _gte: $date_from, _lte: $date_to }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    subscribes: stat_user_aggregate(\n      where: {\n        tg_user_id: { _eq: $tg_channel_id }\n        invite_link: { _in: $invite_links }\n        joined_at: { _is_null: false, _gte: $date_from, _lte: $date_to }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query InviteLinkStats($tg_channel_id: bigint, $invite_links: [String!]!, $date_from: timestamp, $date_to: timestamp) {\n    unsubscribes: stat_user_aggregate(\n      where: {\n        tg_user_id: { _eq: $tg_channel_id }\n        invite_link: { _in: $invite_links }\n        left_at: { _is_null: false, _gte: $date_from, _lte: $date_to }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    subscribes: stat_user_aggregate(\n      where: {\n        tg_user_id: { _eq: $tg_channel_id }\n        invite_link: { _in: $invite_links }\n        joined_at: { _is_null: false, _gte: $date_from, _lte: $date_to }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query InviteLinksDict($tg_channel_id: bigint) {\n    stat_user(\n      distinct_on: invite_link\n      where: { tg_channel_id: { _eq: $tg_channel_id }, invite_link: { _is_null: false } }\n    ) {\n      invite_link\n    }\n  }\n"): (typeof documents)["\n  query InviteLinksDict($tg_channel_id: bigint) {\n    stat_user(\n      distinct_on: invite_link\n      where: { tg_channel_id: { _eq: $tg_channel_id }, invite_link: { _is_null: false } }\n    ) {\n      invite_link\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SubscriptionsCount($tg_channel_id: bigint!, $from_date: timestamp!, $to_date: timestamp!) {\n    stat_user_aggregate(\n      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _eq: $tg_channel_id } }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n"): (typeof documents)["\n  query SubscriptionsCount($tg_channel_id: bigint!, $from_date: timestamp!, $to_date: timestamp!) {\n    stat_user_aggregate(\n      where: { joined_at: { _gte: $from_date, _lte: $to_date }, tg_channel_id: { _eq: $tg_channel_id } }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UnsubscriptionsCount($tg_channel_id: bigint!, $from_date: timestamp!, $to_date: timestamp!) {\n    stat_user_aggregate(\n      where: {\n        joined_at: { _gte: $from_date, _lte: $to_date }\n        tg_channel_id: { _eq: $tg_channel_id }\n        left_at: { _is_null: false }\n      }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n"): (typeof documents)["\n  query UnsubscriptionsCount($tg_channel_id: bigint!, $from_date: timestamp!, $to_date: timestamp!) {\n    stat_user_aggregate(\n      where: {\n        joined_at: { _gte: $from_date, _lte: $to_date }\n        tg_channel_id: { _eq: $tg_channel_id }\n        left_at: { _is_null: false }\n      }\n    ) {\n      aggregate {\n        count(columns: pk)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UsersWithLinkCounts($tg_channel_id: bigint!, $start_date: timestamp!, $end_date: timestamp!) {\n    without_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _eq: $tg_channel_id }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    with_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _eq: $tg_channel_id }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        is_joined_by_link: { _eq: true }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query UsersWithLinkCounts($tg_channel_id: bigint!, $start_date: timestamp!, $end_date: timestamp!) {\n    without_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _eq: $tg_channel_id }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    with_link: stat_user_aggregate(\n      where: {\n        tg_channel_id: { _eq: $tg_channel_id }\n        joined_at: { _gte: $start_date, _lte: $end_date }\n        is_joined_by_link: { _eq: true }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HourlyUserSignups($start_date: timestamp!, $end_date: timestamp!) {\n    hourly_user_signups(args: { end_date: $end_date, start_date: $start_date }) {\n      signup_count\n      hour\n    }\n  }\n"): (typeof documents)["\n  query HourlyUserSignups($start_date: timestamp!, $end_date: timestamp!) {\n    hourly_user_signups(args: { end_date: $end_date, start_date: $start_date }) {\n      signup_count\n      hour\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;