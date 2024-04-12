import { ColumnDef } from "@tanstack/react-table";
import { Invitation } from "./page";
import { DataTableColumnHeader } from "@/components/datatable/data-table-column-header";
import { DataTableRowActions } from "@/components/datatable/data-table-row-actions";


export const getInvitiationColumn = (): ColumnDef<Invitation>[] => [
    {
        accessorKey: 'email',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        )
    },
    {
        accessorKey: 'addedBy',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Added By" />
        ),
        enableSorting: false,
        enableColumnFilter: false
    },
    {
        accessorKey: 'dateSent',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date Sent" />
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    }
]