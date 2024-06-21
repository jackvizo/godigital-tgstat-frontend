import { useQuery, useMutation } from "@apollo/client";
import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";

const GET_GROUPS = graphql(`
  query GetGroups($user_id: uuid!) {
    tg_invite_link_group(where: { user_id: { _eq: $user_id } }) {
      pk
      group_name
      user_tg_invite_links {
        pk
        tg_invite_link
        label
      }
    }
  }
`);

const CREATE_GROUP = graphql(`
  mutation CreateGroup($group_name: String!, $user_id: uuid!) {
    insert_tg_invite_link_group_one(object: { group_name: $group_name, user_id: $user_id }) {
      pk
      group_name
    }
  }
`);

const UPDATE_GROUP_NAME = graphql(`
  mutation UpdateGroupName($pk: bigint!, $group_name: String!) {
    update_tg_invite_link_group_by_pk(pk_columns: { pk: $pk }, _set: { group_name: $group_name }) {
      pk
      group_name
    }
  }
`);

const DELETE_GROUP = graphql(`
  mutation DeleteGroup($pk: bigint!) {
    delete_tg_invite_link_group_by_pk(pk: $pk) {
      pk
    }
  }
`);

const CREATE_INVITE_LINK = graphql(`
  mutation CreateInviteLink($tg_invite_link: String!, $label: String!, $group_id: bigint!, $user_id: uuid!) {
    insert_user_tg_invite_link_one(
      object: { tg_invite_link: $tg_invite_link, label: $label, group_id: $group_id, user_id: $user_id }
    ) {
      pk
      tg_invite_link
      label
    }
  }
`);

const UPDATE_INVITE_LINK = graphql(`
  mutation UpdateInviteLink($pk: bigint!, $tg_invite_link: String!, $label: String!) {
    update_user_tg_invite_link_by_pk(
      pk_columns: { pk: $pk }
      _set: { tg_invite_link: $tg_invite_link, label: $label }
    ) {
      pk
      tg_invite_link
      label
    }
  }
`);

const DELETE_INVITE_LINK = graphql(`
  mutation DeleteInviteLink($pk: bigint!) {
    delete_user_tg_invite_link_by_pk(pk: $pk) {
      pk
    }
  }
`);

export const useInviteLinkPickerLogic = () => {
  const auth = useAuth();
  const userId = auth?.session?.data?.userId;

  const getGroupsQuery = useQuery(GET_GROUPS, {
    variables: { user_id: userId },
    skip: !auth.session?.data?.accessToken,
  });

  const [createGroup] = useMutation(CREATE_GROUP);
  const [updateGroupName] = useMutation(UPDATE_GROUP_NAME);
  const [deleteGroup] = useMutation(DELETE_GROUP);
  const [createInviteLink] = useMutation(CREATE_INVITE_LINK);
  const [updateInviteLink] = useMutation(UPDATE_INVITE_LINK);
  const [deleteInviteLink] = useMutation(DELETE_INVITE_LINK);

  const handleCreateGroup = async (groupName: string) => {
    await createGroup({ variables: { group_name: groupName, user_id: userId } });
    getGroupsQuery.refetch();
  };

  const handleUpdateGroupName = async (groupId: number, groupName: string) => {
    await updateGroupName({ variables: { pk: groupId, group_name: groupName } });
    getGroupsQuery.refetch();
  };

  const handleDeleteGroup = async (groupId: number) => {
    await deleteGroup({ variables: { pk: groupId } });
    getGroupsQuery.refetch();
  };

  const handleCreateInviteLink = async (inviteLink: string, label: string, groupId: number) => {
    await createInviteLink({ variables: { tg_invite_link: inviteLink, label, group_id: groupId, user_id: userId } });
    getGroupsQuery.refetch();
  };

  const handleUpdateInviteLink = async (linkId: number, inviteLink: string, label: string) => {
    await updateInviteLink({ variables: { pk: linkId, tg_invite_link: inviteLink, label } });
    getGroupsQuery.refetch();
  };

  const handleDeleteInviteLink = async (linkId: number) => {
    await deleteInviteLink({ variables: { pk: linkId } });
    getGroupsQuery.refetch();
  };

  const groups =
    getGroupsQuery.data?.tg_invite_link_group.map((group) => ({
      id: Number(group.pk),
      name: group.group_name,
      items: group.user_tg_invite_links.map((link) => ({
        id: Number(link.pk),
        name: link.label || "",
        link: link.tg_invite_link,
      })),
    })) || [];

  return {
    groups,
    getGroupsQuery,
    handleCreateGroup,
    handleUpdateGroupName,
    handleDeleteGroup,
    handleCreateInviteLink,
    handleUpdateInviteLink,
    handleDeleteInviteLink,
  };
};
