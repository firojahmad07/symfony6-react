import React from 'react'
import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DatagridHeader} from '../datagrid/components/header/DatagridHeader'
import {UsersTable} from './table/UsersTable'
import {UserEditModal} from './user-edit-modal/UserEditModal'
import {KTCard} from '@/pim/helpers'


const UsersList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <DatagridHeader />
        <UsersTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const DataSource = (sourceName) => {
  console.log(sourceName);
    return (
      <QueryRequestProvider>
        <QueryResponseProvider>
          <ListViewProvider>
            <UsersList />
          </ListViewProvider>
        </QueryResponseProvider>
      </QueryRequestProvider>
    )
}

export {DataSource}
