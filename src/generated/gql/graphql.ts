/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  date: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

export type Cohort_Analysis_Hasura_Args = {
  end_date?: InputMaybe<Scalars['date']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "cohort_analysis_virtual" */
export type Cohort_Analysis_Virtual = {
  __typename?: 'cohort_analysis_virtual';
  join_date?: Maybe<Scalars['date']['output']>;
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
  left_date?: Maybe<Scalars['date']['output']>;
};

export type Cohort_Analysis_Virtual_Aggregate = {
  __typename?: 'cohort_analysis_virtual_aggregate';
  aggregate?: Maybe<Cohort_Analysis_Virtual_Aggregate_Fields>;
  nodes: Array<Cohort_Analysis_Virtual>;
};

/** aggregate fields of "cohort_analysis_virtual" */
export type Cohort_Analysis_Virtual_Aggregate_Fields = {
  __typename?: 'cohort_analysis_virtual_aggregate_fields';
  avg?: Maybe<Cohort_Analysis_Virtual_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Cohort_Analysis_Virtual_Max_Fields>;
  min?: Maybe<Cohort_Analysis_Virtual_Min_Fields>;
  stddev?: Maybe<Cohort_Analysis_Virtual_Stddev_Fields>;
  stddev_pop?: Maybe<Cohort_Analysis_Virtual_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cohort_Analysis_Virtual_Stddev_Samp_Fields>;
  sum?: Maybe<Cohort_Analysis_Virtual_Sum_Fields>;
  var_pop?: Maybe<Cohort_Analysis_Virtual_Var_Pop_Fields>;
  var_samp?: Maybe<Cohort_Analysis_Virtual_Var_Samp_Fields>;
  variance?: Maybe<Cohort_Analysis_Virtual_Variance_Fields>;
};


/** aggregate fields of "cohort_analysis_virtual" */
export type Cohort_Analysis_Virtual_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cohort_Analysis_Virtual_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Cohort_Analysis_Virtual_Avg_Fields = {
  __typename?: 'cohort_analysis_virtual_avg_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "cohort_analysis_virtual". All fields are combined with a logical 'AND'. */
export type Cohort_Analysis_Virtual_Bool_Exp = {
  _and?: InputMaybe<Array<Cohort_Analysis_Virtual_Bool_Exp>>;
  _not?: InputMaybe<Cohort_Analysis_Virtual_Bool_Exp>;
  _or?: InputMaybe<Array<Cohort_Analysis_Virtual_Bool_Exp>>;
  join_date?: InputMaybe<Date_Comparison_Exp>;
  joined_count?: InputMaybe<Bigint_Comparison_Exp>;
  left_count?: InputMaybe<Bigint_Comparison_Exp>;
  left_date?: InputMaybe<Date_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "cohort_analysis_virtual" */
export type Cohort_Analysis_Virtual_Inc_Input = {
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "cohort_analysis_virtual" */
export type Cohort_Analysis_Virtual_Insert_Input = {
  join_date?: InputMaybe<Scalars['date']['input']>;
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
  left_date?: InputMaybe<Scalars['date']['input']>;
};

/** aggregate max on columns */
export type Cohort_Analysis_Virtual_Max_Fields = {
  __typename?: 'cohort_analysis_virtual_max_fields';
  join_date?: Maybe<Scalars['date']['output']>;
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
  left_date?: Maybe<Scalars['date']['output']>;
};

/** aggregate min on columns */
export type Cohort_Analysis_Virtual_Min_Fields = {
  __typename?: 'cohort_analysis_virtual_min_fields';
  join_date?: Maybe<Scalars['date']['output']>;
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
  left_date?: Maybe<Scalars['date']['output']>;
};

/** response of any mutation on the table "cohort_analysis_virtual" */
export type Cohort_Analysis_Virtual_Mutation_Response = {
  __typename?: 'cohort_analysis_virtual_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cohort_Analysis_Virtual>;
};

/** Ordering options when selecting data from "cohort_analysis_virtual". */
export type Cohort_Analysis_Virtual_Order_By = {
  join_date?: InputMaybe<Order_By>;
  joined_count?: InputMaybe<Order_By>;
  left_count?: InputMaybe<Order_By>;
  left_date?: InputMaybe<Order_By>;
};

/** select columns of table "cohort_analysis_virtual" */
export enum Cohort_Analysis_Virtual_Select_Column {
  /** column name */
  join_date = 'join_date',
  /** column name */
  joined_count = 'joined_count',
  /** column name */
  left_count = 'left_count',
  /** column name */
  left_date = 'left_date'
}

/** input type for updating data in table "cohort_analysis_virtual" */
export type Cohort_Analysis_Virtual_Set_Input = {
  join_date?: InputMaybe<Scalars['date']['input']>;
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
  left_date?: InputMaybe<Scalars['date']['input']>;
};

/** aggregate stddev on columns */
export type Cohort_Analysis_Virtual_Stddev_Fields = {
  __typename?: 'cohort_analysis_virtual_stddev_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Cohort_Analysis_Virtual_Stddev_Pop_Fields = {
  __typename?: 'cohort_analysis_virtual_stddev_pop_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Cohort_Analysis_Virtual_Stddev_Samp_Fields = {
  __typename?: 'cohort_analysis_virtual_stddev_samp_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "cohort_analysis_virtual" */
export type Cohort_Analysis_Virtual_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cohort_Analysis_Virtual_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cohort_Analysis_Virtual_Stream_Cursor_Value_Input = {
  join_date?: InputMaybe<Scalars['date']['input']>;
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
  left_date?: InputMaybe<Scalars['date']['input']>;
};

/** aggregate sum on columns */
export type Cohort_Analysis_Virtual_Sum_Fields = {
  __typename?: 'cohort_analysis_virtual_sum_fields';
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
};

export type Cohort_Analysis_Virtual_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cohort_Analysis_Virtual_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cohort_Analysis_Virtual_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cohort_Analysis_Virtual_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cohort_Analysis_Virtual_Var_Pop_Fields = {
  __typename?: 'cohort_analysis_virtual_var_pop_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Cohort_Analysis_Virtual_Var_Samp_Fields = {
  __typename?: 'cohort_analysis_virtual_var_samp_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Cohort_Analysis_Virtual_Variance_Fields = {
  __typename?: 'cohort_analysis_virtual_variance_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

export type Hourly_User_Signups_Args = {
  end_date?: InputMaybe<Scalars['timestamp']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
};

/** columns and relationships of "hourly_user_signups_virtual" */
export type Hourly_User_Signups_Virtual = {
  __typename?: 'hourly_user_signups_virtual';
  hour?: Maybe<Scalars['timestamp']['output']>;
  signup_count?: Maybe<Scalars['bigint']['output']>;
};

export type Hourly_User_Signups_Virtual_Aggregate = {
  __typename?: 'hourly_user_signups_virtual_aggregate';
  aggregate?: Maybe<Hourly_User_Signups_Virtual_Aggregate_Fields>;
  nodes: Array<Hourly_User_Signups_Virtual>;
};

/** aggregate fields of "hourly_user_signups_virtual" */
export type Hourly_User_Signups_Virtual_Aggregate_Fields = {
  __typename?: 'hourly_user_signups_virtual_aggregate_fields';
  avg?: Maybe<Hourly_User_Signups_Virtual_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Hourly_User_Signups_Virtual_Max_Fields>;
  min?: Maybe<Hourly_User_Signups_Virtual_Min_Fields>;
  stddev?: Maybe<Hourly_User_Signups_Virtual_Stddev_Fields>;
  stddev_pop?: Maybe<Hourly_User_Signups_Virtual_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hourly_User_Signups_Virtual_Stddev_Samp_Fields>;
  sum?: Maybe<Hourly_User_Signups_Virtual_Sum_Fields>;
  var_pop?: Maybe<Hourly_User_Signups_Virtual_Var_Pop_Fields>;
  var_samp?: Maybe<Hourly_User_Signups_Virtual_Var_Samp_Fields>;
  variance?: Maybe<Hourly_User_Signups_Virtual_Variance_Fields>;
};


/** aggregate fields of "hourly_user_signups_virtual" */
export type Hourly_User_Signups_Virtual_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hourly_User_Signups_Virtual_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Hourly_User_Signups_Virtual_Avg_Fields = {
  __typename?: 'hourly_user_signups_virtual_avg_fields';
  signup_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "hourly_user_signups_virtual". All fields are combined with a logical 'AND'. */
export type Hourly_User_Signups_Virtual_Bool_Exp = {
  _and?: InputMaybe<Array<Hourly_User_Signups_Virtual_Bool_Exp>>;
  _not?: InputMaybe<Hourly_User_Signups_Virtual_Bool_Exp>;
  _or?: InputMaybe<Array<Hourly_User_Signups_Virtual_Bool_Exp>>;
  hour?: InputMaybe<Timestamp_Comparison_Exp>;
  signup_count?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "hourly_user_signups_virtual" */
export type Hourly_User_Signups_Virtual_Inc_Input = {
  signup_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "hourly_user_signups_virtual" */
export type Hourly_User_Signups_Virtual_Insert_Input = {
  hour?: InputMaybe<Scalars['timestamp']['input']>;
  signup_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Hourly_User_Signups_Virtual_Max_Fields = {
  __typename?: 'hourly_user_signups_virtual_max_fields';
  hour?: Maybe<Scalars['timestamp']['output']>;
  signup_count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Hourly_User_Signups_Virtual_Min_Fields = {
  __typename?: 'hourly_user_signups_virtual_min_fields';
  hour?: Maybe<Scalars['timestamp']['output']>;
  signup_count?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "hourly_user_signups_virtual" */
export type Hourly_User_Signups_Virtual_Mutation_Response = {
  __typename?: 'hourly_user_signups_virtual_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Hourly_User_Signups_Virtual>;
};

/** Ordering options when selecting data from "hourly_user_signups_virtual". */
export type Hourly_User_Signups_Virtual_Order_By = {
  hour?: InputMaybe<Order_By>;
  signup_count?: InputMaybe<Order_By>;
};

/** select columns of table "hourly_user_signups_virtual" */
export enum Hourly_User_Signups_Virtual_Select_Column {
  /** column name */
  hour = 'hour',
  /** column name */
  signup_count = 'signup_count'
}

/** input type for updating data in table "hourly_user_signups_virtual" */
export type Hourly_User_Signups_Virtual_Set_Input = {
  hour?: InputMaybe<Scalars['timestamp']['input']>;
  signup_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Hourly_User_Signups_Virtual_Stddev_Fields = {
  __typename?: 'hourly_user_signups_virtual_stddev_fields';
  signup_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Hourly_User_Signups_Virtual_Stddev_Pop_Fields = {
  __typename?: 'hourly_user_signups_virtual_stddev_pop_fields';
  signup_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Hourly_User_Signups_Virtual_Stddev_Samp_Fields = {
  __typename?: 'hourly_user_signups_virtual_stddev_samp_fields';
  signup_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "hourly_user_signups_virtual" */
export type Hourly_User_Signups_Virtual_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hourly_User_Signups_Virtual_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hourly_User_Signups_Virtual_Stream_Cursor_Value_Input = {
  hour?: InputMaybe<Scalars['timestamp']['input']>;
  signup_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Hourly_User_Signups_Virtual_Sum_Fields = {
  __typename?: 'hourly_user_signups_virtual_sum_fields';
  signup_count?: Maybe<Scalars['bigint']['output']>;
};

export type Hourly_User_Signups_Virtual_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Hourly_User_Signups_Virtual_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hourly_User_Signups_Virtual_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hourly_User_Signups_Virtual_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Hourly_User_Signups_Virtual_Var_Pop_Fields = {
  __typename?: 'hourly_user_signups_virtual_var_pop_fields';
  signup_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Hourly_User_Signups_Virtual_Var_Samp_Fields = {
  __typename?: 'hourly_user_signups_virtual_var_samp_fields';
  signup_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Hourly_User_Signups_Virtual_Variance_Fields = {
  __typename?: 'hourly_user_signups_virtual_variance_fields';
  signup_count?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "cohort_analysis_virtual" */
  delete_cohort_analysis_virtual?: Maybe<Cohort_Analysis_Virtual_Mutation_Response>;
  /** delete data from the table: "hourly_user_signups_virtual" */
  delete_hourly_user_signups_virtual?: Maybe<Hourly_User_Signups_Virtual_Mutation_Response>;
  /** delete data from the table: "stat_post" */
  delete_stat_post?: Maybe<Stat_Post_Mutation_Response>;
  /** delete single row from the table: "stat_post" */
  delete_stat_post_by_pk?: Maybe<Stat_Post>;
  /** delete data from the table: "stat_reaction" */
  delete_stat_reaction?: Maybe<Stat_Reaction_Mutation_Response>;
  /** delete single row from the table: "stat_reaction" */
  delete_stat_reaction_by_pk?: Maybe<Stat_Reaction>;
  /** delete data from the table: "stat_user" */
  delete_stat_user?: Maybe<Stat_User_Mutation_Response>;
  /** delete single row from the table: "stat_user" */
  delete_stat_user_by_pk?: Maybe<Stat_User>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_tg_channel" */
  delete_user_tg_channel?: Maybe<User_Tg_Channel_Mutation_Response>;
  /** delete single row from the table: "user_tg_channel" */
  delete_user_tg_channel_by_pk?: Maybe<User_Tg_Channel>;
  /** insert data into the table: "cohort_analysis_virtual" */
  insert_cohort_analysis_virtual?: Maybe<Cohort_Analysis_Virtual_Mutation_Response>;
  /** insert a single row into the table: "cohort_analysis_virtual" */
  insert_cohort_analysis_virtual_one?: Maybe<Cohort_Analysis_Virtual>;
  /** insert data into the table: "hourly_user_signups_virtual" */
  insert_hourly_user_signups_virtual?: Maybe<Hourly_User_Signups_Virtual_Mutation_Response>;
  /** insert a single row into the table: "hourly_user_signups_virtual" */
  insert_hourly_user_signups_virtual_one?: Maybe<Hourly_User_Signups_Virtual>;
  /** insert data into the table: "stat_post" */
  insert_stat_post?: Maybe<Stat_Post_Mutation_Response>;
  /** insert a single row into the table: "stat_post" */
  insert_stat_post_one?: Maybe<Stat_Post>;
  /** insert data into the table: "stat_reaction" */
  insert_stat_reaction?: Maybe<Stat_Reaction_Mutation_Response>;
  /** insert a single row into the table: "stat_reaction" */
  insert_stat_reaction_one?: Maybe<Stat_Reaction>;
  /** insert data into the table: "stat_user" */
  insert_stat_user?: Maybe<Stat_User_Mutation_Response>;
  /** insert a single row into the table: "stat_user" */
  insert_stat_user_one?: Maybe<Stat_User>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_tg_channel" */
  insert_user_tg_channel?: Maybe<User_Tg_Channel_Mutation_Response>;
  /** insert a single row into the table: "user_tg_channel" */
  insert_user_tg_channel_one?: Maybe<User_Tg_Channel>;
  /** update data of the table: "cohort_analysis_virtual" */
  update_cohort_analysis_virtual?: Maybe<Cohort_Analysis_Virtual_Mutation_Response>;
  /** update multiples rows of table: "cohort_analysis_virtual" */
  update_cohort_analysis_virtual_many?: Maybe<Array<Maybe<Cohort_Analysis_Virtual_Mutation_Response>>>;
  /** update data of the table: "hourly_user_signups_virtual" */
  update_hourly_user_signups_virtual?: Maybe<Hourly_User_Signups_Virtual_Mutation_Response>;
  /** update multiples rows of table: "hourly_user_signups_virtual" */
  update_hourly_user_signups_virtual_many?: Maybe<Array<Maybe<Hourly_User_Signups_Virtual_Mutation_Response>>>;
  /** update data of the table: "stat_post" */
  update_stat_post?: Maybe<Stat_Post_Mutation_Response>;
  /** update single row of the table: "stat_post" */
  update_stat_post_by_pk?: Maybe<Stat_Post>;
  /** update multiples rows of table: "stat_post" */
  update_stat_post_many?: Maybe<Array<Maybe<Stat_Post_Mutation_Response>>>;
  /** update data of the table: "stat_reaction" */
  update_stat_reaction?: Maybe<Stat_Reaction_Mutation_Response>;
  /** update single row of the table: "stat_reaction" */
  update_stat_reaction_by_pk?: Maybe<Stat_Reaction>;
  /** update multiples rows of table: "stat_reaction" */
  update_stat_reaction_many?: Maybe<Array<Maybe<Stat_Reaction_Mutation_Response>>>;
  /** update data of the table: "stat_user" */
  update_stat_user?: Maybe<Stat_User_Mutation_Response>;
  /** update single row of the table: "stat_user" */
  update_stat_user_by_pk?: Maybe<Stat_User>;
  /** update multiples rows of table: "stat_user" */
  update_stat_user_many?: Maybe<Array<Maybe<Stat_User_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "user_tg_channel" */
  update_user_tg_channel?: Maybe<User_Tg_Channel_Mutation_Response>;
  /** update single row of the table: "user_tg_channel" */
  update_user_tg_channel_by_pk?: Maybe<User_Tg_Channel>;
  /** update multiples rows of table: "user_tg_channel" */
  update_user_tg_channel_many?: Maybe<Array<Maybe<User_Tg_Channel_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Cohort_Analysis_VirtualArgs = {
  where: Cohort_Analysis_Virtual_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hourly_User_Signups_VirtualArgs = {
  where: Hourly_User_Signups_Virtual_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stat_PostArgs = {
  where: Stat_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stat_Post_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Stat_ReactionArgs = {
  where: Stat_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stat_Reaction_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Stat_UserArgs = {
  where: Stat_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stat_User_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Tg_ChannelArgs = {
  where: User_Tg_Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Tg_Channel_By_PkArgs = {
  tg_channel_id: Scalars['bigint']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Cohort_Analysis_VirtualArgs = {
  objects: Array<Cohort_Analysis_Virtual_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Cohort_Analysis_Virtual_OneArgs = {
  object: Cohort_Analysis_Virtual_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Hourly_User_Signups_VirtualArgs = {
  objects: Array<Hourly_User_Signups_Virtual_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Hourly_User_Signups_Virtual_OneArgs = {
  object: Hourly_User_Signups_Virtual_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Stat_PostArgs = {
  objects: Array<Stat_Post_Insert_Input>;
  on_conflict?: InputMaybe<Stat_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stat_Post_OneArgs = {
  object: Stat_Post_Insert_Input;
  on_conflict?: InputMaybe<Stat_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stat_ReactionArgs = {
  objects: Array<Stat_Reaction_Insert_Input>;
  on_conflict?: InputMaybe<Stat_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stat_Reaction_OneArgs = {
  object: Stat_Reaction_Insert_Input;
  on_conflict?: InputMaybe<Stat_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stat_UserArgs = {
  objects: Array<Stat_User_Insert_Input>;
  on_conflict?: InputMaybe<Stat_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stat_User_OneArgs = {
  object: Stat_User_Insert_Input;
  on_conflict?: InputMaybe<Stat_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Tg_ChannelArgs = {
  objects: Array<User_Tg_Channel_Insert_Input>;
  on_conflict?: InputMaybe<User_Tg_Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Tg_Channel_OneArgs = {
  object: User_Tg_Channel_Insert_Input;
  on_conflict?: InputMaybe<User_Tg_Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Cohort_Analysis_VirtualArgs = {
  _inc?: InputMaybe<Cohort_Analysis_Virtual_Inc_Input>;
  _set?: InputMaybe<Cohort_Analysis_Virtual_Set_Input>;
  where: Cohort_Analysis_Virtual_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cohort_Analysis_Virtual_ManyArgs = {
  updates: Array<Cohort_Analysis_Virtual_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Hourly_User_Signups_VirtualArgs = {
  _inc?: InputMaybe<Hourly_User_Signups_Virtual_Inc_Input>;
  _set?: InputMaybe<Hourly_User_Signups_Virtual_Set_Input>;
  where: Hourly_User_Signups_Virtual_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hourly_User_Signups_Virtual_ManyArgs = {
  updates: Array<Hourly_User_Signups_Virtual_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_PostArgs = {
  _inc?: InputMaybe<Stat_Post_Inc_Input>;
  _set?: InputMaybe<Stat_Post_Set_Input>;
  where: Stat_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_Post_By_PkArgs = {
  _inc?: InputMaybe<Stat_Post_Inc_Input>;
  _set?: InputMaybe<Stat_Post_Set_Input>;
  pk_columns: Stat_Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_Post_ManyArgs = {
  updates: Array<Stat_Post_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_ReactionArgs = {
  _inc?: InputMaybe<Stat_Reaction_Inc_Input>;
  _set?: InputMaybe<Stat_Reaction_Set_Input>;
  where: Stat_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_Reaction_By_PkArgs = {
  _inc?: InputMaybe<Stat_Reaction_Inc_Input>;
  _set?: InputMaybe<Stat_Reaction_Set_Input>;
  pk_columns: Stat_Reaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_Reaction_ManyArgs = {
  updates: Array<Stat_Reaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_UserArgs = {
  _inc?: InputMaybe<Stat_User_Inc_Input>;
  _set?: InputMaybe<Stat_User_Set_Input>;
  where: Stat_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_User_By_PkArgs = {
  _inc?: InputMaybe<Stat_User_Inc_Input>;
  _set?: InputMaybe<Stat_User_Set_Input>;
  pk_columns: Stat_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_User_ManyArgs = {
  updates: Array<Stat_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Tg_ChannelArgs = {
  _inc?: InputMaybe<User_Tg_Channel_Inc_Input>;
  _set?: InputMaybe<User_Tg_Channel_Set_Input>;
  where: User_Tg_Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Tg_Channel_By_PkArgs = {
  _inc?: InputMaybe<User_Tg_Channel_Inc_Input>;
  _set?: InputMaybe<User_Tg_Channel_Set_Input>;
  pk_columns: User_Tg_Channel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Tg_Channel_ManyArgs = {
  updates: Array<User_Tg_Channel_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  asc = 'asc',
  /** in ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  desc = 'desc',
  /** in descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** execute function "cohort_analysis_hasura" which returns "cohort_analysis_virtual" */
  cohort_analysis_hasura: Array<Cohort_Analysis_Virtual>;
  /** execute function "cohort_analysis_hasura" and query aggregates on result of table type "cohort_analysis_virtual" */
  cohort_analysis_hasura_aggregate: Cohort_Analysis_Virtual_Aggregate;
  /** fetch data from the table: "cohort_analysis_virtual" */
  cohort_analysis_virtual: Array<Cohort_Analysis_Virtual>;
  /** fetch aggregated fields from the table: "cohort_analysis_virtual" */
  cohort_analysis_virtual_aggregate: Cohort_Analysis_Virtual_Aggregate;
  /** execute function "hourly_user_signups" which returns "hourly_user_signups_virtual" */
  hourly_user_signups: Array<Hourly_User_Signups_Virtual>;
  /** execute function "hourly_user_signups" and query aggregates on result of table type "hourly_user_signups_virtual" */
  hourly_user_signups_aggregate: Hourly_User_Signups_Virtual_Aggregate;
  /** fetch data from the table: "hourly_user_signups_virtual" */
  hourly_user_signups_virtual: Array<Hourly_User_Signups_Virtual>;
  /** fetch aggregated fields from the table: "hourly_user_signups_virtual" */
  hourly_user_signups_virtual_aggregate: Hourly_User_Signups_Virtual_Aggregate;
  /** fetch data from the table: "stat_post" */
  stat_post: Array<Stat_Post>;
  /** fetch aggregated fields from the table: "stat_post" */
  stat_post_aggregate: Stat_Post_Aggregate;
  /** fetch data from the table: "stat_post" using primary key columns */
  stat_post_by_pk?: Maybe<Stat_Post>;
  /** fetch data from the table: "stat_reaction" */
  stat_reaction: Array<Stat_Reaction>;
  /** fetch aggregated fields from the table: "stat_reaction" */
  stat_reaction_aggregate: Stat_Reaction_Aggregate;
  /** fetch data from the table: "stat_reaction" using primary key columns */
  stat_reaction_by_pk?: Maybe<Stat_Reaction>;
  /** fetch data from the table: "stat_user" */
  stat_user: Array<Stat_User>;
  /** fetch aggregated fields from the table: "stat_user" */
  stat_user_aggregate: Stat_User_Aggregate;
  /** fetch data from the table: "stat_user" using primary key columns */
  stat_user_by_pk?: Maybe<Stat_User>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_tg_channel" */
  user_tg_channel: Array<User_Tg_Channel>;
  /** fetch aggregated fields from the table: "user_tg_channel" */
  user_tg_channel_aggregate: User_Tg_Channel_Aggregate;
  /** fetch data from the table: "user_tg_channel" using primary key columns */
  user_tg_channel_by_pk?: Maybe<User_Tg_Channel>;
};


export type Query_RootCohort_Analysis_HasuraArgs = {
  args: Cohort_Analysis_Hasura_Args;
  distinct_on?: InputMaybe<Array<Cohort_Analysis_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cohort_Analysis_Virtual_Order_By>>;
  where?: InputMaybe<Cohort_Analysis_Virtual_Bool_Exp>;
};


export type Query_RootCohort_Analysis_Hasura_AggregateArgs = {
  args: Cohort_Analysis_Hasura_Args;
  distinct_on?: InputMaybe<Array<Cohort_Analysis_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cohort_Analysis_Virtual_Order_By>>;
  where?: InputMaybe<Cohort_Analysis_Virtual_Bool_Exp>;
};


export type Query_RootCohort_Analysis_VirtualArgs = {
  distinct_on?: InputMaybe<Array<Cohort_Analysis_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cohort_Analysis_Virtual_Order_By>>;
  where?: InputMaybe<Cohort_Analysis_Virtual_Bool_Exp>;
};


export type Query_RootCohort_Analysis_Virtual_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cohort_Analysis_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cohort_Analysis_Virtual_Order_By>>;
  where?: InputMaybe<Cohort_Analysis_Virtual_Bool_Exp>;
};


export type Query_RootHourly_User_SignupsArgs = {
  args: Hourly_User_Signups_Args;
  distinct_on?: InputMaybe<Array<Hourly_User_Signups_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hourly_User_Signups_Virtual_Order_By>>;
  where?: InputMaybe<Hourly_User_Signups_Virtual_Bool_Exp>;
};


export type Query_RootHourly_User_Signups_AggregateArgs = {
  args: Hourly_User_Signups_Args;
  distinct_on?: InputMaybe<Array<Hourly_User_Signups_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hourly_User_Signups_Virtual_Order_By>>;
  where?: InputMaybe<Hourly_User_Signups_Virtual_Bool_Exp>;
};


export type Query_RootHourly_User_Signups_VirtualArgs = {
  distinct_on?: InputMaybe<Array<Hourly_User_Signups_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hourly_User_Signups_Virtual_Order_By>>;
  where?: InputMaybe<Hourly_User_Signups_Virtual_Bool_Exp>;
};


export type Query_RootHourly_User_Signups_Virtual_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hourly_User_Signups_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hourly_User_Signups_Virtual_Order_By>>;
  where?: InputMaybe<Hourly_User_Signups_Virtual_Bool_Exp>;
};


export type Query_RootStat_PostArgs = {
  distinct_on?: InputMaybe<Array<Stat_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Post_Order_By>>;
  where?: InputMaybe<Stat_Post_Bool_Exp>;
};


export type Query_RootStat_Post_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stat_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Post_Order_By>>;
  where?: InputMaybe<Stat_Post_Bool_Exp>;
};


export type Query_RootStat_Post_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Query_RootStat_ReactionArgs = {
  distinct_on?: InputMaybe<Array<Stat_Reaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Reaction_Order_By>>;
  where?: InputMaybe<Stat_Reaction_Bool_Exp>;
};


export type Query_RootStat_Reaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stat_Reaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Reaction_Order_By>>;
  where?: InputMaybe<Stat_Reaction_Bool_Exp>;
};


export type Query_RootStat_Reaction_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Query_RootStat_UserArgs = {
  distinct_on?: InputMaybe<Array<Stat_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_User_Order_By>>;
  where?: InputMaybe<Stat_User_Bool_Exp>;
};


export type Query_RootStat_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stat_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_User_Order_By>>;
  where?: InputMaybe<Stat_User_Bool_Exp>;
};


export type Query_RootStat_User_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_Tg_ChannelArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Channel_Order_By>>;
  where?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};


export type Query_RootUser_Tg_Channel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Channel_Order_By>>;
  where?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};


export type Query_RootUser_Tg_Channel_By_PkArgs = {
  tg_channel_id: Scalars['bigint']['input'];
  user_id: Scalars['uuid']['input'];
};

/** columns and relationships of "stat_post" */
export type Stat_Post = {
  __typename?: 'stat_post';
  comments_channels_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Int']['output']>;
  comments_users_count?: Maybe<Scalars['Int']['output']>;
  forwards?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pk: Scalars['bigint']['output'];
  reaction_24h?: Maybe<Scalars['Int']['output']>;
  reactions_1h?: Maybe<Scalars['Int']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_post_id?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_reactions_count?: Maybe<Scalars['Int']['output']>;
  view_24h?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
  views_1h?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "stat_post" */
export type Stat_Post_Aggregate = {
  __typename?: 'stat_post_aggregate';
  aggregate?: Maybe<Stat_Post_Aggregate_Fields>;
  nodes: Array<Stat_Post>;
};

/** aggregate fields of "stat_post" */
export type Stat_Post_Aggregate_Fields = {
  __typename?: 'stat_post_aggregate_fields';
  avg?: Maybe<Stat_Post_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Stat_Post_Max_Fields>;
  min?: Maybe<Stat_Post_Min_Fields>;
  stddev?: Maybe<Stat_Post_Stddev_Fields>;
  stddev_pop?: Maybe<Stat_Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stat_Post_Stddev_Samp_Fields>;
  sum?: Maybe<Stat_Post_Sum_Fields>;
  var_pop?: Maybe<Stat_Post_Var_Pop_Fields>;
  var_samp?: Maybe<Stat_Post_Var_Samp_Fields>;
  variance?: Maybe<Stat_Post_Variance_Fields>;
};


/** aggregate fields of "stat_post" */
export type Stat_Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stat_Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Stat_Post_Avg_Fields = {
  __typename?: 'stat_post_avg_fields';
  comments_channels_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Float']['output']>;
  comments_users_count?: Maybe<Scalars['Float']['output']>;
  forwards?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_24h?: Maybe<Scalars['Float']['output']>;
  reactions_1h?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
  total_reactions_count?: Maybe<Scalars['Float']['output']>;
  view_24h?: Maybe<Scalars['Float']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
  views_1h?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "stat_post". All fields are combined with a logical 'AND'. */
export type Stat_Post_Bool_Exp = {
  _and?: InputMaybe<Array<Stat_Post_Bool_Exp>>;
  _not?: InputMaybe<Stat_Post_Bool_Exp>;
  _or?: InputMaybe<Array<Stat_Post_Bool_Exp>>;
  comments_channels_count?: InputMaybe<Int_Comparison_Exp>;
  comments_messages_count?: InputMaybe<Int_Comparison_Exp>;
  comments_messages_count_1h?: InputMaybe<Int_Comparison_Exp>;
  comments_messages_count_24h?: InputMaybe<Int_Comparison_Exp>;
  comments_users_count?: InputMaybe<Int_Comparison_Exp>;
  forwards?: InputMaybe<Int_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  pk?: InputMaybe<Bigint_Comparison_Exp>;
  reaction_24h?: InputMaybe<Int_Comparison_Exp>;
  reactions_1h?: InputMaybe<Int_Comparison_Exp>;
  tg_channel_id?: InputMaybe<Bigint_Comparison_Exp>;
  tg_post_id?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  total_reactions_count?: InputMaybe<Int_Comparison_Exp>;
  view_24h?: InputMaybe<Int_Comparison_Exp>;
  views?: InputMaybe<Int_Comparison_Exp>;
  views_1h?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "stat_post" */
export enum Stat_Post_Constraint {
  /** unique or primary key constraint on columns "pk" */
  stat_post_pkey = 'stat_post_pkey'
}

/** input type for incrementing numeric columns in table "stat_post" */
export type Stat_Post_Inc_Input = {
  comments_channels_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_1h?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_24h?: InputMaybe<Scalars['Int']['input']>;
  comments_users_count?: InputMaybe<Scalars['Int']['input']>;
  forwards?: InputMaybe<Scalars['Int']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  reaction_24h?: InputMaybe<Scalars['Int']['input']>;
  reactions_1h?: InputMaybe<Scalars['Int']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_post_id?: InputMaybe<Scalars['bigint']['input']>;
  total_reactions_count?: InputMaybe<Scalars['Int']['input']>;
  view_24h?: InputMaybe<Scalars['Int']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
  views_1h?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "stat_post" */
export type Stat_Post_Insert_Input = {
  comments_channels_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_1h?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_24h?: InputMaybe<Scalars['Int']['input']>;
  comments_users_count?: InputMaybe<Scalars['Int']['input']>;
  forwards?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  reaction_24h?: InputMaybe<Scalars['Int']['input']>;
  reactions_1h?: InputMaybe<Scalars['Int']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_post_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_reactions_count?: InputMaybe<Scalars['Int']['input']>;
  view_24h?: InputMaybe<Scalars['Int']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
  views_1h?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Stat_Post_Max_Fields = {
  __typename?: 'stat_post_max_fields';
  comments_channels_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Int']['output']>;
  comments_users_count?: Maybe<Scalars['Int']['output']>;
  forwards?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  reaction_24h?: Maybe<Scalars['Int']['output']>;
  reactions_1h?: Maybe<Scalars['Int']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_post_id?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_reactions_count?: Maybe<Scalars['Int']['output']>;
  view_24h?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
  views_1h?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Stat_Post_Min_Fields = {
  __typename?: 'stat_post_min_fields';
  comments_channels_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Int']['output']>;
  comments_users_count?: Maybe<Scalars['Int']['output']>;
  forwards?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  reaction_24h?: Maybe<Scalars['Int']['output']>;
  reactions_1h?: Maybe<Scalars['Int']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_post_id?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_reactions_count?: Maybe<Scalars['Int']['output']>;
  view_24h?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
  views_1h?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "stat_post" */
export type Stat_Post_Mutation_Response = {
  __typename?: 'stat_post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Stat_Post>;
};

/** on_conflict condition type for table "stat_post" */
export type Stat_Post_On_Conflict = {
  constraint: Stat_Post_Constraint;
  update_columns?: Array<Stat_Post_Update_Column>;
  where?: InputMaybe<Stat_Post_Bool_Exp>;
};

/** Ordering options when selecting data from "stat_post". */
export type Stat_Post_Order_By = {
  comments_channels_count?: InputMaybe<Order_By>;
  comments_messages_count?: InputMaybe<Order_By>;
  comments_messages_count_1h?: InputMaybe<Order_By>;
  comments_messages_count_24h?: InputMaybe<Order_By>;
  comments_users_count?: InputMaybe<Order_By>;
  forwards?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  reaction_24h?: InputMaybe<Order_By>;
  reactions_1h?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
  tg_post_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_reactions_count?: InputMaybe<Order_By>;
  view_24h?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
  views_1h?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stat_post */
export type Stat_Post_Pk_Columns_Input = {
  pk: Scalars['bigint']['input'];
};

/** select columns of table "stat_post" */
export enum Stat_Post_Select_Column {
  /** column name */
  comments_channels_count = 'comments_channels_count',
  /** column name */
  comments_messages_count = 'comments_messages_count',
  /** column name */
  comments_messages_count_1h = 'comments_messages_count_1h',
  /** column name */
  comments_messages_count_24h = 'comments_messages_count_24h',
  /** column name */
  comments_users_count = 'comments_users_count',
  /** column name */
  forwards = 'forwards',
  /** column name */
  link = 'link',
  /** column name */
  media = 'media',
  /** column name */
  message = 'message',
  /** column name */
  pk = 'pk',
  /** column name */
  reaction_24h = 'reaction_24h',
  /** column name */
  reactions_1h = 'reactions_1h',
  /** column name */
  tg_channel_id = 'tg_channel_id',
  /** column name */
  tg_post_id = 'tg_post_id',
  /** column name */
  timestamp = 'timestamp',
  /** column name */
  total_reactions_count = 'total_reactions_count',
  /** column name */
  view_24h = 'view_24h',
  /** column name */
  views = 'views',
  /** column name */
  views_1h = 'views_1h'
}

/** input type for updating data in table "stat_post" */
export type Stat_Post_Set_Input = {
  comments_channels_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_1h?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_24h?: InputMaybe<Scalars['Int']['input']>;
  comments_users_count?: InputMaybe<Scalars['Int']['input']>;
  forwards?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  reaction_24h?: InputMaybe<Scalars['Int']['input']>;
  reactions_1h?: InputMaybe<Scalars['Int']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_post_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_reactions_count?: InputMaybe<Scalars['Int']['input']>;
  view_24h?: InputMaybe<Scalars['Int']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
  views_1h?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Stat_Post_Stddev_Fields = {
  __typename?: 'stat_post_stddev_fields';
  comments_channels_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Float']['output']>;
  comments_users_count?: Maybe<Scalars['Float']['output']>;
  forwards?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_24h?: Maybe<Scalars['Float']['output']>;
  reactions_1h?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
  total_reactions_count?: Maybe<Scalars['Float']['output']>;
  view_24h?: Maybe<Scalars['Float']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
  views_1h?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Stat_Post_Stddev_Pop_Fields = {
  __typename?: 'stat_post_stddev_pop_fields';
  comments_channels_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Float']['output']>;
  comments_users_count?: Maybe<Scalars['Float']['output']>;
  forwards?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_24h?: Maybe<Scalars['Float']['output']>;
  reactions_1h?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
  total_reactions_count?: Maybe<Scalars['Float']['output']>;
  view_24h?: Maybe<Scalars['Float']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
  views_1h?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Stat_Post_Stddev_Samp_Fields = {
  __typename?: 'stat_post_stddev_samp_fields';
  comments_channels_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Float']['output']>;
  comments_users_count?: Maybe<Scalars['Float']['output']>;
  forwards?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_24h?: Maybe<Scalars['Float']['output']>;
  reactions_1h?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
  total_reactions_count?: Maybe<Scalars['Float']['output']>;
  view_24h?: Maybe<Scalars['Float']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
  views_1h?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "stat_post" */
export type Stat_Post_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stat_Post_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stat_Post_Stream_Cursor_Value_Input = {
  comments_channels_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_1h?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_24h?: InputMaybe<Scalars['Int']['input']>;
  comments_users_count?: InputMaybe<Scalars['Int']['input']>;
  forwards?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  reaction_24h?: InputMaybe<Scalars['Int']['input']>;
  reactions_1h?: InputMaybe<Scalars['Int']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_post_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_reactions_count?: InputMaybe<Scalars['Int']['input']>;
  view_24h?: InputMaybe<Scalars['Int']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
  views_1h?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Stat_Post_Sum_Fields = {
  __typename?: 'stat_post_sum_fields';
  comments_channels_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Int']['output']>;
  comments_users_count?: Maybe<Scalars['Int']['output']>;
  forwards?: Maybe<Scalars['Int']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  reaction_24h?: Maybe<Scalars['Int']['output']>;
  reactions_1h?: Maybe<Scalars['Int']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_post_id?: Maybe<Scalars['bigint']['output']>;
  total_reactions_count?: Maybe<Scalars['Int']['output']>;
  view_24h?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
  views_1h?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "stat_post" */
export enum Stat_Post_Update_Column {
  /** column name */
  comments_channels_count = 'comments_channels_count',
  /** column name */
  comments_messages_count = 'comments_messages_count',
  /** column name */
  comments_messages_count_1h = 'comments_messages_count_1h',
  /** column name */
  comments_messages_count_24h = 'comments_messages_count_24h',
  /** column name */
  comments_users_count = 'comments_users_count',
  /** column name */
  forwards = 'forwards',
  /** column name */
  link = 'link',
  /** column name */
  media = 'media',
  /** column name */
  message = 'message',
  /** column name */
  pk = 'pk',
  /** column name */
  reaction_24h = 'reaction_24h',
  /** column name */
  reactions_1h = 'reactions_1h',
  /** column name */
  tg_channel_id = 'tg_channel_id',
  /** column name */
  tg_post_id = 'tg_post_id',
  /** column name */
  timestamp = 'timestamp',
  /** column name */
  total_reactions_count = 'total_reactions_count',
  /** column name */
  view_24h = 'view_24h',
  /** column name */
  views = 'views',
  /** column name */
  views_1h = 'views_1h'
}

export type Stat_Post_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Stat_Post_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Stat_Post_Set_Input>;
  /** filter the rows which have to be updated */
  where: Stat_Post_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Stat_Post_Var_Pop_Fields = {
  __typename?: 'stat_post_var_pop_fields';
  comments_channels_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Float']['output']>;
  comments_users_count?: Maybe<Scalars['Float']['output']>;
  forwards?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_24h?: Maybe<Scalars['Float']['output']>;
  reactions_1h?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
  total_reactions_count?: Maybe<Scalars['Float']['output']>;
  view_24h?: Maybe<Scalars['Float']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
  views_1h?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Stat_Post_Var_Samp_Fields = {
  __typename?: 'stat_post_var_samp_fields';
  comments_channels_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Float']['output']>;
  comments_users_count?: Maybe<Scalars['Float']['output']>;
  forwards?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_24h?: Maybe<Scalars['Float']['output']>;
  reactions_1h?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
  total_reactions_count?: Maybe<Scalars['Float']['output']>;
  view_24h?: Maybe<Scalars['Float']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
  views_1h?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Stat_Post_Variance_Fields = {
  __typename?: 'stat_post_variance_fields';
  comments_channels_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Float']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Float']['output']>;
  comments_users_count?: Maybe<Scalars['Float']['output']>;
  forwards?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_24h?: Maybe<Scalars['Float']['output']>;
  reactions_1h?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
  total_reactions_count?: Maybe<Scalars['Float']['output']>;
  view_24h?: Maybe<Scalars['Float']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
  views_1h?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "stat_reaction" */
export type Stat_Reaction = {
  __typename?: 'stat_reaction';
  pk: Scalars['bigint']['output'];
  reaction_count?: Maybe<Scalars['Int']['output']>;
  reaction_emoticon?: Maybe<Scalars['String']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Int']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_post_id?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "stat_reaction" */
export type Stat_Reaction_Aggregate = {
  __typename?: 'stat_reaction_aggregate';
  aggregate?: Maybe<Stat_Reaction_Aggregate_Fields>;
  nodes: Array<Stat_Reaction>;
};

/** aggregate fields of "stat_reaction" */
export type Stat_Reaction_Aggregate_Fields = {
  __typename?: 'stat_reaction_aggregate_fields';
  avg?: Maybe<Stat_Reaction_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Stat_Reaction_Max_Fields>;
  min?: Maybe<Stat_Reaction_Min_Fields>;
  stddev?: Maybe<Stat_Reaction_Stddev_Fields>;
  stddev_pop?: Maybe<Stat_Reaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stat_Reaction_Stddev_Samp_Fields>;
  sum?: Maybe<Stat_Reaction_Sum_Fields>;
  var_pop?: Maybe<Stat_Reaction_Var_Pop_Fields>;
  var_samp?: Maybe<Stat_Reaction_Var_Samp_Fields>;
  variance?: Maybe<Stat_Reaction_Variance_Fields>;
};


/** aggregate fields of "stat_reaction" */
export type Stat_Reaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stat_Reaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Stat_Reaction_Avg_Fields = {
  __typename?: 'stat_reaction_avg_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_count?: Maybe<Scalars['Float']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "stat_reaction". All fields are combined with a logical 'AND'. */
export type Stat_Reaction_Bool_Exp = {
  _and?: InputMaybe<Array<Stat_Reaction_Bool_Exp>>;
  _not?: InputMaybe<Stat_Reaction_Bool_Exp>;
  _or?: InputMaybe<Array<Stat_Reaction_Bool_Exp>>;
  pk?: InputMaybe<Bigint_Comparison_Exp>;
  reaction_count?: InputMaybe<Int_Comparison_Exp>;
  reaction_emoticon?: InputMaybe<String_Comparison_Exp>;
  reaction_emoticon_code?: InputMaybe<Int_Comparison_Exp>;
  tg_channel_id?: InputMaybe<Bigint_Comparison_Exp>;
  tg_post_id?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "stat_reaction" */
export enum Stat_Reaction_Constraint {
  /** unique or primary key constraint on columns "pk" */
  stat_reaction_pkey = 'stat_reaction_pkey'
}

/** input type for incrementing numeric columns in table "stat_reaction" */
export type Stat_Reaction_Inc_Input = {
  pk?: InputMaybe<Scalars['bigint']['input']>;
  reaction_count?: InputMaybe<Scalars['Int']['input']>;
  reaction_emoticon_code?: InputMaybe<Scalars['Int']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_post_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "stat_reaction" */
export type Stat_Reaction_Insert_Input = {
  pk?: InputMaybe<Scalars['bigint']['input']>;
  reaction_count?: InputMaybe<Scalars['Int']['input']>;
  reaction_emoticon?: InputMaybe<Scalars['String']['input']>;
  reaction_emoticon_code?: InputMaybe<Scalars['Int']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_post_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Stat_Reaction_Max_Fields = {
  __typename?: 'stat_reaction_max_fields';
  pk?: Maybe<Scalars['bigint']['output']>;
  reaction_count?: Maybe<Scalars['Int']['output']>;
  reaction_emoticon?: Maybe<Scalars['String']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Int']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_post_id?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Stat_Reaction_Min_Fields = {
  __typename?: 'stat_reaction_min_fields';
  pk?: Maybe<Scalars['bigint']['output']>;
  reaction_count?: Maybe<Scalars['Int']['output']>;
  reaction_emoticon?: Maybe<Scalars['String']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Int']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_post_id?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "stat_reaction" */
export type Stat_Reaction_Mutation_Response = {
  __typename?: 'stat_reaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Stat_Reaction>;
};

/** on_conflict condition type for table "stat_reaction" */
export type Stat_Reaction_On_Conflict = {
  constraint: Stat_Reaction_Constraint;
  update_columns?: Array<Stat_Reaction_Update_Column>;
  where?: InputMaybe<Stat_Reaction_Bool_Exp>;
};

/** Ordering options when selecting data from "stat_reaction". */
export type Stat_Reaction_Order_By = {
  pk?: InputMaybe<Order_By>;
  reaction_count?: InputMaybe<Order_By>;
  reaction_emoticon?: InputMaybe<Order_By>;
  reaction_emoticon_code?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
  tg_post_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stat_reaction */
export type Stat_Reaction_Pk_Columns_Input = {
  pk: Scalars['bigint']['input'];
};

/** select columns of table "stat_reaction" */
export enum Stat_Reaction_Select_Column {
  /** column name */
  pk = 'pk',
  /** column name */
  reaction_count = 'reaction_count',
  /** column name */
  reaction_emoticon = 'reaction_emoticon',
  /** column name */
  reaction_emoticon_code = 'reaction_emoticon_code',
  /** column name */
  tg_channel_id = 'tg_channel_id',
  /** column name */
  tg_post_id = 'tg_post_id',
  /** column name */
  timestamp = 'timestamp'
}

/** input type for updating data in table "stat_reaction" */
export type Stat_Reaction_Set_Input = {
  pk?: InputMaybe<Scalars['bigint']['input']>;
  reaction_count?: InputMaybe<Scalars['Int']['input']>;
  reaction_emoticon?: InputMaybe<Scalars['String']['input']>;
  reaction_emoticon_code?: InputMaybe<Scalars['Int']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_post_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Stat_Reaction_Stddev_Fields = {
  __typename?: 'stat_reaction_stddev_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_count?: Maybe<Scalars['Float']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Stat_Reaction_Stddev_Pop_Fields = {
  __typename?: 'stat_reaction_stddev_pop_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_count?: Maybe<Scalars['Float']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Stat_Reaction_Stddev_Samp_Fields = {
  __typename?: 'stat_reaction_stddev_samp_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_count?: Maybe<Scalars['Float']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "stat_reaction" */
export type Stat_Reaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stat_Reaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stat_Reaction_Stream_Cursor_Value_Input = {
  pk?: InputMaybe<Scalars['bigint']['input']>;
  reaction_count?: InputMaybe<Scalars['Int']['input']>;
  reaction_emoticon?: InputMaybe<Scalars['String']['input']>;
  reaction_emoticon_code?: InputMaybe<Scalars['Int']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_post_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Stat_Reaction_Sum_Fields = {
  __typename?: 'stat_reaction_sum_fields';
  pk?: Maybe<Scalars['bigint']['output']>;
  reaction_count?: Maybe<Scalars['Int']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Int']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_post_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "stat_reaction" */
export enum Stat_Reaction_Update_Column {
  /** column name */
  pk = 'pk',
  /** column name */
  reaction_count = 'reaction_count',
  /** column name */
  reaction_emoticon = 'reaction_emoticon',
  /** column name */
  reaction_emoticon_code = 'reaction_emoticon_code',
  /** column name */
  tg_channel_id = 'tg_channel_id',
  /** column name */
  tg_post_id = 'tg_post_id',
  /** column name */
  timestamp = 'timestamp'
}

export type Stat_Reaction_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Stat_Reaction_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Stat_Reaction_Set_Input>;
  /** filter the rows which have to be updated */
  where: Stat_Reaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Stat_Reaction_Var_Pop_Fields = {
  __typename?: 'stat_reaction_var_pop_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_count?: Maybe<Scalars['Float']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Stat_Reaction_Var_Samp_Fields = {
  __typename?: 'stat_reaction_var_samp_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_count?: Maybe<Scalars['Float']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Stat_Reaction_Variance_Fields = {
  __typename?: 'stat_reaction_variance_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  reaction_count?: Maybe<Scalars['Float']['output']>;
  reaction_emoticon_code?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_post_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "stat_user" */
export type Stat_User = {
  __typename?: 'stat_user';
  first_name?: Maybe<Scalars['String']['output']>;
  invite_link?: Maybe<Scalars['String']['output']>;
  is_joined_by_link?: Maybe<Scalars['Boolean']['output']>;
  joined_at?: Maybe<Scalars['timestamp']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  left_at?: Maybe<Scalars['timestamp']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  pk: Scalars['bigint']['output'];
  premium?: Maybe<Scalars['Boolean']['output']>;
  scam?: Maybe<Scalars['Boolean']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_user_id?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

/** aggregated selection of "stat_user" */
export type Stat_User_Aggregate = {
  __typename?: 'stat_user_aggregate';
  aggregate?: Maybe<Stat_User_Aggregate_Fields>;
  nodes: Array<Stat_User>;
};

/** aggregate fields of "stat_user" */
export type Stat_User_Aggregate_Fields = {
  __typename?: 'stat_user_aggregate_fields';
  avg?: Maybe<Stat_User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Stat_User_Max_Fields>;
  min?: Maybe<Stat_User_Min_Fields>;
  stddev?: Maybe<Stat_User_Stddev_Fields>;
  stddev_pop?: Maybe<Stat_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stat_User_Stddev_Samp_Fields>;
  sum?: Maybe<Stat_User_Sum_Fields>;
  var_pop?: Maybe<Stat_User_Var_Pop_Fields>;
  var_samp?: Maybe<Stat_User_Var_Samp_Fields>;
  variance?: Maybe<Stat_User_Variance_Fields>;
};


/** aggregate fields of "stat_user" */
export type Stat_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stat_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Stat_User_Avg_Fields = {
  __typename?: 'stat_user_avg_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "stat_user". All fields are combined with a logical 'AND'. */
export type Stat_User_Bool_Exp = {
  _and?: InputMaybe<Array<Stat_User_Bool_Exp>>;
  _not?: InputMaybe<Stat_User_Bool_Exp>;
  _or?: InputMaybe<Array<Stat_User_Bool_Exp>>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  invite_link?: InputMaybe<String_Comparison_Exp>;
  is_joined_by_link?: InputMaybe<Boolean_Comparison_Exp>;
  joined_at?: InputMaybe<Timestamp_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  left_at?: InputMaybe<Timestamp_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  pk?: InputMaybe<Bigint_Comparison_Exp>;
  premium?: InputMaybe<Boolean_Comparison_Exp>;
  scam?: InputMaybe<Boolean_Comparison_Exp>;
  tg_channel_id?: InputMaybe<Bigint_Comparison_Exp>;
  tg_user_id?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "stat_user" */
export enum Stat_User_Constraint {
  /** unique or primary key constraint on columns "pk" */
  stat_user_pkey = 'stat_user_pkey',
  /** unique or primary key constraint on columns "tg_channel_id", "tg_user_id" */
  stat_user_tg_user_id_tg_channel_id_key = 'stat_user_tg_user_id_tg_channel_id_key'
}

/** input type for incrementing numeric columns in table "stat_user" */
export type Stat_User_Inc_Input = {
  pk?: InputMaybe<Scalars['bigint']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "stat_user" */
export type Stat_User_Insert_Input = {
  first_name?: InputMaybe<Scalars['String']['input']>;
  invite_link?: InputMaybe<Scalars['String']['input']>;
  is_joined_by_link?: InputMaybe<Scalars['Boolean']['input']>;
  joined_at?: InputMaybe<Scalars['timestamp']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  left_at?: InputMaybe<Scalars['timestamp']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  premium?: InputMaybe<Scalars['Boolean']['input']>;
  scam?: InputMaybe<Scalars['Boolean']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_user_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Stat_User_Max_Fields = {
  __typename?: 'stat_user_max_fields';
  first_name?: Maybe<Scalars['String']['output']>;
  invite_link?: Maybe<Scalars['String']['output']>;
  joined_at?: Maybe<Scalars['timestamp']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  left_at?: Maybe<Scalars['timestamp']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_user_id?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Stat_User_Min_Fields = {
  __typename?: 'stat_user_min_fields';
  first_name?: Maybe<Scalars['String']['output']>;
  invite_link?: Maybe<Scalars['String']['output']>;
  joined_at?: Maybe<Scalars['timestamp']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  left_at?: Maybe<Scalars['timestamp']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_user_id?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "stat_user" */
export type Stat_User_Mutation_Response = {
  __typename?: 'stat_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Stat_User>;
};

/** on_conflict condition type for table "stat_user" */
export type Stat_User_On_Conflict = {
  constraint: Stat_User_Constraint;
  update_columns?: Array<Stat_User_Update_Column>;
  where?: InputMaybe<Stat_User_Bool_Exp>;
};

/** Ordering options when selecting data from "stat_user". */
export type Stat_User_Order_By = {
  first_name?: InputMaybe<Order_By>;
  invite_link?: InputMaybe<Order_By>;
  is_joined_by_link?: InputMaybe<Order_By>;
  joined_at?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  left_at?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  premium?: InputMaybe<Order_By>;
  scam?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
  tg_user_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stat_user */
export type Stat_User_Pk_Columns_Input = {
  pk: Scalars['bigint']['input'];
};

/** select columns of table "stat_user" */
export enum Stat_User_Select_Column {
  /** column name */
  first_name = 'first_name',
  /** column name */
  invite_link = 'invite_link',
  /** column name */
  is_joined_by_link = 'is_joined_by_link',
  /** column name */
  joined_at = 'joined_at',
  /** column name */
  last_name = 'last_name',
  /** column name */
  left_at = 'left_at',
  /** column name */
  phone = 'phone',
  /** column name */
  pk = 'pk',
  /** column name */
  premium = 'premium',
  /** column name */
  scam = 'scam',
  /** column name */
  tg_channel_id = 'tg_channel_id',
  /** column name */
  tg_user_id = 'tg_user_id',
  /** column name */
  timestamp = 'timestamp',
  /** column name */
  username = 'username',
  /** column name */
  verified = 'verified'
}

/** input type for updating data in table "stat_user" */
export type Stat_User_Set_Input = {
  first_name?: InputMaybe<Scalars['String']['input']>;
  invite_link?: InputMaybe<Scalars['String']['input']>;
  is_joined_by_link?: InputMaybe<Scalars['Boolean']['input']>;
  joined_at?: InputMaybe<Scalars['timestamp']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  left_at?: InputMaybe<Scalars['timestamp']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  premium?: InputMaybe<Scalars['Boolean']['input']>;
  scam?: InputMaybe<Scalars['Boolean']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_user_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Stat_User_Stddev_Fields = {
  __typename?: 'stat_user_stddev_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Stat_User_Stddev_Pop_Fields = {
  __typename?: 'stat_user_stddev_pop_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Stat_User_Stddev_Samp_Fields = {
  __typename?: 'stat_user_stddev_samp_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "stat_user" */
export type Stat_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stat_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stat_User_Stream_Cursor_Value_Input = {
  first_name?: InputMaybe<Scalars['String']['input']>;
  invite_link?: InputMaybe<Scalars['String']['input']>;
  is_joined_by_link?: InputMaybe<Scalars['Boolean']['input']>;
  joined_at?: InputMaybe<Scalars['timestamp']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  left_at?: InputMaybe<Scalars['timestamp']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  premium?: InputMaybe<Scalars['Boolean']['input']>;
  scam?: InputMaybe<Scalars['Boolean']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_user_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Stat_User_Sum_Fields = {
  __typename?: 'stat_user_sum_fields';
  pk?: Maybe<Scalars['bigint']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_user_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "stat_user" */
export enum Stat_User_Update_Column {
  /** column name */
  first_name = 'first_name',
  /** column name */
  invite_link = 'invite_link',
  /** column name */
  is_joined_by_link = 'is_joined_by_link',
  /** column name */
  joined_at = 'joined_at',
  /** column name */
  last_name = 'last_name',
  /** column name */
  left_at = 'left_at',
  /** column name */
  phone = 'phone',
  /** column name */
  pk = 'pk',
  /** column name */
  premium = 'premium',
  /** column name */
  scam = 'scam',
  /** column name */
  tg_channel_id = 'tg_channel_id',
  /** column name */
  tg_user_id = 'tg_user_id',
  /** column name */
  timestamp = 'timestamp',
  /** column name */
  username = 'username',
  /** column name */
  verified = 'verified'
}

export type Stat_User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Stat_User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Stat_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Stat_User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Stat_User_Var_Pop_Fields = {
  __typename?: 'stat_user_var_pop_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Stat_User_Var_Samp_Fields = {
  __typename?: 'stat_user_var_samp_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Stat_User_Variance_Fields = {
  __typename?: 'stat_user_variance_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
  tg_user_id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** execute function "cohort_analysis_hasura" which returns "cohort_analysis_virtual" */
  cohort_analysis_hasura: Array<Cohort_Analysis_Virtual>;
  /** execute function "cohort_analysis_hasura" and query aggregates on result of table type "cohort_analysis_virtual" */
  cohort_analysis_hasura_aggregate: Cohort_Analysis_Virtual_Aggregate;
  /** fetch data from the table: "cohort_analysis_virtual" */
  cohort_analysis_virtual: Array<Cohort_Analysis_Virtual>;
  /** fetch aggregated fields from the table: "cohort_analysis_virtual" */
  cohort_analysis_virtual_aggregate: Cohort_Analysis_Virtual_Aggregate;
  /** fetch data from the table in a streaming manner: "cohort_analysis_virtual" */
  cohort_analysis_virtual_stream: Array<Cohort_Analysis_Virtual>;
  /** execute function "hourly_user_signups" which returns "hourly_user_signups_virtual" */
  hourly_user_signups: Array<Hourly_User_Signups_Virtual>;
  /** execute function "hourly_user_signups" and query aggregates on result of table type "hourly_user_signups_virtual" */
  hourly_user_signups_aggregate: Hourly_User_Signups_Virtual_Aggregate;
  /** fetch data from the table: "hourly_user_signups_virtual" */
  hourly_user_signups_virtual: Array<Hourly_User_Signups_Virtual>;
  /** fetch aggregated fields from the table: "hourly_user_signups_virtual" */
  hourly_user_signups_virtual_aggregate: Hourly_User_Signups_Virtual_Aggregate;
  /** fetch data from the table in a streaming manner: "hourly_user_signups_virtual" */
  hourly_user_signups_virtual_stream: Array<Hourly_User_Signups_Virtual>;
  /** fetch data from the table: "stat_post" */
  stat_post: Array<Stat_Post>;
  /** fetch aggregated fields from the table: "stat_post" */
  stat_post_aggregate: Stat_Post_Aggregate;
  /** fetch data from the table: "stat_post" using primary key columns */
  stat_post_by_pk?: Maybe<Stat_Post>;
  /** fetch data from the table in a streaming manner: "stat_post" */
  stat_post_stream: Array<Stat_Post>;
  /** fetch data from the table: "stat_reaction" */
  stat_reaction: Array<Stat_Reaction>;
  /** fetch aggregated fields from the table: "stat_reaction" */
  stat_reaction_aggregate: Stat_Reaction_Aggregate;
  /** fetch data from the table: "stat_reaction" using primary key columns */
  stat_reaction_by_pk?: Maybe<Stat_Reaction>;
  /** fetch data from the table in a streaming manner: "stat_reaction" */
  stat_reaction_stream: Array<Stat_Reaction>;
  /** fetch data from the table: "stat_user" */
  stat_user: Array<Stat_User>;
  /** fetch aggregated fields from the table: "stat_user" */
  stat_user_aggregate: Stat_User_Aggregate;
  /** fetch data from the table: "stat_user" using primary key columns */
  stat_user_by_pk?: Maybe<Stat_User>;
  /** fetch data from the table in a streaming manner: "stat_user" */
  stat_user_stream: Array<Stat_User>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
  /** fetch data from the table: "user_tg_channel" */
  user_tg_channel: Array<User_Tg_Channel>;
  /** fetch aggregated fields from the table: "user_tg_channel" */
  user_tg_channel_aggregate: User_Tg_Channel_Aggregate;
  /** fetch data from the table: "user_tg_channel" using primary key columns */
  user_tg_channel_by_pk?: Maybe<User_Tg_Channel>;
  /** fetch data from the table in a streaming manner: "user_tg_channel" */
  user_tg_channel_stream: Array<User_Tg_Channel>;
};


export type Subscription_RootCohort_Analysis_HasuraArgs = {
  args: Cohort_Analysis_Hasura_Args;
  distinct_on?: InputMaybe<Array<Cohort_Analysis_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cohort_Analysis_Virtual_Order_By>>;
  where?: InputMaybe<Cohort_Analysis_Virtual_Bool_Exp>;
};


export type Subscription_RootCohort_Analysis_Hasura_AggregateArgs = {
  args: Cohort_Analysis_Hasura_Args;
  distinct_on?: InputMaybe<Array<Cohort_Analysis_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cohort_Analysis_Virtual_Order_By>>;
  where?: InputMaybe<Cohort_Analysis_Virtual_Bool_Exp>;
};


export type Subscription_RootCohort_Analysis_VirtualArgs = {
  distinct_on?: InputMaybe<Array<Cohort_Analysis_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cohort_Analysis_Virtual_Order_By>>;
  where?: InputMaybe<Cohort_Analysis_Virtual_Bool_Exp>;
};


export type Subscription_RootCohort_Analysis_Virtual_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cohort_Analysis_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cohort_Analysis_Virtual_Order_By>>;
  where?: InputMaybe<Cohort_Analysis_Virtual_Bool_Exp>;
};


export type Subscription_RootCohort_Analysis_Virtual_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cohort_Analysis_Virtual_Stream_Cursor_Input>>;
  where?: InputMaybe<Cohort_Analysis_Virtual_Bool_Exp>;
};


export type Subscription_RootHourly_User_SignupsArgs = {
  args: Hourly_User_Signups_Args;
  distinct_on?: InputMaybe<Array<Hourly_User_Signups_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hourly_User_Signups_Virtual_Order_By>>;
  where?: InputMaybe<Hourly_User_Signups_Virtual_Bool_Exp>;
};


export type Subscription_RootHourly_User_Signups_AggregateArgs = {
  args: Hourly_User_Signups_Args;
  distinct_on?: InputMaybe<Array<Hourly_User_Signups_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hourly_User_Signups_Virtual_Order_By>>;
  where?: InputMaybe<Hourly_User_Signups_Virtual_Bool_Exp>;
};


export type Subscription_RootHourly_User_Signups_VirtualArgs = {
  distinct_on?: InputMaybe<Array<Hourly_User_Signups_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hourly_User_Signups_Virtual_Order_By>>;
  where?: InputMaybe<Hourly_User_Signups_Virtual_Bool_Exp>;
};


export type Subscription_RootHourly_User_Signups_Virtual_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hourly_User_Signups_Virtual_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hourly_User_Signups_Virtual_Order_By>>;
  where?: InputMaybe<Hourly_User_Signups_Virtual_Bool_Exp>;
};


export type Subscription_RootHourly_User_Signups_Virtual_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Hourly_User_Signups_Virtual_Stream_Cursor_Input>>;
  where?: InputMaybe<Hourly_User_Signups_Virtual_Bool_Exp>;
};


export type Subscription_RootStat_PostArgs = {
  distinct_on?: InputMaybe<Array<Stat_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Post_Order_By>>;
  where?: InputMaybe<Stat_Post_Bool_Exp>;
};


export type Subscription_RootStat_Post_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stat_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Post_Order_By>>;
  where?: InputMaybe<Stat_Post_Bool_Exp>;
};


export type Subscription_RootStat_Post_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Subscription_RootStat_Post_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Stat_Post_Stream_Cursor_Input>>;
  where?: InputMaybe<Stat_Post_Bool_Exp>;
};


export type Subscription_RootStat_ReactionArgs = {
  distinct_on?: InputMaybe<Array<Stat_Reaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Reaction_Order_By>>;
  where?: InputMaybe<Stat_Reaction_Bool_Exp>;
};


export type Subscription_RootStat_Reaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stat_Reaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Reaction_Order_By>>;
  where?: InputMaybe<Stat_Reaction_Bool_Exp>;
};


export type Subscription_RootStat_Reaction_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Subscription_RootStat_Reaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Stat_Reaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Stat_Reaction_Bool_Exp>;
};


export type Subscription_RootStat_UserArgs = {
  distinct_on?: InputMaybe<Array<Stat_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_User_Order_By>>;
  where?: InputMaybe<Stat_User_Bool_Exp>;
};


export type Subscription_RootStat_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stat_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_User_Order_By>>;
  where?: InputMaybe<Stat_User_Bool_Exp>;
};


export type Subscription_RootStat_User_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Subscription_RootStat_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Stat_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Stat_User_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_Tg_ChannelArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Channel_Order_By>>;
  where?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};


export type Subscription_RootUser_Tg_Channel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Channel_Order_By>>;
  where?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};


export type Subscription_RootUser_Tg_Channel_By_PkArgs = {
  tg_channel_id: Scalars['bigint']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Tg_Channel_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Tg_Channel_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "id" */
  user_pkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "user_tg_channel" */
export type User_Tg_Channel = {
  __typename?: 'user_tg_channel';
  tg_channel_id: Scalars['bigint']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "user_tg_channel" */
export type User_Tg_Channel_Aggregate = {
  __typename?: 'user_tg_channel_aggregate';
  aggregate?: Maybe<User_Tg_Channel_Aggregate_Fields>;
  nodes: Array<User_Tg_Channel>;
};

/** aggregate fields of "user_tg_channel" */
export type User_Tg_Channel_Aggregate_Fields = {
  __typename?: 'user_tg_channel_aggregate_fields';
  avg?: Maybe<User_Tg_Channel_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Tg_Channel_Max_Fields>;
  min?: Maybe<User_Tg_Channel_Min_Fields>;
  stddev?: Maybe<User_Tg_Channel_Stddev_Fields>;
  stddev_pop?: Maybe<User_Tg_Channel_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Tg_Channel_Stddev_Samp_Fields>;
  sum?: Maybe<User_Tg_Channel_Sum_Fields>;
  var_pop?: Maybe<User_Tg_Channel_Var_Pop_Fields>;
  var_samp?: Maybe<User_Tg_Channel_Var_Samp_Fields>;
  variance?: Maybe<User_Tg_Channel_Variance_Fields>;
};


/** aggregate fields of "user_tg_channel" */
export type User_Tg_Channel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Tg_Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Tg_Channel_Avg_Fields = {
  __typename?: 'user_tg_channel_avg_fields';
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_tg_channel". All fields are combined with a logical 'AND'. */
export type User_Tg_Channel_Bool_Exp = {
  _and?: InputMaybe<Array<User_Tg_Channel_Bool_Exp>>;
  _not?: InputMaybe<User_Tg_Channel_Bool_Exp>;
  _or?: InputMaybe<Array<User_Tg_Channel_Bool_Exp>>;
  tg_channel_id?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_tg_channel" */
export enum User_Tg_Channel_Constraint {
  /** unique or primary key constraint on columns "tg_channel_id", "user_id" */
  user_tg_channel_pkey = 'user_tg_channel_pkey'
}

/** input type for incrementing numeric columns in table "user_tg_channel" */
export type User_Tg_Channel_Inc_Input = {
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_tg_channel" */
export type User_Tg_Channel_Insert_Input = {
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Tg_Channel_Max_Fields = {
  __typename?: 'user_tg_channel_max_fields';
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type User_Tg_Channel_Min_Fields = {
  __typename?: 'user_tg_channel_min_fields';
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "user_tg_channel" */
export type User_Tg_Channel_Mutation_Response = {
  __typename?: 'user_tg_channel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Tg_Channel>;
};

/** on_conflict condition type for table "user_tg_channel" */
export type User_Tg_Channel_On_Conflict = {
  constraint: User_Tg_Channel_Constraint;
  update_columns?: Array<User_Tg_Channel_Update_Column>;
  where?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};

/** Ordering options when selecting data from "user_tg_channel". */
export type User_Tg_Channel_Order_By = {
  tg_channel_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_tg_channel */
export type User_Tg_Channel_Pk_Columns_Input = {
  tg_channel_id: Scalars['bigint']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "user_tg_channel" */
export enum User_Tg_Channel_Select_Column {
  /** column name */
  tg_channel_id = 'tg_channel_id',
  /** column name */
  user_id = 'user_id'
}

/** input type for updating data in table "user_tg_channel" */
export type User_Tg_Channel_Set_Input = {
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type User_Tg_Channel_Stddev_Fields = {
  __typename?: 'user_tg_channel_stddev_fields';
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Tg_Channel_Stddev_Pop_Fields = {
  __typename?: 'user_tg_channel_stddev_pop_fields';
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Tg_Channel_Stddev_Samp_Fields = {
  __typename?: 'user_tg_channel_stddev_samp_fields';
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user_tg_channel" */
export type User_Tg_Channel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Tg_Channel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Tg_Channel_Stream_Cursor_Value_Input = {
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type User_Tg_Channel_Sum_Fields = {
  __typename?: 'user_tg_channel_sum_fields';
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "user_tg_channel" */
export enum User_Tg_Channel_Update_Column {
  /** column name */
  tg_channel_id = 'tg_channel_id',
  /** column name */
  user_id = 'user_id'
}

export type User_Tg_Channel_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Tg_Channel_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Tg_Channel_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Tg_Channel_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Tg_Channel_Var_Pop_Fields = {
  __typename?: 'user_tg_channel_var_pop_fields';
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Tg_Channel_Var_Samp_Fields = {
  __typename?: 'user_tg_channel_var_samp_fields';
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Tg_Channel_Variance_Fields = {
  __typename?: 'user_tg_channel_variance_fields';
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type CohortAnalysisQueryVariables = Exact<{
  end_date: Scalars['date']['input'];
  start_date: Scalars['date']['input'];
  tg_channel_id: Scalars['bigint']['input'];
}>;


export type CohortAnalysisQuery = { __typename?: 'query_root', cohort_analysis_hasura: Array<{ __typename?: 'cohort_analysis_virtual', join_date?: any | null, left_date?: any | null, joined_count?: any | null, left_count?: any | null }> };

export type InviteLinkStatsQueryVariables = Exact<{
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  invite_links: Array<Scalars['String']['input']> | Scalars['String']['input'];
  date_from?: InputMaybe<Scalars['timestamp']['input']>;
  date_to?: InputMaybe<Scalars['timestamp']['input']>;
}>;


export type InviteLinkStatsQuery = { __typename?: 'query_root', unsubscribes: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null }, subscribes: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null } };

export type InviteLinksDictQueryVariables = Exact<{
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type InviteLinksDictQuery = { __typename?: 'query_root', stat_user: Array<{ __typename?: 'stat_user', invite_link?: string | null }> };

export type SubscriptionsCountQueryVariables = Exact<{
  tg_channel_id: Scalars['bigint']['input'];
  from_date: Scalars['timestamp']['input'];
  to_date: Scalars['timestamp']['input'];
}>;


export type SubscriptionsCountQuery = { __typename?: 'query_root', stat_user_aggregate: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null } };

export type UnsubscriptionsCountQueryVariables = Exact<{
  tg_channel_id: Scalars['bigint']['input'];
  from_date: Scalars['timestamp']['input'];
  to_date: Scalars['timestamp']['input'];
}>;


export type UnsubscriptionsCountQuery = { __typename?: 'query_root', stat_user_aggregate: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null } };

export type UsersWithLinkCountsQueryVariables = Exact<{
  tg_channel_id: Scalars['bigint']['input'];
  start_date: Scalars['timestamp']['input'];
  end_date: Scalars['timestamp']['input'];
}>;


export type UsersWithLinkCountsQuery = { __typename?: 'query_root', without_link: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null }, with_link: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null } };

export type HourlyUserSignupsQueryVariables = Exact<{
  start_date: Scalars['timestamp']['input'];
  end_date: Scalars['timestamp']['input'];
}>;


export type HourlyUserSignupsQuery = { __typename?: 'query_root', hourly_user_signups: Array<{ __typename?: 'hourly_user_signups_virtual', signup_count?: any | null, hour?: any | null }> };


export const CohortAnalysisDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CohortAnalysis"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cohort_analysis_hasura"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"join_date"}},{"kind":"Field","name":{"kind":"Name","value":"left_date"}},{"kind":"Field","name":{"kind":"Name","value":"joined_count"}},{"kind":"Field","name":{"kind":"Name","value":"left_count"}}]}}]}}]} as unknown as DocumentNode<CohortAnalysisQuery, CohortAnalysisQueryVariables>;
export const InviteLinkStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InviteLinkStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"invite_links"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date_from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"unsubscribes"},"name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"invite_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"invite_links"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"left_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date_from"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date_to"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"subscribes"},"name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"invite_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"invite_links"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date_from"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date_to"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<InviteLinkStatsQuery, InviteLinkStatsQueryVariables>;
export const InviteLinksDictDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InviteLinksDict"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stat_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"invite_link"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"invite_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invite_link"}}]}}]}}]} as unknown as DocumentNode<InviteLinksDictQuery, InviteLinksDictQueryVariables>;
export const SubscriptionsCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubscriptionsCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"EnumValue","value":"pk"}}]}]}}]}}]}}]} as unknown as DocumentNode<SubscriptionsCountQuery, SubscriptionsCountQueryVariables>;
export const UnsubscriptionsCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnsubscriptionsCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"left_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"EnumValue","value":"pk"}}]}]}}]}}]}}]} as unknown as DocumentNode<UnsubscriptionsCountQuery, UnsubscriptionsCountQueryVariables>;
export const UsersWithLinkCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersWithLinkCounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"without_link"},"name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_joined_by_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_joined_by_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"with_link"},"name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_joined_by_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<UsersWithLinkCountsQuery, UsersWithLinkCountsQueryVariables>;
export const HourlyUserSignupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HourlyUserSignups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hourly_user_signups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup_count"}},{"kind":"Field","name":{"kind":"Name","value":"hour"}}]}}]}}]} as unknown as DocumentNode<HourlyUserSignupsQuery, HourlyUserSignupsQueryVariables>;