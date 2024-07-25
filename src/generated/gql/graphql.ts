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
  _int8: { input: any; output: any; }
  _text: { input: any; output: any; }
  bigint: { input: any; output: any; }
  date: { input: any; output: any; }
  float8: { input: any; output: any; }
  timestamp: { input: any; output: any; }
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

export type Confirm2FaInput = {
  cloud_password?: InputMaybe<Scalars['String']['input']>;
  code_2fa: Scalars['String']['input'];
  flow_run_id: Scalars['String']['input'];
};

export type Confirm2FaOutput = {
  __typename?: 'Confirm2FAOutput';
  error_text?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type FlowRunInput = {
  flow_run_id: Scalars['String']['input'];
};

export type FlowRunOutput = {
  __typename?: 'FlowRunOutput';
  state: Scalars['String']['output'];
};

export type GetTgAuthDeploymentIdOutput = {
  __typename?: 'GetTgAuthDeploymentIdOutput';
  deployment_id: Scalars['String']['output'];
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

export type Request2FaInput = {
  api_hash: Scalars['String']['input'];
  api_id: Scalars['String']['input'];
  deployment_id: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

export type Request2FaOutput = {
  __typename?: 'Request2FAOutput';
  error_text?: Maybe<Scalars['String']['output']>;
  flow_run_id?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
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

export type TgChannel = {
  __typename?: 'TgChannel';
  channel_id: Scalars['String']['output'];
  phone_numbers: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type TgChannelsInput = {
  title_search: Scalars['String']['input'];
};

export type TgChannelsOutput = {
  __typename?: 'TgChannelsOutput';
  channels: Array<TgChannel>;
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

export type Cohort_Analysis_Args = {
  end_date?: InputMaybe<Scalars['date']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  tg_channel_ids?: InputMaybe<Scalars['_int8']['input']>;
  time_bucket?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool = {
  __typename?: 'config__tg_bot_session_pool';
  api_hash: Scalars['String']['output'];
  api_id: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  phone_number: Scalars['String']['output'];
  pk: Scalars['bigint']['output'];
  session_str: Scalars['String']['output'];
  status: Scalars['String']['output'];
  /** An array relationship */
  tg_channel__sessions: Array<Tg_Channel__Session>;
  /** An aggregate relationship */
  tg_channel__sessions_aggregate: Tg_Channel__Session_Aggregate;
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_PoolTg_Channel__SessionsArgs = {
  distinct_on?: InputMaybe<Array<Tg_Channel__Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Channel__Session_Order_By>>;
  where?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
};


/** columns and relationships of "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_PoolTg_Channel__Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tg_Channel__Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Channel__Session_Order_By>>;
  where?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
};

/** aggregated selection of "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Aggregate = {
  __typename?: 'config__tg_bot_session_pool_aggregate';
  aggregate?: Maybe<Config__Tg_Bot_Session_Pool_Aggregate_Fields>;
  nodes: Array<Config__Tg_Bot_Session_Pool>;
};

export type Config__Tg_Bot_Session_Pool_Aggregate_Bool_Exp = {
  count?: InputMaybe<Config__Tg_Bot_Session_Pool_Aggregate_Bool_Exp_Count>;
};

export type Config__Tg_Bot_Session_Pool_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Aggregate_Fields = {
  __typename?: 'config__tg_bot_session_pool_aggregate_fields';
  avg?: Maybe<Config__Tg_Bot_Session_Pool_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Config__Tg_Bot_Session_Pool_Max_Fields>;
  min?: Maybe<Config__Tg_Bot_Session_Pool_Min_Fields>;
  stddev?: Maybe<Config__Tg_Bot_Session_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Config__Tg_Bot_Session_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Config__Tg_Bot_Session_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Config__Tg_Bot_Session_Pool_Sum_Fields>;
  var_pop?: Maybe<Config__Tg_Bot_Session_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Config__Tg_Bot_Session_Pool_Var_Samp_Fields>;
  variance?: Maybe<Config__Tg_Bot_Session_Pool_Variance_Fields>;
};


/** aggregate fields of "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Aggregate_Order_By = {
  avg?: InputMaybe<Config__Tg_Bot_Session_Pool_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Config__Tg_Bot_Session_Pool_Max_Order_By>;
  min?: InputMaybe<Config__Tg_Bot_Session_Pool_Min_Order_By>;
  stddev?: InputMaybe<Config__Tg_Bot_Session_Pool_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Config__Tg_Bot_Session_Pool_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Config__Tg_Bot_Session_Pool_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Config__Tg_Bot_Session_Pool_Sum_Order_By>;
  var_pop?: InputMaybe<Config__Tg_Bot_Session_Pool_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Config__Tg_Bot_Session_Pool_Var_Samp_Order_By>;
  variance?: InputMaybe<Config__Tg_Bot_Session_Pool_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Arr_Rel_Insert_Input = {
  data: Array<Config__Tg_Bot_Session_Pool_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Config__Tg_Bot_Session_Pool_On_Conflict>;
};

/** aggregate avg on columns */
export type Config__Tg_Bot_Session_Pool_Avg_Fields = {
  __typename?: 'config__tg_bot_session_pool_avg_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Avg_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "config__tg_bot_session_pool". All fields are combined with a logical 'AND'. */
export type Config__Tg_Bot_Session_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Bool_Exp>>;
  _not?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Bool_Exp>>;
  api_hash?: InputMaybe<String_Comparison_Exp>;
  api_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  pk?: InputMaybe<Bigint_Comparison_Exp>;
  session_str?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  tg_channel__sessions?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
  tg_channel__sessions_aggregate?: InputMaybe<Tg_Channel__Session_Aggregate_Bool_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "config__tg_bot_session_pool" */
export enum Config__Tg_Bot_Session_Pool_Constraint {
  /** unique or primary key constraint on columns "pk" */
  config__tg_bot_session_pool_pkey = 'config__tg_bot_session_pool_pkey'
}

/** input type for incrementing numeric columns in table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Inc_Input = {
  pk?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Insert_Input = {
  api_hash?: InputMaybe<Scalars['String']['input']>;
  api_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  session_str?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tg_channel__sessions?: InputMaybe<Tg_Channel__Session_Arr_Rel_Insert_Input>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Config__Tg_Bot_Session_Pool_Max_Fields = {
  __typename?: 'config__tg_bot_session_pool_max_fields';
  api_hash?: Maybe<Scalars['String']['output']>;
  api_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  session_str?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Max_Order_By = {
  api_hash?: InputMaybe<Order_By>;
  api_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  session_str?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Config__Tg_Bot_Session_Pool_Min_Fields = {
  __typename?: 'config__tg_bot_session_pool_min_fields';
  api_hash?: Maybe<Scalars['String']['output']>;
  api_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  session_str?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Min_Order_By = {
  api_hash?: InputMaybe<Order_By>;
  api_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  session_str?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Mutation_Response = {
  __typename?: 'config__tg_bot_session_pool_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Config__Tg_Bot_Session_Pool>;
};

/** input type for inserting object relation for remote table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Obj_Rel_Insert_Input = {
  data: Config__Tg_Bot_Session_Pool_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Config__Tg_Bot_Session_Pool_On_Conflict>;
};

/** on_conflict condition type for table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_On_Conflict = {
  constraint: Config__Tg_Bot_Session_Pool_Constraint;
  update_columns?: Array<Config__Tg_Bot_Session_Pool_Update_Column>;
  where?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
};

/** Ordering options when selecting data from "config__tg_bot_session_pool". */
export type Config__Tg_Bot_Session_Pool_Order_By = {
  api_hash?: InputMaybe<Order_By>;
  api_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  session_str?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tg_channel__sessions_aggregate?: InputMaybe<Tg_Channel__Session_Aggregate_Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: config__tg_bot_session_pool */
export type Config__Tg_Bot_Session_Pool_Pk_Columns_Input = {
  pk: Scalars['bigint']['input'];
};

/** select columns of table "config__tg_bot_session_pool" */
export enum Config__Tg_Bot_Session_Pool_Select_Column {
  /** column name */
  api_hash = 'api_hash',
  /** column name */
  api_id = 'api_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  phone_number = 'phone_number',
  /** column name */
  pk = 'pk',
  /** column name */
  session_str = 'session_str',
  /** column name */
  status = 'status',
  /** column name */
  user_id = 'user_id'
}

/** input type for updating data in table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Set_Input = {
  api_hash?: InputMaybe<Scalars['String']['input']>;
  api_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  session_str?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Config__Tg_Bot_Session_Pool_Stddev_Fields = {
  __typename?: 'config__tg_bot_session_pool_stddev_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Stddev_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Config__Tg_Bot_Session_Pool_Stddev_Pop_Fields = {
  __typename?: 'config__tg_bot_session_pool_stddev_pop_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Stddev_Pop_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Config__Tg_Bot_Session_Pool_Stddev_Samp_Fields = {
  __typename?: 'config__tg_bot_session_pool_stddev_samp_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Stddev_Samp_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Config__Tg_Bot_Session_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Config__Tg_Bot_Session_Pool_Stream_Cursor_Value_Input = {
  api_hash?: InputMaybe<Scalars['String']['input']>;
  api_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  session_str?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Config__Tg_Bot_Session_Pool_Sum_Fields = {
  __typename?: 'config__tg_bot_session_pool_sum_fields';
  pk?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Sum_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** update columns of table "config__tg_bot_session_pool" */
export enum Config__Tg_Bot_Session_Pool_Update_Column {
  /** column name */
  api_hash = 'api_hash',
  /** column name */
  api_id = 'api_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  phone_number = 'phone_number',
  /** column name */
  pk = 'pk',
  /** column name */
  session_str = 'session_str',
  /** column name */
  status = 'status',
  /** column name */
  user_id = 'user_id'
}

export type Config__Tg_Bot_Session_Pool_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Config__Tg_Bot_Session_Pool_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Config__Tg_Bot_Session_Pool_Set_Input>;
  /** filter the rows which have to be updated */
  where: Config__Tg_Bot_Session_Pool_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Config__Tg_Bot_Session_Pool_Var_Pop_Fields = {
  __typename?: 'config__tg_bot_session_pool_var_pop_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Var_Pop_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Config__Tg_Bot_Session_Pool_Var_Samp_Fields = {
  __typename?: 'config__tg_bot_session_pool_var_samp_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Var_Samp_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Config__Tg_Bot_Session_Pool_Variance_Fields = {
  __typename?: 'config__tg_bot_session_pool_variance_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "config__tg_bot_session_pool" */
export type Config__Tg_Bot_Session_Pool_Variance_Order_By = {
  pk?: InputMaybe<Order_By>;
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

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** columns and relationships of "fn_cohort_analysis" */
export type Fn_Cohort_Analysis = {
  __typename?: 'fn_cohort_analysis';
  join_date?: Maybe<Scalars['date']['output']>;
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
  left_date?: Maybe<Scalars['date']['output']>;
};

export type Fn_Cohort_Analysis_Aggregate = {
  __typename?: 'fn_cohort_analysis_aggregate';
  aggregate?: Maybe<Fn_Cohort_Analysis_Aggregate_Fields>;
  nodes: Array<Fn_Cohort_Analysis>;
};

/** aggregate fields of "fn_cohort_analysis" */
export type Fn_Cohort_Analysis_Aggregate_Fields = {
  __typename?: 'fn_cohort_analysis_aggregate_fields';
  avg?: Maybe<Fn_Cohort_Analysis_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Fn_Cohort_Analysis_Max_Fields>;
  min?: Maybe<Fn_Cohort_Analysis_Min_Fields>;
  stddev?: Maybe<Fn_Cohort_Analysis_Stddev_Fields>;
  stddev_pop?: Maybe<Fn_Cohort_Analysis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fn_Cohort_Analysis_Stddev_Samp_Fields>;
  sum?: Maybe<Fn_Cohort_Analysis_Sum_Fields>;
  var_pop?: Maybe<Fn_Cohort_Analysis_Var_Pop_Fields>;
  var_samp?: Maybe<Fn_Cohort_Analysis_Var_Samp_Fields>;
  variance?: Maybe<Fn_Cohort_Analysis_Variance_Fields>;
};


/** aggregate fields of "fn_cohort_analysis" */
export type Fn_Cohort_Analysis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fn_Cohort_Analysis_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Fn_Cohort_Analysis_Avg_Fields = {
  __typename?: 'fn_cohort_analysis_avg_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "fn_cohort_analysis". All fields are combined with a logical 'AND'. */
export type Fn_Cohort_Analysis_Bool_Exp = {
  _and?: InputMaybe<Array<Fn_Cohort_Analysis_Bool_Exp>>;
  _not?: InputMaybe<Fn_Cohort_Analysis_Bool_Exp>;
  _or?: InputMaybe<Array<Fn_Cohort_Analysis_Bool_Exp>>;
  join_date?: InputMaybe<Date_Comparison_Exp>;
  joined_count?: InputMaybe<Bigint_Comparison_Exp>;
  left_count?: InputMaybe<Bigint_Comparison_Exp>;
  left_date?: InputMaybe<Date_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "fn_cohort_analysis" */
export type Fn_Cohort_Analysis_Inc_Input = {
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "fn_cohort_analysis" */
export type Fn_Cohort_Analysis_Insert_Input = {
  join_date?: InputMaybe<Scalars['date']['input']>;
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
  left_date?: InputMaybe<Scalars['date']['input']>;
};

/** aggregate max on columns */
export type Fn_Cohort_Analysis_Max_Fields = {
  __typename?: 'fn_cohort_analysis_max_fields';
  join_date?: Maybe<Scalars['date']['output']>;
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
  left_date?: Maybe<Scalars['date']['output']>;
};

/** aggregate min on columns */
export type Fn_Cohort_Analysis_Min_Fields = {
  __typename?: 'fn_cohort_analysis_min_fields';
  join_date?: Maybe<Scalars['date']['output']>;
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
  left_date?: Maybe<Scalars['date']['output']>;
};

/** response of any mutation on the table "fn_cohort_analysis" */
export type Fn_Cohort_Analysis_Mutation_Response = {
  __typename?: 'fn_cohort_analysis_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fn_Cohort_Analysis>;
};

/** Ordering options when selecting data from "fn_cohort_analysis". */
export type Fn_Cohort_Analysis_Order_By = {
  join_date?: InputMaybe<Order_By>;
  joined_count?: InputMaybe<Order_By>;
  left_count?: InputMaybe<Order_By>;
  left_date?: InputMaybe<Order_By>;
};

/** select columns of table "fn_cohort_analysis" */
export enum Fn_Cohort_Analysis_Select_Column {
  /** column name */
  join_date = 'join_date',
  /** column name */
  joined_count = 'joined_count',
  /** column name */
  left_count = 'left_count',
  /** column name */
  left_date = 'left_date'
}

/** input type for updating data in table "fn_cohort_analysis" */
export type Fn_Cohort_Analysis_Set_Input = {
  join_date?: InputMaybe<Scalars['date']['input']>;
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
  left_date?: InputMaybe<Scalars['date']['input']>;
};

/** aggregate stddev on columns */
export type Fn_Cohort_Analysis_Stddev_Fields = {
  __typename?: 'fn_cohort_analysis_stddev_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Fn_Cohort_Analysis_Stddev_Pop_Fields = {
  __typename?: 'fn_cohort_analysis_stddev_pop_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Fn_Cohort_Analysis_Stddev_Samp_Fields = {
  __typename?: 'fn_cohort_analysis_stddev_samp_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "fn_cohort_analysis" */
export type Fn_Cohort_Analysis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fn_Cohort_Analysis_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fn_Cohort_Analysis_Stream_Cursor_Value_Input = {
  join_date?: InputMaybe<Scalars['date']['input']>;
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
  left_date?: InputMaybe<Scalars['date']['input']>;
};

/** aggregate sum on columns */
export type Fn_Cohort_Analysis_Sum_Fields = {
  __typename?: 'fn_cohort_analysis_sum_fields';
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
};

export type Fn_Cohort_Analysis_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Fn_Cohort_Analysis_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fn_Cohort_Analysis_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fn_Cohort_Analysis_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Fn_Cohort_Analysis_Var_Pop_Fields = {
  __typename?: 'fn_cohort_analysis_var_pop_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Fn_Cohort_Analysis_Var_Samp_Fields = {
  __typename?: 'fn_cohort_analysis_var_samp_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Fn_Cohort_Analysis_Variance_Fields = {
  __typename?: 'fn_cohort_analysis_variance_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "fn_get_avg_user_lifecycle" */
export type Fn_Get_Avg_User_Lifecycle = {
  __typename?: 'fn_get_avg_user_lifecycle';
  avg_lifecycle_days?: Maybe<Scalars['float8']['output']>;
};

/** aggregated selection of "fn_get_avg_user_lifecycle" */
export type Fn_Get_Avg_User_Lifecycle_Aggregate = {
  __typename?: 'fn_get_avg_user_lifecycle_aggregate';
  aggregate?: Maybe<Fn_Get_Avg_User_Lifecycle_Aggregate_Fields>;
  nodes: Array<Fn_Get_Avg_User_Lifecycle>;
};

/** aggregate fields of "fn_get_avg_user_lifecycle" */
export type Fn_Get_Avg_User_Lifecycle_Aggregate_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_aggregate_fields';
  avg?: Maybe<Fn_Get_Avg_User_Lifecycle_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Fn_Get_Avg_User_Lifecycle_Max_Fields>;
  min?: Maybe<Fn_Get_Avg_User_Lifecycle_Min_Fields>;
  stddev?: Maybe<Fn_Get_Avg_User_Lifecycle_Stddev_Fields>;
  stddev_pop?: Maybe<Fn_Get_Avg_User_Lifecycle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fn_Get_Avg_User_Lifecycle_Stddev_Samp_Fields>;
  sum?: Maybe<Fn_Get_Avg_User_Lifecycle_Sum_Fields>;
  var_pop?: Maybe<Fn_Get_Avg_User_Lifecycle_Var_Pop_Fields>;
  var_samp?: Maybe<Fn_Get_Avg_User_Lifecycle_Var_Samp_Fields>;
  variance?: Maybe<Fn_Get_Avg_User_Lifecycle_Variance_Fields>;
};


/** aggregate fields of "fn_get_avg_user_lifecycle" */
export type Fn_Get_Avg_User_Lifecycle_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Fn_Get_Avg_User_Lifecycle_Avg_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_avg_fields';
  avg_lifecycle_days?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "fn_get_avg_user_lifecycle". All fields are combined with a logical 'AND'. */
export type Fn_Get_Avg_User_Lifecycle_Bool_Exp = {
  _and?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Bool_Exp>>;
  _not?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Bool_Exp>;
  _or?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Bool_Exp>>;
  avg_lifecycle_days?: InputMaybe<Float8_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "fn_get_avg_user_lifecycle" */
export type Fn_Get_Avg_User_Lifecycle_Inc_Input = {
  avg_lifecycle_days?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "fn_get_avg_user_lifecycle" */
export type Fn_Get_Avg_User_Lifecycle_Insert_Input = {
  avg_lifecycle_days?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate max on columns */
export type Fn_Get_Avg_User_Lifecycle_Max_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_max_fields';
  avg_lifecycle_days?: Maybe<Scalars['float8']['output']>;
};

/** aggregate min on columns */
export type Fn_Get_Avg_User_Lifecycle_Min_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_min_fields';
  avg_lifecycle_days?: Maybe<Scalars['float8']['output']>;
};

/** response of any mutation on the table "fn_get_avg_user_lifecycle" */
export type Fn_Get_Avg_User_Lifecycle_Mutation_Response = {
  __typename?: 'fn_get_avg_user_lifecycle_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fn_Get_Avg_User_Lifecycle>;
};

/** Ordering options when selecting data from "fn_get_avg_user_lifecycle". */
export type Fn_Get_Avg_User_Lifecycle_Order_By = {
  avg_lifecycle_days?: InputMaybe<Order_By>;
};

/** select columns of table "fn_get_avg_user_lifecycle" */
export enum Fn_Get_Avg_User_Lifecycle_Select_Column {
  /** column name */
  avg_lifecycle_days = 'avg_lifecycle_days'
}

/** input type for updating data in table "fn_get_avg_user_lifecycle" */
export type Fn_Get_Avg_User_Lifecycle_Set_Input = {
  avg_lifecycle_days?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate stddev on columns */
export type Fn_Get_Avg_User_Lifecycle_Stddev_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_stddev_fields';
  avg_lifecycle_days?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Fn_Get_Avg_User_Lifecycle_Stddev_Pop_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_stddev_pop_fields';
  avg_lifecycle_days?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Fn_Get_Avg_User_Lifecycle_Stddev_Samp_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_stddev_samp_fields';
  avg_lifecycle_days?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "fn_get_avg_user_lifecycle" */
export type Fn_Get_Avg_User_Lifecycle_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fn_Get_Avg_User_Lifecycle_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fn_Get_Avg_User_Lifecycle_Stream_Cursor_Value_Input = {
  avg_lifecycle_days?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate sum on columns */
export type Fn_Get_Avg_User_Lifecycle_Sum_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_sum_fields';
  avg_lifecycle_days?: Maybe<Scalars['float8']['output']>;
};

export type Fn_Get_Avg_User_Lifecycle_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fn_Get_Avg_User_Lifecycle_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Fn_Get_Avg_User_Lifecycle_Var_Pop_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_var_pop_fields';
  avg_lifecycle_days?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Fn_Get_Avg_User_Lifecycle_Var_Samp_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_var_samp_fields';
  avg_lifecycle_days?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Fn_Get_Avg_User_Lifecycle_Variance_Fields = {
  __typename?: 'fn_get_avg_user_lifecycle_variance_fields';
  avg_lifecycle_days?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "fn_unsubscribes_by_links" */
export type Fn_Unsubscribes_By_Links = {
  __typename?: 'fn_unsubscribes_by_links';
  invite_link?: Maybe<Scalars['String']['output']>;
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "fn_unsubscribes_by_links" */
export type Fn_Unsubscribes_By_Links_Aggregate = {
  __typename?: 'fn_unsubscribes_by_links_aggregate';
  aggregate?: Maybe<Fn_Unsubscribes_By_Links_Aggregate_Fields>;
  nodes: Array<Fn_Unsubscribes_By_Links>;
};

/** aggregate fields of "fn_unsubscribes_by_links" */
export type Fn_Unsubscribes_By_Links_Aggregate_Fields = {
  __typename?: 'fn_unsubscribes_by_links_aggregate_fields';
  avg?: Maybe<Fn_Unsubscribes_By_Links_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Fn_Unsubscribes_By_Links_Max_Fields>;
  min?: Maybe<Fn_Unsubscribes_By_Links_Min_Fields>;
  stddev?: Maybe<Fn_Unsubscribes_By_Links_Stddev_Fields>;
  stddev_pop?: Maybe<Fn_Unsubscribes_By_Links_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fn_Unsubscribes_By_Links_Stddev_Samp_Fields>;
  sum?: Maybe<Fn_Unsubscribes_By_Links_Sum_Fields>;
  var_pop?: Maybe<Fn_Unsubscribes_By_Links_Var_Pop_Fields>;
  var_samp?: Maybe<Fn_Unsubscribes_By_Links_Var_Samp_Fields>;
  variance?: Maybe<Fn_Unsubscribes_By_Links_Variance_Fields>;
};


/** aggregate fields of "fn_unsubscribes_by_links" */
export type Fn_Unsubscribes_By_Links_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Fn_Unsubscribes_By_Links_Avg_Fields = {
  __typename?: 'fn_unsubscribes_by_links_avg_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "fn_unsubscribes_by_links". All fields are combined with a logical 'AND'. */
export type Fn_Unsubscribes_By_Links_Bool_Exp = {
  _and?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Bool_Exp>>;
  _not?: InputMaybe<Fn_Unsubscribes_By_Links_Bool_Exp>;
  _or?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Bool_Exp>>;
  invite_link?: InputMaybe<String_Comparison_Exp>;
  joined_count?: InputMaybe<Bigint_Comparison_Exp>;
  left_count?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "fn_unsubscribes_by_links" */
export type Fn_Unsubscribes_By_Links_Inc_Input = {
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "fn_unsubscribes_by_links" */
export type Fn_Unsubscribes_By_Links_Insert_Input = {
  invite_link?: InputMaybe<Scalars['String']['input']>;
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Fn_Unsubscribes_By_Links_Max_Fields = {
  __typename?: 'fn_unsubscribes_by_links_max_fields';
  invite_link?: Maybe<Scalars['String']['output']>;
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Fn_Unsubscribes_By_Links_Min_Fields = {
  __typename?: 'fn_unsubscribes_by_links_min_fields';
  invite_link?: Maybe<Scalars['String']['output']>;
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "fn_unsubscribes_by_links" */
export type Fn_Unsubscribes_By_Links_Mutation_Response = {
  __typename?: 'fn_unsubscribes_by_links_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fn_Unsubscribes_By_Links>;
};

/** Ordering options when selecting data from "fn_unsubscribes_by_links". */
export type Fn_Unsubscribes_By_Links_Order_By = {
  invite_link?: InputMaybe<Order_By>;
  joined_count?: InputMaybe<Order_By>;
  left_count?: InputMaybe<Order_By>;
};

/** select columns of table "fn_unsubscribes_by_links" */
export enum Fn_Unsubscribes_By_Links_Select_Column {
  /** column name */
  invite_link = 'invite_link',
  /** column name */
  joined_count = 'joined_count',
  /** column name */
  left_count = 'left_count'
}

/** input type for updating data in table "fn_unsubscribes_by_links" */
export type Fn_Unsubscribes_By_Links_Set_Input = {
  invite_link?: InputMaybe<Scalars['String']['input']>;
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Fn_Unsubscribes_By_Links_Stddev_Fields = {
  __typename?: 'fn_unsubscribes_by_links_stddev_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Fn_Unsubscribes_By_Links_Stddev_Pop_Fields = {
  __typename?: 'fn_unsubscribes_by_links_stddev_pop_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Fn_Unsubscribes_By_Links_Stddev_Samp_Fields = {
  __typename?: 'fn_unsubscribes_by_links_stddev_samp_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "fn_unsubscribes_by_links" */
export type Fn_Unsubscribes_By_Links_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fn_Unsubscribes_By_Links_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fn_Unsubscribes_By_Links_Stream_Cursor_Value_Input = {
  invite_link?: InputMaybe<Scalars['String']['input']>;
  joined_count?: InputMaybe<Scalars['bigint']['input']>;
  left_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Fn_Unsubscribes_By_Links_Sum_Fields = {
  __typename?: 'fn_unsubscribes_by_links_sum_fields';
  joined_count?: Maybe<Scalars['bigint']['output']>;
  left_count?: Maybe<Scalars['bigint']['output']>;
};

export type Fn_Unsubscribes_By_Links_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Fn_Unsubscribes_By_Links_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fn_Unsubscribes_By_Links_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fn_Unsubscribes_By_Links_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Fn_Unsubscribes_By_Links_Var_Pop_Fields = {
  __typename?: 'fn_unsubscribes_by_links_var_pop_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Fn_Unsubscribes_By_Links_Var_Samp_Fields = {
  __typename?: 'fn_unsubscribes_by_links_var_samp_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Fn_Unsubscribes_By_Links_Variance_Fields = {
  __typename?: 'fn_unsubscribes_by_links_variance_fields';
  joined_count?: Maybe<Scalars['Float']['output']>;
  left_count?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "fn_unsubscribes_by_periods" */
export type Fn_Unsubscribes_By_Periods = {
  __typename?: 'fn_unsubscribes_by_periods';
  count?: Maybe<Scalars['Int']['output']>;
  interval_label?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['float8']['output']>;
};

/** aggregated selection of "fn_unsubscribes_by_periods" */
export type Fn_Unsubscribes_By_Periods_Aggregate = {
  __typename?: 'fn_unsubscribes_by_periods_aggregate';
  aggregate?: Maybe<Fn_Unsubscribes_By_Periods_Aggregate_Fields>;
  nodes: Array<Fn_Unsubscribes_By_Periods>;
};

/** aggregate fields of "fn_unsubscribes_by_periods" */
export type Fn_Unsubscribes_By_Periods_Aggregate_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_aggregate_fields';
  avg?: Maybe<Fn_Unsubscribes_By_Periods_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Fn_Unsubscribes_By_Periods_Max_Fields>;
  min?: Maybe<Fn_Unsubscribes_By_Periods_Min_Fields>;
  stddev?: Maybe<Fn_Unsubscribes_By_Periods_Stddev_Fields>;
  stddev_pop?: Maybe<Fn_Unsubscribes_By_Periods_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fn_Unsubscribes_By_Periods_Stddev_Samp_Fields>;
  sum?: Maybe<Fn_Unsubscribes_By_Periods_Sum_Fields>;
  var_pop?: Maybe<Fn_Unsubscribes_By_Periods_Var_Pop_Fields>;
  var_samp?: Maybe<Fn_Unsubscribes_By_Periods_Var_Samp_Fields>;
  variance?: Maybe<Fn_Unsubscribes_By_Periods_Variance_Fields>;
};


/** aggregate fields of "fn_unsubscribes_by_periods" */
export type Fn_Unsubscribes_By_Periods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Fn_Unsubscribes_By_Periods_Avg_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "fn_unsubscribes_by_periods". All fields are combined with a logical 'AND'. */
export type Fn_Unsubscribes_By_Periods_Bool_Exp = {
  _and?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Bool_Exp>>;
  _not?: InputMaybe<Fn_Unsubscribes_By_Periods_Bool_Exp>;
  _or?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Bool_Exp>>;
  count?: InputMaybe<Int_Comparison_Exp>;
  interval_label?: InputMaybe<String_Comparison_Exp>;
  percentage?: InputMaybe<Float8_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "fn_unsubscribes_by_periods" */
export type Fn_Unsubscribes_By_Periods_Inc_Input = {
  count?: InputMaybe<Scalars['Int']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "fn_unsubscribes_by_periods" */
export type Fn_Unsubscribes_By_Periods_Insert_Input = {
  count?: InputMaybe<Scalars['Int']['input']>;
  interval_label?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate max on columns */
export type Fn_Unsubscribes_By_Periods_Max_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_max_fields';
  count?: Maybe<Scalars['Int']['output']>;
  interval_label?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['float8']['output']>;
};

/** aggregate min on columns */
export type Fn_Unsubscribes_By_Periods_Min_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_min_fields';
  count?: Maybe<Scalars['Int']['output']>;
  interval_label?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['float8']['output']>;
};

/** response of any mutation on the table "fn_unsubscribes_by_periods" */
export type Fn_Unsubscribes_By_Periods_Mutation_Response = {
  __typename?: 'fn_unsubscribes_by_periods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fn_Unsubscribes_By_Periods>;
};

/** Ordering options when selecting data from "fn_unsubscribes_by_periods". */
export type Fn_Unsubscribes_By_Periods_Order_By = {
  count?: InputMaybe<Order_By>;
  interval_label?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** select columns of table "fn_unsubscribes_by_periods" */
export enum Fn_Unsubscribes_By_Periods_Select_Column {
  /** column name */
  count = 'count',
  /** column name */
  interval_label = 'interval_label',
  /** column name */
  percentage = 'percentage'
}

/** input type for updating data in table "fn_unsubscribes_by_periods" */
export type Fn_Unsubscribes_By_Periods_Set_Input = {
  count?: InputMaybe<Scalars['Int']['input']>;
  interval_label?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate stddev on columns */
export type Fn_Unsubscribes_By_Periods_Stddev_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Fn_Unsubscribes_By_Periods_Stddev_Pop_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Fn_Unsubscribes_By_Periods_Stddev_Samp_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "fn_unsubscribes_by_periods" */
export type Fn_Unsubscribes_By_Periods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fn_Unsubscribes_By_Periods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fn_Unsubscribes_By_Periods_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['Int']['input']>;
  interval_label?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate sum on columns */
export type Fn_Unsubscribes_By_Periods_Sum_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_sum_fields';
  count?: Maybe<Scalars['Int']['output']>;
  percentage?: Maybe<Scalars['float8']['output']>;
};

export type Fn_Unsubscribes_By_Periods_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Fn_Unsubscribes_By_Periods_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fn_Unsubscribes_By_Periods_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fn_Unsubscribes_By_Periods_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Fn_Unsubscribes_By_Periods_Var_Pop_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Fn_Unsubscribes_By_Periods_Var_Samp_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Fn_Unsubscribes_By_Periods_Variance_Fields = {
  __typename?: 'fn_unsubscribes_by_periods_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "fn_users_by_period" */
export type Fn_Users_By_Period = {
  __typename?: 'fn_users_by_period';
  count?: Maybe<Scalars['bigint']['output']>;
  time_bucket?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "fn_users_by_period" */
export type Fn_Users_By_Period_Aggregate = {
  __typename?: 'fn_users_by_period_aggregate';
  aggregate?: Maybe<Fn_Users_By_Period_Aggregate_Fields>;
  nodes: Array<Fn_Users_By_Period>;
};

/** aggregate fields of "fn_users_by_period" */
export type Fn_Users_By_Period_Aggregate_Fields = {
  __typename?: 'fn_users_by_period_aggregate_fields';
  avg?: Maybe<Fn_Users_By_Period_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Fn_Users_By_Period_Max_Fields>;
  min?: Maybe<Fn_Users_By_Period_Min_Fields>;
  stddev?: Maybe<Fn_Users_By_Period_Stddev_Fields>;
  stddev_pop?: Maybe<Fn_Users_By_Period_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fn_Users_By_Period_Stddev_Samp_Fields>;
  sum?: Maybe<Fn_Users_By_Period_Sum_Fields>;
  var_pop?: Maybe<Fn_Users_By_Period_Var_Pop_Fields>;
  var_samp?: Maybe<Fn_Users_By_Period_Var_Samp_Fields>;
  variance?: Maybe<Fn_Users_By_Period_Variance_Fields>;
};


/** aggregate fields of "fn_users_by_period" */
export type Fn_Users_By_Period_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Fn_Users_By_Period_Avg_Fields = {
  __typename?: 'fn_users_by_period_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "fn_users_by_period". All fields are combined with a logical 'AND'. */
export type Fn_Users_By_Period_Bool_Exp = {
  _and?: InputMaybe<Array<Fn_Users_By_Period_Bool_Exp>>;
  _not?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
  _or?: InputMaybe<Array<Fn_Users_By_Period_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  time_bucket?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "fn_users_by_period" */
export type Fn_Users_By_Period_Inc_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "fn_users_by_period" */
export type Fn_Users_By_Period_Insert_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>;
  time_bucket?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Fn_Users_By_Period_Max_Fields = {
  __typename?: 'fn_users_by_period_max_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  time_bucket?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Fn_Users_By_Period_Min_Fields = {
  __typename?: 'fn_users_by_period_min_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  time_bucket?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "fn_users_by_period" */
export type Fn_Users_By_Period_Mutation_Response = {
  __typename?: 'fn_users_by_period_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fn_Users_By_Period>;
};

/** Ordering options when selecting data from "fn_users_by_period". */
export type Fn_Users_By_Period_Order_By = {
  count?: InputMaybe<Order_By>;
  time_bucket?: InputMaybe<Order_By>;
};

/** select columns of table "fn_users_by_period" */
export enum Fn_Users_By_Period_Select_Column {
  /** column name */
  count = 'count',
  /** column name */
  time_bucket = 'time_bucket'
}

/** input type for updating data in table "fn_users_by_period" */
export type Fn_Users_By_Period_Set_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>;
  time_bucket?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Fn_Users_By_Period_Stddev_Fields = {
  __typename?: 'fn_users_by_period_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Fn_Users_By_Period_Stddev_Pop_Fields = {
  __typename?: 'fn_users_by_period_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Fn_Users_By_Period_Stddev_Samp_Fields = {
  __typename?: 'fn_users_by_period_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "fn_users_by_period" */
export type Fn_Users_By_Period_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fn_Users_By_Period_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fn_Users_By_Period_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>;
  time_bucket?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Fn_Users_By_Period_Sum_Fields = {
  __typename?: 'fn_users_by_period_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
};

export type Fn_Users_By_Period_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Fn_Users_By_Period_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fn_Users_By_Period_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fn_Users_By_Period_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Fn_Users_By_Period_Var_Pop_Fields = {
  __typename?: 'fn_users_by_period_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Fn_Users_By_Period_Var_Samp_Fields = {
  __typename?: 'fn_users_by_period_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Fn_Users_By_Period_Variance_Fields = {
  __typename?: 'fn_users_by_period_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

export type Get_Avg_User_Lifecycle_Args = {
  tg_channel_ids?: InputMaybe<Scalars['_int8']['input']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  confirm_2fa?: Maybe<Confirm2FaOutput>;
  /** delete data from the table: "config__tg_bot_session_pool" */
  delete_config__tg_bot_session_pool?: Maybe<Config__Tg_Bot_Session_Pool_Mutation_Response>;
  /** delete single row from the table: "config__tg_bot_session_pool" */
  delete_config__tg_bot_session_pool_by_pk?: Maybe<Config__Tg_Bot_Session_Pool>;
  /** delete data from the table: "fn_cohort_analysis" */
  delete_fn_cohort_analysis?: Maybe<Fn_Cohort_Analysis_Mutation_Response>;
  /** delete data from the table: "fn_get_avg_user_lifecycle" */
  delete_fn_get_avg_user_lifecycle?: Maybe<Fn_Get_Avg_User_Lifecycle_Mutation_Response>;
  /** delete data from the table: "fn_unsubscribes_by_links" */
  delete_fn_unsubscribes_by_links?: Maybe<Fn_Unsubscribes_By_Links_Mutation_Response>;
  /** delete data from the table: "fn_unsubscribes_by_periods" */
  delete_fn_unsubscribes_by_periods?: Maybe<Fn_Unsubscribes_By_Periods_Mutation_Response>;
  /** delete data from the table: "fn_users_by_period" */
  delete_fn_users_by_period?: Maybe<Fn_Users_By_Period_Mutation_Response>;
  /** delete data from the table: "stat_post" */
  delete_stat_post?: Maybe<Stat_Post_Mutation_Response>;
  /** delete single row from the table: "stat_post" */
  delete_stat_post_by_pk?: Maybe<Stat_Post>;
  /** delete data from the table: "stat_post_info" */
  delete_stat_post_info?: Maybe<Stat_Post_Info_Mutation_Response>;
  /** delete single row from the table: "stat_post_info" */
  delete_stat_post_info_by_pk?: Maybe<Stat_Post_Info>;
  /** delete data from the table: "stat_reaction" */
  delete_stat_reaction?: Maybe<Stat_Reaction_Mutation_Response>;
  /** delete single row from the table: "stat_reaction" */
  delete_stat_reaction_by_pk?: Maybe<Stat_Reaction>;
  /** delete data from the table: "stat_user" */
  delete_stat_user?: Maybe<Stat_User_Mutation_Response>;
  /** delete single row from the table: "stat_user" */
  delete_stat_user_by_pk?: Maybe<Stat_User>;
  /** delete data from the table: "tg_channel__session" */
  delete_tg_channel__session?: Maybe<Tg_Channel__Session_Mutation_Response>;
  /** delete single row from the table: "tg_channel__session" */
  delete_tg_channel__session_by_pk?: Maybe<Tg_Channel__Session>;
  /** delete data from the table: "tg_invite_link_group" */
  delete_tg_invite_link_group?: Maybe<Tg_Invite_Link_Group_Mutation_Response>;
  /** delete single row from the table: "tg_invite_link_group" */
  delete_tg_invite_link_group_by_pk?: Maybe<Tg_Invite_Link_Group>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_tg_channel" */
  delete_user_tg_channel?: Maybe<User_Tg_Channel_Mutation_Response>;
  /** delete single row from the table: "user_tg_channel" */
  delete_user_tg_channel_by_pk?: Maybe<User_Tg_Channel>;
  /** delete data from the table: "user_tg_invite_link" */
  delete_user_tg_invite_link?: Maybe<User_Tg_Invite_Link_Mutation_Response>;
  /** delete single row from the table: "user_tg_invite_link" */
  delete_user_tg_invite_link_by_pk?: Maybe<User_Tg_Invite_Link>;
  /** insert data into the table: "config__tg_bot_session_pool" */
  insert_config__tg_bot_session_pool?: Maybe<Config__Tg_Bot_Session_Pool_Mutation_Response>;
  /** insert a single row into the table: "config__tg_bot_session_pool" */
  insert_config__tg_bot_session_pool_one?: Maybe<Config__Tg_Bot_Session_Pool>;
  /** insert data into the table: "fn_cohort_analysis" */
  insert_fn_cohort_analysis?: Maybe<Fn_Cohort_Analysis_Mutation_Response>;
  /** insert a single row into the table: "fn_cohort_analysis" */
  insert_fn_cohort_analysis_one?: Maybe<Fn_Cohort_Analysis>;
  /** insert data into the table: "fn_get_avg_user_lifecycle" */
  insert_fn_get_avg_user_lifecycle?: Maybe<Fn_Get_Avg_User_Lifecycle_Mutation_Response>;
  /** insert a single row into the table: "fn_get_avg_user_lifecycle" */
  insert_fn_get_avg_user_lifecycle_one?: Maybe<Fn_Get_Avg_User_Lifecycle>;
  /** insert data into the table: "fn_unsubscribes_by_links" */
  insert_fn_unsubscribes_by_links?: Maybe<Fn_Unsubscribes_By_Links_Mutation_Response>;
  /** insert a single row into the table: "fn_unsubscribes_by_links" */
  insert_fn_unsubscribes_by_links_one?: Maybe<Fn_Unsubscribes_By_Links>;
  /** insert data into the table: "fn_unsubscribes_by_periods" */
  insert_fn_unsubscribes_by_periods?: Maybe<Fn_Unsubscribes_By_Periods_Mutation_Response>;
  /** insert a single row into the table: "fn_unsubscribes_by_periods" */
  insert_fn_unsubscribes_by_periods_one?: Maybe<Fn_Unsubscribes_By_Periods>;
  /** insert data into the table: "fn_users_by_period" */
  insert_fn_users_by_period?: Maybe<Fn_Users_By_Period_Mutation_Response>;
  /** insert a single row into the table: "fn_users_by_period" */
  insert_fn_users_by_period_one?: Maybe<Fn_Users_By_Period>;
  /** insert data into the table: "stat_post" */
  insert_stat_post?: Maybe<Stat_Post_Mutation_Response>;
  /** insert data into the table: "stat_post_info" */
  insert_stat_post_info?: Maybe<Stat_Post_Info_Mutation_Response>;
  /** insert a single row into the table: "stat_post_info" */
  insert_stat_post_info_one?: Maybe<Stat_Post_Info>;
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
  /** insert data into the table: "tg_channel__session" */
  insert_tg_channel__session?: Maybe<Tg_Channel__Session_Mutation_Response>;
  /** insert a single row into the table: "tg_channel__session" */
  insert_tg_channel__session_one?: Maybe<Tg_Channel__Session>;
  /** insert data into the table: "tg_invite_link_group" */
  insert_tg_invite_link_group?: Maybe<Tg_Invite_Link_Group_Mutation_Response>;
  /** insert a single row into the table: "tg_invite_link_group" */
  insert_tg_invite_link_group_one?: Maybe<Tg_Invite_Link_Group>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_tg_channel" */
  insert_user_tg_channel?: Maybe<User_Tg_Channel_Mutation_Response>;
  /** insert a single row into the table: "user_tg_channel" */
  insert_user_tg_channel_one?: Maybe<User_Tg_Channel>;
  /** insert data into the table: "user_tg_invite_link" */
  insert_user_tg_invite_link?: Maybe<User_Tg_Invite_Link_Mutation_Response>;
  /** insert a single row into the table: "user_tg_invite_link" */
  insert_user_tg_invite_link_one?: Maybe<User_Tg_Invite_Link>;
  request_2fa?: Maybe<Request2FaOutput>;
  track_tg_channel?: Maybe<Track_Tg_Channel_Output>;
  /** update data of the table: "config__tg_bot_session_pool" */
  update_config__tg_bot_session_pool?: Maybe<Config__Tg_Bot_Session_Pool_Mutation_Response>;
  /** update single row of the table: "config__tg_bot_session_pool" */
  update_config__tg_bot_session_pool_by_pk?: Maybe<Config__Tg_Bot_Session_Pool>;
  /** update multiples rows of table: "config__tg_bot_session_pool" */
  update_config__tg_bot_session_pool_many?: Maybe<Array<Maybe<Config__Tg_Bot_Session_Pool_Mutation_Response>>>;
  /** update data of the table: "fn_cohort_analysis" */
  update_fn_cohort_analysis?: Maybe<Fn_Cohort_Analysis_Mutation_Response>;
  /** update multiples rows of table: "fn_cohort_analysis" */
  update_fn_cohort_analysis_many?: Maybe<Array<Maybe<Fn_Cohort_Analysis_Mutation_Response>>>;
  /** update data of the table: "fn_get_avg_user_lifecycle" */
  update_fn_get_avg_user_lifecycle?: Maybe<Fn_Get_Avg_User_Lifecycle_Mutation_Response>;
  /** update multiples rows of table: "fn_get_avg_user_lifecycle" */
  update_fn_get_avg_user_lifecycle_many?: Maybe<Array<Maybe<Fn_Get_Avg_User_Lifecycle_Mutation_Response>>>;
  /** update data of the table: "fn_unsubscribes_by_links" */
  update_fn_unsubscribes_by_links?: Maybe<Fn_Unsubscribes_By_Links_Mutation_Response>;
  /** update multiples rows of table: "fn_unsubscribes_by_links" */
  update_fn_unsubscribes_by_links_many?: Maybe<Array<Maybe<Fn_Unsubscribes_By_Links_Mutation_Response>>>;
  /** update data of the table: "fn_unsubscribes_by_periods" */
  update_fn_unsubscribes_by_periods?: Maybe<Fn_Unsubscribes_By_Periods_Mutation_Response>;
  /** update multiples rows of table: "fn_unsubscribes_by_periods" */
  update_fn_unsubscribes_by_periods_many?: Maybe<Array<Maybe<Fn_Unsubscribes_By_Periods_Mutation_Response>>>;
  /** update data of the table: "fn_users_by_period" */
  update_fn_users_by_period?: Maybe<Fn_Users_By_Period_Mutation_Response>;
  /** update multiples rows of table: "fn_users_by_period" */
  update_fn_users_by_period_many?: Maybe<Array<Maybe<Fn_Users_By_Period_Mutation_Response>>>;
  /** update data of the table: "stat_post" */
  update_stat_post?: Maybe<Stat_Post_Mutation_Response>;
  /** update single row of the table: "stat_post" */
  update_stat_post_by_pk?: Maybe<Stat_Post>;
  /** update data of the table: "stat_post_info" */
  update_stat_post_info?: Maybe<Stat_Post_Info_Mutation_Response>;
  /** update single row of the table: "stat_post_info" */
  update_stat_post_info_by_pk?: Maybe<Stat_Post_Info>;
  /** update multiples rows of table: "stat_post_info" */
  update_stat_post_info_many?: Maybe<Array<Maybe<Stat_Post_Info_Mutation_Response>>>;
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
  /** update data of the table: "tg_channel__session" */
  update_tg_channel__session?: Maybe<Tg_Channel__Session_Mutation_Response>;
  /** update single row of the table: "tg_channel__session" */
  update_tg_channel__session_by_pk?: Maybe<Tg_Channel__Session>;
  /** update multiples rows of table: "tg_channel__session" */
  update_tg_channel__session_many?: Maybe<Array<Maybe<Tg_Channel__Session_Mutation_Response>>>;
  /** update data of the table: "tg_invite_link_group" */
  update_tg_invite_link_group?: Maybe<Tg_Invite_Link_Group_Mutation_Response>;
  /** update single row of the table: "tg_invite_link_group" */
  update_tg_invite_link_group_by_pk?: Maybe<Tg_Invite_Link_Group>;
  /** update multiples rows of table: "tg_invite_link_group" */
  update_tg_invite_link_group_many?: Maybe<Array<Maybe<Tg_Invite_Link_Group_Mutation_Response>>>;
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
  /** update data of the table: "user_tg_invite_link" */
  update_user_tg_invite_link?: Maybe<User_Tg_Invite_Link_Mutation_Response>;
  /** update single row of the table: "user_tg_invite_link" */
  update_user_tg_invite_link_by_pk?: Maybe<User_Tg_Invite_Link>;
  /** update multiples rows of table: "user_tg_invite_link" */
  update_user_tg_invite_link_many?: Maybe<Array<Maybe<User_Tg_Invite_Link_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootConfirm_2faArgs = {
  arg1: Confirm2FaInput;
};


/** mutation root */
export type Mutation_RootDelete_Config__Tg_Bot_Session_PoolArgs = {
  where: Config__Tg_Bot_Session_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Config__Tg_Bot_Session_Pool_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Fn_Cohort_AnalysisArgs = {
  where: Fn_Cohort_Analysis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fn_Get_Avg_User_LifecycleArgs = {
  where: Fn_Get_Avg_User_Lifecycle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fn_Unsubscribes_By_LinksArgs = {
  where: Fn_Unsubscribes_By_Links_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fn_Unsubscribes_By_PeriodsArgs = {
  where: Fn_Unsubscribes_By_Periods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fn_Users_By_PeriodArgs = {
  where: Fn_Users_By_Period_Bool_Exp;
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
export type Mutation_RootDelete_Stat_Post_InfoArgs = {
  where: Stat_Post_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stat_Post_Info_By_PkArgs = {
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
export type Mutation_RootDelete_Tg_Channel__SessionArgs = {
  where: Tg_Channel__Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tg_Channel__Session_By_PkArgs = {
  config__tg_bot_session_pool_pk: Scalars['bigint']['input'];
  user_tg_channel_pk: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Tg_Invite_Link_GroupArgs = {
  where: Tg_Invite_Link_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tg_Invite_Link_Group_By_PkArgs = {
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
  pk: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Tg_Invite_LinkArgs = {
  where: User_Tg_Invite_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Tg_Invite_Link_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Config__Tg_Bot_Session_PoolArgs = {
  objects: Array<Config__Tg_Bot_Session_Pool_Insert_Input>;
  on_conflict?: InputMaybe<Config__Tg_Bot_Session_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Config__Tg_Bot_Session_Pool_OneArgs = {
  object: Config__Tg_Bot_Session_Pool_Insert_Input;
  on_conflict?: InputMaybe<Config__Tg_Bot_Session_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fn_Cohort_AnalysisArgs = {
  objects: Array<Fn_Cohort_Analysis_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Fn_Cohort_Analysis_OneArgs = {
  object: Fn_Cohort_Analysis_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Fn_Get_Avg_User_LifecycleArgs = {
  objects: Array<Fn_Get_Avg_User_Lifecycle_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Fn_Get_Avg_User_Lifecycle_OneArgs = {
  object: Fn_Get_Avg_User_Lifecycle_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Fn_Unsubscribes_By_LinksArgs = {
  objects: Array<Fn_Unsubscribes_By_Links_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Fn_Unsubscribes_By_Links_OneArgs = {
  object: Fn_Unsubscribes_By_Links_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Fn_Unsubscribes_By_PeriodsArgs = {
  objects: Array<Fn_Unsubscribes_By_Periods_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Fn_Unsubscribes_By_Periods_OneArgs = {
  object: Fn_Unsubscribes_By_Periods_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Fn_Users_By_PeriodArgs = {
  objects: Array<Fn_Users_By_Period_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Fn_Users_By_Period_OneArgs = {
  object: Fn_Users_By_Period_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Stat_PostArgs = {
  objects: Array<Stat_Post_Insert_Input>;
  on_conflict?: InputMaybe<Stat_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stat_Post_InfoArgs = {
  objects: Array<Stat_Post_Info_Insert_Input>;
  on_conflict?: InputMaybe<Stat_Post_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stat_Post_Info_OneArgs = {
  object: Stat_Post_Info_Insert_Input;
  on_conflict?: InputMaybe<Stat_Post_Info_On_Conflict>;
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
export type Mutation_RootInsert_Tg_Channel__SessionArgs = {
  objects: Array<Tg_Channel__Session_Insert_Input>;
  on_conflict?: InputMaybe<Tg_Channel__Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tg_Channel__Session_OneArgs = {
  object: Tg_Channel__Session_Insert_Input;
  on_conflict?: InputMaybe<Tg_Channel__Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tg_Invite_Link_GroupArgs = {
  objects: Array<Tg_Invite_Link_Group_Insert_Input>;
  on_conflict?: InputMaybe<Tg_Invite_Link_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tg_Invite_Link_Group_OneArgs = {
  object: Tg_Invite_Link_Group_Insert_Input;
  on_conflict?: InputMaybe<Tg_Invite_Link_Group_On_Conflict>;
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
export type Mutation_RootInsert_User_Tg_Invite_LinkArgs = {
  objects: Array<User_Tg_Invite_Link_Insert_Input>;
  on_conflict?: InputMaybe<User_Tg_Invite_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Tg_Invite_Link_OneArgs = {
  object: User_Tg_Invite_Link_Insert_Input;
  on_conflict?: InputMaybe<User_Tg_Invite_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootRequest_2faArgs = {
  arg1: Request2FaInput;
};


/** mutation root */
export type Mutation_RootTrack_Tg_ChannelArgs = {
  arg1: Track_Tg_Channel_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Config__Tg_Bot_Session_PoolArgs = {
  _inc?: InputMaybe<Config__Tg_Bot_Session_Pool_Inc_Input>;
  _set?: InputMaybe<Config__Tg_Bot_Session_Pool_Set_Input>;
  where: Config__Tg_Bot_Session_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Config__Tg_Bot_Session_Pool_By_PkArgs = {
  _inc?: InputMaybe<Config__Tg_Bot_Session_Pool_Inc_Input>;
  _set?: InputMaybe<Config__Tg_Bot_Session_Pool_Set_Input>;
  pk_columns: Config__Tg_Bot_Session_Pool_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Config__Tg_Bot_Session_Pool_ManyArgs = {
  updates: Array<Config__Tg_Bot_Session_Pool_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fn_Cohort_AnalysisArgs = {
  _inc?: InputMaybe<Fn_Cohort_Analysis_Inc_Input>;
  _set?: InputMaybe<Fn_Cohort_Analysis_Set_Input>;
  where: Fn_Cohort_Analysis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fn_Cohort_Analysis_ManyArgs = {
  updates: Array<Fn_Cohort_Analysis_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fn_Get_Avg_User_LifecycleArgs = {
  _inc?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Inc_Input>;
  _set?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Set_Input>;
  where: Fn_Get_Avg_User_Lifecycle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fn_Get_Avg_User_Lifecycle_ManyArgs = {
  updates: Array<Fn_Get_Avg_User_Lifecycle_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fn_Unsubscribes_By_LinksArgs = {
  _inc?: InputMaybe<Fn_Unsubscribes_By_Links_Inc_Input>;
  _set?: InputMaybe<Fn_Unsubscribes_By_Links_Set_Input>;
  where: Fn_Unsubscribes_By_Links_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fn_Unsubscribes_By_Links_ManyArgs = {
  updates: Array<Fn_Unsubscribes_By_Links_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fn_Unsubscribes_By_PeriodsArgs = {
  _inc?: InputMaybe<Fn_Unsubscribes_By_Periods_Inc_Input>;
  _set?: InputMaybe<Fn_Unsubscribes_By_Periods_Set_Input>;
  where: Fn_Unsubscribes_By_Periods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fn_Unsubscribes_By_Periods_ManyArgs = {
  updates: Array<Fn_Unsubscribes_By_Periods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fn_Users_By_PeriodArgs = {
  _inc?: InputMaybe<Fn_Users_By_Period_Inc_Input>;
  _set?: InputMaybe<Fn_Users_By_Period_Set_Input>;
  where: Fn_Users_By_Period_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fn_Users_By_Period_ManyArgs = {
  updates: Array<Fn_Users_By_Period_Updates>;
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
export type Mutation_RootUpdate_Stat_Post_InfoArgs = {
  _inc?: InputMaybe<Stat_Post_Info_Inc_Input>;
  _set?: InputMaybe<Stat_Post_Info_Set_Input>;
  where: Stat_Post_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_Post_Info_By_PkArgs = {
  _inc?: InputMaybe<Stat_Post_Info_Inc_Input>;
  _set?: InputMaybe<Stat_Post_Info_Set_Input>;
  pk_columns: Stat_Post_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stat_Post_Info_ManyArgs = {
  updates: Array<Stat_Post_Info_Updates>;
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
export type Mutation_RootUpdate_Tg_Channel__SessionArgs = {
  _inc?: InputMaybe<Tg_Channel__Session_Inc_Input>;
  _set?: InputMaybe<Tg_Channel__Session_Set_Input>;
  where: Tg_Channel__Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tg_Channel__Session_By_PkArgs = {
  _inc?: InputMaybe<Tg_Channel__Session_Inc_Input>;
  _set?: InputMaybe<Tg_Channel__Session_Set_Input>;
  pk_columns: Tg_Channel__Session_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tg_Channel__Session_ManyArgs = {
  updates: Array<Tg_Channel__Session_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tg_Invite_Link_GroupArgs = {
  _inc?: InputMaybe<Tg_Invite_Link_Group_Inc_Input>;
  _set?: InputMaybe<Tg_Invite_Link_Group_Set_Input>;
  where: Tg_Invite_Link_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tg_Invite_Link_Group_By_PkArgs = {
  _inc?: InputMaybe<Tg_Invite_Link_Group_Inc_Input>;
  _set?: InputMaybe<Tg_Invite_Link_Group_Set_Input>;
  pk_columns: Tg_Invite_Link_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tg_Invite_Link_Group_ManyArgs = {
  updates: Array<Tg_Invite_Link_Group_Updates>;
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


/** mutation root */
export type Mutation_RootUpdate_User_Tg_Invite_LinkArgs = {
  _inc?: InputMaybe<User_Tg_Invite_Link_Inc_Input>;
  _set?: InputMaybe<User_Tg_Invite_Link_Set_Input>;
  where: User_Tg_Invite_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Tg_Invite_Link_By_PkArgs = {
  _inc?: InputMaybe<User_Tg_Invite_Link_Inc_Input>;
  _set?: InputMaybe<User_Tg_Invite_Link_Set_Input>;
  pk_columns: User_Tg_Invite_Link_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Tg_Invite_Link_ManyArgs = {
  updates: Array<User_Tg_Invite_Link_Updates>;
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
  /** execute function "cohort_analysis" which returns "fn_cohort_analysis" */
  cohort_analysis: Array<Fn_Cohort_Analysis>;
  /** execute function "cohort_analysis" and query aggregates on result of table type "fn_cohort_analysis" */
  cohort_analysis_aggregate: Fn_Cohort_Analysis_Aggregate;
  /** fetch data from the table: "config__tg_bot_session_pool" */
  config__tg_bot_session_pool: Array<Config__Tg_Bot_Session_Pool>;
  /** fetch aggregated fields from the table: "config__tg_bot_session_pool" */
  config__tg_bot_session_pool_aggregate: Config__Tg_Bot_Session_Pool_Aggregate;
  /** fetch data from the table: "config__tg_bot_session_pool" using primary key columns */
  config__tg_bot_session_pool_by_pk?: Maybe<Config__Tg_Bot_Session_Pool>;
  flow_run?: Maybe<FlowRunOutput>;
  /** fetch data from the table: "fn_cohort_analysis" */
  fn_cohort_analysis: Array<Fn_Cohort_Analysis>;
  /** fetch aggregated fields from the table: "fn_cohort_analysis" */
  fn_cohort_analysis_aggregate: Fn_Cohort_Analysis_Aggregate;
  /** fetch data from the table: "fn_get_avg_user_lifecycle" */
  fn_get_avg_user_lifecycle: Array<Fn_Get_Avg_User_Lifecycle>;
  /** fetch aggregated fields from the table: "fn_get_avg_user_lifecycle" */
  fn_get_avg_user_lifecycle_aggregate: Fn_Get_Avg_User_Lifecycle_Aggregate;
  /** fetch data from the table: "fn_unsubscribes_by_links" */
  fn_unsubscribes_by_links: Array<Fn_Unsubscribes_By_Links>;
  /** fetch aggregated fields from the table: "fn_unsubscribes_by_links" */
  fn_unsubscribes_by_links_aggregate: Fn_Unsubscribes_By_Links_Aggregate;
  /** fetch data from the table: "fn_unsubscribes_by_periods" */
  fn_unsubscribes_by_periods: Array<Fn_Unsubscribes_By_Periods>;
  /** fetch aggregated fields from the table: "fn_unsubscribes_by_periods" */
  fn_unsubscribes_by_periods_aggregate: Fn_Unsubscribes_By_Periods_Aggregate;
  /** fetch data from the table: "fn_users_by_period" */
  fn_users_by_period: Array<Fn_Users_By_Period>;
  /** fetch aggregated fields from the table: "fn_users_by_period" */
  fn_users_by_period_aggregate: Fn_Users_By_Period_Aggregate;
  /** execute function "get_avg_user_lifecycle" which returns "fn_get_avg_user_lifecycle" */
  get_avg_user_lifecycle: Array<Fn_Get_Avg_User_Lifecycle>;
  /** execute function "get_avg_user_lifecycle" and query aggregates on result of table type "fn_get_avg_user_lifecycle" */
  get_avg_user_lifecycle_aggregate: Fn_Get_Avg_User_Lifecycle_Aggregate;
  get_tg_auth_deployment_id?: Maybe<GetTgAuthDeploymentIdOutput>;
  /** fetch data from the table: "stat_post" */
  stat_post: Array<Stat_Post>;
  /** fetch aggregated fields from the table: "stat_post" */
  stat_post_aggregate: Stat_Post_Aggregate;
  /** fetch data from the table: "stat_post" using primary key columns */
  stat_post_by_pk?: Maybe<Stat_Post>;
  /** fetch data from the table: "stat_post_info" */
  stat_post_info: Array<Stat_Post_Info>;
  /** fetch aggregated fields from the table: "stat_post_info" */
  stat_post_info_aggregate: Stat_Post_Info_Aggregate;
  /** fetch data from the table: "stat_post_info" using primary key columns */
  stat_post_info_by_pk?: Maybe<Stat_Post_Info>;
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
  /** fetch data from the table: "tg_channel__session" */
  tg_channel__session: Array<Tg_Channel__Session>;
  /** fetch aggregated fields from the table: "tg_channel__session" */
  tg_channel__session_aggregate: Tg_Channel__Session_Aggregate;
  /** fetch data from the table: "tg_channel__session" using primary key columns */
  tg_channel__session_by_pk?: Maybe<Tg_Channel__Session>;
  tg_channels?: Maybe<TgChannelsOutput>;
  /** fetch data from the table: "tg_invite_link_group" */
  tg_invite_link_group: Array<Tg_Invite_Link_Group>;
  /** fetch aggregated fields from the table: "tg_invite_link_group" */
  tg_invite_link_group_aggregate: Tg_Invite_Link_Group_Aggregate;
  /** fetch data from the table: "tg_invite_link_group" using primary key columns */
  tg_invite_link_group_by_pk?: Maybe<Tg_Invite_Link_Group>;
  /** execute function "unsubscribes_by_links" which returns "fn_unsubscribes_by_links" */
  unsubscribes_by_links: Array<Fn_Unsubscribes_By_Links>;
  /** execute function "unsubscribes_by_links" and query aggregates on result of table type "fn_unsubscribes_by_links" */
  unsubscribes_by_links_aggregate: Fn_Unsubscribes_By_Links_Aggregate;
  /** execute function "unsubscribes_by_periods" which returns "fn_unsubscribes_by_periods" */
  unsubscribes_by_periods: Array<Fn_Unsubscribes_By_Periods>;
  /** execute function "unsubscribes_by_periods" and query aggregates on result of table type "fn_unsubscribes_by_periods" */
  unsubscribes_by_periods_aggregate: Fn_Unsubscribes_By_Periods_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** execute function "user_signups_by_period" which returns "fn_users_by_period" */
  user_signups_by_period: Array<Fn_Users_By_Period>;
  /** execute function "user_signups_by_period" and query aggregates on result of table type "fn_users_by_period" */
  user_signups_by_period_aggregate: Fn_Users_By_Period_Aggregate;
  /** fetch data from the table: "user_tg_channel" */
  user_tg_channel: Array<User_Tg_Channel>;
  /** fetch aggregated fields from the table: "user_tg_channel" */
  user_tg_channel_aggregate: User_Tg_Channel_Aggregate;
  /** fetch data from the table: "user_tg_channel" using primary key columns */
  user_tg_channel_by_pk?: Maybe<User_Tg_Channel>;
  /** fetch data from the table: "user_tg_invite_link" */
  user_tg_invite_link: Array<User_Tg_Invite_Link>;
  /** fetch aggregated fields from the table: "user_tg_invite_link" */
  user_tg_invite_link_aggregate: User_Tg_Invite_Link_Aggregate;
  /** fetch data from the table: "user_tg_invite_link" using primary key columns */
  user_tg_invite_link_by_pk?: Maybe<User_Tg_Invite_Link>;
  /** execute function "user_unsubscribes_by_period" which returns "fn_users_by_period" */
  user_unsubscribes_by_period: Array<Fn_Users_By_Period>;
  /** execute function "user_unsubscribes_by_period" and query aggregates on result of table type "fn_users_by_period" */
  user_unsubscribes_by_period_aggregate: Fn_Users_By_Period_Aggregate;
};


export type Query_RootCohort_AnalysisArgs = {
  args: Cohort_Analysis_Args;
  distinct_on?: InputMaybe<Array<Fn_Cohort_Analysis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Cohort_Analysis_Order_By>>;
  where?: InputMaybe<Fn_Cohort_Analysis_Bool_Exp>;
};


export type Query_RootCohort_Analysis_AggregateArgs = {
  args: Cohort_Analysis_Args;
  distinct_on?: InputMaybe<Array<Fn_Cohort_Analysis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Cohort_Analysis_Order_By>>;
  where?: InputMaybe<Fn_Cohort_Analysis_Bool_Exp>;
};


export type Query_RootConfig__Tg_Bot_Session_PoolArgs = {
  distinct_on?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Order_By>>;
  where?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
};


export type Query_RootConfig__Tg_Bot_Session_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Order_By>>;
  where?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
};


export type Query_RootConfig__Tg_Bot_Session_Pool_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Query_RootFlow_RunArgs = {
  arg1: FlowRunInput;
};


export type Query_RootFn_Cohort_AnalysisArgs = {
  distinct_on?: InputMaybe<Array<Fn_Cohort_Analysis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Cohort_Analysis_Order_By>>;
  where?: InputMaybe<Fn_Cohort_Analysis_Bool_Exp>;
};


export type Query_RootFn_Cohort_Analysis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fn_Cohort_Analysis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Cohort_Analysis_Order_By>>;
  where?: InputMaybe<Fn_Cohort_Analysis_Bool_Exp>;
};


export type Query_RootFn_Get_Avg_User_LifecycleArgs = {
  distinct_on?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Order_By>>;
  where?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Bool_Exp>;
};


export type Query_RootFn_Get_Avg_User_Lifecycle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Order_By>>;
  where?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Bool_Exp>;
};


export type Query_RootFn_Unsubscribes_By_LinksArgs = {
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Links_Bool_Exp>;
};


export type Query_RootFn_Unsubscribes_By_Links_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Links_Bool_Exp>;
};


export type Query_RootFn_Unsubscribes_By_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Periods_Bool_Exp>;
};


export type Query_RootFn_Unsubscribes_By_Periods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Periods_Bool_Exp>;
};


export type Query_RootFn_Users_By_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};


export type Query_RootFn_Users_By_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};


export type Query_RootGet_Avg_User_LifecycleArgs = {
  args: Get_Avg_User_Lifecycle_Args;
  distinct_on?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Order_By>>;
  where?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Bool_Exp>;
};


export type Query_RootGet_Avg_User_Lifecycle_AggregateArgs = {
  args: Get_Avg_User_Lifecycle_Args;
  distinct_on?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Order_By>>;
  where?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Bool_Exp>;
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


export type Query_RootStat_Post_InfoArgs = {
  distinct_on?: InputMaybe<Array<Stat_Post_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Post_Info_Order_By>>;
  where?: InputMaybe<Stat_Post_Info_Bool_Exp>;
};


export type Query_RootStat_Post_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stat_Post_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Post_Info_Order_By>>;
  where?: InputMaybe<Stat_Post_Info_Bool_Exp>;
};


export type Query_RootStat_Post_Info_By_PkArgs = {
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


export type Query_RootTg_Channel__SessionArgs = {
  distinct_on?: InputMaybe<Array<Tg_Channel__Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Channel__Session_Order_By>>;
  where?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
};


export type Query_RootTg_Channel__Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tg_Channel__Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Channel__Session_Order_By>>;
  where?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
};


export type Query_RootTg_Channel__Session_By_PkArgs = {
  config__tg_bot_session_pool_pk: Scalars['bigint']['input'];
  user_tg_channel_pk: Scalars['bigint']['input'];
};


export type Query_RootTg_ChannelsArgs = {
  arg1: TgChannelsInput;
};


export type Query_RootTg_Invite_Link_GroupArgs = {
  distinct_on?: InputMaybe<Array<Tg_Invite_Link_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Invite_Link_Group_Order_By>>;
  where?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
};


export type Query_RootTg_Invite_Link_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tg_Invite_Link_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Invite_Link_Group_Order_By>>;
  where?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
};


export type Query_RootTg_Invite_Link_Group_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Query_RootUnsubscribes_By_LinksArgs = {
  args: Unsubscribes_By_Links_Args;
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Links_Bool_Exp>;
};


export type Query_RootUnsubscribes_By_Links_AggregateArgs = {
  args: Unsubscribes_By_Links_Args;
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Links_Bool_Exp>;
};


export type Query_RootUnsubscribes_By_PeriodsArgs = {
  args: Unsubscribes_By_Periods_Args;
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Periods_Bool_Exp>;
};


export type Query_RootUnsubscribes_By_Periods_AggregateArgs = {
  args: Unsubscribes_By_Periods_Args;
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Periods_Bool_Exp>;
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


export type Query_RootUser_Signups_By_PeriodArgs = {
  args: User_Signups_By_Period_Args;
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};


export type Query_RootUser_Signups_By_Period_AggregateArgs = {
  args: User_Signups_By_Period_Args;
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
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
  pk: Scalars['bigint']['input'];
};


export type Query_RootUser_Tg_Invite_LinkArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Invite_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Invite_Link_Order_By>>;
  where?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
};


export type Query_RootUser_Tg_Invite_Link_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Invite_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Invite_Link_Order_By>>;
  where?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
};


export type Query_RootUser_Tg_Invite_Link_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Query_RootUser_Unsubscribes_By_PeriodArgs = {
  args: User_Unsubscribes_By_Period_Args;
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};


export type Query_RootUser_Unsubscribes_By_Period_AggregateArgs = {
  args: User_Unsubscribes_By_Period_Args;
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};

/** columns and relationships of "stat_post" */
export type Stat_Post = {
  __typename?: 'stat_post';
  comments_channels_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Int']['output']>;
  comments_users_count?: Maybe<Scalars['Int']['output']>;
  date_of_post?: Maybe<Scalars['timestamp']['output']>;
  forwards?: Maybe<Scalars['Int']['output']>;
  pk: Scalars['bigint']['output'];
  reaction_24h?: Maybe<Scalars['Int']['output']>;
  reactions_1h?: Maybe<Scalars['Int']['output']>;
  tg_channel_id: Scalars['bigint']['output'];
  tg_post_id: Scalars['bigint']['output'];
  timestamp: Scalars['timestamp']['output'];
  total_reactions_count?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  user_tg_channel?: Maybe<User_Tg_Channel>;
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
  date_of_post?: InputMaybe<Timestamp_Comparison_Exp>;
  forwards?: InputMaybe<Int_Comparison_Exp>;
  pk?: InputMaybe<Bigint_Comparison_Exp>;
  reaction_24h?: InputMaybe<Int_Comparison_Exp>;
  reactions_1h?: InputMaybe<Int_Comparison_Exp>;
  tg_channel_id?: InputMaybe<Bigint_Comparison_Exp>;
  tg_post_id?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  total_reactions_count?: InputMaybe<Int_Comparison_Exp>;
  user_tg_channel?: InputMaybe<User_Tg_Channel_Bool_Exp>;
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

/** columns and relationships of "stat_post_info" */
export type Stat_Post_Info = {
  __typename?: 'stat_post_info';
  comments_channels_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Int']['output']>;
  comments_users_count?: Maybe<Scalars['Int']['output']>;
  date_of_post?: Maybe<Scalars['timestamp']['output']>;
  forwards?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pk: Scalars['bigint']['output'];
  reaction_24h?: Maybe<Scalars['Int']['output']>;
  reactions_1h?: Maybe<Scalars['Int']['output']>;
  tg_channel_id: Scalars['bigint']['output'];
  tg_post_id: Scalars['bigint']['output'];
  timestamp: Scalars['timestamp']['output'];
  total_reactions_count?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  user_tg_channel?: Maybe<User_Tg_Channel>;
  view_24h?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
  views_1h?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "stat_post_info" */
export type Stat_Post_Info_Aggregate = {
  __typename?: 'stat_post_info_aggregate';
  aggregate?: Maybe<Stat_Post_Info_Aggregate_Fields>;
  nodes: Array<Stat_Post_Info>;
};

/** aggregate fields of "stat_post_info" */
export type Stat_Post_Info_Aggregate_Fields = {
  __typename?: 'stat_post_info_aggregate_fields';
  avg?: Maybe<Stat_Post_Info_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Stat_Post_Info_Max_Fields>;
  min?: Maybe<Stat_Post_Info_Min_Fields>;
  stddev?: Maybe<Stat_Post_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Stat_Post_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stat_Post_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Stat_Post_Info_Sum_Fields>;
  var_pop?: Maybe<Stat_Post_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Stat_Post_Info_Var_Samp_Fields>;
  variance?: Maybe<Stat_Post_Info_Variance_Fields>;
};


/** aggregate fields of "stat_post_info" */
export type Stat_Post_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stat_Post_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Stat_Post_Info_Avg_Fields = {
  __typename?: 'stat_post_info_avg_fields';
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

/** Boolean expression to filter rows from the table "stat_post_info". All fields are combined with a logical 'AND'. */
export type Stat_Post_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Stat_Post_Info_Bool_Exp>>;
  _not?: InputMaybe<Stat_Post_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Stat_Post_Info_Bool_Exp>>;
  comments_channels_count?: InputMaybe<Int_Comparison_Exp>;
  comments_messages_count?: InputMaybe<Int_Comparison_Exp>;
  comments_messages_count_1h?: InputMaybe<Int_Comparison_Exp>;
  comments_messages_count_24h?: InputMaybe<Int_Comparison_Exp>;
  comments_users_count?: InputMaybe<Int_Comparison_Exp>;
  date_of_post?: InputMaybe<Timestamp_Comparison_Exp>;
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
  user_tg_channel?: InputMaybe<User_Tg_Channel_Bool_Exp>;
  view_24h?: InputMaybe<Int_Comparison_Exp>;
  views?: InputMaybe<Int_Comparison_Exp>;
  views_1h?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "stat_post_info" */
export enum Stat_Post_Info_Constraint {
  /** unique or primary key constraint on columns "pk" */
  stat_post_info_pkey = 'stat_post_info_pkey',
  /** unique or primary key constraint on columns "tg_post_id", "tg_channel_id" */
  stat_post_info_tg_channel_id_tg_post_id_key = 'stat_post_info_tg_channel_id_tg_post_id_key'
}

/** input type for incrementing numeric columns in table "stat_post_info" */
export type Stat_Post_Info_Inc_Input = {
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

/** input type for inserting data into table "stat_post_info" */
export type Stat_Post_Info_Insert_Input = {
  comments_channels_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_1h?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_24h?: InputMaybe<Scalars['Int']['input']>;
  comments_users_count?: InputMaybe<Scalars['Int']['input']>;
  date_of_post?: InputMaybe<Scalars['timestamp']['input']>;
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
  user_tg_channel?: InputMaybe<User_Tg_Channel_Obj_Rel_Insert_Input>;
  view_24h?: InputMaybe<Scalars['Int']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
  views_1h?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Stat_Post_Info_Max_Fields = {
  __typename?: 'stat_post_info_max_fields';
  comments_channels_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Int']['output']>;
  comments_users_count?: Maybe<Scalars['Int']['output']>;
  date_of_post?: Maybe<Scalars['timestamp']['output']>;
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
export type Stat_Post_Info_Min_Fields = {
  __typename?: 'stat_post_info_min_fields';
  comments_channels_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_1h?: Maybe<Scalars['Int']['output']>;
  comments_messages_count_24h?: Maybe<Scalars['Int']['output']>;
  comments_users_count?: Maybe<Scalars['Int']['output']>;
  date_of_post?: Maybe<Scalars['timestamp']['output']>;
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

/** response of any mutation on the table "stat_post_info" */
export type Stat_Post_Info_Mutation_Response = {
  __typename?: 'stat_post_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Stat_Post_Info>;
};

/** on_conflict condition type for table "stat_post_info" */
export type Stat_Post_Info_On_Conflict = {
  constraint: Stat_Post_Info_Constraint;
  update_columns?: Array<Stat_Post_Info_Update_Column>;
  where?: InputMaybe<Stat_Post_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "stat_post_info". */
export type Stat_Post_Info_Order_By = {
  comments_channels_count?: InputMaybe<Order_By>;
  comments_messages_count?: InputMaybe<Order_By>;
  comments_messages_count_1h?: InputMaybe<Order_By>;
  comments_messages_count_24h?: InputMaybe<Order_By>;
  comments_users_count?: InputMaybe<Order_By>;
  date_of_post?: InputMaybe<Order_By>;
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
  user_tg_channel?: InputMaybe<User_Tg_Channel_Order_By>;
  view_24h?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
  views_1h?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stat_post_info */
export type Stat_Post_Info_Pk_Columns_Input = {
  pk: Scalars['bigint']['input'];
};

/** select columns of table "stat_post_info" */
export enum Stat_Post_Info_Select_Column {
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
  date_of_post = 'date_of_post',
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

/** input type for updating data in table "stat_post_info" */
export type Stat_Post_Info_Set_Input = {
  comments_channels_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_1h?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_24h?: InputMaybe<Scalars['Int']['input']>;
  comments_users_count?: InputMaybe<Scalars['Int']['input']>;
  date_of_post?: InputMaybe<Scalars['timestamp']['input']>;
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
export type Stat_Post_Info_Stddev_Fields = {
  __typename?: 'stat_post_info_stddev_fields';
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
export type Stat_Post_Info_Stddev_Pop_Fields = {
  __typename?: 'stat_post_info_stddev_pop_fields';
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
export type Stat_Post_Info_Stddev_Samp_Fields = {
  __typename?: 'stat_post_info_stddev_samp_fields';
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

/** Streaming cursor of the table "stat_post_info" */
export type Stat_Post_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stat_Post_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stat_Post_Info_Stream_Cursor_Value_Input = {
  comments_channels_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_1h?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_24h?: InputMaybe<Scalars['Int']['input']>;
  comments_users_count?: InputMaybe<Scalars['Int']['input']>;
  date_of_post?: InputMaybe<Scalars['timestamp']['input']>;
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
export type Stat_Post_Info_Sum_Fields = {
  __typename?: 'stat_post_info_sum_fields';
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

/** update columns of table "stat_post_info" */
export enum Stat_Post_Info_Update_Column {
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
  date_of_post = 'date_of_post',
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

export type Stat_Post_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Stat_Post_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Stat_Post_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Stat_Post_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Stat_Post_Info_Var_Pop_Fields = {
  __typename?: 'stat_post_info_var_pop_fields';
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
export type Stat_Post_Info_Var_Samp_Fields = {
  __typename?: 'stat_post_info_var_samp_fields';
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
export type Stat_Post_Info_Variance_Fields = {
  __typename?: 'stat_post_info_variance_fields';
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

/** input type for inserting data into table "stat_post" */
export type Stat_Post_Insert_Input = {
  comments_channels_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_1h?: InputMaybe<Scalars['Int']['input']>;
  comments_messages_count_24h?: InputMaybe<Scalars['Int']['input']>;
  comments_users_count?: InputMaybe<Scalars['Int']['input']>;
  date_of_post?: InputMaybe<Scalars['timestamp']['input']>;
  forwards?: InputMaybe<Scalars['Int']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  reaction_24h?: InputMaybe<Scalars['Int']['input']>;
  reactions_1h?: InputMaybe<Scalars['Int']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_post_id?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_reactions_count?: InputMaybe<Scalars['Int']['input']>;
  user_tg_channel?: InputMaybe<User_Tg_Channel_Obj_Rel_Insert_Input>;
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
  date_of_post?: Maybe<Scalars['timestamp']['output']>;
  forwards?: Maybe<Scalars['Int']['output']>;
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
  date_of_post?: Maybe<Scalars['timestamp']['output']>;
  forwards?: Maybe<Scalars['Int']['output']>;
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
  date_of_post?: InputMaybe<Order_By>;
  forwards?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  reaction_24h?: InputMaybe<Order_By>;
  reactions_1h?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
  tg_post_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_reactions_count?: InputMaybe<Order_By>;
  user_tg_channel?: InputMaybe<User_Tg_Channel_Order_By>;
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
  date_of_post = 'date_of_post',
  /** column name */
  forwards = 'forwards',
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
  date_of_post?: InputMaybe<Scalars['timestamp']['input']>;
  forwards?: InputMaybe<Scalars['Int']['input']>;
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
  date_of_post?: InputMaybe<Scalars['timestamp']['input']>;
  forwards?: InputMaybe<Scalars['Int']['input']>;
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
  date_of_post = 'date_of_post',
  /** column name */
  forwards = 'forwards',
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
  tg_channel_id: Scalars['bigint']['output'];
  tg_post_id: Scalars['bigint']['output'];
  timestamp: Scalars['timestamp']['output'];
  /** An object relationship */
  user_tg_channel?: Maybe<User_Tg_Channel>;
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
  user_tg_channel?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};

/** unique or primary key constraints on table "stat_reaction" */
export enum Stat_Reaction_Constraint {
  /** unique or primary key constraint on columns "pk" */
  stat_reaction_pkey = 'stat_reaction_pkey',
  /** unique or primary key constraint on columns "tg_post_id", "tg_channel_id", "reaction_emoticon_code" */
  stat_reaction_tg_channel_id_tg_post_id_reaction_emoticon_co_key = 'stat_reaction_tg_channel_id_tg_post_id_reaction_emoticon_co_key'
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
  user_tg_channel?: InputMaybe<User_Tg_Channel_Obj_Rel_Insert_Input>;
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
  user_tg_channel?: InputMaybe<User_Tg_Channel_Order_By>;
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
  tg_channel_id: Scalars['bigint']['output'];
  tg_user_id: Scalars['bigint']['output'];
  timestamp: Scalars['timestamp']['output'];
  /** An object relationship */
  user_tg_channel?: Maybe<User_Tg_Channel>;
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
  user_tg_channel?: InputMaybe<User_Tg_Channel_Bool_Exp>;
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
  user_tg_channel?: InputMaybe<User_Tg_Channel_Obj_Rel_Insert_Input>;
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
  user_tg_channel?: InputMaybe<User_Tg_Channel_Order_By>;
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
  /** execute function "cohort_analysis" which returns "fn_cohort_analysis" */
  cohort_analysis: Array<Fn_Cohort_Analysis>;
  /** execute function "cohort_analysis" and query aggregates on result of table type "fn_cohort_analysis" */
  cohort_analysis_aggregate: Fn_Cohort_Analysis_Aggregate;
  /** fetch data from the table: "config__tg_bot_session_pool" */
  config__tg_bot_session_pool: Array<Config__Tg_Bot_Session_Pool>;
  /** fetch aggregated fields from the table: "config__tg_bot_session_pool" */
  config__tg_bot_session_pool_aggregate: Config__Tg_Bot_Session_Pool_Aggregate;
  /** fetch data from the table: "config__tg_bot_session_pool" using primary key columns */
  config__tg_bot_session_pool_by_pk?: Maybe<Config__Tg_Bot_Session_Pool>;
  /** fetch data from the table in a streaming manner: "config__tg_bot_session_pool" */
  config__tg_bot_session_pool_stream: Array<Config__Tg_Bot_Session_Pool>;
  /** fetch data from the table: "fn_cohort_analysis" */
  fn_cohort_analysis: Array<Fn_Cohort_Analysis>;
  /** fetch aggregated fields from the table: "fn_cohort_analysis" */
  fn_cohort_analysis_aggregate: Fn_Cohort_Analysis_Aggregate;
  /** fetch data from the table in a streaming manner: "fn_cohort_analysis" */
  fn_cohort_analysis_stream: Array<Fn_Cohort_Analysis>;
  /** fetch data from the table: "fn_get_avg_user_lifecycle" */
  fn_get_avg_user_lifecycle: Array<Fn_Get_Avg_User_Lifecycle>;
  /** fetch aggregated fields from the table: "fn_get_avg_user_lifecycle" */
  fn_get_avg_user_lifecycle_aggregate: Fn_Get_Avg_User_Lifecycle_Aggregate;
  /** fetch data from the table in a streaming manner: "fn_get_avg_user_lifecycle" */
  fn_get_avg_user_lifecycle_stream: Array<Fn_Get_Avg_User_Lifecycle>;
  /** fetch data from the table: "fn_unsubscribes_by_links" */
  fn_unsubscribes_by_links: Array<Fn_Unsubscribes_By_Links>;
  /** fetch aggregated fields from the table: "fn_unsubscribes_by_links" */
  fn_unsubscribes_by_links_aggregate: Fn_Unsubscribes_By_Links_Aggregate;
  /** fetch data from the table in a streaming manner: "fn_unsubscribes_by_links" */
  fn_unsubscribes_by_links_stream: Array<Fn_Unsubscribes_By_Links>;
  /** fetch data from the table: "fn_unsubscribes_by_periods" */
  fn_unsubscribes_by_periods: Array<Fn_Unsubscribes_By_Periods>;
  /** fetch aggregated fields from the table: "fn_unsubscribes_by_periods" */
  fn_unsubscribes_by_periods_aggregate: Fn_Unsubscribes_By_Periods_Aggregate;
  /** fetch data from the table in a streaming manner: "fn_unsubscribes_by_periods" */
  fn_unsubscribes_by_periods_stream: Array<Fn_Unsubscribes_By_Periods>;
  /** fetch data from the table: "fn_users_by_period" */
  fn_users_by_period: Array<Fn_Users_By_Period>;
  /** fetch aggregated fields from the table: "fn_users_by_period" */
  fn_users_by_period_aggregate: Fn_Users_By_Period_Aggregate;
  /** fetch data from the table in a streaming manner: "fn_users_by_period" */
  fn_users_by_period_stream: Array<Fn_Users_By_Period>;
  /** execute function "get_avg_user_lifecycle" which returns "fn_get_avg_user_lifecycle" */
  get_avg_user_lifecycle: Array<Fn_Get_Avg_User_Lifecycle>;
  /** execute function "get_avg_user_lifecycle" and query aggregates on result of table type "fn_get_avg_user_lifecycle" */
  get_avg_user_lifecycle_aggregate: Fn_Get_Avg_User_Lifecycle_Aggregate;
  /** fetch data from the table: "stat_post" */
  stat_post: Array<Stat_Post>;
  /** fetch aggregated fields from the table: "stat_post" */
  stat_post_aggregate: Stat_Post_Aggregate;
  /** fetch data from the table: "stat_post" using primary key columns */
  stat_post_by_pk?: Maybe<Stat_Post>;
  /** fetch data from the table: "stat_post_info" */
  stat_post_info: Array<Stat_Post_Info>;
  /** fetch aggregated fields from the table: "stat_post_info" */
  stat_post_info_aggregate: Stat_Post_Info_Aggregate;
  /** fetch data from the table: "stat_post_info" using primary key columns */
  stat_post_info_by_pk?: Maybe<Stat_Post_Info>;
  /** fetch data from the table in a streaming manner: "stat_post_info" */
  stat_post_info_stream: Array<Stat_Post_Info>;
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
  /** fetch data from the table: "tg_channel__session" */
  tg_channel__session: Array<Tg_Channel__Session>;
  /** fetch aggregated fields from the table: "tg_channel__session" */
  tg_channel__session_aggregate: Tg_Channel__Session_Aggregate;
  /** fetch data from the table: "tg_channel__session" using primary key columns */
  tg_channel__session_by_pk?: Maybe<Tg_Channel__Session>;
  /** fetch data from the table in a streaming manner: "tg_channel__session" */
  tg_channel__session_stream: Array<Tg_Channel__Session>;
  /** fetch data from the table: "tg_invite_link_group" */
  tg_invite_link_group: Array<Tg_Invite_Link_Group>;
  /** fetch aggregated fields from the table: "tg_invite_link_group" */
  tg_invite_link_group_aggregate: Tg_Invite_Link_Group_Aggregate;
  /** fetch data from the table: "tg_invite_link_group" using primary key columns */
  tg_invite_link_group_by_pk?: Maybe<Tg_Invite_Link_Group>;
  /** fetch data from the table in a streaming manner: "tg_invite_link_group" */
  tg_invite_link_group_stream: Array<Tg_Invite_Link_Group>;
  /** execute function "unsubscribes_by_links" which returns "fn_unsubscribes_by_links" */
  unsubscribes_by_links: Array<Fn_Unsubscribes_By_Links>;
  /** execute function "unsubscribes_by_links" and query aggregates on result of table type "fn_unsubscribes_by_links" */
  unsubscribes_by_links_aggregate: Fn_Unsubscribes_By_Links_Aggregate;
  /** execute function "unsubscribes_by_periods" which returns "fn_unsubscribes_by_periods" */
  unsubscribes_by_periods: Array<Fn_Unsubscribes_By_Periods>;
  /** execute function "unsubscribes_by_periods" and query aggregates on result of table type "fn_unsubscribes_by_periods" */
  unsubscribes_by_periods_aggregate: Fn_Unsubscribes_By_Periods_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** execute function "user_signups_by_period" which returns "fn_users_by_period" */
  user_signups_by_period: Array<Fn_Users_By_Period>;
  /** execute function "user_signups_by_period" and query aggregates on result of table type "fn_users_by_period" */
  user_signups_by_period_aggregate: Fn_Users_By_Period_Aggregate;
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
  /** fetch data from the table: "user_tg_invite_link" */
  user_tg_invite_link: Array<User_Tg_Invite_Link>;
  /** fetch aggregated fields from the table: "user_tg_invite_link" */
  user_tg_invite_link_aggregate: User_Tg_Invite_Link_Aggregate;
  /** fetch data from the table: "user_tg_invite_link" using primary key columns */
  user_tg_invite_link_by_pk?: Maybe<User_Tg_Invite_Link>;
  /** fetch data from the table in a streaming manner: "user_tg_invite_link" */
  user_tg_invite_link_stream: Array<User_Tg_Invite_Link>;
  /** execute function "user_unsubscribes_by_period" which returns "fn_users_by_period" */
  user_unsubscribes_by_period: Array<Fn_Users_By_Period>;
  /** execute function "user_unsubscribes_by_period" and query aggregates on result of table type "fn_users_by_period" */
  user_unsubscribes_by_period_aggregate: Fn_Users_By_Period_Aggregate;
};


export type Subscription_RootCohort_AnalysisArgs = {
  args: Cohort_Analysis_Args;
  distinct_on?: InputMaybe<Array<Fn_Cohort_Analysis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Cohort_Analysis_Order_By>>;
  where?: InputMaybe<Fn_Cohort_Analysis_Bool_Exp>;
};


export type Subscription_RootCohort_Analysis_AggregateArgs = {
  args: Cohort_Analysis_Args;
  distinct_on?: InputMaybe<Array<Fn_Cohort_Analysis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Cohort_Analysis_Order_By>>;
  where?: InputMaybe<Fn_Cohort_Analysis_Bool_Exp>;
};


export type Subscription_RootConfig__Tg_Bot_Session_PoolArgs = {
  distinct_on?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Order_By>>;
  where?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
};


export type Subscription_RootConfig__Tg_Bot_Session_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Order_By>>;
  where?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
};


export type Subscription_RootConfig__Tg_Bot_Session_Pool_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Subscription_RootConfig__Tg_Bot_Session_Pool_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Config__Tg_Bot_Session_Pool_Stream_Cursor_Input>>;
  where?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
};


export type Subscription_RootFn_Cohort_AnalysisArgs = {
  distinct_on?: InputMaybe<Array<Fn_Cohort_Analysis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Cohort_Analysis_Order_By>>;
  where?: InputMaybe<Fn_Cohort_Analysis_Bool_Exp>;
};


export type Subscription_RootFn_Cohort_Analysis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fn_Cohort_Analysis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Cohort_Analysis_Order_By>>;
  where?: InputMaybe<Fn_Cohort_Analysis_Bool_Exp>;
};


export type Subscription_RootFn_Cohort_Analysis_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fn_Cohort_Analysis_Stream_Cursor_Input>>;
  where?: InputMaybe<Fn_Cohort_Analysis_Bool_Exp>;
};


export type Subscription_RootFn_Get_Avg_User_LifecycleArgs = {
  distinct_on?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Order_By>>;
  where?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Bool_Exp>;
};


export type Subscription_RootFn_Get_Avg_User_Lifecycle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Order_By>>;
  where?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Bool_Exp>;
};


export type Subscription_RootFn_Get_Avg_User_Lifecycle_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fn_Get_Avg_User_Lifecycle_Stream_Cursor_Input>>;
  where?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Bool_Exp>;
};


export type Subscription_RootFn_Unsubscribes_By_LinksArgs = {
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Links_Bool_Exp>;
};


export type Subscription_RootFn_Unsubscribes_By_Links_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Links_Bool_Exp>;
};


export type Subscription_RootFn_Unsubscribes_By_Links_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fn_Unsubscribes_By_Links_Stream_Cursor_Input>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Links_Bool_Exp>;
};


export type Subscription_RootFn_Unsubscribes_By_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Periods_Bool_Exp>;
};


export type Subscription_RootFn_Unsubscribes_By_Periods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Periods_Bool_Exp>;
};


export type Subscription_RootFn_Unsubscribes_By_Periods_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fn_Unsubscribes_By_Periods_Stream_Cursor_Input>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Periods_Bool_Exp>;
};


export type Subscription_RootFn_Users_By_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};


export type Subscription_RootFn_Users_By_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};


export type Subscription_RootFn_Users_By_Period_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fn_Users_By_Period_Stream_Cursor_Input>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};


export type Subscription_RootGet_Avg_User_LifecycleArgs = {
  args: Get_Avg_User_Lifecycle_Args;
  distinct_on?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Order_By>>;
  where?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Bool_Exp>;
};


export type Subscription_RootGet_Avg_User_Lifecycle_AggregateArgs = {
  args: Get_Avg_User_Lifecycle_Args;
  distinct_on?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Get_Avg_User_Lifecycle_Order_By>>;
  where?: InputMaybe<Fn_Get_Avg_User_Lifecycle_Bool_Exp>;
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


export type Subscription_RootStat_Post_InfoArgs = {
  distinct_on?: InputMaybe<Array<Stat_Post_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Post_Info_Order_By>>;
  where?: InputMaybe<Stat_Post_Info_Bool_Exp>;
};


export type Subscription_RootStat_Post_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stat_Post_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stat_Post_Info_Order_By>>;
  where?: InputMaybe<Stat_Post_Info_Bool_Exp>;
};


export type Subscription_RootStat_Post_Info_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Subscription_RootStat_Post_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Stat_Post_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Stat_Post_Info_Bool_Exp>;
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


export type Subscription_RootTg_Channel__SessionArgs = {
  distinct_on?: InputMaybe<Array<Tg_Channel__Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Channel__Session_Order_By>>;
  where?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
};


export type Subscription_RootTg_Channel__Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tg_Channel__Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Channel__Session_Order_By>>;
  where?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
};


export type Subscription_RootTg_Channel__Session_By_PkArgs = {
  config__tg_bot_session_pool_pk: Scalars['bigint']['input'];
  user_tg_channel_pk: Scalars['bigint']['input'];
};


export type Subscription_RootTg_Channel__Session_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tg_Channel__Session_Stream_Cursor_Input>>;
  where?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
};


export type Subscription_RootTg_Invite_Link_GroupArgs = {
  distinct_on?: InputMaybe<Array<Tg_Invite_Link_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Invite_Link_Group_Order_By>>;
  where?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
};


export type Subscription_RootTg_Invite_Link_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tg_Invite_Link_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Invite_Link_Group_Order_By>>;
  where?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
};


export type Subscription_RootTg_Invite_Link_Group_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Subscription_RootTg_Invite_Link_Group_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tg_Invite_Link_Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
};


export type Subscription_RootUnsubscribes_By_LinksArgs = {
  args: Unsubscribes_By_Links_Args;
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Links_Bool_Exp>;
};


export type Subscription_RootUnsubscribes_By_Links_AggregateArgs = {
  args: Unsubscribes_By_Links_Args;
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Links_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Links_Bool_Exp>;
};


export type Subscription_RootUnsubscribes_By_PeriodsArgs = {
  args: Unsubscribes_By_Periods_Args;
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Periods_Bool_Exp>;
};


export type Subscription_RootUnsubscribes_By_Periods_AggregateArgs = {
  args: Unsubscribes_By_Periods_Args;
  distinct_on?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Unsubscribes_By_Periods_Order_By>>;
  where?: InputMaybe<Fn_Unsubscribes_By_Periods_Bool_Exp>;
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


export type Subscription_RootUser_Signups_By_PeriodArgs = {
  args: User_Signups_By_Period_Args;
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};


export type Subscription_RootUser_Signups_By_Period_AggregateArgs = {
  args: User_Signups_By_Period_Args;
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
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
  pk: Scalars['bigint']['input'];
};


export type Subscription_RootUser_Tg_Channel_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Tg_Channel_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};


export type Subscription_RootUser_Tg_Invite_LinkArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Invite_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Invite_Link_Order_By>>;
  where?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
};


export type Subscription_RootUser_Tg_Invite_Link_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Invite_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Invite_Link_Order_By>>;
  where?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
};


export type Subscription_RootUser_Tg_Invite_Link_By_PkArgs = {
  pk: Scalars['bigint']['input'];
};


export type Subscription_RootUser_Tg_Invite_Link_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Tg_Invite_Link_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
};


export type Subscription_RootUser_Unsubscribes_By_PeriodArgs = {
  args: User_Unsubscribes_By_Period_Args;
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};


export type Subscription_RootUser_Unsubscribes_By_Period_AggregateArgs = {
  args: User_Unsubscribes_By_Period_Args;
  distinct_on?: InputMaybe<Array<Fn_Users_By_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fn_Users_By_Period_Order_By>>;
  where?: InputMaybe<Fn_Users_By_Period_Bool_Exp>;
};

/** columns and relationships of "tg_channel__session" */
export type Tg_Channel__Session = {
  __typename?: 'tg_channel__session';
  /** An object relationship */
  config__tg_bot_session_pool: Config__Tg_Bot_Session_Pool;
  config__tg_bot_session_pool_pk: Scalars['bigint']['output'];
  /** An object relationship */
  user_tg_channel: User_Tg_Channel;
  user_tg_channel_pk: Scalars['bigint']['output'];
};

/** aggregated selection of "tg_channel__session" */
export type Tg_Channel__Session_Aggregate = {
  __typename?: 'tg_channel__session_aggregate';
  aggregate?: Maybe<Tg_Channel__Session_Aggregate_Fields>;
  nodes: Array<Tg_Channel__Session>;
};

export type Tg_Channel__Session_Aggregate_Bool_Exp = {
  count?: InputMaybe<Tg_Channel__Session_Aggregate_Bool_Exp_Count>;
};

export type Tg_Channel__Session_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Tg_Channel__Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "tg_channel__session" */
export type Tg_Channel__Session_Aggregate_Fields = {
  __typename?: 'tg_channel__session_aggregate_fields';
  avg?: Maybe<Tg_Channel__Session_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Tg_Channel__Session_Max_Fields>;
  min?: Maybe<Tg_Channel__Session_Min_Fields>;
  stddev?: Maybe<Tg_Channel__Session_Stddev_Fields>;
  stddev_pop?: Maybe<Tg_Channel__Session_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tg_Channel__Session_Stddev_Samp_Fields>;
  sum?: Maybe<Tg_Channel__Session_Sum_Fields>;
  var_pop?: Maybe<Tg_Channel__Session_Var_Pop_Fields>;
  var_samp?: Maybe<Tg_Channel__Session_Var_Samp_Fields>;
  variance?: Maybe<Tg_Channel__Session_Variance_Fields>;
};


/** aggregate fields of "tg_channel__session" */
export type Tg_Channel__Session_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tg_Channel__Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "tg_channel__session" */
export type Tg_Channel__Session_Aggregate_Order_By = {
  avg?: InputMaybe<Tg_Channel__Session_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tg_Channel__Session_Max_Order_By>;
  min?: InputMaybe<Tg_Channel__Session_Min_Order_By>;
  stddev?: InputMaybe<Tg_Channel__Session_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tg_Channel__Session_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tg_Channel__Session_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tg_Channel__Session_Sum_Order_By>;
  var_pop?: InputMaybe<Tg_Channel__Session_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tg_Channel__Session_Var_Samp_Order_By>;
  variance?: InputMaybe<Tg_Channel__Session_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tg_channel__session" */
export type Tg_Channel__Session_Arr_Rel_Insert_Input = {
  data: Array<Tg_Channel__Session_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tg_Channel__Session_On_Conflict>;
};

/** aggregate avg on columns */
export type Tg_Channel__Session_Avg_Fields = {
  __typename?: 'tg_channel__session_avg_fields';
  config__tg_bot_session_pool_pk?: Maybe<Scalars['Float']['output']>;
  user_tg_channel_pk?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "tg_channel__session" */
export type Tg_Channel__Session_Avg_Order_By = {
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tg_channel__session". All fields are combined with a logical 'AND'. */
export type Tg_Channel__Session_Bool_Exp = {
  _and?: InputMaybe<Array<Tg_Channel__Session_Bool_Exp>>;
  _not?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
  _or?: InputMaybe<Array<Tg_Channel__Session_Bool_Exp>>;
  config__tg_bot_session_pool?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
  config__tg_bot_session_pool_pk?: InputMaybe<Bigint_Comparison_Exp>;
  user_tg_channel?: InputMaybe<User_Tg_Channel_Bool_Exp>;
  user_tg_channel_pk?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "tg_channel__session" */
export enum Tg_Channel__Session_Constraint {
  /** unique or primary key constraint on columns "user_tg_channel_pk", "config__tg_bot_session_pool_pk" */
  tg_channel__session_pkey = 'tg_channel__session_pkey'
}

/** input type for incrementing numeric columns in table "tg_channel__session" */
export type Tg_Channel__Session_Inc_Input = {
  config__tg_bot_session_pool_pk?: InputMaybe<Scalars['bigint']['input']>;
  user_tg_channel_pk?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "tg_channel__session" */
export type Tg_Channel__Session_Insert_Input = {
  config__tg_bot_session_pool?: InputMaybe<Config__Tg_Bot_Session_Pool_Obj_Rel_Insert_Input>;
  config__tg_bot_session_pool_pk?: InputMaybe<Scalars['bigint']['input']>;
  user_tg_channel?: InputMaybe<User_Tg_Channel_Obj_Rel_Insert_Input>;
  user_tg_channel_pk?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Tg_Channel__Session_Max_Fields = {
  __typename?: 'tg_channel__session_max_fields';
  config__tg_bot_session_pool_pk?: Maybe<Scalars['bigint']['output']>;
  user_tg_channel_pk?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "tg_channel__session" */
export type Tg_Channel__Session_Max_Order_By = {
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tg_Channel__Session_Min_Fields = {
  __typename?: 'tg_channel__session_min_fields';
  config__tg_bot_session_pool_pk?: Maybe<Scalars['bigint']['output']>;
  user_tg_channel_pk?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "tg_channel__session" */
export type Tg_Channel__Session_Min_Order_By = {
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tg_channel__session" */
export type Tg_Channel__Session_Mutation_Response = {
  __typename?: 'tg_channel__session_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tg_Channel__Session>;
};

/** on_conflict condition type for table "tg_channel__session" */
export type Tg_Channel__Session_On_Conflict = {
  constraint: Tg_Channel__Session_Constraint;
  update_columns?: Array<Tg_Channel__Session_Update_Column>;
  where?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
};

/** Ordering options when selecting data from "tg_channel__session". */
export type Tg_Channel__Session_Order_By = {
  config__tg_bot_session_pool?: InputMaybe<Config__Tg_Bot_Session_Pool_Order_By>;
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel?: InputMaybe<User_Tg_Channel_Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tg_channel__session */
export type Tg_Channel__Session_Pk_Columns_Input = {
  config__tg_bot_session_pool_pk: Scalars['bigint']['input'];
  user_tg_channel_pk: Scalars['bigint']['input'];
};

/** select columns of table "tg_channel__session" */
export enum Tg_Channel__Session_Select_Column {
  /** column name */
  config__tg_bot_session_pool_pk = 'config__tg_bot_session_pool_pk',
  /** column name */
  user_tg_channel_pk = 'user_tg_channel_pk'
}

/** input type for updating data in table "tg_channel__session" */
export type Tg_Channel__Session_Set_Input = {
  config__tg_bot_session_pool_pk?: InputMaybe<Scalars['bigint']['input']>;
  user_tg_channel_pk?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Tg_Channel__Session_Stddev_Fields = {
  __typename?: 'tg_channel__session_stddev_fields';
  config__tg_bot_session_pool_pk?: Maybe<Scalars['Float']['output']>;
  user_tg_channel_pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "tg_channel__session" */
export type Tg_Channel__Session_Stddev_Order_By = {
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tg_Channel__Session_Stddev_Pop_Fields = {
  __typename?: 'tg_channel__session_stddev_pop_fields';
  config__tg_bot_session_pool_pk?: Maybe<Scalars['Float']['output']>;
  user_tg_channel_pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "tg_channel__session" */
export type Tg_Channel__Session_Stddev_Pop_Order_By = {
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tg_Channel__Session_Stddev_Samp_Fields = {
  __typename?: 'tg_channel__session_stddev_samp_fields';
  config__tg_bot_session_pool_pk?: Maybe<Scalars['Float']['output']>;
  user_tg_channel_pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "tg_channel__session" */
export type Tg_Channel__Session_Stddev_Samp_Order_By = {
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "tg_channel__session" */
export type Tg_Channel__Session_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tg_Channel__Session_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tg_Channel__Session_Stream_Cursor_Value_Input = {
  config__tg_bot_session_pool_pk?: InputMaybe<Scalars['bigint']['input']>;
  user_tg_channel_pk?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Tg_Channel__Session_Sum_Fields = {
  __typename?: 'tg_channel__session_sum_fields';
  config__tg_bot_session_pool_pk?: Maybe<Scalars['bigint']['output']>;
  user_tg_channel_pk?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "tg_channel__session" */
export type Tg_Channel__Session_Sum_Order_By = {
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** update columns of table "tg_channel__session" */
export enum Tg_Channel__Session_Update_Column {
  /** column name */
  config__tg_bot_session_pool_pk = 'config__tg_bot_session_pool_pk',
  /** column name */
  user_tg_channel_pk = 'user_tg_channel_pk'
}

export type Tg_Channel__Session_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tg_Channel__Session_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tg_Channel__Session_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tg_Channel__Session_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tg_Channel__Session_Var_Pop_Fields = {
  __typename?: 'tg_channel__session_var_pop_fields';
  config__tg_bot_session_pool_pk?: Maybe<Scalars['Float']['output']>;
  user_tg_channel_pk?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "tg_channel__session" */
export type Tg_Channel__Session_Var_Pop_Order_By = {
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tg_Channel__Session_Var_Samp_Fields = {
  __typename?: 'tg_channel__session_var_samp_fields';
  config__tg_bot_session_pool_pk?: Maybe<Scalars['Float']['output']>;
  user_tg_channel_pk?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "tg_channel__session" */
export type Tg_Channel__Session_Var_Samp_Order_By = {
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tg_Channel__Session_Variance_Fields = {
  __typename?: 'tg_channel__session_variance_fields';
  config__tg_bot_session_pool_pk?: Maybe<Scalars['Float']['output']>;
  user_tg_channel_pk?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "tg_channel__session" */
export type Tg_Channel__Session_Variance_Order_By = {
  config__tg_bot_session_pool_pk?: InputMaybe<Order_By>;
  user_tg_channel_pk?: InputMaybe<Order_By>;
};

/** columns and relationships of "tg_invite_link_group" */
export type Tg_Invite_Link_Group = {
  __typename?: 'tg_invite_link_group';
  group_name: Scalars['String']['output'];
  pk: Scalars['bigint']['output'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid']['output'];
  /** An array relationship */
  user_tg_invite_links: Array<User_Tg_Invite_Link>;
  /** An aggregate relationship */
  user_tg_invite_links_aggregate: User_Tg_Invite_Link_Aggregate;
};


/** columns and relationships of "tg_invite_link_group" */
export type Tg_Invite_Link_GroupUser_Tg_Invite_LinksArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Invite_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Invite_Link_Order_By>>;
  where?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
};


/** columns and relationships of "tg_invite_link_group" */
export type Tg_Invite_Link_GroupUser_Tg_Invite_Links_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Invite_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Invite_Link_Order_By>>;
  where?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
};

/** aggregated selection of "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Aggregate = {
  __typename?: 'tg_invite_link_group_aggregate';
  aggregate?: Maybe<Tg_Invite_Link_Group_Aggregate_Fields>;
  nodes: Array<Tg_Invite_Link_Group>;
};

export type Tg_Invite_Link_Group_Aggregate_Bool_Exp = {
  count?: InputMaybe<Tg_Invite_Link_Group_Aggregate_Bool_Exp_Count>;
};

export type Tg_Invite_Link_Group_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Tg_Invite_Link_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Aggregate_Fields = {
  __typename?: 'tg_invite_link_group_aggregate_fields';
  avg?: Maybe<Tg_Invite_Link_Group_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Tg_Invite_Link_Group_Max_Fields>;
  min?: Maybe<Tg_Invite_Link_Group_Min_Fields>;
  stddev?: Maybe<Tg_Invite_Link_Group_Stddev_Fields>;
  stddev_pop?: Maybe<Tg_Invite_Link_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tg_Invite_Link_Group_Stddev_Samp_Fields>;
  sum?: Maybe<Tg_Invite_Link_Group_Sum_Fields>;
  var_pop?: Maybe<Tg_Invite_Link_Group_Var_Pop_Fields>;
  var_samp?: Maybe<Tg_Invite_Link_Group_Var_Samp_Fields>;
  variance?: Maybe<Tg_Invite_Link_Group_Variance_Fields>;
};


/** aggregate fields of "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tg_Invite_Link_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Aggregate_Order_By = {
  avg?: InputMaybe<Tg_Invite_Link_Group_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tg_Invite_Link_Group_Max_Order_By>;
  min?: InputMaybe<Tg_Invite_Link_Group_Min_Order_By>;
  stddev?: InputMaybe<Tg_Invite_Link_Group_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tg_Invite_Link_Group_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tg_Invite_Link_Group_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tg_Invite_Link_Group_Sum_Order_By>;
  var_pop?: InputMaybe<Tg_Invite_Link_Group_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tg_Invite_Link_Group_Var_Samp_Order_By>;
  variance?: InputMaybe<Tg_Invite_Link_Group_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Arr_Rel_Insert_Input = {
  data: Array<Tg_Invite_Link_Group_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tg_Invite_Link_Group_On_Conflict>;
};

/** aggregate avg on columns */
export type Tg_Invite_Link_Group_Avg_Fields = {
  __typename?: 'tg_invite_link_group_avg_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Avg_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tg_invite_link_group". All fields are combined with a logical 'AND'. */
export type Tg_Invite_Link_Group_Bool_Exp = {
  _and?: InputMaybe<Array<Tg_Invite_Link_Group_Bool_Exp>>;
  _not?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
  _or?: InputMaybe<Array<Tg_Invite_Link_Group_Bool_Exp>>;
  group_name?: InputMaybe<String_Comparison_Exp>;
  pk?: InputMaybe<Bigint_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_tg_invite_links?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
  user_tg_invite_links_aggregate?: InputMaybe<User_Tg_Invite_Link_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "tg_invite_link_group" */
export enum Tg_Invite_Link_Group_Constraint {
  /** unique or primary key constraint on columns "pk" */
  tg_invite_link_group_pkey = 'tg_invite_link_group_pkey'
}

/** input type for incrementing numeric columns in table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Inc_Input = {
  pk?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Insert_Input = {
  group_name?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  user_tg_invite_links?: InputMaybe<User_Tg_Invite_Link_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tg_Invite_Link_Group_Max_Fields = {
  __typename?: 'tg_invite_link_group_max_fields';
  group_name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Max_Order_By = {
  group_name?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tg_Invite_Link_Group_Min_Fields = {
  __typename?: 'tg_invite_link_group_min_fields';
  group_name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Min_Order_By = {
  group_name?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Mutation_Response = {
  __typename?: 'tg_invite_link_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tg_Invite_Link_Group>;
};

/** input type for inserting object relation for remote table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Obj_Rel_Insert_Input = {
  data: Tg_Invite_Link_Group_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tg_Invite_Link_Group_On_Conflict>;
};

/** on_conflict condition type for table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_On_Conflict = {
  constraint: Tg_Invite_Link_Group_Constraint;
  update_columns?: Array<Tg_Invite_Link_Group_Update_Column>;
  where?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "tg_invite_link_group". */
export type Tg_Invite_Link_Group_Order_By = {
  group_name?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_tg_invite_links_aggregate?: InputMaybe<User_Tg_Invite_Link_Aggregate_Order_By>;
};

/** primary key columns input for table: tg_invite_link_group */
export type Tg_Invite_Link_Group_Pk_Columns_Input = {
  pk: Scalars['bigint']['input'];
};

/** select columns of table "tg_invite_link_group" */
export enum Tg_Invite_Link_Group_Select_Column {
  /** column name */
  group_name = 'group_name',
  /** column name */
  pk = 'pk',
  /** column name */
  user_id = 'user_id'
}

/** input type for updating data in table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Set_Input = {
  group_name?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Tg_Invite_Link_Group_Stddev_Fields = {
  __typename?: 'tg_invite_link_group_stddev_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Stddev_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tg_Invite_Link_Group_Stddev_Pop_Fields = {
  __typename?: 'tg_invite_link_group_stddev_pop_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Stddev_Pop_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tg_Invite_Link_Group_Stddev_Samp_Fields = {
  __typename?: 'tg_invite_link_group_stddev_samp_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Stddev_Samp_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tg_Invite_Link_Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tg_Invite_Link_Group_Stream_Cursor_Value_Input = {
  group_name?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Tg_Invite_Link_Group_Sum_Fields = {
  __typename?: 'tg_invite_link_group_sum_fields';
  pk?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Sum_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** update columns of table "tg_invite_link_group" */
export enum Tg_Invite_Link_Group_Update_Column {
  /** column name */
  group_name = 'group_name',
  /** column name */
  pk = 'pk',
  /** column name */
  user_id = 'user_id'
}

export type Tg_Invite_Link_Group_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tg_Invite_Link_Group_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tg_Invite_Link_Group_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tg_Invite_Link_Group_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tg_Invite_Link_Group_Var_Pop_Fields = {
  __typename?: 'tg_invite_link_group_var_pop_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Var_Pop_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tg_Invite_Link_Group_Var_Samp_Fields = {
  __typename?: 'tg_invite_link_group_var_samp_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Var_Samp_Order_By = {
  pk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tg_Invite_Link_Group_Variance_Fields = {
  __typename?: 'tg_invite_link_group_variance_fields';
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "tg_invite_link_group" */
export type Tg_Invite_Link_Group_Variance_Order_By = {
  pk?: InputMaybe<Order_By>;
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

export type Track_Tg_Channel_Input = {
  phone_numbers: Array<Scalars['String']['input']>;
  tg_channel_id: Scalars['String']['input'];
  tg_channel_title: Scalars['String']['input'];
};

export type Track_Tg_Channel_Output = {
  __typename?: 'track_tg_channel_output';
  success: Scalars['Boolean']['output'];
};

export type Unsubscribes_By_Links_Args = {
  end_date?: InputMaybe<Scalars['timestamp']['input']>;
  link_array?: InputMaybe<Scalars['_text']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  tg_channel_ids?: InputMaybe<Scalars['_int8']['input']>;
};

export type Unsubscribes_By_Periods_Args = {
  end_date?: InputMaybe<Scalars['timestamp']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  tg_channel_ids?: InputMaybe<Scalars['_int8']['input']>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  config__tg_bot_session_pools: Array<Config__Tg_Bot_Session_Pool>;
  /** An aggregate relationship */
  config__tg_bot_session_pools_aggregate: Config__Tg_Bot_Session_Pool_Aggregate;
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  tg_invite_link_groups: Array<Tg_Invite_Link_Group>;
  /** An aggregate relationship */
  tg_invite_link_groups_aggregate: Tg_Invite_Link_Group_Aggregate;
  /** An array relationship */
  user_tg_channels: Array<User_Tg_Channel>;
  /** An aggregate relationship */
  user_tg_channels_aggregate: User_Tg_Channel_Aggregate;
  /** An array relationship */
  user_tg_invite_links: Array<User_Tg_Invite_Link>;
  /** An aggregate relationship */
  user_tg_invite_links_aggregate: User_Tg_Invite_Link_Aggregate;
};


/** columns and relationships of "user" */
export type UserConfig__Tg_Bot_Session_PoolsArgs = {
  distinct_on?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Order_By>>;
  where?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserConfig__Tg_Bot_Session_Pools_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Config__Tg_Bot_Session_Pool_Order_By>>;
  where?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTg_Invite_Link_GroupsArgs = {
  distinct_on?: InputMaybe<Array<Tg_Invite_Link_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Invite_Link_Group_Order_By>>;
  where?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTg_Invite_Link_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tg_Invite_Link_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Invite_Link_Group_Order_By>>;
  where?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Tg_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Channel_Order_By>>;
  where?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Tg_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Channel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Channel_Order_By>>;
  where?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Tg_Invite_LinksArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Invite_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Invite_Link_Order_By>>;
  where?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Tg_Invite_Links_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tg_Invite_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tg_Invite_Link_Order_By>>;
  where?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
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
  config__tg_bot_session_pools?: InputMaybe<Config__Tg_Bot_Session_Pool_Bool_Exp>;
  config__tg_bot_session_pools_aggregate?: InputMaybe<Config__Tg_Bot_Session_Pool_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tg_invite_link_groups?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
  tg_invite_link_groups_aggregate?: InputMaybe<Tg_Invite_Link_Group_Aggregate_Bool_Exp>;
  user_tg_channels?: InputMaybe<User_Tg_Channel_Bool_Exp>;
  user_tg_channels_aggregate?: InputMaybe<User_Tg_Channel_Aggregate_Bool_Exp>;
  user_tg_invite_links?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
  user_tg_invite_links_aggregate?: InputMaybe<User_Tg_Invite_Link_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "id" */
  user_id_key = 'user_id_key',
  /** unique or primary key constraint on columns "id" */
  user_pkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  config__tg_bot_session_pools?: InputMaybe<Config__Tg_Bot_Session_Pool_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  tg_invite_link_groups?: InputMaybe<Tg_Invite_Link_Group_Arr_Rel_Insert_Input>;
  user_tg_channels?: InputMaybe<User_Tg_Channel_Arr_Rel_Insert_Input>;
  user_tg_invite_links?: InputMaybe<User_Tg_Invite_Link_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
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

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  config__tg_bot_session_pools_aggregate?: InputMaybe<Config__Tg_Bot_Session_Pool_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tg_invite_link_groups_aggregate?: InputMaybe<Tg_Invite_Link_Group_Aggregate_Order_By>;
  user_tg_channels_aggregate?: InputMaybe<User_Tg_Channel_Aggregate_Order_By>;
  user_tg_invite_links_aggregate?: InputMaybe<User_Tg_Invite_Link_Aggregate_Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

export type User_Signups_By_Period_Args = {
  end_date?: InputMaybe<Scalars['timestamp']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  tg_channel_ids?: InputMaybe<Scalars['_int8']['input']>;
  time_period?: InputMaybe<Scalars['String']['input']>;
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
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "user_tg_channel" */
export type User_Tg_Channel = {
  __typename?: 'user_tg_channel';
  pk: Scalars['bigint']['output'];
  /** An array relationship */
  tg_channel__sessions: Array<Tg_Channel__Session>;
  /** An aggregate relationship */
  tg_channel__sessions_aggregate: Tg_Channel__Session_Aggregate;
  tg_channel_id: Scalars['bigint']['output'];
  tg_channel_title: Scalars['String']['output'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "user_tg_channel" */
export type User_Tg_ChannelTg_Channel__SessionsArgs = {
  distinct_on?: InputMaybe<Array<Tg_Channel__Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Channel__Session_Order_By>>;
  where?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
};


/** columns and relationships of "user_tg_channel" */
export type User_Tg_ChannelTg_Channel__Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tg_Channel__Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tg_Channel__Session_Order_By>>;
  where?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
};

/** aggregated selection of "user_tg_channel" */
export type User_Tg_Channel_Aggregate = {
  __typename?: 'user_tg_channel_aggregate';
  aggregate?: Maybe<User_Tg_Channel_Aggregate_Fields>;
  nodes: Array<User_Tg_Channel>;
};

export type User_Tg_Channel_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Tg_Channel_Aggregate_Bool_Exp_Count>;
};

export type User_Tg_Channel_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Tg_Channel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Tg_Channel_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "user_tg_channel" */
export type User_Tg_Channel_Aggregate_Order_By = {
  avg?: InputMaybe<User_Tg_Channel_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Tg_Channel_Max_Order_By>;
  min?: InputMaybe<User_Tg_Channel_Min_Order_By>;
  stddev?: InputMaybe<User_Tg_Channel_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Tg_Channel_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Tg_Channel_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Tg_Channel_Sum_Order_By>;
  var_pop?: InputMaybe<User_Tg_Channel_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Tg_Channel_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Tg_Channel_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_tg_channel" */
export type User_Tg_Channel_Arr_Rel_Insert_Input = {
  data: Array<User_Tg_Channel_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Tg_Channel_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Tg_Channel_Avg_Fields = {
  __typename?: 'user_tg_channel_avg_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_tg_channel" */
export type User_Tg_Channel_Avg_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_tg_channel". All fields are combined with a logical 'AND'. */
export type User_Tg_Channel_Bool_Exp = {
  _and?: InputMaybe<Array<User_Tg_Channel_Bool_Exp>>;
  _not?: InputMaybe<User_Tg_Channel_Bool_Exp>;
  _or?: InputMaybe<Array<User_Tg_Channel_Bool_Exp>>;
  pk?: InputMaybe<Bigint_Comparison_Exp>;
  tg_channel__sessions?: InputMaybe<Tg_Channel__Session_Bool_Exp>;
  tg_channel__sessions_aggregate?: InputMaybe<Tg_Channel__Session_Aggregate_Bool_Exp>;
  tg_channel_id?: InputMaybe<Bigint_Comparison_Exp>;
  tg_channel_title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_tg_channel" */
export enum User_Tg_Channel_Constraint {
  /** unique or primary key constraint on columns "pk" */
  user_tg_channel_pkey = 'user_tg_channel_pkey'
}

/** input type for incrementing numeric columns in table "user_tg_channel" */
export type User_Tg_Channel_Inc_Input = {
  pk?: InputMaybe<Scalars['bigint']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_tg_channel" */
export type User_Tg_Channel_Insert_Input = {
  pk?: InputMaybe<Scalars['bigint']['input']>;
  tg_channel__sessions?: InputMaybe<Tg_Channel__Session_Arr_Rel_Insert_Input>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_channel_title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Tg_Channel_Max_Fields = {
  __typename?: 'user_tg_channel_max_fields';
  pk?: Maybe<Scalars['bigint']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_channel_title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_tg_channel" */
export type User_Tg_Channel_Max_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
  tg_channel_title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Tg_Channel_Min_Fields = {
  __typename?: 'user_tg_channel_min_fields';
  pk?: Maybe<Scalars['bigint']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
  tg_channel_title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_tg_channel" */
export type User_Tg_Channel_Min_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
  tg_channel_title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_tg_channel" */
export type User_Tg_Channel_Mutation_Response = {
  __typename?: 'user_tg_channel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Tg_Channel>;
};

/** input type for inserting object relation for remote table "user_tg_channel" */
export type User_Tg_Channel_Obj_Rel_Insert_Input = {
  data: User_Tg_Channel_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Tg_Channel_On_Conflict>;
};

/** on_conflict condition type for table "user_tg_channel" */
export type User_Tg_Channel_On_Conflict = {
  constraint: User_Tg_Channel_Constraint;
  update_columns?: Array<User_Tg_Channel_Update_Column>;
  where?: InputMaybe<User_Tg_Channel_Bool_Exp>;
};

/** Ordering options when selecting data from "user_tg_channel". */
export type User_Tg_Channel_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel__sessions_aggregate?: InputMaybe<Tg_Channel__Session_Aggregate_Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
  tg_channel_title?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_tg_channel */
export type User_Tg_Channel_Pk_Columns_Input = {
  pk: Scalars['bigint']['input'];
};

/** select columns of table "user_tg_channel" */
export enum User_Tg_Channel_Select_Column {
  /** column name */
  pk = 'pk',
  /** column name */
  tg_channel_id = 'tg_channel_id',
  /** column name */
  tg_channel_title = 'tg_channel_title',
  /** column name */
  user_id = 'user_id'
}

/** input type for updating data in table "user_tg_channel" */
export type User_Tg_Channel_Set_Input = {
  pk?: InputMaybe<Scalars['bigint']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_channel_title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type User_Tg_Channel_Stddev_Fields = {
  __typename?: 'user_tg_channel_stddev_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_tg_channel" */
export type User_Tg_Channel_Stddev_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Tg_Channel_Stddev_Pop_Fields = {
  __typename?: 'user_tg_channel_stddev_pop_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_tg_channel" */
export type User_Tg_Channel_Stddev_Pop_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Tg_Channel_Stddev_Samp_Fields = {
  __typename?: 'user_tg_channel_stddev_samp_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_tg_channel" */
export type User_Tg_Channel_Stddev_Samp_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
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
  pk?: InputMaybe<Scalars['bigint']['input']>;
  tg_channel_id?: InputMaybe<Scalars['bigint']['input']>;
  tg_channel_title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type User_Tg_Channel_Sum_Fields = {
  __typename?: 'user_tg_channel_sum_fields';
  pk?: Maybe<Scalars['bigint']['output']>;
  tg_channel_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_tg_channel" */
export type User_Tg_Channel_Sum_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_tg_channel" */
export enum User_Tg_Channel_Update_Column {
  /** column name */
  pk = 'pk',
  /** column name */
  tg_channel_id = 'tg_channel_id',
  /** column name */
  tg_channel_title = 'tg_channel_title',
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
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_tg_channel" */
export type User_Tg_Channel_Var_Pop_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Tg_Channel_Var_Samp_Fields = {
  __typename?: 'user_tg_channel_var_samp_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_tg_channel" */
export type User_Tg_Channel_Var_Samp_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Tg_Channel_Variance_Fields = {
  __typename?: 'user_tg_channel_variance_fields';
  pk?: Maybe<Scalars['Float']['output']>;
  tg_channel_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_tg_channel" */
export type User_Tg_Channel_Variance_Order_By = {
  pk?: InputMaybe<Order_By>;
  tg_channel_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_tg_invite_link" */
export type User_Tg_Invite_Link = {
  __typename?: 'user_tg_invite_link';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  group_id: Scalars['bigint']['output'];
  label?: Maybe<Scalars['String']['output']>;
  pk: Scalars['bigint']['output'];
  tg_invite_link: Scalars['String']['output'];
  /** An object relationship */
  tg_invite_link_group: Tg_Invite_Link_Group;
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "user_tg_invite_link" */
export type User_Tg_Invite_Link_Aggregate = {
  __typename?: 'user_tg_invite_link_aggregate';
  aggregate?: Maybe<User_Tg_Invite_Link_Aggregate_Fields>;
  nodes: Array<User_Tg_Invite_Link>;
};

export type User_Tg_Invite_Link_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Tg_Invite_Link_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Tg_Invite_Link_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Tg_Invite_Link_Aggregate_Bool_Exp_Count>;
};

export type User_Tg_Invite_Link_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Tg_Invite_Link_Select_Column_User_Tg_Invite_Link_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Tg_Invite_Link_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Tg_Invite_Link_Select_Column_User_Tg_Invite_Link_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Tg_Invite_Link_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Tg_Invite_Link_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_tg_invite_link" */
export type User_Tg_Invite_Link_Aggregate_Fields = {
  __typename?: 'user_tg_invite_link_aggregate_fields';
  avg?: Maybe<User_Tg_Invite_Link_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Tg_Invite_Link_Max_Fields>;
  min?: Maybe<User_Tg_Invite_Link_Min_Fields>;
  stddev?: Maybe<User_Tg_Invite_Link_Stddev_Fields>;
  stddev_pop?: Maybe<User_Tg_Invite_Link_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Tg_Invite_Link_Stddev_Samp_Fields>;
  sum?: Maybe<User_Tg_Invite_Link_Sum_Fields>;
  var_pop?: Maybe<User_Tg_Invite_Link_Var_Pop_Fields>;
  var_samp?: Maybe<User_Tg_Invite_Link_Var_Samp_Fields>;
  variance?: Maybe<User_Tg_Invite_Link_Variance_Fields>;
};


/** aggregate fields of "user_tg_invite_link" */
export type User_Tg_Invite_Link_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Tg_Invite_Link_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Aggregate_Order_By = {
  avg?: InputMaybe<User_Tg_Invite_Link_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Tg_Invite_Link_Max_Order_By>;
  min?: InputMaybe<User_Tg_Invite_Link_Min_Order_By>;
  stddev?: InputMaybe<User_Tg_Invite_Link_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Tg_Invite_Link_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Tg_Invite_Link_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Tg_Invite_Link_Sum_Order_By>;
  var_pop?: InputMaybe<User_Tg_Invite_Link_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Tg_Invite_Link_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Tg_Invite_Link_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Arr_Rel_Insert_Input = {
  data: Array<User_Tg_Invite_Link_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Tg_Invite_Link_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Tg_Invite_Link_Avg_Fields = {
  __typename?: 'user_tg_invite_link_avg_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Avg_Order_By = {
  group_id?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_tg_invite_link". All fields are combined with a logical 'AND'. */
export type User_Tg_Invite_Link_Bool_Exp = {
  _and?: InputMaybe<Array<User_Tg_Invite_Link_Bool_Exp>>;
  _not?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
  _or?: InputMaybe<Array<User_Tg_Invite_Link_Bool_Exp>>;
  enabled?: InputMaybe<Boolean_Comparison_Exp>;
  group_id?: InputMaybe<Bigint_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  pk?: InputMaybe<Bigint_Comparison_Exp>;
  tg_invite_link?: InputMaybe<String_Comparison_Exp>;
  tg_invite_link_group?: InputMaybe<Tg_Invite_Link_Group_Bool_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_tg_invite_link" */
export enum User_Tg_Invite_Link_Constraint {
  /** unique or primary key constraint on columns "pk" */
  user_tg_invite_link_pkey = 'user_tg_invite_link_pkey'
}

/** input type for incrementing numeric columns in table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Inc_Input = {
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Insert_Input = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  tg_invite_link?: InputMaybe<Scalars['String']['input']>;
  tg_invite_link_group?: InputMaybe<Tg_Invite_Link_Group_Obj_Rel_Insert_Input>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Tg_Invite_Link_Max_Fields = {
  __typename?: 'user_tg_invite_link_max_fields';
  group_id?: Maybe<Scalars['bigint']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  tg_invite_link?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Max_Order_By = {
  group_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  tg_invite_link?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Tg_Invite_Link_Min_Fields = {
  __typename?: 'user_tg_invite_link_min_fields';
  group_id?: Maybe<Scalars['bigint']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
  tg_invite_link?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Min_Order_By = {
  group_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  tg_invite_link?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Mutation_Response = {
  __typename?: 'user_tg_invite_link_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Tg_Invite_Link>;
};

/** on_conflict condition type for table "user_tg_invite_link" */
export type User_Tg_Invite_Link_On_Conflict = {
  constraint: User_Tg_Invite_Link_Constraint;
  update_columns?: Array<User_Tg_Invite_Link_Update_Column>;
  where?: InputMaybe<User_Tg_Invite_Link_Bool_Exp>;
};

/** Ordering options when selecting data from "user_tg_invite_link". */
export type User_Tg_Invite_Link_Order_By = {
  enabled?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
  tg_invite_link?: InputMaybe<Order_By>;
  tg_invite_link_group?: InputMaybe<Tg_Invite_Link_Group_Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_tg_invite_link */
export type User_Tg_Invite_Link_Pk_Columns_Input = {
  pk: Scalars['bigint']['input'];
};

/** select columns of table "user_tg_invite_link" */
export enum User_Tg_Invite_Link_Select_Column {
  /** column name */
  enabled = 'enabled',
  /** column name */
  group_id = 'group_id',
  /** column name */
  label = 'label',
  /** column name */
  pk = 'pk',
  /** column name */
  tg_invite_link = 'tg_invite_link',
  /** column name */
  user_id = 'user_id'
}

/** select "user_tg_invite_link_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_tg_invite_link" */
export enum User_Tg_Invite_Link_Select_Column_User_Tg_Invite_Link_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  enabled = 'enabled'
}

/** select "user_tg_invite_link_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_tg_invite_link" */
export enum User_Tg_Invite_Link_Select_Column_User_Tg_Invite_Link_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  enabled = 'enabled'
}

/** input type for updating data in table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Set_Input = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  tg_invite_link?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type User_Tg_Invite_Link_Stddev_Fields = {
  __typename?: 'user_tg_invite_link_stddev_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Stddev_Order_By = {
  group_id?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Tg_Invite_Link_Stddev_Pop_Fields = {
  __typename?: 'user_tg_invite_link_stddev_pop_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Stddev_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Tg_Invite_Link_Stddev_Samp_Fields = {
  __typename?: 'user_tg_invite_link_stddev_samp_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Stddev_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Tg_Invite_Link_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Tg_Invite_Link_Stream_Cursor_Value_Input = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['bigint']['input']>;
  tg_invite_link?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type User_Tg_Invite_Link_Sum_Fields = {
  __typename?: 'user_tg_invite_link_sum_fields';
  group_id?: Maybe<Scalars['bigint']['output']>;
  pk?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Sum_Order_By = {
  group_id?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
};

/** update columns of table "user_tg_invite_link" */
export enum User_Tg_Invite_Link_Update_Column {
  /** column name */
  enabled = 'enabled',
  /** column name */
  group_id = 'group_id',
  /** column name */
  label = 'label',
  /** column name */
  pk = 'pk',
  /** column name */
  tg_invite_link = 'tg_invite_link',
  /** column name */
  user_id = 'user_id'
}

export type User_Tg_Invite_Link_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Tg_Invite_Link_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Tg_Invite_Link_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Tg_Invite_Link_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Tg_Invite_Link_Var_Pop_Fields = {
  __typename?: 'user_tg_invite_link_var_pop_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Var_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Tg_Invite_Link_Var_Samp_Fields = {
  __typename?: 'user_tg_invite_link_var_samp_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Var_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Tg_Invite_Link_Variance_Fields = {
  __typename?: 'user_tg_invite_link_variance_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  pk?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_tg_invite_link" */
export type User_Tg_Invite_Link_Variance_Order_By = {
  group_id?: InputMaybe<Order_By>;
  pk?: InputMaybe<Order_By>;
};

export type User_Unsubscribes_By_Period_Args = {
  end_date?: InputMaybe<Scalars['timestamp']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  tg_channel_ids?: InputMaybe<Scalars['_int8']['input']>;
  time_period?: InputMaybe<Scalars['String']['input']>;
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

export type GetGroupsQueryVariables = Exact<{
  user_id: Scalars['uuid']['input'];
}>;


export type GetGroupsQuery = { __typename?: 'query_root', tg_invite_link_group: Array<{ __typename?: 'tg_invite_link_group', pk: any, group_name: string, user_tg_invite_links: Array<{ __typename?: 'user_tg_invite_link', pk: any, tg_invite_link: string, label?: string | null, enabled?: boolean | null }> }> };

export type CreateGroupMutationVariables = Exact<{
  group_name: Scalars['String']['input'];
  user_id: Scalars['uuid']['input'];
}>;


export type CreateGroupMutation = { __typename?: 'mutation_root', insert_tg_invite_link_group_one?: { __typename?: 'tg_invite_link_group', pk: any, group_name: string } | null };

export type UpdateGroupNameMutationVariables = Exact<{
  pk: Scalars['bigint']['input'];
  group_name: Scalars['String']['input'];
}>;


export type UpdateGroupNameMutation = { __typename?: 'mutation_root', update_tg_invite_link_group_by_pk?: { __typename?: 'tg_invite_link_group', pk: any, group_name: string } | null };

export type DeleteGroupMutationVariables = Exact<{
  pk: Scalars['bigint']['input'];
}>;


export type DeleteGroupMutation = { __typename?: 'mutation_root', delete_tg_invite_link_group_by_pk?: { __typename?: 'tg_invite_link_group', pk: any } | null };

export type CreateInviteLinkMutationVariables = Exact<{
  tg_invite_link: Scalars['String']['input'];
  label: Scalars['String']['input'];
  group_id: Scalars['bigint']['input'];
  user_id: Scalars['uuid']['input'];
}>;


export type CreateInviteLinkMutation = { __typename?: 'mutation_root', insert_user_tg_invite_link_one?: { __typename?: 'user_tg_invite_link', pk: any, tg_invite_link: string, label?: string | null } | null };

export type UpdateInviteLinkMutationVariables = Exact<{
  pk: Scalars['bigint']['input'];
  tg_invite_link: Scalars['String']['input'];
  label: Scalars['String']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateInviteLinkMutation = { __typename?: 'mutation_root', update_user_tg_invite_link_by_pk?: { __typename?: 'user_tg_invite_link', pk: any, tg_invite_link: string, label?: string | null, enabled?: boolean | null } | null };

export type ToggleInviteLinkGroupMutationVariables = Exact<{
  inviteLinkGroupPk: Scalars['bigint']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ToggleInviteLinkGroupMutation = { __typename?: 'mutation_root', update_user_tg_invite_link?: { __typename?: 'user_tg_invite_link_mutation_response', returning: Array<{ __typename?: 'user_tg_invite_link', enabled?: boolean | null, group_id: any, label?: string | null, pk: any, tg_invite_link: string }> } | null };

export type DeleteInviteLinkMutationVariables = Exact<{
  pk: Scalars['bigint']['input'];
}>;


export type DeleteInviteLinkMutation = { __typename?: 'mutation_root', delete_user_tg_invite_link_by_pk?: { __typename?: 'user_tg_invite_link', pk: any } | null };

export type GetUserPhoneNumbersQueryVariables = Exact<{
  user_id: Scalars['uuid']['input'];
}>;


export type GetUserPhoneNumbersQuery = { __typename?: 'query_root', config__tg_bot_session_pool: Array<{ __typename?: 'config__tg_bot_session_pool', pk: any, phone_number: string, status: string }>, get_tg_auth_deployment_id?: { __typename?: 'GetTgAuthDeploymentIdOutput', deployment_id: string } | null };

export type FlowRunStateQueryVariables = Exact<{
  flow_run_id: Scalars['String']['input'];
}>;


export type FlowRunStateQuery = { __typename?: 'query_root', flow_run?: { __typename?: 'FlowRunOutput', state: string } | null };

export type Request2FaMutationVariables = Exact<{
  deployment_id: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  api_hash: Scalars['String']['input'];
  api_id: Scalars['String']['input'];
}>;


export type Request2FaMutation = { __typename?: 'mutation_root', request_2fa?: { __typename?: 'Request2FAOutput', error_text?: string | null, flow_run_id?: string | null, status: string } | null };

export type Confirm2FaMutationVariables = Exact<{
  flow_run_id: Scalars['String']['input'];
  code_2fa: Scalars['String']['input'];
  cloud_password?: InputMaybe<Scalars['String']['input']>;
}>;


export type Confirm2FaMutation = { __typename?: 'mutation_root', confirm_2fa?: { __typename?: 'Confirm2FAOutput', status: string, error_text?: string | null } | null };

export type DeletePhoneNumberMutationVariables = Exact<{
  phone_number: Scalars['String']['input'];
}>;


export type DeletePhoneNumberMutation = { __typename?: 'mutation_root', delete_config__tg_bot_session_pool?: { __typename?: 'config__tg_bot_session_pool_mutation_response', affected_rows: number } | null };

export type TgChannelsQueryVariables = Exact<{
  title_search: Scalars['String']['input'];
}>;


export type TgChannelsQuery = { __typename?: 'query_root', tg_channels?: { __typename?: 'TgChannelsOutput', channels: Array<{ __typename?: 'TgChannel', phone_numbers: Array<string>, tg_channel_id: string, tg_channel_title: string }> } | null };

export type TrackedTgChannelsQueryVariables = Exact<{
  user_id: Scalars['uuid']['input'];
}>;


export type TrackedTgChannelsQuery = { __typename?: 'query_root', user_tg_channel: Array<{ __typename?: 'user_tg_channel', tg_channel_id: any, tg_channel_title: string }> };

export type TrackTgChannelMutationVariables = Exact<{
  phone_numbers: Array<Scalars['String']['input']> | Scalars['String']['input'];
  tg_channel_id: Scalars['String']['input'];
  tg_channel_title: Scalars['String']['input'];
}>;


export type TrackTgChannelMutation = { __typename?: 'mutation_root', track_tg_channel?: { __typename?: 'track_tg_channel_output', success: boolean } | null };

export type UntrackTgChannelMutationVariables = Exact<{
  user_id: Scalars['uuid']['input'];
  tg_channel_id: Scalars['bigint']['input'];
}>;


export type UntrackTgChannelMutation = { __typename?: 'mutation_root', delete_user_tg_channel?: { __typename?: 'user_tg_channel_mutation_response', affected_rows: number } | null };

export type ErAvgQueryVariables = Exact<{
  from_date: Scalars['timestamp']['input'];
  to_date: Scalars['timestamp']['input'];
  tg_channel_ids?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
}>;


export type ErAvgQuery = { __typename?: 'query_root', stat_user_aggregate: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null }, stat_post_info_aggregate: { __typename?: 'stat_post_info_aggregate', aggregate?: { __typename?: 'stat_post_info_aggregate_fields', sum?: { __typename?: 'stat_post_info_sum_fields', views?: number | null } | null } | null } };

export type AvgUserLifecycleQueryVariables = Exact<{
  tg_channel_ids: Scalars['_int8']['input'];
}>;


export type AvgUserLifecycleQuery = { __typename?: 'query_root', get_avg_user_lifecycle: Array<{ __typename?: 'fn_get_avg_user_lifecycle', avg_lifecycle_days?: any | null }> };

export type CohortAnalysisQueryVariables = Exact<{
  end_date: Scalars['date']['input'];
  start_date: Scalars['date']['input'];
  tg_channel_ids: Scalars['_int8']['input'];
  time_bucket: Scalars['String']['input'];
}>;


export type CohortAnalysisQuery = { __typename?: 'query_root', cohort_analysis: Array<{ __typename?: 'fn_cohort_analysis', join_date?: any | null, left_date?: any | null, joined_count?: any | null, left_count?: any | null }> };

export type Er24QueryVariables = Exact<{
  tg_channel_ids: Array<Scalars['bigint']['input']> | Scalars['bigint']['input'];
}>;


export type Er24Query = { __typename?: 'query_root', stat_post_info_aggregate: { __typename?: 'stat_post_info_aggregate', aggregate?: { __typename?: 'stat_post_info_aggregate_fields', sum?: { __typename?: 'stat_post_info_sum_fields', view_24h?: number | null, views?: number | null } | null } | null } };

export type SubscribersAmountByDateRageQueryVariables = Exact<{
  end_date: Scalars['timestamp']['input'];
  start_date: Scalars['timestamp']['input'];
  tg_channel_ids?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
}>;


export type SubscribersAmountByDateRageQuery = { __typename?: 'query_root', stat_user_aggregate: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null } };

export type SubscribesByInviteLinksAggregatesQueryVariables = Exact<{
  tg_channel_ids?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
  start_date: Scalars['timestamp']['input'];
  end_date: Scalars['timestamp']['input'];
}>;


export type SubscribesByInviteLinksAggregatesQuery = { __typename?: 'query_root', without_link: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null }, with_link: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null } };

export type SubscribesChartQueryVariables = Exact<{
  end_date: Scalars['timestamp']['input'];
  start_date: Scalars['timestamp']['input'];
  time_period: Scalars['String']['input'];
  tg_channel_ids: Scalars['_int8']['input'];
}>;


export type SubscribesChartQuery = { __typename?: 'query_root', user_signups_by_period: Array<{ __typename?: 'fn_users_by_period', count?: any | null, time_bucket?: any | null }> };

export type UnsubscribesChartQueryVariables = Exact<{
  end_date: Scalars['timestamp']['input'];
  start_date: Scalars['timestamp']['input'];
  time_period: Scalars['String']['input'];
  tg_channel_ids: Scalars['_int8']['input'];
}>;


export type UnsubscribesChartQuery = { __typename?: 'query_root', user_unsubscribes_by_period: Array<{ __typename?: 'fn_users_by_period', count?: any | null, time_bucket?: any | null }> };

export type TotalSubscribersQueryVariables = Exact<{
  tg_channel_id?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
}>;


export type TotalSubscribersQuery = { __typename?: 'query_root', stat_user_aggregate: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null } };

export type UnsubscribersAmountByDateRageQueryVariables = Exact<{
  end_date: Scalars['timestamp']['input'];
  start_date: Scalars['timestamp']['input'];
  tg_channel_ids?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
}>;


export type UnsubscribersAmountByDateRageQuery = { __typename?: 'query_root', stat_user_aggregate: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null } };

export type UnsubscribesByLinksQueryVariables = Exact<{
  end_date: Scalars['timestamp']['input'];
  link_array: Scalars['_text']['input'];
  start_date: Scalars['timestamp']['input'];
  tg_channel_ids: Scalars['_int8']['input'];
}>;


export type UnsubscribesByLinksQuery = { __typename?: 'query_root', unsubscribes_by_links: Array<{ __typename?: 'fn_unsubscribes_by_links', invite_link?: string | null, joined_count?: any | null, left_count?: any | null }> };

export type UnsubscribesUsersByLinksAggregatesQueryVariables = Exact<{
  tg_channel_ids?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
  start_date: Scalars['timestamp']['input'];
  end_date: Scalars['timestamp']['input'];
}>;


export type UnsubscribesUsersByLinksAggregatesQuery = { __typename?: 'query_root', without_link: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null }, with_link: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null } };

export type UnsubscribesByPeriodsQueryVariables = Exact<{
  start_date: Scalars['timestamp']['input'];
  end_date: Scalars['timestamp']['input'];
  tg_channel_ids: Scalars['_int8']['input'];
}>;


export type UnsubscribesByPeriodsQuery = { __typename?: 'query_root', unsubscribes_by_periods: Array<{ __typename?: 'fn_unsubscribes_by_periods', interval_label?: string | null, count?: number | null, percentage?: any | null }> };

export type SubcribesUnsubscribesPieAggregatesQueryVariables = Exact<{
  tg_channel_ids?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
  start_date: Scalars['timestamp']['input'];
  end_date: Scalars['timestamp']['input'];
}>;


export type SubcribesUnsubscribesPieAggregatesQuery = { __typename?: 'query_root', subscribes: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null }, unsubscribes: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null } };

export type UnsubscriptionRateQueryVariables = Exact<{
  from_date: Scalars['timestamp']['input'];
  to_date: Scalars['timestamp']['input'];
  tg_channel_ids?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
}>;


export type UnsubscriptionRateQuery = { __typename?: 'query_root', stat_user_aggregate: { __typename?: 'stat_user_aggregate', aggregate?: { __typename?: 'stat_user_aggregate_fields', count: number } | null }, stat_post_info_aggregate: { __typename?: 'stat_post_info_aggregate', aggregate?: { __typename?: 'stat_post_info_aggregate_fields', sum?: { __typename?: 'stat_post_info_sum_fields', views?: number | null } | null } | null } };


export const GetGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tg_invite_link_group"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_name"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"group_name"}},{"kind":"Field","name":{"kind":"Name","value":"user_tg_invite_links"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"tg_invite_link"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}}]}}]}}]} as unknown as DocumentNode<GetGroupsQuery, GetGroupsQueryVariables>;
export const CreateGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"group_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_tg_invite_link_group_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"group_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"group_name"}}]}}]}}]} as unknown as DocumentNode<CreateGroupMutation, CreateGroupMutationVariables>;
export const UpdateGroupNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGroupName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"group_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_tg_invite_link_group_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"group_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"group_name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"group_name"}}]}}]}}]} as unknown as DocumentNode<UpdateGroupNameMutation, UpdateGroupNameMutationVariables>;
export const DeleteGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_tg_invite_link_group_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}}]}}]}}]} as unknown as DocumentNode<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const CreateInviteLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateInviteLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_invite_link"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"label"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"group_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_tg_invite_link_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_invite_link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_invite_link"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"Variable","name":{"kind":"Name","value":"label"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"group_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"group_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"tg_invite_link"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<CreateInviteLinkMutation, CreateInviteLinkMutationVariables>;
export const UpdateInviteLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateInviteLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_invite_link"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"label"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enabled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_tg_invite_link_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_invite_link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_invite_link"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"Variable","name":{"kind":"Name","value":"label"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"enabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enabled"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"tg_invite_link"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}}]}}]} as unknown as DocumentNode<UpdateInviteLinkMutation, UpdateInviteLinkMutationVariables>;
export const ToggleInviteLinkGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleInviteLinkGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteLinkGroupPk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enabled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_tg_invite_link"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_invite_link_group"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pk"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteLinkGroupPk"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"enabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enabled"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"group_id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"tg_invite_link"}}]}}]}}]}}]} as unknown as DocumentNode<ToggleInviteLinkGroupMutation, ToggleInviteLinkGroupMutationVariables>;
export const DeleteInviteLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteInviteLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_user_tg_invite_link_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}}]}}]}}]} as unknown as DocumentNode<DeleteInviteLinkMutation, DeleteInviteLinkMutationVariables>;
export const GetUserPhoneNumbersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserPhoneNumbers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config__tg_bot_session_pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"get_tg_auth_deployment_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deployment_id"}}]}}]}}]} as unknown as DocumentNode<GetUserPhoneNumbersQuery, GetUserPhoneNumbersQueryVariables>;
export const FlowRunStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FlowRunState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flow_run_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flow_run"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"arg1"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"flow_run_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flow_run_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]} as unknown as DocumentNode<FlowRunStateQuery, FlowRunStateQueryVariables>;
export const Request2FaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Request2FA"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deployment_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"api_hash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"api_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"request_2fa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"arg1"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"deployment_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deployment_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"api_hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"api_hash"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"api_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"api_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error_text"}},{"kind":"Field","name":{"kind":"Name","value":"flow_run_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<Request2FaMutation, Request2FaMutationVariables>;
export const Confirm2FaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Confirm2FA"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flow_run_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code_2fa"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cloud_password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirm_2fa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"arg1"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code_2fa"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code_2fa"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"flow_run_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flow_run_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"cloud_password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cloud_password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error_text"}}]}}]}}]} as unknown as DocumentNode<Confirm2FaMutation, Confirm2FaMutationVariables>;
export const DeletePhoneNumberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePhoneNumber"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_config__tg_bot_session_pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeletePhoneNumberMutation, DeletePhoneNumberMutationVariables>;
export const TgChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TgChannels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title_search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tg_channels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"arg1"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title_search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title_search"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"tg_channel_id"},"name":{"kind":"Name","value":"channel_id"}},{"kind":"Field","alias":{"kind":"Name","value":"tg_channel_title"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"phone_numbers"}}]}}]}}]}}]} as unknown as DocumentNode<TgChannelsQuery, TgChannelsQueryVariables>;
export const TrackedTgChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TrackedTgChannels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_tg_channel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_title"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tg_channel_id"}},{"kind":"Field","name":{"kind":"Name","value":"tg_channel_title"}}]}}]}}]} as unknown as DocumentNode<TrackedTgChannelsQuery, TrackedTgChannelsQueryVariables>;
export const TrackTgChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TrackTgChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_numbers"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"track_tg_channel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"arg1"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"phone_numbers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_numbers"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_title"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<TrackTgChannelMutation, TrackTgChannelMutationVariables>;
export const UntrackTgChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UntrackTgChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_user_tg_channel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UntrackTgChannelMutation, UntrackTgChannelMutationVariables>;
export const ErAvgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ERAvg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"EnumValue","value":"pk"}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stat_post_info_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date_of_post"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"views"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ErAvgQuery, ErAvgQueryVariables>;
export const AvgUserLifecycleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AvgUserLifecycle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"_int8"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"get_avg_user_lifecycle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avg_lifecycle_days"}}]}}]}}]} as unknown as DocumentNode<AvgUserLifecycleQuery, AvgUserLifecycleQueryVariables>;
export const CohortAnalysisDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CohortAnalysis"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"_int8"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"time_bucket"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cohort_analysis"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"time_bucket"},"value":{"kind":"Variable","name":{"kind":"Name","value":"time_bucket"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"join_date"}},{"kind":"Field","name":{"kind":"Name","value":"left_date"}},{"kind":"Field","name":{"kind":"Name","value":"joined_count"}},{"kind":"Field","name":{"kind":"Name","value":"left_count"}}]}}]}}]} as unknown as DocumentNode<CohortAnalysisQuery, CohortAnalysisQueryVariables>;
export const Er24Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ER24"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stat_post_info_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"view_24h"}},{"kind":"Field","name":{"kind":"Name","value":"views"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Er24Query, Er24QueryVariables>;
export const SubscribersAmountByDateRageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubscribersAmountByDateRage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"EnumValue","value":"pk"}}]}]}}]}}]}}]} as unknown as DocumentNode<SubscribersAmountByDateRageQuery, SubscribersAmountByDateRageQueryVariables>;
export const SubscribesByInviteLinksAggregatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubscribesByInviteLinksAggregates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"without_link"},"name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_joined_by_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_joined_by_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"with_link"},"name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_joined_by_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<SubscribesByInviteLinksAggregatesQuery, SubscribesByInviteLinksAggregatesQueryVariables>;
export const SubscribesChartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubscribesChart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"time_period"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"_int8"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_signups_by_period"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"time_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"time_period"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"time_bucket"}}]}}]}}]} as unknown as DocumentNode<SubscribesChartQuery, SubscribesChartQueryVariables>;
export const UnsubscribesChartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnsubscribesChart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"time_period"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"_int8"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_unsubscribes_by_period"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"time_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"time_period"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"time_bucket"}}]}}]}}]} as unknown as DocumentNode<UnsubscribesChartQuery, UnsubscribesChartQueryVariables>;
export const TotalSubscribersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TotalSubscribers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"left_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"EnumValue","value":"pk"}}]}]}}]}}]}}]} as unknown as DocumentNode<TotalSubscribersQuery, TotalSubscribersQueryVariables>;
export const UnsubscribersAmountByDateRageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnsubscribersAmountByDateRage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"left_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"EnumValue","value":"pk"}}]}]}}]}}]}}]} as unknown as DocumentNode<UnsubscribersAmountByDateRageQuery, UnsubscribersAmountByDateRageQueryVariables>;
export const UnsubscribesByLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnsubscribesByLinks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"link_array"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"_text"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"_int8"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unsubscribes_by_links"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"link_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"link_array"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invite_link"}},{"kind":"Field","name":{"kind":"Name","value":"joined_count"}},{"kind":"Field","name":{"kind":"Name","value":"left_count"}}]}}]}}]} as unknown as DocumentNode<UnsubscribesByLinksQuery, UnsubscribesByLinksQueryVariables>;
export const UnsubscribesUsersByLinksAggregatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnsubscribesUsersByLinksAggregates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"without_link"},"name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"left_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_joined_by_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_joined_by_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"with_link"},"name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"left_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_joined_by_link"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<UnsubscribesUsersByLinksAggregatesQuery, UnsubscribesUsersByLinksAggregatesQueryVariables>;
export const UnsubscribesByPeriodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnsubscribesByPeriods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"_int8"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unsubscribes_by_periods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interval_label"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"percentage"}}]}}]}}]} as unknown as DocumentNode<UnsubscribesByPeriodsQuery, UnsubscribesByPeriodsQueryVariables>;
export const SubcribesUnsubscribesPieAggregatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubcribesUnsubscribesPieAggregates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"subscribes"},"name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unsubscribes"},"name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"left_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<SubcribesUnsubscribesPieAggregatesQuery, SubcribesUnsubscribesPieAggregatesQueryVariables>;
export const UnsubscriptionRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnsubscriptionRate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stat_user_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"joined_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to_date"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tg_channel_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tg_channel_ids"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"EnumValue","value":"pk"}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stat_post_info_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date_of_post"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to_date"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"views"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UnsubscriptionRateQuery, UnsubscriptionRateQueryVariables>;