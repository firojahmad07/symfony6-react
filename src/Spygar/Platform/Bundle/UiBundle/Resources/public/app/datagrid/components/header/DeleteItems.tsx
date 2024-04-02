import React, {useQueryClient, useMutation} from 'react-query'
import {QUERIES} from 'PIM/helpers'
import {useListView} from 'APP/datagrid/core/ListViewProvider'
import {useQueryResponse} from 'APP/datagrid/core/QueryResponseProvider'
import {deleteSelectedUsers} from 'APP/datagrid/core/_requests'

const DeleteItems = () => {
  const {selected, clearSelected} = useListView()
  const queryClient = useQueryClient()
  const {query} = useQueryResponse()

  const deleteSelectedItems = useMutation(() => deleteSelectedUsers(selected), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
      clearSelected()
    },
  })

  return (
    <div className='d-flex justify-content-end align-items-center'>
      <div className='fw-bolder me-5'>
        <span className='me-2'>{selected.length}</span> Selected
      </div>

      <button
        type='button'
        className='btn btn-danger'
        onClick={async () => await deleteSelectedItems.mutateAsync()}
      >
        Delete Selected
      </button>
    </div>
  )
}

export {DeleteItems}
