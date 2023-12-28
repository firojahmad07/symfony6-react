import React, {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../../pim/layout/core'
import {ListViewProvider, useListView} from '../../../datagrid/core/ListViewProvider'
import {QueryRequestProvider} from '../../../datagrid/core/QueryRequestProvider'
import {QueryResponseProvider} from '../../../datagrid/core/QueryResponseProvider'
import {UsersListHeader} from '../components/header/UsersListHeader'
import {UsersTable} from '../../../datagrid/table/UsersTable'

import {DataSource} from "../../../datagrid/Datasource"
// import {UserEditModal} from './user-edit-modal/UserEditModal'
// import {KTCard} from '../../../../../pim/helpers'
import {KTCard} from '../../../../pim/helpers'


const UserBreadCrumbs: Array<PageLink> = [
  {
    title: 'System',
    path: '/system',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Users',
    path: '/system/users',
    isSeparator: false,
    isActive: false,
  }
]

const UsersList = () => {
//   const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <UsersListHeader />
        <UsersTable />
      </KTCard>
      {/* {itemIdForUpdate !== undefined && <UserEditModal />} */}
    </>
  )
}

const UsersData = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        {/* <UsersList /> */}
        <DataSource source-name='user-grid'/>
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

const Users = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={UserBreadCrumbs}>
        {intl.formatMessage({id: 'menu.users'})}
      </PageTitle>
      <UsersData />
    </>
  )
}

export {Users}
