import { ColumnDef } from "@tanstack/react-table";
import { Training } from "./page";
import { DataTableColumnHeader } from "@/components/datatable/data-table-column-header";
import { DataTableRowActions } from "@/components/datatable/data-table-row-actions";


export const getTrainingColumns = (): ColumnDef<Training>[] => [
    {
        accessorKey: 'priority',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Priority" />
        )
    },
    {
        accessorKey: 'courseName',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Course Name" />
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
        accessorKey: 'skillLevel',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Level" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
    },
    {
        accessorKey: 'completionDate',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Completion Date" />
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    }
]