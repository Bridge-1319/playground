import { ColumnDef } from "@tanstack/react-table";
import { Skill } from "./page";
import { DataTableColumnHeader } from "@/components/datatable/data-table-column-header";
import { DataTableRowActions } from "@/components/datatable/data-table-row-actions";


export const getSkillColumns = (): ColumnDef<Skill>[] => [
    {
        accessorKey: 'skill',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Skill" />
        ),
        enableSorting:false,
        enableColumnFilter:false
    },
    {
        accessorKey: 'currentRating',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Current Rating" />
        ),
        
    },
    {
        accessorKey: 'lastSupervisorDate',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Last Audit" />
        ),

    },
    {
        accessorKey: 'status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Level" />
        ),
       
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    }
]