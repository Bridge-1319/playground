import { ColumnDef } from "@tanstack/react-table";
import { Person } from "./page";
import { DataTableColumnHeader } from "@/components/datatable/data-table-column-header";
import { DataTableRowActions } from "@/components/datatable/data-table-row-actions";


export const getPersonColumns = (): ColumnDef<Person>[] => [
    {
        accessorKey: 'name',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        )
    },
    {
        accessorKey: 'email',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
        enableSorting: false,
        enableColumnFilter: false
    },
    {
        accessorKey: 'role',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Role" />
        ),
    },
    {
        accessorKey: 'location',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Level" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'joiningDate',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Joining Date" />
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    }
]