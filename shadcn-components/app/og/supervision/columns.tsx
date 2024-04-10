import { ColumnDef } from "@tanstack/react-table";
import { Audit } from "./page";
import { DataTableColumnHeader } from "@/components/datatable/data-table-column-header";
import { DataTableRowActions } from "@/components/datatable/data-table-row-actions";


export const getAuditColumns = (): ColumnDef<Audit>[] => [
    {
        accessorKey: 'name',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        )
    },
    {
        accessorKey: 'role',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Role" />
        ),
        enableSorting:false,
        enableColumnFilter:false
    },
    {
        accessorKey: 'skill',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Skill" />
        ),
    },
    {
        accessorKey: 'status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
    },
    {
        accessorKey: 'submissionDate',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Submission Date" />
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    }
]